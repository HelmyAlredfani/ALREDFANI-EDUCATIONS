document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="/Home/Login"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('main').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    });

    document.getElementById('adminForm').onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username === "alredfani" && password === "7334573345") {
            document.getElementById('login').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            document.getElementById('errorMessage').innerText = '';
        } else {
            document.getElementById('errorMessage').innerText = 'بيانات الدخول غير صحيحة!';
        }
        return false;
    };
});
