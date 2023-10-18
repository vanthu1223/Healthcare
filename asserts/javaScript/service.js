const checkBtn = document.querySelector('.checkbtn');
const navMenu = document.querySelector('nav ul');

checkBtn.addEventListener('click', function() {
  navMenu.classList.toggle('open');
});

let productAPI1 = `http://localhost:3000/FacialCare`;
let productAPI2 = `http://localhost:3000/BodyMassage`;
let productAPI3 = `http://localhost:3000/FootMassage`;
let productAPI4 = 'http://localhost:3000/BackMassage';

function getbody(){
    fetch(productAPI2)
    .then(response => response.json())
    .then(data => {
      for (const item of data) {
        const html = `
        <div class="div-ListserviceItem col-3" id="MassageFullBack">
            <img src='${item.img}' alt="">
            <div class="div-serviceImg text-center">
                <a href="">${item.name}</a>
                <a href="">${item.Time}</a>
                <a id="price">${item.price}</a>
            </div>
        </div>
        `
        document.getElementById('dataBodyMassage').innerHTML += html;
      }
  
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }
getbody();

function getFace(){
  fetch(productAPI1)
  .then(response => response.json())
  .then(data => {
    for (const item of data) {
      const html = `
      <div class="div-ListserviceItem col-3" id="MassageFullBack">
          <img src='${item.img}' alt="">
          <div class="div-serviceImg text-center">
              <a href="">${item.name}</a>
              <a href="">${item.Time}</a>
              <a id="price">${item.price}</a>
          </div>
      </div>
      `
      document.getElementById('FacialCare').innerHTML += html;
    }

  })
  .catch(error => {
    console.log('Error:', error);
  });
}
getFace();

function getFoot(){
  fetch(productAPI3)
  .then(response => response.json())
  .then(data => {
    for (const item of data) {
      const html = `
      <div class="div-ListserviceItem col-3" id="MassageFullBack">
          <img src='${item.img}' alt="">
          <div class="div-serviceImg text-center">
              <a href="">${item.name}</a>
              <a href="">${item.Time}</a>
              <a id="price">${item.price}</a>
          </div>
      </div>
      `
      document.getElementById('dataFootMassage').innerHTML += html;
    }

  })
  .catch(error => {
    console.log('Error:', error);
  });
}
getFoot();
function getBack(){
  fetch(productAPI4)
  .then(response => response.json())
  .then(data => {
    for (const item of data) {
      const html = `
      <div class="div-ListserviceItem col-3" id="MassageFullBack">
          <img src='${item.img}' alt="">
          <div class="div-serviceImg text-center">
              <a href="">${item.name}</a>
              <a href="">${item.Time}</a>
              <a id="price">${item.price}</a>
          </div>
      </div>
      `
      document.getElementById('dataBackMassage').innerHTML += html;
    }

  })
  .catch(error => {
    console.log('Error:', error);
  });
}
getBack();

