
var isOn;
function modal() {

    if (!isOn) {
        var elModal = document.querySelector('.modal');
        elModal.style.display = 'initial';
        isOn = true;
    }
    else {
        var elModal = document.querySelector('.modal');
        elModal.style.display = 'none';
        isOn = false;
    }
}

function menu() {
  
    
}