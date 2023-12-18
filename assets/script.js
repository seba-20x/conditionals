//Border color

const image = document.querySelector("img");
let state = true;

image.addEventListener('click', () => {
    state ? image.style.border = "2px solid red" : image.style.border = "none"
    state = !state
})

//choice stickers

const button = document.getElementById('btn');

button.addEventListener('click',() => {
    let st1 = Number(document.getElementById('st1').value);
    let st2 = Number(document.getElementById('st2').value);
    let st3 = Number(document.getElementById('st3').value);

    let total = st1 + st2 + st3;
    let txt = document.querySelectorAll('p')[1];
    
    total > 10 ? txt.textContent = " Llevas demasiados stickers" : txt.textContent = "Llevas " + total + " Stickers"

})

// select password

const enter = document.getElementById('enterPass');

enter.addEventListener('click', () => {
    let pass1 = Number(document.getElementById('pass-secret-1').value);
    let pass2 = Number(document.getElementById('pass-secret-2').value);
    let pass3 = Number(document.getElementById('pass-secret-3').value);

    let msn = document.getElementById('mensaje')

    if (pass1 === 9 && pass2 === 1 && pass3 === 1) {
        msn.textContent = "Password 1 correcto"
    }else if ((pass1 === 7 && pass2 === 1 && pass3 === 4)){
        msn.textContent = "Password 2 correcto"
    }else{
        msn.textContent = "Password Incorrecto"
    }
})

