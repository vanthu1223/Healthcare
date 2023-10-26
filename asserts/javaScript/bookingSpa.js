// Hiển thị detail thông tin theo
function myBooking() {
  let userCurrent = JSON.parse(localStorage.getItem("list_user"));

  if (!userCurrent) {
    alert("ban phai dang nhap");
    return;
  }

  const id = window.location.search.split("=")?.[1];
  const nameUser = document.querySelector("#username");
  const email = document.querySelector("#email");
  fetch("http://localhost:4001/User" + "/" + userCurrent.id)
    .then((respone) => respone.json())
    .then((data) => {
      nameUser.placeholder = data.nameUser;
      email.placeholder = data.email;
    });
  fetch(`http://localhost:4001/Sevicese/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const html4 = `
          <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-5">
              <img src="${data.image}" alt="ảnh" width="100%" style="border-radius: 10px;margin-top:10px;">
          </div>
          <div class="col-sm-5">
              <h2 style="font-weight: bold; font-size: 20px;color:  #FF6A88;">${data.nameService}</h2>
              <p>${data.price} VNĐ</p>
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
  }
}
myBooking();
