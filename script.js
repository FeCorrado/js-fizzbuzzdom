const box = document.querySelector (".grid");

for (let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 == 0){
        box.innerHTML += `<div class="box red">FizzBuzz</div>`
    }else if (i % 3 == 0){
        box.innerHTML += `<div class="box green">Fizz</div>`
    }else if (i % 5 == 0){
        box.innerHTML += `<div class="box yellow">Buzz</div>`
    }else{
        box.innerHTML += `<div class="box blu">${i}</div>`
    }
}