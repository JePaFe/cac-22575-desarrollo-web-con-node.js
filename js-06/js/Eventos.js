function saludar(event) {
    console.log(event, event.target.dataset);
    alert('Hola');
}

let h1 = document.querySelector('h1');
h1.addEventListener('click', saludar);

// h1.onclick = () => { saludar() };
// h1.onclick = saludar;

let form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let nombre = document.querySelector('#nombre');

    if (nombre.value == '') {
        // alert('El campo nombre es obligatorio');
        let span = document.createElement('span');
        span.textContent = 'El campo nombre es obligatorio';
        event.target.appendChild(span);
    } else {
        console.log('Submit...');
        // event.target.submit();
    }
});