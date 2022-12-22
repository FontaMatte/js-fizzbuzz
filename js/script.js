// Utilizzo un ciclo for per generare i 100 box
for (let i = 1 ; i <= 100 ; i++) {

    // verifico se i e' un multiplo di sia di 3 che di 5
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log('FizzBuzz');
    }

    // verifico se i e' un multiplo di 3
    else if (i % 3 == 0) {
        console.log('Fizz');
    }

    // verifico se i e' un multiplo di 5
    else if (i % 5 == 0) {
        console.log('Buzz');
    }

    // Se non si verifica nessuna delle precedenti condizioni stampo "i"
    else {
        console.log(i);
    }   
}

    

