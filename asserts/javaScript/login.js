// CHuyển động
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function myLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const Users = {
    username: usernameInput.trim(),
    password: passwordInput.trim(),
  };
  const arrUsers = [];
  console.log(Users);

  fetch("https://healthcare-ujzv.onrender.com/User")
    .then((response) => response.json())
    .then((data) => {
      let user = data.find(
        (e) => Users.username === e.nameUser && Users.password === e.password
      );
      if (user) {
        localStorage.setItem("userProfile", JSON.stringify(user));
        alert("Đăng nhập thành công");

        window.location.href = "./home.html";
      } else {
        console.log("Dang nhap khong thanh cong");
        return;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


