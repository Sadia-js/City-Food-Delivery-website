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

let seeMore = document.getElementById('see-more');
let button = document.getElementById('toggle-button');

let display = 0;
function handleMoreProducts(){
    if(display == 1){
        seeMore.style.display = 'grid';
        display = 0;
        button.textContent = 'See Less';
    }
    else{
        seeMore.style.display = 'none';
        display = 1;
        button.textContent = 'See More Products';
    }
}




       
    
