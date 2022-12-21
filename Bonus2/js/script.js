// Dichiaro e Inizializzo le variabii
const boxContainer = document.getElementById('box-container')

// Utilizzo un ciclo for per generare i 100 box
for (let i = 1 ; i <= 100 ; i++) {

    // verifico se i e' un multiplo di sia di 3 che di 5
    if ((i % 5 == 0) && (i % 3 == 0)) {
        // const element = `<div class="box">FizzBuzz</div>`;
        // boxContainer.innerHTML += element;

        // Creo un container nel DOM utilizzando append() dove inserire la stringa o il numero.
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'FizzBuzz';
        newDiv.className = 'box box-fizzbuzz';
        boxContainer.append(newDiv);
        console.log(newDiv);    
    }

    // verifico se i e' un multiplo di 3
    else if (i % 3 == 0) {
        // boxContainer.innerHTML += element;const element = `<div class="box">Fizz</div>`;
        // boxContainer.innerHTML += element;

        // Creo un container nel DOM utilizzando append() dove inserire la stringa o il numero.
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'Fizz';
        newDiv.className = 'box box-fizz';
        boxContainer.append(newDiv);
        console.log(newDiv);  
    }

    // verifico se i e' un multiplo di 5
    else if (i % 5 == 0) {
        // boxContainer.innerHTML += element;const element = `<div class="box">Buzz</div>`;
        // boxContainer.innerHTML += element;

        // Creo un container nel DOM utilizzando append() dove inserire la stringa o il numero.
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'Buzz';
        newDiv.className = 'box box-buzz';
        boxContainer.append(newDiv);
        console.log(newDiv);  
    }

    // Se non si verifica nessuna delle precedenti condizioni stampo "i"
    else {
        // const element = `<div class="box">${i}</div>`;
        // boxContainer.innerHTML += element; 

        // Creo un container nel DOM utilizzando append() dove inserire la stringa o il numero.
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `${i}`;
        newDiv.className = 'box box-number';
        boxContainer.append(newDiv);
        console.log(newDiv);  
    }   
}


    

