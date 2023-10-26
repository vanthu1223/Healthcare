
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

// function myContact() {
//   const nameContact = document.getElementById('username').value;
//   const emailContact = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   const Message = {
//     nameUser: nameContact,
//     email: emailContact,
//     message: message
//   };

//   fetch("http://localhost:4001/Message")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       data?.forEach(messageItem => {
//         const html3 = `
//         <tr>
//           <td>${messageItem.id}</td>
//           <td>${messageItem.nameUser}</td>
//           <td>${messageItem.email}</td>
//           <td>${messageItem.message}</td>
//           <td>
//             <button class="btn btn-outline-warning" onclick="sendMessage(${messageItem.id})">Sent Message</button>
//           </td>
//         </tr>
//         `;
//         displayData3(html3);
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });

//   function displayData3(html3) {
//     const tableBody = document.getElementById('dataContact');
//     const newRow = tableBody.insertRow(-1);
//     newRow.innerHTML = html3;
//   }
// }
const form = document.querySelector('.contact_form');
function sendMgs(e){
  e.preventDefault();
  const email = document.querySelector('.email');
  const mgs = document.querySelector('.message');

  Email.send({
    SecureToken : "d4cb008f-2079-4f1f-93e0-c1a9b1d7d5b2",
    To : 'vtvt25092004@gmail.com',
    From : email.value,
    Subject : "This is the subject",
    Body : mgs.value + "Cảm ơn bạn đã quan tâm đến dịch vụ massage của tôi"
}).then(
  message => alert(message)
);
}

form.addEventListener('submit',sendMgs);





  