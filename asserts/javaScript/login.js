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


function myLogin() {
  function myLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const Users = {
      username: usernameInput,
      password: passwordInput
    };
    const arrUsers = [];
  
    fetch('http://localhost:4001/User')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data?.forEach(item => {
          console.log(item.id, item.name, item.password);
          if (Users.username === item.name && Users.password === item.password) {
            arrUsers.push(Users);
            localStorage.setItem('list_user', JSON.stringify(arrUsers));
            alert("Đăng nhập thành công");
            window.location.href = './pages/home.html';
          } else {
            alert("Đăng nhập không thành công");
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}



