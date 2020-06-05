// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(headerObj) {
    let {date, temp} = headerObj;

    //create each element needed
    let headerDiv = document.createElement('div');
    let dateSpan = document.createElement('span');
    let title = document.createElement('h1');
    let tempSpan = document.createElement('span');

    //add classes to each element 
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //add content to each element
    dateSpan.textContent = date;
    title.textContent = 'Lambda Times';
    tempSpan.textContent = temp;

    //appends each element onto each other appropiately
    let elements = [dateSpan, title, tempSpan];

    elements.forEach(item => headerDiv.appendChild(item));

    return headerDiv;
}

//gets the header-contianer
let headerContainer = document.querySelector('.header-container');
let newHeader = Header({date: 'June 5, 2020', temp: '85*'});
headerContainer.appendChild(newHeader);
