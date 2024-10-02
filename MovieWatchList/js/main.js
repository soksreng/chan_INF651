const movielist = [];

// Function to render the movie list
function rendermovielist(filteredlist = movielist) {
    let movielisthtml = '';

    filteredlist.forEach((movieobject, i) => {
        const { movieName, category, rating, releaseDate } = movieobject;

        const html = `
        <li class="collection-item">
          <span class="movie-title">${movieName}</span>
          <span>(${category}, Rating: ${rating}, Release Date: ${releaseDate})</span>
          <button class="remove-btn" onclick="
            movielist.splice(${i}, 1);
            rendermovielist()">Remove</button>
        </li>
        `;
        movielisthtml += html;
    });

    document.getElementById("movie-list").innerHTML = movielisthtml;
}

// Function to add a movie
function addmovie() {
    const movieName = document.getElementById("movie-name").value.trim();
    const category = document.getElementById("movie-category").value;
    const rating = document.getElementById("movie-rating").value;
    const releaseDate = document.getElementById("movie-release-date").value;

    if (movieName && category && rating && releaseDate) {
        movielist.push({ movieName, category, rating: parseFloat(rating), releaseDate });
        clearInputs();
        rendermovielist();
    } else {
        alert("Please fill out all movie details");
    }
}

// Function to clear input fields
function clearInputs() {
    document.getElementById("movie-name").value = '';
    document.getElementById("movie-category").selectedIndex = 0; 
    document.getElementById("movie-rating").value = '';
    document.getElementById("movie-release-date").value = '';

    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
}


// Function to search movies
function searchMovies() {
    const searchInput = document.getElementById('search-movie').value.toLowerCase();
    const filteredlist = movielist.filter(movie => 
        movie.movieName.toLowerCase().includes(searchInput)
    );
    rendermovielist(filteredlist);
}

// Function to filter movies by category
function filterByCategory() {
    const selectedCategory = document.getElementById('category-filter').value;
    const filteredlist = selectedCategory 
        ? movielist.filter(movie => movie.category === selectedCategory)
        : movielist;
    rendermovielist(filteredlist);
}

// Function to sort movies
function sortMovies() {
    const sortOption = document.getElementById('sort-options').value;
    let sortedlist = [...movielist];

    if (sortOption === 'rating') {
        sortedlist.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'releaseDate') {
        sortedlist.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    rendermovielist(sortedlist);
}
