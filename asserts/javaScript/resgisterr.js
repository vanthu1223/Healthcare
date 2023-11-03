// Chuyển Động
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

function myRegister() {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (password.value.length <= 6) {
      alert("Phải nhập trên 6 kí tự");
      return;
    }
    if (password.value !== password2.value) {
      alert("Nhập sai password");
      return;
    }

    let newUser = {
      id: new Date().getTime(),
      nameUser: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      role: "user",
    };

    const url = " http://localhost:4001/User";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = "./login.html";
        displayUserData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  function displayUserData(user) {
    const html = `
      <tr>
        <td>${user.id}</td>
        <td>${user.nameUser}</td>
        <td><img src="${user.avatar}" alt="Product Image" width="100px" height="100px" /></td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="btn btn-primary" onclick="update(${user.id})">update</button>
          <button class="btn btn-primary" onclick="deleteProduct(${user.id})">delete</button>
        </td>
      </tr>
    `;
    const element = document.getElementById("dataUser");
    element.innerHTML += html;
  }
}
