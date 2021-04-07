let searchInput = document.querySelector('#search-input');
let sliderElement = document.querySelector('.slider');
let api_base_url = 'http://www.omdbapi.com/?t';

let xhr = new XMLHttpRequest();

searchInput.addEventListener('keyup', () => {
  let searchInputValue = searchInput.value;
  xhr.open(
    'GET',
    api_base_url + searchInputValue + process.env.OMDB_API_KEY,
    true
  );
  xhr.onload = () => {
    let data = JSON.parse(this.responseText);
    console.log(data);
  };
  xhr.send();
});
