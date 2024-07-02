let form = document.getElementById('form');

function handlingContact(event){
    event.preventDefault();

    let emailAddress = event.target.email.value;
    console.log(emailAddress);

    let successContainer = document.getElementById('success-container');
    console.log(successContainer);

    successContainer.style.marginTop = '20px';

    let emailParagraph = document.createElement('p');
    emailParagraph.innerText = 'Your email successfully done';
    console.log(emailParagraph);
    successContainer.appendChild(emailParagraph);
}

let seeMore = document.querySelector('.see-more');
let toogleBtn = document.querySelector('#toggle-button');

let display = true; //hide

toogleBtn.addEventListener('click', () =>{
    if(display){
        display = false;
        seeMore.classList.remove('hide');
        toogleBtn.innerText = 'See Less';
    }
    else{
        display = true; //hide
        seeMore.classList.add('hide');
        toogleBtn.innerText = 'See More Products';
    }
});






       
    
