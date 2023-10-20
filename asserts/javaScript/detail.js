
const urlParams = new URLSearchParams(window.location.search);
const product_id = urlParams.get('id');

var handleOnclick = (id) => {
  fetch(`${productsApi}/${id}`)
      .then(res => res.json())
      .then((product) => {
          var container = document.getElementById('detai_product'); // Lấy phần tử HTML có id 'body' và gán vào biến container
          var htmls = ''; // Khởi tạo chuỗi HTML rỗng

          // Duyệt qua từng sản phẩm và tạo chuỗi HTML cho mỗi sản phẩm
          const html = `
                    <div class="div-ListserviceItem col-3" id="${item.id}" onclick="handleItemClick('${item.id}')">
                        <img src="${item.img}" alt="" onclick="displayImage('${item.img}')">
                        <div class="div-serviceImg text-center">
                            <a href="http://localhost:3000/BackMassage?id=${item.id}"></a>
                            <a href="">${item.name}</a>
                            <a href="">${item.Time}</a>
                            <a id="price">${item.price}</a>
                            <a>${item.infor}</a>
                        </div>
                    </div>
                    `;

          container.innerHTML = htmls;
      })
}


// fetch('http://localhost:3000/BodyMassage')
//   .then(response => response.json())
//   .then(data => {
//       var product = false;
//       data.forEach(element => {
//         if(product_id == element.id){
//            product = true;
//            if(product) {
//            }
//         }
        
//       });
//   })


function handleItemClick(itemId) {
  // Fetch individual item data based on the clicked ID
  fetch(`http://localhost:3000/BackMassage/${itemId}`)
    .then(response => response.json())
    .then(itemData => {
      // Update the displayed data on the page
      document.getElementById('title').textContent = itemData.name;
      document.getElementById('description').textContent = itemData.infor;
    });
}