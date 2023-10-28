// Đẩy dữ liệu từ local lên bản service
const url = 'http://localhost:4001/Sevicese';
const modal = document.getElementById("modal");
const modalInner = modal.querySelector(".modal_inner");
// const nodemailer = require('nodemailer');
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
          <button class="btn btn-outline-warning" onclick="update(${Sevicese.id})" style="margin-bottom:5px">update</button>
          <button class="btn btn-outline-danger" onclick="deleteProduct(${Sevicese.id})">delete</button>
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
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="btn btn-outline-warning" onclick="update(${user.id})">update</button>
          <button class="btn btn-outline-danger" onclick="deleteProduct(${user.id})">delete</button>
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


// Tạo mới một service
function newService() {
  const nameService = document.getElementById('nameService').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;
  const details = document.getElementById('details').value;

  const data = {
    //id:
    nameService: nameService,
    price: price,
    image: image,
    details: details
  };

  const url = 'http://localhost:4001/Sevicese'; // Đường dẫn API JSON

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
      alert('Dữ liệu cập nhật thành công');
      fetch('http://localhost:4001/Sevicese')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data?.forEach(service => {
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
    })
    .catch(error => {
      console.error('Lỗi khi gửi dữ liệu:', error);
    });
}

function displayData1(html) {
  const element = document.getElementById('dataProduct');
  element.innerHTML += html;
}


function update(id) {
  const url = `http://localhost:4001/Sevicese/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(product => {
      // Hiển thị thông tin sản phẩm và cho phép chỉnh sửa
      document.getElementById('id').value = product.id;
      document.getElementById('updateNameService').value = product.nameService;
      document.getElementById('updatePrice').value = product.price;
      document.getElementById('updateImage').value = product.image;
      document.getElementById('updateDetails').value = product.details;

      const modal = document.getElementById('modal');
      modal.style.display = "block";
    })
    .catch(error => {
      console.error(error);
    });
}


function saveUpdate(id) {
  const updateNameService = document.getElementById('updateNameService').value;
  const updatePrice = document.getElementById('updatePrice').value;
  const updateImage = document.getElementById('updateImage').value;
  const updateDetails = document.getElementById('updateDetails').value;

  const updatedData = {
    nameService: updateNameService,
    price: updatePrice,
    image: updateImage,
    details: updateDetails
  };

  const url = `http://localhost:4001/Sevicese/${id}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(response => response.json())
    .then(result => {
      console.log('Dữ liệu đã được cập nhật:', result);
      const form = document.getElementById('updateForm');
      form.innerHTML = ''; // Xóa nội dung của form
      // Hiển thị thông báo hoặc thực hiện các hành động khác sau khi lưu thành công
    })
    .catch(error => {
      console.error('Lỗi khi cập nhật dữ liệu:', error);
    });
}

function cancelUpdate() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// Liên kết hàm saveUpdate() với nút "Save"
const saveButton = document.getElementById('saveUpdate');
saveButton.addEventListener('click', function () {
  const id = document.getElementById('id').value;
  saveUpdate(id);
});
// Liên kết hàm cancelUpdate() với nút "Cancel"
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', cancelUpdate);


function deleteProduct(id) {
  const url = `http://localhost:4001/Sevicese/${id}`;

  fetch(url, {
    method: 'disable'
  })
    .then(response => response.json())
    .then(result => {
      console.log('Sản phẩm đã được khóa:', result);
      const productRow = document.querySelector(`tr[data-id="${id}"]`);
      productRow.classList.add("locked"); // Thêm class "locked" để khóa sản phẩm

      // Thay đổi giá trị của sản phẩm thành undefined
      const productNameCell = productRow.querySelector(".product-name");
      productNameCell.innerText = "Undefined";

      const deleteButton = productRow.querySelector(".btn-outline-danger");
      deleteButton.disabled = true; // Vô hiệu hóa nút "deleteProduct"
    })
    .catch(error => {
      console.error('Lỗi khi xóa sản phẩm:', error);
    });
}


