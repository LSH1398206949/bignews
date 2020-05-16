$(function () {
    // 先建立分支
    // 1.注册事件
    $('.login_form').on('submit', function (e) {
        // 阻止默认行为
        e.preventDefault();
        $.ajax({
            type: 'post',
            //基地址+接口地址
            url: 'http://localhost:8080/api/v1/admin/user/login',
            // 表单input标签需要有name属性
            data: $('.login_form').serialize(),
            beforeSend: function () {
                // 先判断是否有空格
                var flag = false;
                if ($.trim($('.input_txt').val()) == '' || $.trim($('.input_pass').val()) == '') {
                    flag = true;
                }
                if (flag) {
                    alert('用户名和密码不能为空，请重新输入')
                    return false;
                }
            },
            success: function (res) {
                // console.log(res);
                alert(res.msg);
                if (res.code == 200) {
                    // 跳转页面（webapi倒数第二天）
                    window.location.href = './index.html'
                }
            }
        })
    })





})