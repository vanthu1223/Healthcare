
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

function myContact() {
  const nameContact = document.getElementById('username').value;
  const emailContact = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const Message = {
    nameUser: nameContact,
    email: emailContact,
    message: message
  };

  fetch("http://localhost:4001/Message")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data?.forEach(messageItem => {
        const html3 = `
        <tr>
          <td>${messageItem.id}</td>
          <td>${messageItem.nameUser}</td>
          <td>${messageItem.email}</td>
          <td>${messageItem.message}</td>
          <td>
            <button class="btn btn-outline-warning" onclick="sendMessage(${messageItem.id})">Sent Message</button>
          </td>
        </tr>
        `;
        displayData3(html3);
      });
    })
    .catch(error => {
      console.error(error);
    });

  function displayData3(html3) {
    const tableBody = document.getElementById('dataContact');
    const newRow = tableBody.insertRow(-1);
    newRow.innerHTML = html3;
  }
}





  