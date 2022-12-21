// Dichiaro e Inizializzo le variabii
const boxContainer = document.getElementById('box-container')

// Utilizzo un ciclo for per generare i 100 box
for (let i = 1 ; i <= 100 ; i++) {

    // verifico se i e' un multiplo di sia di 3 che di 5
    if ((i % 5 == 0) && (i % 3 == 0)) {
        const element = `<div class="box">FizzBuzz</div>`;
        console.log(element);
        // boxContainer.innerHTML += element;
    }

    // verifico se i e' un multiplo di 3
    else if (i % 3 == 0) {
        const element = `<div class="box">Fizz</div>`;
        console.log(element);
        // boxContainer.innerHTML += element;
    }

    // verifico se i e' un multiplo di 5
    else if (i % 5 == 0) {
        const element = `<div class="box">Buzz</div>`;
        console.log(element);
        // boxContainer.innerHTML += element;
    }

    // Se non si verifica nessuna delle precedenti condizioni stampo "i"
    else {
        const element = `<div class="box">${i}</div>`;
        console.log(element);
        // boxContainer.innerHTML += element; 
    }   
}

    

