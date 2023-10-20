// Hiển thị detail thông tin theo
function myDetails(id) {
  fetch(`http://localhost:4001/Sevicese/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = `
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-5">
            <img src="${data.image}" alt="ảnh" width="100%" style="border-radius: 10px;">
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
            <button type="button" style="background-color: transparent;padding: 5px;border-radius: 5px;"><a href="../pages/booking.html" style="padding: 10px;text-decoration: none; color: coral; background-color: transparent;">Book Now</a></button>
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
    const element = document.getElementById("dataDetailSpa");
    element.innerHTML += html;
  }
}
const id = window.location.search.split("=")?.[1];
myDetails(id);
