// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');

//get information from https://lambda-times-backend.herokuapp.com/articles
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let articleTopics = response.data.articles;
        let articleKeys = Object.keys(articleTopics);
        let articleObj = []
        
        articleKeys.forEach(item => {
            articleTopics[item].forEach(article => {
                articleObj.push(article);
            })
        });
        return articleObj;
    })
    .then(artObj => {
        artObj.forEach(article => {
            let newCard = card(article);
            cardContainer.appendChild(newCard);
        })
    })
    .catch(err => console.log(err));

//article card component 
function card(articleObj){
    let {headline, authorPhoto, authorName} = articleObj;

    //creates needed elements
    let card = document.createElement('div');
    let Headline = document.createElement('div');
    let authorContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let author = document.createElement('span');

    //adds classes to each element
    card.classList.add('card');
    Headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //adds content to each element 
    Headline.textContent = headline;
    img.src = authorPhoto;
    author.textContent = `By ${authorName}`;

    //appends elements together appropiately
    imgContainer.appendChild(img);
    authorContainer.appendChild(imgContainer);
    authorContainer.appendChild(author);
    card.appendChild(Headline);
    card.appendChild(authorContainer);

    return card;
}