const nodemailer = require('nodemailer');
// CHuyển động
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function myLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const Users = {
    username: usernameInput.trim(),
    password: passwordInput.trim(),
  };
  const arrUsers = [];
  console.log(Users);

  fetch("http://localhost:4001/User")
    .then((response) => response.json())
    .then((data) => {
      let user = data.find(
        (e) => Users.username === e.nameUser && Users.password === e.password
      );
      if (user) {
        localStorage.setItem(
          "list_user",
          JSON.stringify({ id: user.id, role: user.role })
        );
        alert("Đăng nhập thành công");

        window.location.href = "./home.html";
      } else {
        console.log("Dang nhap khong thanh cong");
        return;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


const nodemailer = require("nodemailer");

function sendEmail(message) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
}

function sendResetPassword({ toUser, pass }) {
  const message = {
    from: process.env.GOOGLE_USER,
    to: toUser.email,
    // to: process.env.GOOGLE_USER,
    subject: "PNV - Reset Password",
    html: `
        <h3>Chào ${toUser.name} </h3>
        <p>Password mới của bạn là <strong>${pass}</strong></p>
        <p>Cheers,</p>
        <p>PNV</p>    
      `,
  };

  return sendEmail(message);
}

// exports.sendResetPassword = function ({ toUser, pass }) {
//   const message = {
//     from: process.env.GOOGLE_USER,
//     to: toUser.email,
//     // to: process.env.GOOGLE_USER,
//     subject: "PNV - Reset Password",
//     html: `
//         <h3>Chào ${toUser.name} </h3>
//         <p>Password mới của bạn là <strong>${pass}</strong></p>
//         <p>Cheers,</p>
//         <p>PNV</p>
//       `,
//   };

//   return sendEmail(message);
// };

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === "PATCH" || req.method === "PUT") {
    req.body.updatedAt = Date.now();
  }
  next();
});

// server.use((req, res, next) => {
//   if (req.method === "PATCH" && req.body.key === "RESET") {
//     console.log(req.body);
//   }
//   next();
// });

server.post("/reset", async (req, res) => {
  const { email } = req.body;
  const pass = "112233";
  const user = {
    name: "Thanh",
    email,
  };
  await sendResetPassword({ toUser: user, pass });
  res.jsonp({ message: "helo" });
});

//Mở modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Đóng modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Xử lý sự kiện khi bấm nút "Find"
function findPassword() {
  var email = document.getElementById("inputEmail").value;
  // Gọi hàm gửi email với địa chỉ email người dùng
  sendEmail(email);
  closeModal();
}

// Import thư viện Nodemailer (yêu cầu cài đặt trước đó)
const nodemailer = require('nodemailer');

// Hàm gửi email với Nodemailer
const sendEmail = async (recipient) => {
  try {
    // Khởi tạo transporter cho việc gửi email
    const transporter = nodemailer.createTransport({
      // Cấu hình thông tin SMTP hoặc provider email của bạn
      // ví dụ: Gmail, Mailgun, SendGrid, ...
    });

    // Tạo mật khẩu mới (ở đây tạo ngẫu nhiên)
    const newPassword = generateNewPassword();

    // Tạo nội dung email
    const mailOptions = {
      from: 'your-email@example.com', // Địa chỉ email nguồn
      to: recipient, // Địa chỉ email người nhận
      subject: 'Mật khẩu mới', // Tiêu đề email
      text: `Mật khẩu mới của bạn là: ${newPassword}`, // Nội dung email
    };

    // Gửi email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const generateNewPassword = () => {
  // Logic tạo mật khẩu mới
  // Ví dụ: sử dụng thư viện crypto để tạo mật khẩu ngẫu nhiên
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8; // Độ dài mật khẩu mới
  let newPassword = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }

  return newPassword;
};

// Xử lý sự kiện khi người dùng bấm vào nút "Quên mật khẩu"
const handleForgotPassword = () => {
  // Lấy giá trị email từ người dùng
  const email = document.getElementById('emailInput').value;

  // Gọi hàm gửi email với địa chỉ email người dùng
  sendEmail(email);
};