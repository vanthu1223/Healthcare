let productAPI = 'https://6520d258906e276284c4af2a.mockapi.io/products';
function loadData() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: productAPI,
        success: function (responseData) {
            $("#dataProduct").html(responseData.map(function (item) {
                return `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="Product Image width="100px" height = "100px" " /></td>
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
        error: function (e) {
            console.log(e);
        }
    });
}
// Gọi hàm loadData để tải dữ liệu khi trang được tải
loadData();