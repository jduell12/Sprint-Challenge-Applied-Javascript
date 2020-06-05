// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//get data from https://lambda-times-backend.herokuapp.com/topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        let tabsData = response.data.topics;
        
        tabsData.forEach(item => {
            //creates new tab for DOM
            let tab = document.createElement('div');

            //adds class to tab
            tab.classList.add('tab');

            tab.textContent = item;

            //gets the div.topics element 
            let container = document.querySelector('div.topics');
            container.appendChild(tab);
        })
    })


