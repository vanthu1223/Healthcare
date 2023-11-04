const usersAPI = "https://healthcare-ujzv.onrender.com/User";

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
      console.error("Error");
    }
  } catch (err) {
    console.error(err.message);
  }
}

async function loadUserProfile() {
  const user_token = JSON.parse(localStorage.getItem("userProfile"));
  if (user_token.role === "user") {
    try {
      const user = await getUser(user_token.id);
      const buttonLogin = document.getElementById("loginButton");
      const buttonSignup = document.getElementById("registerButton");
      const avatarUser = document.querySelector(".user");
      buttonLogin.style.display = "none";
      buttonSignup.style.display = "none";
      avatarUser.style.display = "inline";
      document.querySelector("#avatarUser").innerHTML = user[0].nameUser;
      document.querySelector("#avatar").src =
        "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang.jpg";
      document.querySelector("#username").value = user[0].nameUser;
      document.querySelector("#email").value = user[0].email;
    } catch (err) {
      console.error(err.message);
    }
  } else if (user_token.role === "admin") {
    alert("Bạn vui lòng đăng xuất và đăng nhập lại tài khoản");
    window.location.href = "/pages/admin.html";
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
  const { id } = JSON.parse(localStorage.getItem("userProfile"));
  try {
    let user;
    if (newEmailUser) {
      user = {
        ...user,
        email: newEmailUser,
      };
    }
    if (newInforUser) {
      user = {
        ...user,
        name: newInforUser,
      };
    }

    console.log(user, "user");
    const response = await fetch(`${usersAPI}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        document.querySelector("#username").value = res.nameUser;
        document.querySelector("#email").value = res.email;
      });
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
  const { id } = JSON.parse(localStorage.getItem("userProfile"));
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
    const response = await fetch(`${usersAPI}/${id}`, {
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

    const response = await fetch(`${usersAPI}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword }),
    }).then((res) => {
      console.log(res);
      alert("Update password successfully");
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật mật khẩu:", error);
  }
}
