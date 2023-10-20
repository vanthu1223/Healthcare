// let btn = document.querySelector('#btn')
// let sidebar = document.querySelector('.sidebar');
// btn.onclick = function (){
//     sidebar.classList.toggle('active');
// };

// Đẩy dữ liệu từ local lên bản service
const url = 'http://localhost:4001/Sevicese';  
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(Sevicese => {
      const html = `
      <tr>
        <td>${Sevicese.id}</td>
        <td>${Sevicese.nameService}</td>
        <td>${Sevicese.price}</td>
        <td><img src="${Sevicese.image}" alt="Product Image" width="100px" height="100px" /></td>
        <td>${Sevicese.details}</td>
        <td>
          <button class="btn btn-primary" onclick="update(${Sevicese.id})" style="margin-bottom:5px">update</button>
          <button class="btn btn-primary" onclick="deleteProduct(${Sevicese.id})">delete</button>
        </td>
      </tr>
      `;
      displayData1(html);
    });
  })
  .catch(error => {
    console.error(error);
  });

function displayData1(html) {
  const element = document.getElementById('dataProduct');
  element.innerHTML += html;
}


//  đẩy dữ liệu lên user
fetch("http://localhost:4001/User")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data?.forEach(user => {
      const html1 = `
      <tr>
        <td>${user.id}</td>
        <td>${user.nameUser}</td>
        <td><img src="${user.avatar}" alt="Product Image" width="100px" height="100px" /></td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="btn btn-primary" onclick="update(${user.id})">update</button>
          <button class="btn btn-primary" onclick="deleteProduct(${user.id})">delete</button>
        </td>
      </tr>
      `;
      displayData(html1);
    });
  })
  .catch(error => {
    console.error(error);
  });

function displayData(html1) {
  const element = document.getElementById('dataUser');
  element.innerHTML += html1;
}


// 

fetch( 'http://localhost:4001/Services')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(service => {
      const html = `
      <tr>
        <td>${service.id}</td>
        <td>${service.nameService}</td>
        <td>${service.price}</td>
        <td><img src="${service.image}" alt="Product Image" width="100px" height="100px" /></td>
        <td>${service.details}</td>
        <td>
          <button class="btn btn-primary" onclick="update(${service.id})" style="margin-bottom:5px">update</button>
          <button class="btn btn-primary" onclick="deleteProduct(${service.id})">delete</button>
        </td>
      </tr>
      `;
      displayData1(html);
    });
  })
  .catch(error => {
    console.error(error);
  });

function displayData1(html) {
  const element = document.getElementById('dataProduct');
  element.innerHTML += html;
}


// tạo thêm một service mới
function newService() {
  const nameService = document.getElementById('nameService').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;
  const details = document.getElementById('details').value;

  const data = {
    nameService: nameService,
    price: price,
    image: image,
    details: details
  };

  const url = 'http://localhost:4001/Services'; // Đường dẫn API JSON

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log('Dữ liệu đã được gửi thành công:', result);
      alert("Dữ liệu cập nhật thành công");
      displayData2();
      getServices()
    })
    .catch(error => {
      console.error('Lỗi khi gửi dữ liệu:', error);
      window.location.href = "admin.js";
    });
}
function displayData2(html) {
  const element = document.getElementById('dataProduct');
  element.innerHTML += html;
}


