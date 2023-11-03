const usersAPI = " http://localhost:4001/User";

async function getUser(id) {
  try {
    const response = await fetch(usersAPI + "?id=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
async function loadUserProfile() {
  try {
    const user_token = JSON.parse(localStorage.getItem("list_user"));
    // check dang nhap thanh cong hay chua
    // undefined false
    // !undefined => true
    if (!user_token) {
      return;
    }
    //dang nhap thanh cong check vai tro
    if (user_token.role == "user") {
      const user = await getUser(user_token.id);
      //hide btn login and register
      const buttonLogin = document.getElementById("loginButton");
      const buttonSignup = document.getElementById("registerButton");
      const avatarUser = document.querySelector(".user");
      buttonLogin.style.display = "none";
      buttonSignup.style.display = "none";
      avatarUser.style.display = "inline";
      //show info user
      document.querySelector("#avatarUser").innerHTML = user[0].nameUser;
      document.querySelector("#avatar").src =
        "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang.jpg";
      document.querySelector("#username").value = user[0].nameUser;
      document.querySelector("#email").value = user[0].email;
    } else if (user_token.role == "admin") {
      alert("ban vui long dang xuat va dang nhap lai tai khoan");
      window.location.href = "/pages/admin.html";
    }
    // Fetch data from the API
  } catch (err) {
    alert(err.message);
  }
}
function render(users) {
  document.querySelector(".table-responsive tbody").innerHTML = users;
}
loadUserProfile();

// Update user
async function myFix() {
  const newInforUser = document.getElementById("username1").value;
  const newEmailUser = document.getElementById("email1").value;
  try {
    const response = await fetch(usersAPI);
    const user = await response.json();
    const users = user[0];
    users.username = newInforUser;
    users.email = newEmailUser;
    document.querySelector("#avatarUser").innerHTML = users.username;
    document.querySelector("#username").value = users.username;
    document.querySelector("#email").value = users.email;
    console.log(users.username);
    console.log(newEmailUser);
    console.log(newInforUser);
    alert("oke");
  } catch (error) {
    console.error("Lỗi khi lấy thông tin người dùng:", error);
  }
}

async function updateUserInfo(users) {
  try {
    const response = await fetch("http://localhost:4001/User", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin người dùng:", error);
  }
}

// update password
async function myPassword() {
  const { id } = JSON.parse(localStorage.getItem("list_user"));
  const oldPassword = document.getElementById("password").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const isPasswordMatch = await checkPassword(id, oldPassword);

  if (isPasswordMatch) {
    await updatePassword(id, newPassword);
    console.log(oldPassword);
    console.log(newPassword);
    console.log(confirmPassword);
  } else {
    console.error("Mật khẩu hiện tại không đúng");
  }
}

async function checkPassword(id, password) {
  try {
    const response = await fetch(usersAPI + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Kiểm tra phản hồi từ server
    if (response.ok) {
      const result = await response.json();
      return result.password === password; // Trả về true nếu mật khẩu khớp, ngược lại trả về false
    } else {
      console.error("Lỗi khi kiểm tra mật khẩu:", response.status);
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi kiểm tra mật khẩu:", error);
    return false;
  }
}

async function updatePassword(id, newPassword) {
  try {
    // Gửi yêu cầu cập nhật mật khẩu lên server
    const response = await fetch(usersAPI + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword }),
    });

    // Kiểm tra phản hồi từ server
    if (response.ok) {
      console.log("Mật khẩu đã được thay đổi thành công");
    } else {
      console.error("Lỗi khi cập nhật mật khẩu:", response.status);
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật mật khẩu:", error);
  }
}
