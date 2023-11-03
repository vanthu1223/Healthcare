// Đẩy dữ liệu từ local lên bản service
const url = "http://localhost:4001/";
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

//  đẩy dữ liệu lên user
fetch("http://localhost:4001/User")
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

  const url = "http://localhost:4001/Sevicese"; // Đường dẫn API JSON

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
      fetch("http://localhost:4001/Sevicese")
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
