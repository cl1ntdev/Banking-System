let accShow = document.querySelector('.showAcc')
let users = JSON.parse(localStorage.getItem('users'))

if(users){
    for(let i = 0;i<users.length;i++){
        let newRow = document.createElement('tr')
        accShow.appendChild(newRow)
        let tdName = document.createElement('td')
        tdName.innerText = users[i].name
        let tdBalance = document.createElement('td')
        tdBalance.innerText = users[i].balance
        let tdPassword = document.createElement('td')
        tdPassword.innerText = users[i].password
        let tdStatus = document.createElement('td')
        tdStatus.innerText = users[i].status
        
        accShow.appendChild(tdName)
        accShow.appendChild(tdBalance)
        accShow.appendChild(tdPassword)
        accShow.appendChild(tdStatus)
        if(users[i].status === 'enabled'){
            let dis = document.createElement('button')
            dis.innerText = 'Disable This Shit'
            dis.style.width = '210px'
            dis.addEventListener('click',function(){
                users[i].status = 'disabled'
                localStorage.setItem('users',JSON.stringify(users))
                console.log(users[i].status)
                location.reload()
            })
            accShow.appendChild(dis)
        }else if(users[i].status === 'disabled'){
            let dis = document.createElement('button')
            dis.innerText = 'Disable This Shit'
            dis.style.width = '210px'
            dis.addEventListener('click',function(){
                users[i].status = 'enabled'
                localStorage.setItem('users',JSON.stringify(users))
                console.log(users[i].status)
                location.reload()
            })
            accShow.appendChild(dis)
        }
    }
}