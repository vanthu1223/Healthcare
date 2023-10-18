
// giữ vị trí thanh navbar khi cuộn
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
// $('.datepicker').datepicker({
//     format: 'yyyy-mm-dd',
//     startDate: '01/01/2022',
//     endDate: '12/31/2023',
//     language: 'en'
//     });
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '10/13/2023'
})
$('.datepicker').on("change", (e) => {
    console.log(e.target.value)
})
