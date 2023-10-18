function myLogout() {
  localStorage.removeItem('list_user');
    alert('Bạn đã Đăng Xuất');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    loginButton.style.display = 'block';
    registerButton.style.display = 'block';
    window.location.href = '../pages/home.html';
}

