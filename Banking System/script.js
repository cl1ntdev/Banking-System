const adminUser = 'admin'
const adminPass = 'admin123'
document.querySelector('.container').addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        check()
    }
})
let checkUsers = JSON.parse(localStorage.getItem('users'))
let checkAdmin = JSON.parse(localStorage.getItem('adminAcc'))
let baseAccount = JSON.parse(localStorage.getItem('baseAccount'));
// console.log(baseAccount)
if(!checkAdmin){
    let admin = []
    admin.push({adminUser,adminPass})
    localStorage.setItem('admin',JSON.stringify(admin))
}
if(baseAccount){
    localStorage.removeItem('baseAccount')
}
if(!checkUsers){
    let users = []
    // let name = '', password = '', status = '',balance = '',transactions = ''
    let name = 'clint', password = '14', status = 'enabled',balance = '900', transactions = []
    localStorage.setItem('users',JSON.stringify(users))
    let newUserDefault = JSON.parse(localStorage.getItem('users'))
    console.log(newUserDefault)
    newUserDefault.push({balance,name,password,transactions,status})
    localStorage.setItem('users',JSON.stringify(newUserDefault))
}

function check(){
    
    let username = document.querySelector('#username').value.trim()
    let password = document.querySelector('#password').value.trim()
    // console.log(`${username} ${password}`)
    const allTheUser = JSON.parse(localStorage.getItem('users'))
    const adminUser = JSON.parse(localStorage.getItem('admin'))
    let checker = allTheUser.find((user)=>user.name === username)
    let checkerAdmin = adminUser.find((user)=>user.adminUser === username)
    // baseAccount = checker
    if(checker){
        if(checker.status ==='disabled'){
            alert('account Disabled')
            return;
        }
        if(checker.password === password){
            localStorage.setItem('baseAccount',JSON.stringify(checker))
            window.location.href = 'userOrAdmin.html'
        }
        // passCheck(base,password)
    }else if (checkerAdmin){
        if(checkerAdmin.adminPass === password){
            localStorage.setItem('baseAccount',JSON.stringify(checkerAdmin))
            window.location.href = 'AdminPanel.html'
            // console.log('sakto par')
        }
    }else{
        alert('no existing user')
    }


    
}


