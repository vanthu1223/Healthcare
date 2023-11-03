function myConfirm() {
  const nameUser = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const nameService = document.querySelector("#nameService");
  const datepicker = document.querySelector("#datepicker").value;
  const price = document.querySelector("#price");
  const data = {
    nameUser: nameUser,
    email: email,
    nameService: nameService,
    datepicker: datepicker,
    price: price,
  };
  console.log(data);
  const id = window.location.search.split("=")?.[1];
  console.log(id);

  // fetch("http://localhost:4001/booking", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     // Xử lý phản hồi từ máy chủ
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     // Xử lý lỗi
  //   });

  // fetch(`http://localhost:4001/Sevicese/${id}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     const html4 = `
  //         <form action="" class="container form-infor">
  //         <h1>Book an appointment at Spa Beauty Queen</h1>
  //         <p>Hi! <b id = "username">${data.nameUser}</b></p>
  //         <label for="">Here is your information:</label><br />
  //         <hr />
  //         <label for="">Email:</label><br />
  //         <input type="text" id="email"> ${data.email}<br />
  //         <hr />
  //         <label for="">Date - Time:</label><br />
  //         <input type="text" id="datetime" /><br />${data.dateTime}
  //         <hr />
  //         <label for="">Selected service:</label><br />
  //         <input type="text" id = "nameSevice" /><br />${data.nameService}
  //         <hr />
  //         <label for=""><b>Total Amount:</b></label
  //         ><br />
  //         <input type="text" id="price"/>${data.price}
  //         <hr />
  //         <p>
  //           Thank you for booking to use our services. <br />
  //           We look forward to welcoming you and serving you at
  //           <b>the Spa Beauty Queen</b>
  //         </p>

  //         <div class="row button-confirm">
  //           <!-- <div class="col-sm-4"> -->
  //           <div class="col-sm-6">
  //             <a href="#"><button class="details">Confirm</button></a>
  //           </div>
  //           <div class="col-sm-6">
  //             <a href="http://127.0.0.1:5500/pages/booking.html"
  //               ><button class="details">Update</button></a
  //             >
  //           </div>
  //         </div>
  //       </form>
  //             `;
  //     displayData4(html4);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // function displayData4(html4) {
  //   const element = document.getElementById("confirm");
  //   element.innerHTML += html4;
  // }
}


