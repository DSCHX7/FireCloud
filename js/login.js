let accountAll = [{ 
          username: 'Admin',
          passwd: '000000'
        },
        {
          username: 456,
          passwd: 'asd'
        },
        {
          username: 789,
          passwd: 'zxc'
        }
      ]
      function login() { //登陆判断
        let username = document.getElementById('username').value;
        let passwd = document.getElementById('password').value;
        let account = accountAll.filter(function(e) {
          return e.username == username
        })[0]; // 筛选账号返回数组，不存在则返回空数组
        if (!account) {
          alert('账户不存在');
        } else {
          if (account.username == username && account.passwd == passwd) {
            alert('登录成功')
            window.location.href='https://www.123pan.com';
          } else {
            alert('密码错误');
          }
        }
      }
      