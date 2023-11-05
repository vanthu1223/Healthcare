// Đẩy dữ liệu từ local lên bản service
const url = "https://healthcare-ujzv.onrender.com/";
fetch(url + "Sevicese")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((Sevicese) => {
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
  .catch((error) => {
    console.error(error);
  });

fetch(url + "booking")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((booking) => {
    const dataBooking = `
    <tr>
        <td>${booking.user.id}</td>
        <td>${booking.service.nameService}</td>
        <td>${booking.time}</td>
         <td>${booking.status}</td>
        <td>${booking.service.price}</td>
      </tr>
    `;
    displayData12(dataBooking);
  });
})

function displayData12(dataBooking) {
  const element = document.getElementById("dataBooking");
  element.innerHTML += dataBooking;
}

fetch(url + "booking")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((booking) => {
    const dataBooking = `
    <tr>
        <td>${booking.user.id}</td>
        <td>${booking.service.nameService}</td>
        <td>${booking.time}</td>
         <td>${booking.status}</td>
        <td>${booking.service.price}</td>
      </tr>
    `;
    displayData12(dataBooking);
  });
})

function displayData12(dataBooking) {
  const element = document.getElementById("myCard");
  element.innerHTML += dataBooking;
}















//  đẩy dữ liệu lên user
fetch("https://healthcare-ujzv.onrender.com/User")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data?.forEach((user) => {
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
  .catch((error) => {
    console.error(error);
  });

function displayData(html1) {
  const element = document.getElementById("dataUser");
  element.innerHTML += html1;
}

// Tạo mới một service
function newService() {
  const nameService = document.getElementById("nameService").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const details = document.getElementById("details").value;

  const data = {
    //id:
    nameService: nameService,
    price: price,
    image: image,
    details: details,
  };

  const url = "https://healthcare-ujzv.onrender.com/Sevicese"; // Đường dẫn API JSON

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Dữ liệu đã được gửi thành công:", result);
      alert("Dữ liệu cập nhật thành công");
      fetch("https://healthcare-ujzv.onrender.com/Sevicese")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data?.forEach((service) => {
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
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error("Lỗi khi gửi dữ liệu:", error);
    });
}

function displayData1(html) {
  const element = document.getElementById("dataProduct");
  element.innerHTML += html;
}

function update(id) {
  // Hiển thị form
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  console.log(id);
  // Lấy thông tin dịch vụ từ db.json
  fetch(`https://healthcare-ujzv.onrender.com/Sevicese`)
    .then(res=>res.json())
    .then(data => {
      let idFind = "";
      // Tìm thông tin dịch vụ từ dữ liệu đã lấy
      for (const item of data) {


        if (id==item.id) {
          // Điền thông tin dịch vụ vào các trường
          idFind=item.id
          document.getElementById("updateNameService").value = item.nameService;
          document.getElementById("id").value = item.id;
          document.getElementById("updatePrice").value = item.price;
          document.getElementById("updateImage").value = item.image;
          document.getElementById("updateDetails").value = item.details;
          const saveUpdateBtn = document.getElementById("saveUpdate");
          saveUpdateBtn.dataset.id = id;

          // Thêm sự kiện click cho nút "Save"
          saveUpdateBtn.addEventListener("click", () => {
            handleUpdate(id);
          });
          break;
          // Lưu ID vào thuộc tính data của nút "Save"

        }

        
        
      }

      
    });
  
}

// Gọi hàm update khi bấm vào nút "update" với ID tương ứng

function cancelUpdate() {
  // Ẩn form
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

  

function handleUpdate(id) {
  
  // Lấy thông tin dịch vụ đã chỉnh sửa
  const newName = document.getElementById("updateNameService").value;
  const newPrice = document.getElementById("updatePrice").value;
  const newImage = document.getElementById("updateImage").value;
  const newDetails = document.getElementById("updateDetails").value;

  // Gửi yêu cầu PUT để cập nhật thông tin dịch vụ với ID tương ứng
  fetch(`https://healthcare-ujzv.onrender.com/Sevicese/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameService: newName,
      price: newPrice,
      image: newImage,
      details: newDetails,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Service updated successfully:", data);
      // Thực hiện hành động cập nhật giao diện người dùng tại đây (nếu cần)

      // Ẩn form
      const modal = document.getElementById("modal");
      modal.style.display = "none";
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error updating service:", error);
    });
}

function cancelUpdate() {
  // Ẩn form
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


function deleteService(id) {
  // Gửi yêu cầu DELETE để xóa sản phẩm từ API hoặc tệp JSON
  fetch(`https://healthcare-ujzv.onrender.com/Sevicese/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log('Service deleted successfully');
        // Xóa thành công, thực hiện các hành động phụ thuộc vào trang web của bạn
        // Ví dụ: làm mới danh sách sản phẩm, cập nhật giao diện, vv.
        window.location.reload;
      } else {
        console.error('Failed to delete service');
      }
    })
    .catch(error => {
      console.error('Error deleting service:', error);
    });
}

function deleteService(id) {
  fetch(url + "Sevicese/" + id  , {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        console.log("Service deleted successfully");
        // Xóa thành công, thực hiện các hành động phụ thuộc vào trang web của bạn
        // Ví dụ: làm mới danh sách sản phẩm, cập nhật giao diện, vv.
        window.location.reload();
      } else {
        console.error("Failed to delete service");
      }
    })
    .catch(error => {
      console.error("Error deleting service:", error);
    });
}

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this service?")) {
    deleteService(id);
  }
}
// Tạo mới một service
function generateRandomTwoDigitNumber() {
  // Sinh ngẫu nhiên một số từ 10 đến 99
  const randomNumber = Math.floor(Math.random() * 90) + 10;
  return randomNumber;}