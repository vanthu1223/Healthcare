fetch('https://healthcare-ujzv.onrender.com/services')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const image = document.getElementById('img')
      image.src = `${item.img}`
      // console.log(image);
      image.addEventListener('click', () => {
        window.location.href = "../service/details.html" + `idx=${item.id}`

      })
    });
  })

fetch(`https://healthcare-ujzv.onrender.com/services`)
  .then(res => res.json())
  .then(data => {
    let url = window.location.href;
    var paramsString = url.split("?")[1];
    var itemIndex = paramsString.split("=")[1];

    const listItem = data.find(item => {
      return item.id == itemIndex
    });
    console.log(listItem);
    document.getElementById('imgDetail').src = listItem.img;
    document.getElementById('price').innerHTML = listItem.price;
    document.getElementById('Time').innerHTML = listItem.Time;
    document.getElementById('infor').innerHTML = listItem.infor;
    document.getElementById('name').innerHTML = listItem.name;


  })





