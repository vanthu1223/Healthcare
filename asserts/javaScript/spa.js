//hiển thị data lên spa
const url = "https://healthcare-ujzv.onrender.com/Sevicese";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((Sevicese) => {
      const html = `
      <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
         <figure><img src="${Sevicese.image}" alt="ảnh" width="200px" height="200px"></figure> 
          <h3>${Sevicese.nameService}</h3>
          <p>${Sevicese.details} </p>
          <hr>
          <p class="card-p"> <a href="../pages/detailSpa.html?id=${Sevicese.id}">DETAILS</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
        <figure> <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script></figure> 
        </div>
      </div>
    </div>
      `;
      displayData1(html);
    });
  })
  .catch((error) => {
    console.error(error);
  });

function displayData1(html) {
  const element = document.getElementById("dataSeviceInPageSpa");
  element.innerHTML += html;
}
