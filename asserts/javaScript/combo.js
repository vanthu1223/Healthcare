
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
    var input = document.getElementById("input-phone-number");
    input.addEventListener("input", function() {
      if (this.value.length > 10) {
        this.value = this.value.slice(0, 10); // Giới hạn độ dài thành 10 ký tự
      }
    });


  let productAPI = 'https://65199e11818c4e98ac6093d9.mockapi.io/products';
function loadData() {
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: productAPI,
    success: function(responseData) {
      $("#dataProduct").html(responseData.map(function(item) {
        return `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src="${item.avatar}" alt="Product Image width="100px" height = "100px" " /></td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>
              <button class="btn btn-primary" onclick="update(${item.id})">update</button>
              <button class="btn btn-primary" onclick="deleteProduct(${item.id})">delete</button>
            </td>
          </tr>
        `;
      }));
    },
    error: function(e) {
      console.log(e);
    }
  });
}
// Gọi hàm loadData để tải dữ liệu khi trang được tải
loadData();

  