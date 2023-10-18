var user = [
    {
        id: "01",
        uName: "dinh duyen",
        nPhone: "01234",
        address: "101B le huu trac",
        passWord: " 123",
        role:"user"
    },
    {
        id: "02",
        uName: "dinh thuy",
        nPhone: "01235",
        address: "101B le huu trac",
        passWord: " 122",
        role: "admin"

    }
]
function regestor() {
    var u = document.getElementById("uName").value;
    var p1 = document.getElementById("passWord").value;
    var p2 = document.getElementById("password-repeat").value;

    if (u == "") {
        alert("Vui lòng nhập tên!");
        return false;
    }
    if (p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if (p2 == "") {
        alert("Vui lòng xác minh mật khẩu!");
        return false;
    }

    alert("Xin hãy điền đúng thông tin!")

    return true;
}
