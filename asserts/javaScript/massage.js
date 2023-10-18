
var row1 = [
    {
        image: "facce'.jpg",
        name: "Face Massage",
        description: "Anti-aging and reduces wrinkles. Reduces sinus pressure, rejuvenates skin, helps brighten skin.",
        button: `<a href="http://127.0.0.1:5500/pages/face.html" target="_blank" class="btn">See more</a>`
    },
    {
       
        image: "vai.jpg",
        name: "Shoulder Massage",
        description: "This treatment will help the body relieve stress, bringing a feeling of relaxation and comfort",
        button: `<a href="http://127.0.0.1:5500/pages/vai.html" target="_blank" class="btn">See more</a>`
    },
    {
        image: "lung.jpg",
        name: "Shoulder Massage",
        description: "This treatment will help the body relieve stress, bringing a feeling of relaxation and comfort",
        button: `<a href="http://127.0.0.1:5500/pages/lung.html" target="_blank" class="btn">See more</a>`
    },
    {
        image: "body.jpg",
        name: "Hot Stone Massage",
        description: "Intensive hot stone massage therapy helps relax tissues and relieve stress and fatigue in the body.",
        button: `<a href="http://127.0.0.1:5500/pages/body.html" target="_blank" class="btn">See more</a>`
    },
    {
        image: "head.jpeg",
        name: "Hand and Head Massage",
        description: "Head massage helps you reduce stress and soothe migraines or headaches",
        button: `<a href="http://127.0.0.1:5500/pages/head.html" target="_blank" class="btn">See more</a>`
    },
    {
        image: "laser.jpg",
        name: "Waxing",
        description: "Lasers are used to destroy hair follicles on the skin. Reduces hair regrowth by 10% to 25%",
        button: `<a href="http://127.0.0.1:5500/pages/laser.html" target="_blank" class="btn">See more</a>`
    }
    // Các phần tử khác trong mảng row1
];

function list() {
    for (let i = 0; i < row1.length; i++) {
        var demo = `
            <div class="col-4">
                <div class="card" style="width: 10rem;">
                    <img src="../asserts/image/${row1[i].image}" class="cImg" style="width: 159px">
                    <div class="card-body">
                        <h5 class="card-title">${row1[i].name}</h5>
                        <p class="card-text">${row1[i].description}</p>
                        ${row1[i].button}
                    </div>
                </div>
            </div>
        `;
        console.log(demo);
        document.getElementById("row1").innerHTML += demo;
    }
}