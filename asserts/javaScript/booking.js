
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

// // hiển thị các nút giờ.
              // Lấy phần tử "time-picker" từ DOM
              const timePicker = document.getElementById("time-picker");

              // Mảng chứa các giờ bạn muốn hiển thị
              const hours = [
                "7:00", "8:00", "9:00", "10:00", "11:00",
                "12:00", "13:00", "14:00", "15:00", "16:00",
                "17:00", "18:00", "19:00", "20:00", "21:00"
              ];

              // Biến đếm để theo dõi số lượng nút đã thêm vào
              let buttonCount = 0;

              // Tạo hàng đầu tiên
              let currentRow = document.createElement("div");
              currentRow.className = "row time";

              // Duyệt qua mảng giờ và tạo các nút radio và nhãn
              hours.forEach(hour => {
                const column = document.createElement("div");
                column.className = "col-md-2 mb-2";

                const radioInput = document.createElement("input");
                radioInput.type = "radio";
                radioInput.className = "time-picker";
                radioInput.name = "aq";
                radioInput.value = hour;
                radioInput.id = "a" + hour.replace(":", "");

                const label = document.createElement("label");
                label.setAttribute("for", "a" + hour.replace(":", ""));
                label.textContent = hour;
                label.className = "time-label";

                currentRow.appendChild(column);
                column.appendChild(radioInput);
                column.appendChild(label);

                buttonCount++;

                // Nếu đã thêm 5 nút, tạo một hàng mới
                if (buttonCount % 5 === 0) {
                  timePicker.appendChild(currentRow);
                  currentRow = document.createElement("div");
                  currentRow.className = "row time";
                }
              });

              // Kiểm tra xem có cần thêm hàng cuối cùng hay không
              if (buttonCount % 5 !== 0) {
                timePicker.appendChild(currentRow);
              }
