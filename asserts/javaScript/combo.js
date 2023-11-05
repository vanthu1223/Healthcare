
// giữ vị trí thanh navbar khi cuộn
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

// giới hạn nhập số điện thoại
    // var input = document.getElementById("input-phone-number");
    // input.addEventListener("input", function() {
    //   if (this.value.length > 10) {
    //     this.value = this.value.slice(0, 10); // Giới hạn độ dài thành 10 ký tự
    //   }
    // });

// lấy dữ liệu truyền vào .containrerJs
async function getCombo() {
  try {
    const response = await fetch("https://healthcare-ujzv.onrender.com/products", {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
async function showCombo() {
  try {
    // Fetch data from the API
    const data = await getCombo();
    comboHtml = "";
    let i = 1;

    
      data.forEach(e => {
        comboHtml += `<div class="col-sm-4 mt-3">
                        <div class="card">
                          <div class="card-body">
                            <figure><img src="${e.img}" alt="ảnh" width="220px" height="200px"></figure>
                            <hr>
                            <h5>${e.nameCombo}</h5>
                            <p>${e.infor}</p>
                            <hr>
                            <div>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            </div>
                            <p class="card-p"> <a href="#"><button class="details">DETAILS</button></a></p>
                          </div>
                        </div>
                      </div>`
        });
    

    console.log(comboHtml);
    render(comboHtml);

  } catch (err) {

    alert(err.message);
  }

}
function render(combo){
      document.querySelector(".containerJs").innerHTML = combo;
}

showCombo();
  