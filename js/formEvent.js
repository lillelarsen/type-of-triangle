const form = document.querySelector('#calculatorForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = parseFloat(this.sideA.value);
    const b = parseFloat(this.sideB.value);
    const c = parseFloat(this.sideC.value);
    const showResult = document.querySelector('#result');
    const showError = document.querySelector('#error');
    const showImage = document.querySelector('#triangleImage');
    

    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult.classList.remove('alert');
        showResult.classList.remove('alert-info'); 
        showResult.innerHTML = '';
        showImage.src = '';
        const error = 'One or more inputs are not a number';
        showError.classList.add('alert');
        showError.classList.add('alert-danger'); 
        showError.innerHTML = error;
    } else {
        showError.classList.remove('alert');
        showError.classList.remove('alert-danger'); 
        showError.innerHTML = '';
        const result = triangleCalculator(a, b, c);
        showResult.classList.add('alert');
        showResult.classList.add('alert-info'); 
        showResult.innerHTML = result.answer;
        showImage.src = result.image;
    }
});