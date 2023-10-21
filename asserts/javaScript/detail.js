
fetch('http://localhost:3000/BackMassage')
.then(res=>res.json())
.then(data=>{
  data.forEach(item => {
    const image = document.getElementById('img')
    image.src = `${item.img}`
    // console.log(image);
    image.addEventListener('click',()=>{
      window.location.href = "../pages/service/details.html" + `idx=${item.id}`
    })
  });
})

fetch(`http://localhost:3000/BackMassage`)
.then(res=>res.json())
.then(data=>{
  let url = window.location.href;
    var paramsString = url.split("?")[1];
    var itemIndex = paramsString.split("=")[1];

    const listItem = data.find(item => {
      return item.id == itemIndex
    });
    console.log(listItem);
    document.getElementById('imgDetail').src = listItem.img;

})


fetch('http://localhost:3000/FootMassage')
.then(res=>res.json())
.then(data=>{
  data.forEach(item => {
    const image = document.getElementById('img')
    image.src = `${item.img}`
    // console.log(image);
    image.addEventListener('click',()=>{
      window.location.href = "../pages/service/details.html" + `idx=${item.id}`
    })
  });
})

fetch(`http://localhost:3000/FootMassage`)
.then(res=>res.json())
.then(data=>{
  let url = window.location.href;
    var paramsString = url.split("?")[1];
    var itemIndex = paramsString.split("=")[1];

    const listItem = data.find(item => {
      return item.id == itemIndex
    });
    console.log(listItem);
    document.getElementById('imgDetail').src = listItem.img;

})

fetch('http://localhost:3000/BodyMassage')
.then(res=>res.json())
.then(data=>{
  data.forEach(item => {
    const image = document.getElementById('img')
    image.src = `${item.img}`
    // console.log(image);
    image.addEventListener('click',()=>{
      window.location.href = "../pages/service/details.html" + `idx=${item.id}`
    })
  });
})

fetch(`http://localhost:3000/BodyMassage`)
.then(res=>res.json())
.then(data=>{
  let url = window.location.href;
    var paramsString = url.split("?")[1];
    var itemIndex = paramsString.split("=")[1];

    const listItem = data.find(item => {
      return item.id == itemIndex
    });
    console.log(listItem);
    document.getElementById('imgDetail').src = listItem.img;

})


fetch('  http://localhost:3000/FacialCare')
.then(res=>res.json())
.then(data=>{
  data.forEach(item => {
    const image = document.getElementById('img')
    image.src = `${item.img}`
    // console.log(image);
    image.addEventListener('click',()=>{
      window.location.href = "../pages/service/details.html" + `idx=${item.id}`
    })
  });
})

fetch(`  http://localhost:3000/FacialCare`)
.then(res=>res.json())
.then(data=>{
  let url = window.location.href;
    var paramsString = url.split("?")[1];
    var itemIndex = paramsString.split("=")[1];

    const listItem = data.find(item => {
      return item.id == itemIndex
    });
    console.log(listItem);
    document.getElementById('imgDetail').src = listItem.img;

})

