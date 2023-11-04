
// Hiển thị detail thông tin theo
function myDetails(id) {
  fetch(`https://healthcare-ujzv.onrender.com/services/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const html = `
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-5">
            <img src="${data.img}" alt="ảnh" width="100%" style="border-radius: 10px;">
        </div>
        <div class="col-sm-5">
            <h2 style="font-weight: bold; font-size: 20px;">${data.name}</h2>
            <p style="color: red;">${data.price}</p>
            <div class="star">
                <span class="star"><i class="fa fa-star " style="color: 	#FFD700;"></i></span>
                <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                <span class="star"><i class="fa fa-star" style="color: 	#FFD700;"></i></span>
                <span>(5.0/5.0)</span>
              </div>
            <p>${data.infor}</p>
            <button class="inputButton" type="button" style="background-color: transparent;padding: 5px;border-radius: 5px;"><a href="../pages/bookingService.html?id=${data.id}"  onclick= "myBooking()"   style="padding: 10px;text-decoration: none; color: coral; background-color: transparent;">Book</a></button>
        </div>
        <div class="col-sm-1"></div>
    </div>
        `;
      displayData2(html);
    })
    .catch((error) => {
      console.error(error);
    });

  function displayData2(html) {
    const element = document.getElementById("DetailServiceSpa");
    element.innerHTML += html;
  }
}
const id = window.location.search.split("=")?.[1];
myDetails(id);





