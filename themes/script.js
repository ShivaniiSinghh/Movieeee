let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = './theme/light.css';
    } else if (theme == 'sky') {
        document.getElementById('switcher-id').href = './themes/pink.css';
    } else if (theme == 'pink') {
        document.getElementById('switcher-id').href = './themes/sky.css';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = './themes/dark.css';
    } else if (theme == 'green') {
        document.getElementById('switcher-id').href = './themes/green.css';
    }
    localStorage.setItem('style', theme);
}

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

// load movies from API
async function loadMovies(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if (data.Response == "True") displayMovieList(data.Search);
}

function findMovies() {
    let searchTerm = (movieSearchBox.value).trim();
    if (searchTerm.length > 0) {
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}