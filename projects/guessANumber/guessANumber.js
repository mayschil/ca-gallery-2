a

// drawNum();
function drawNum(){

    var num = Math.floor(Math.random()*40 + 1);
    console.log(num);
    var guess = +prompt('enter your guess');
    var elResult = document.querySelector('#result');

    if(guess > num) elResult.innerHTML = ('You guessed ' + guess+ ' and ' + 'that is too high');
    else
        if(guess < num) elResult.innerHTML = ('You guessed ' + guess+ ' and ' + 'that is too low');
    else
        elResult.innerHTML =('You guessed ' + guess + ' ' + 'and that is correct!'); ;
    
}