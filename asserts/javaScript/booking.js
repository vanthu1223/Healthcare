
const initHours = [
  {
    isDisabled: false,
    value: 7,
    label: "7:00"
  },
  {
    isDisabled: false,
    value: 8,
    label: "8:00"
  },
  {
    isDisabled: false,
    value: 9,
    label: "9:00"
  },
  {
    isDisabled: false,
    value: 10,
    label: "10:00"
  },
  {
    isDisabled: false,
    value: 11,
    label: "11:00"
  },
  {
    isDisabled: false,
    value: 12,
    label: "12:00"
  },
  {
    isDisabled: false,
    value: 13,
    label: "13:00"
  },
  {
    isDisabled: false,
    value: 14,
    label: "14:00"
  },
  {
    isDisabled: false,
    value: 15,
    label: "15:00"
  },
  {
    isDisabled: false,
    value: 16,
    label: "16:00"
  },
  {
    isDisabled: false,
    value: 17,
    label: "17:00"
  },
  {
    isDisabled: false,
    value: 18,
    label: "18:00"
  },
  {
    isDisabled: false,
    value: 19,
    label: "19:00"
  },
  {
    isDisabled: false,
    value: 20,
    label: "20:00"
  },
  {
    isDisabled: false,
    value: 21,
    label: "21:00"
  },
];

// giữ vị trí thanh navbar khi cuộn
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});



$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',
  startDate: new Date(),
})
$('.datepicker').on("change", (e) => {
  const value = e.target.value
  const selectedDate = new Date(value).setHours(0, 0, 0, 0)
  const currentDate = new Date().setHours(0, 0, 0, 0)
  let newHours = [...initHours]
  if (selectedDate === currentDate) {
    const currentHours = new Date().getHours();
    newHours = newHours.map(e => ({
      ...e,
      isDisabled: e.value < currentHours
    }))
    renderContent(newHours)
  } else if (selectedDate < currentDate) {
    newHours = newHours.map(e => ({
      ...e,
      isDisabled: true
    }))
    renderContent(newHours)
  }
  else {
    renderContent(initHours)
  }
})

function renderContent(hours) {



  // // hiển thị các nút giờ.
  // Lấy phần tử "time-picker" từ DOM
  const timePicker = document.getElementById("time-picker");
  timePicker.innerHTML = "";

  // Mảng chứa các giờ bạn muốn hiển thị


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
    radioInput.value = hour.value;
    radioInput.id = `hour-${hour.value}`
    radioInput.disabled = hour.isDisabled

    const label = document.createElement("label");
    label.setAttribute("for", `hour-${hour.value}`);
    label.textContent = hour.label;
    label.className = `time-label ${hour.isDisabled ? "disabled" : ""}`;

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
}

renderContent(initHours)