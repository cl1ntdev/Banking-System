let nameBase = document.querySelector('#newname')
let passBase = document.querySelector('#newpass')
let confPassBase = document.querySelector('#confpass')
let users = JSON.parse(localStorage.getItem('users'))
console.log(users)
function submit(){
    const checkExistingUser = users.find(user=>user.name === nameBase.value.trim())
    if(checkExistingUser){
        alert('User Already Exist May Ni')
        return;
    }else{
        if(passBase.value === confPassBase.value){
            let balance = 0,name = nameBase.value, password = confPassBase.value,transactions = [],status = 'enabled'
            users.push({balance,name,password,transactions,status})
            localStorage.setItem('users',JSON.stringify(users))
            localStorage.removeItem('baseAccount')
            let baseAcc = users.find(users=>users.name === nameBase.value.trim())
            localStorage.setItem('baseAccount',JSON.stringify(baseAcc))
            window.location.href = 'userOrAdmin.html'
        }
    }
}