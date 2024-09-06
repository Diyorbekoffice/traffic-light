const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');


function change(color) {
    redLight.classList.remove('red');
    yellowLight.classList.remove('yellow');
    greenLight.classList.remove('green');


    if (color === 'red') {
        redLight.classList.add('red');
    } else if (color === 'yellow') {
        yellowLight.classList.add('yellow');
    } else if (color === 'green') {
        greenLight.classList.add('green');
    }
}


function traffic() {
    change('red'); 
    setTimeout(() => {
        change('yellow'); 
        setTimeout(() => {
            change('green'); 
            setTimeout(() => {
                change('yellow');
            }, 2000)
        }, 1000);
    }, 2000); 
}


traffic(); 
setInterval(traffic, 6000); 
