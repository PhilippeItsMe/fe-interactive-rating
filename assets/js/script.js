// evalution const
const button_row = document.querySelectorAll('.button-row .rond');
const submit = document.querySelector('.submit');
const confirmation = document.querySelector('#result')


// section switch const
const ratingSection = document.querySelector('#rating');
const thanksSection = document.querySelector('#thanks');

// eval handling
let evalResult = null;

const evalClick = (e) => {
    const clickedButton = e.target.closest('button');
        if (clickedButton) {

            button_row.forEach(btn => btn.classList.remove('selected'));
            clickedButton.classList.add('selected');
            
            evalResult = clickedButton.textContent.trim();
            console.log('Eval', {evalResult});
        }
}

button_row.forEach(button => {
    button.addEventListener('click', evalClick);
});


// section change & result display handling
function thanksSectionDisplay () {
    ratingSection.style.display = 'none';
    ratingSection.setAttribute('aria-hidden', 'true');

    thanksSection.style.display = 'flex';
    thanksSection.setAttribute('aria-hidden', 'false');
    confirmation.textContent = `You selected ${evalResult} out of 5`;
}

submit.addEventListener('click', thanksSectionDisplay);
