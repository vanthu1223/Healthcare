function myLogout() {
  localStorage.removeItem('list_user');
    alert('Bạn đã Đăng Xuất');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    loginButton.style.display = 'block';
    registerButton.style.display = 'block';
    window.location.href = '../pages/home.html';
}


if (!localStorage.getItem('list_user')) {
  document.getElementById('button').disabled = true;
  document.getElementById('buttonChange').disabled = true;
  document.getElementById('buttonLogout').disabled = true;
}
else {
  document.getElementById('button').style.display = 'inline-block'; 
  document.getElementById('buttonChange').style.display = 'inline-block'; 
  document.getElementById('buttonLogout').style.display = 'inline-block'; 
}