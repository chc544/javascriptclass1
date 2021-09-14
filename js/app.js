const makeList = document.querySelector('.makelist');
const reload = document.querySelector('.reload');

let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let hole = 1;
let named = document.querySelector('.named');
let namespan = document.querySelector('.name');
let HolesDoc = document.querySelector('.HolesDoc');

minus.forEach((minus) => {
    minus.addEventListener('click', function (e){
        if(e.target.nextElementSibling.value > 0) {
            e.target.nextElementSibling.value--}
        total();
    });
});

plus.forEach((plus) => {
    plus.addEventListener('click', function (e){
        e.target.previousElementSibling.value++;
        total();
    })
})

function holelist(){
    const li = document.createElement('li')
    li.innerHTML = `
            <p class="text-center">${hole}</p>
            <div class="inputfield d-flex justify-content-center mb-3">
                <button class="minus">-</button>
                <input class="score" type="text" name="input" value="0">
                <button class="plus">+</button>
            </div>`;
    const list = document.querySelector('.list');
    list.appendChild(li);
    li.querySelector('.minus').addEventListener('click', (e) =>
        decrease(e));
    li.querySelector('.plus').addEventListener('click', (e) =>
        increase(e));
    hole++;
}

makeList.addEventListener('click', (e) => {
    holelist(e);
})

function decrease (e){
    if(e.target.nextElementSibling.value > 0) {
        e.target.nextElementSibling.value--}
    total();
}

function increase (e){
    e.target.previousElementSibling.value++;
    total();
}

reload.addEventListener('click',() => location.reload());

function holes () {
    for (let x = 1; x < HolesDoc.value; x++){
        holelist();

    }
}

function namefunc (){
    const name = document.createElement('span');
    name.innerHTML = `${named.value}`;
    namespan.appendChild(name);
}

let startGame = document.querySelector('.start');

startGame.addEventListener('click', (e) => {
    namefunc(e);
    holes();
})

function total(){
    let arr = document.querySelectorAll('.score');
    let total=0;
    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }
    document.getElementById('total').value = total;
}

