let productAPI = 'https://6520d354906e276284c4b3a6.mockapi.io/api/v1/products';

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
            <td>${item.price}</td>
            <td><img src="${item.Avarta}" alt="Product Image width="100px" height = "100px" " /></td>
            <td>${item.Avarta}</td>
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



