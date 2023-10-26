

const renderItem = (items, nodeId) => {
  const product_detail = items.map((item) => {
    // console.log(item.id)
    return `
    <a href="../service/details.html?id=${item.id}" class="product-item">
      <div class="div-ListserviceItem" id="${nodeId+item.id}">
        <div>
          <img src='${item.img}' alt="">
          <div class="div-serviceImg text-center">
            <a href=""><strong>${item.name}</strong></a>
            <a href="">${item.Time}</a>
            <a id="price">${item.price}</a>
          </div>
        </div>
      </div>
    </a>
    `
  })
  // console.log(product_detail)
  document.getElementById(nodeId).innerHTML = `
    <div class="product">
      ${product_detail.join('')}
    </div>
  `;
}

function featchAllServices() {
  fetch("http://localhost:3000/services")
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('services', JSON.stringify(data))
      const listFacialCare = data.filter(e => e.type === "FacialCare")
      const listMostMassage = data.filter(e => e.type === "MostMassage")
      const listFootMassage = data.filter(e => e.type === "FootMassage")
      const listBackMassage = data.filter(e => e.type === "BackMassage")
      const listBodyMassage = data.filter(e => e.type === "BodyMassage")


      renderItem(listMostMassage, "MostMassage")
      renderItem(listFacialCare, "FacialCare")
      renderItem(listFootMassage, "FootMassage")
      renderItem(listBackMassage, "BackMassage")
      renderItem(listBodyMassage, "BodyMassage")
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

featchAllServices();