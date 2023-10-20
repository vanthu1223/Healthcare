const checkBtn = document.querySelector('.checkbtn');
const navMenu = document.querySelector('nav ul');

checkBtn.addEventListener('click', function () {
  navMenu.classList.toggle('open');
});

let productAPI1 = `http://localhost:3000/FacialCare`;
let productAPI2 = `http://localhost:3000/BodyMassage`;
let productAPI3 = `http://localhost:3000/FootMassage`;
let productAPI4 = 'http://localhost:3000/BackMassage';

function getbody() {
  fetch("http://localhost:3000/BodyMassage")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const product_detail = data.map((item) => {
        console.log(item.id)
        return `
        <a href="../service/details.html?id=${item.id}" class="product-item">
          <div class="div-ListserviceItem" id="MassageFullBack">
            <div>
              <img src='${item.img}' alt="">
              <div class="div-serviceImg text-center">
                <a href="">${item.name}</a>
                <a href="">${item.Time}</a>
                <a id="price">${item.price}</a>
              </div>
            </div>
          </div>
        </a>
        `
      })
      console.log(product_detail)
      document.getElementById('dataBodyMassage').innerHTML = `
        <div class="product">
          ${product_detail.join('')}
        </div>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}FacialCare

getbody();

function getFacialCare() {
  fetch("http://localhost:3000/FacialCare")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const product_detail = data.map((item) => {
        console.log(item.id)
        return `
        <a href="../service/details.html?id=${item.id}" class="product-item">
          <div class="div-ListserviceItem" id="MassageFullBack">
            <div>
              <img src='${item.img}' alt="">
              <div class="div-serviceImg text-center">
                <a href="">${item.name}</a>
                <a href="">${item.Time}</a>
                <a id="price">${item.price}</a>
              </div>
            </div>
          </div>
        </a>
        `
      })
      console.log(product_detail)
      document.getElementById('FacialCare').innerHTML = `
        <div class="product">
          ${product_detail.join('')}
        </div>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getFacialCare();


function getFootMassage() {
  fetch("http://localhost:3000/FootMassage")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const product_detail = data.map((item) => {
        console.log(item.id)
        return `
        <a href="../service/details.html?id=${item.id}" class="product-item">
          <div class="div-ListserviceItem" id="MassageFullBack">
            <div>
              <img src='${item.img}' alt="">
              <div class="div-serviceImg text-center">
                <a href="">${item.name}</a>
                <a href="">${item.Time}</a>
                <a id="price">${item.price}</a>
              </div>
            </div>
          </div>
        </a>
        `
      })
      console.log(product_detail)
      document.getElementById('dataFootMassage').innerHTML = `
        <div class="product">
          ${product_detail.join('')}
        </div>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getFootMassage();


function getBackMassage() {
  fetch("http://localhost:3000/BackMassage")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const product_detail = data.map((item) => {
        console.log(item.id)
        return `
        <a href="../service/details.html?id=${item.id}" class="product-item">
          <div class="div-ListserviceItem" id="MassageFullBack">
            <div>
              <img src='${item.img}' alt="">
              <div class="div-serviceImg text-center">
                <a href="">${item.name}</a>
                <a href="">${item.Time}</a>
                <a id="price">${item.price}</a>
              </div>
            </div>
          </div>
        </a>
        `
      })
      console.log(product_detail)
      document.getElementById('dataBackMassage').innerHTML = `
        <div class="product">
          ${product_detail.join('')}
        </div>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getBackMassage();