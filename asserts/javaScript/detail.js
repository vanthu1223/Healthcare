let productAPI4 = ' http://localhost:3000/BackMassage';
function getBack() {
    fetch(productAPI4)
      .then(response => response.json())
      .then(data => {
        for (const item of data) {
          const html = `
          <div class="div-ListserviceItem col-3" id="BackMassage">
              <img src='${item.img}' alt="" onclick="displayImage('${item.img}')">
              <div class="div-serviceImg text-center">
                  <a href="">${item.name}</a>
                  <a href="">${item.Time}</a>
                  <a id="price">${item.price}</a>
                  <a>${item.infor}</a>
              </div>
          </div>
          `;
          document.getElementById('BackMassage').innerHTML += html;
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  function displayImage(imageUrl) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
  }
  
  getBack();
