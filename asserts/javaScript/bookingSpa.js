// Hiển thị detail thông tin theo
let priceGlobal = 0;
let service;

function myBooking() {
  let userCurrent = JSON.parse(localStorage.getItem("userProfile"));

  if (!userCurrent) {
    alert("ban phai dang nhap");
    return;
  }
  const id = window.location.search.split("=")?.[1];
  const nameUser = document.querySelector("#username");
  const email = document.querySelector("#email");
  fetch("http://localhost:3000/User" + "/" + userCurrent.id)
    .then((respone) => respone.json())
    .then((data) => {
      nameUser.placeholder = data.nameUser;
      email.placeholder = data.email;
    });
  fetch(`http://localhost:3000/Sevicese/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      service = data;
      priceGlobal = data.price;
      console.log(priceGlobal, "price");
      const html4 = `
          <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-5">
              <img src="${data.image}" alt="ảnh" width="100%" style="border-radius: 10px;margin-top:10px;">
          </div>
          <div class="col-sm-5">
              <h2 style="font-weight: bold; font-size: 20px;color:  #FF6A88;" id="nameService">${data.nameService}</h2>
              <p id = "price">${data.price} VNĐ</p>
              <div class="star">
                  <span class="star"><i class="fa fa-star " style="color: 	#FFD700;"></i></span>
                  <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                  <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                  <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                  <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                  <span>(5.0/5.0)</span>
                </div>
              <p>${data.details}</p>
          </div>
          <div class="col-sm-1"></div>
      </div>
          `;
      displayData4(html4);
    })
    .catch((error) => {
      console.error(error);
    });

  function displayData4(html4) {
    const element = document.getElementById("showService");
    element.innerHTML += html4;
    const e = document.getElementById("card_service");
    e.innerHTML += html4;
  }
}

const baseURL = "http://localhost:3000/";
myBooking();
function createBooking() {
  const serviceId = window.location.search.split("=")?.[1];
  const user = JSON.parse(localStorage.getItem("userProfile"));
  // const timePicker = document.getElementById("time-picker");
  const timePicker = document.querySelector('input[name="aq"]:checked').value;
  const datepickerInput = document.querySelector(".datepicker").value;

  fetch(baseURL + "booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      service,
      bookingDate: datepickerInput,
      time: timePicker,
      status: "booking",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("Bạn đã đặt lịch thành công ");
      // const html12 = `
      //   <tr>
      //     <td>${res.userId}</td>
      //     <td>${res.bookingDate}</td>
      //     <td>${res.time}</td>
      //     <td>${res.status}</td>
      //     <td>${res.price}</td>
      //   </tr>
      //   `;
      // displayData12(html12);
    })
    .catch((error) => {
      console.error(error);
    });

  function displayData12(html12) {
    const element = document.getElementById("dataBooking");
    element.innerHTML += html12;
    window.location.href = "http://127.0.0.1:5500/pages/admin.html";
  }
}
//     })

// }

function payMomo() {
  // Send a POST request to the server if needed
  fetch("http://localhost:3000/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      priceGlobal,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      window.location.href = res.payUrl;
      console.log(res);
    });
}
