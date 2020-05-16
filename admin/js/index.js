$(function () {
    // 1.一登录就向服务器发请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        // 需要设置请求头：token
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            console.log(res);
            if (res.code == 200) {
                // 改变用户名
                $('.user_info span').html(res.data.nickname);
                // 改变用户头像
                $('.user_info img').attr('src', res.data.userPic)
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })


    // 2.退出功能
    $('.logout').on('click', function () {
        // 一退出就删除本地的token
        localStorage.removeItem('token')
        // 跳转到登录界面
        window.location.href = './login.html'
    })









})