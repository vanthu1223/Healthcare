// // Import thư viện Nodemailer (yêu cầu cài đặt trước đó)
// const nodemailer = require('nodemailer');

// // Hàm gửi email với Nodemailer
// const sendEmail = async (recipient) => {
//     try {
//         // Khởi tạo transporter cho việc gửi email
//         const transporter = nodemailer.createTransport({
//             // Cấu hình thông tin SMTP hoặc provider email của bạn
//             // ví dụ: Gmail, Mailgun, SendGrid, ...
//             service: 'Gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASSWORD,
//             },
//         });

//         // Tạo mật khẩu mới (ở đây tạo ngẫu nhiên)
//         const newPassword = generateNewPassword();

//         // Tạo nội dung email
//         const mailOptions = {
//             from: 'your-email@example.com', // Địa chỉ email nguồn
//             to: recipient, // Địa chỉ email người nhận
//             subject: 'Mật khẩu mới', // Tiêu đề email
//             text: `Mật khẩu mới của bạn là: ${newPassword}`, // Nội dung email
//         };

//         // Gửi email
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

// const generateNewPassword = () => {
//     // Logic tạo mật khẩu mới
//     // Ví dụ: sử dụng thư viện crypto để tạo mật khẩu ngẫu nhiên
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const length = 8; // Độ dài mật khẩu mới
//     let newPassword = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         newPassword += characters[randomIndex];
//     }

//     return newPassword;
// };

// // Xử lý sự kiện khi người dùng bấm vào nút "Quên mật khẩu"
// const handleForgotPassword = () => {
//     // Lấy giá trị email từ người dùng
//     const email = document.getElementById('emailInput').value;

//     // Gọi hàm gửi email với địa chỉ email người dùng
//     sendEmail(email);
// };
// import nodemailer from 'nodemailer';
// const emailForm = document.getElementById('emailForm');

// emailForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Ngăn chặn việc gửi form đi mặc định

//     const emailInput = document.getElementById('email');
//     const email = emailInput.value;

//     sendEmail(email);
// });
const url = 'http://localhost:4001/';

async function sendEmail(email) {
    const emailInput = document.getElementById('inputEmail');
    email = emailInput.value;
    fetch(url + 'sendEmail',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        }
    )

}

// // Sử dụng hàm sendEmail
// sendEmail(document.query)));