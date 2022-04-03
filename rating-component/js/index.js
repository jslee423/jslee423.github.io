function changeRatingColor(color, ratingId) {
    const button = document.getElementById(ratingId); // why does getElementById return diff from getElementByClassName??
    button.style.background = color;
    button.setAttribute('data-selected', '');
}

function revertColor(ratingId) {
    const currentButton = document.getElementById(ratingId);
    let nextSibling = currentButton.nextElementSibling;
    while (nextSibling) {
        nextSibling.style.background = 'hsl(213, 20%, 22%)';
        nextSibling.removeAttribute('data-selected');
        nextSibling = nextSibling.nextElementSibling;
    }

    let prevSibling = currentButton.previousElementSibling;
    while(prevSibling) {
        prevSibling.style.background = 'hsl(217, 12%, 63%)';
        prevSibling.removeAttribute('data-selected');
        prevSibling = prevSibling.previousElementSibling;
    }
}

function changeSubmit() {
    const submitButton = document.querySelector('.submit-btn button')
    submitButton.style.background = 'white';
    submitButton.style.color = 'hsl(25, 97%, 53%)';
}

function revertSubmit() {
    const submitButton = document.querySelector('.submit-btn button')
    submitButton.style.background = 'hsl(25, 97%, 53%)';
    submitButton.style.color = 'white';
}

function submitRating() {
    const ratingBox = document.getElementById('rating-box');
    const selectedRating = document.querySelector('[data-selected]').textContent;
    console.log(selectedRating);
    removeAllChildNodes(ratingBox);
    // const newText = document.createTextNode(' This is dynamically added text!');
    // ratingBox.appendChild(newText);

    const newRatingDiv = document.createElement('div')
    const newRatingText = document.createTextNode('You selected ' + selectedRating + ' out of 5');
    const newImg = document.createElement("img")
    newImg.src = "images/illustration-thank-you.svg";
    const newHead = document.createElement("h3");
    const newHeadText = document.createTextNode('Thank you!');
    const newPara = document.createElement("p");
    const newParaText = document.createTextNode('We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!');
    
    ratingBox.appendChild(newImg);
    
    ratingBox.appendChild(newRatingDiv);
    newRatingDiv.appendChild(newRatingText);
    
    ratingBox.appendChild(newHead);
    newHead.appendChild(newHeadText);
    
    ratingBox.appendChild(newPara);
    newPara.append(newParaText);
    
    newImg.style.display = 'block';
    newImg.style.margin = 'auto';
    newImg.style.marginTop = '5%';
    
    newHead.style.textAlign = 'center';
    
    newPara.style.textAlign = 'center';

    newRatingDiv.style.borderRadius = '15px';
    newRatingDiv.style.background = 'hsl(213, 20%, 22%)';
    newRatingDiv.style.textAlign = 'center';
    newRatingDiv.style.marginTop = '10%';
    newRatingDiv.style.height = '30px';
    newRatingDiv.style.width = '200px';
    newRatingDiv.style.paddingTop = '2%';
    newRatingDiv.style.marginLeft = '20%';
    newRatingDiv.style.color = 'hsl(25, 97%, 53%)';
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}