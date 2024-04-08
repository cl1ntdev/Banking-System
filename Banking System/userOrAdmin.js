let transactions = document.querySelector('.transactions')
let balance = document.querySelector('.balance').innerText
let cont = document.querySelector('.container')
let baseAcc = JSON.parse(localStorage.getItem('baseAccount'))
let allAcc = JSON.parse(localStorage.getItem('users'))
console.log(baseAcc)

//assing balance
function updTransac(){
    let tranShow = document.querySelector('.transShow')
    tranShow.innerHTML = ''
    tranShow.innerHTML = ` <tr>
            <th>Date</th>
            <th>Money Spent</th>
            <th>Balance</th>
        </tr>`
    let lengthBase = baseAcc.transactions.length;
    // console.log(lengthBase)
    for(let i = 0;i<lengthBase;i++){
        let newR = document.createElement('tr')
        newR.className = 'newR'
        tranShow.appendChild(newR)
        let tDate = document.createElement('td')
        tDate.innerText = baseAcc.transactions[i].date
        let tMspend= document.createElement('td')
        tMspend.innerText = baseAcc.transactions[i].mSpent
        let tBal= document.createElement('td')
        tBal.innerText = baseAcc.transactions[i].bal
        newR.appendChild(tDate)
        newR.appendChild(tMspend)
        newR.appendChild(tBal)
    }
}

document.querySelector('.balance').innerText = baseAcc.balance
console.log(baseAcc)

function action(val){
    // let withOrDepShow = document.createElement('div')
    // withOrDepShow.className = 'withraw-deposit'
    // cont.appendChild(withOrDepShow)
    let withrawdepShow = document.querySelector('.withraw-deposit')
    if(val === 'withraw'){
        withrawdepShow.innerHTML = ''
        withrawdepShow.innerHTML = `<input class='withOrDeps' placeholder='Withraw Amount'>
        <button onclick='withr()'>Confirm</button>`
    }else if(val === 'deposit'){
        withrawdepShow.innerHTML = ''
        withrawdepShow.innerHTML = `<input class='withOrDeps' placeholder='Deposit Amount'>
        <button onclick='dep()'>Confirm</button>`
    }
}
let date = 'test'
let mSpent;
let bal;
function withr(){
    let balanceBase = parseInt(document.querySelector('.balance').innerHTML.trim())
    let withrDepBase = parseInt(document.querySelector('.withOrDeps').value.trim())
    // console.log(balanceBase)
    // console.log(withrDepBase)
    mSpent = withrDepBase
    console.log(mSpent)
    if(withrDepBase < balanceBase){
        let newBal = parseInt(balanceBase) - parseInt(withrDepBase)
        document.querySelector('.balance').innerHTML = newBal
        baseAcc.balance = newBal
        bal = newBal
        baseAcc.transactions.push({date,mSpent,bal})////check this
        console.log(baseAcc)
        localStorage.setItem('baseAccount',JSON.stringify(baseAcc))
        updTransac()
    }

}

function dep(){
    let balanceBase = document.querySelector('.balance').innerHTML.trim()
    let withrDepBase = document.querySelector('.withOrDeps').value.trim()
    let add = parseInt(balanceBase) + parseInt(withrDepBase)
    // console.log(add)
    mSpent = withrDepBase
    document.querySelector('.balance').innerHTML = add
    baseAcc.balance = add
    bal = add
    // console.log(baseAcc)
    baseAcc.transactions.push({date,mSpent,bal})////check this
    console.log(baseAcc)
    localStorage.setItem('baseAccount',JSON.stringify(baseAcc))
    updTransac()
}


function saveChanges(){//issue here removes all the database
    let updAllacc = allAcc.find(users=>users.name === baseAcc.name)
    if(updAllacc){
        allAcc = allAcc.filter(acc=>acc.name !== updAllacc.name)
        // console.log(allAcc)

        allAcc.push(baseAcc)
        console.log(allAcc)
        
        localStorage.setItem('users',JSON.stringify(allAcc))
    }
    // console.log(updAllacc)

    window.location.href = 'index.html'
}