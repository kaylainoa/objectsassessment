const movies = [
    {
      name: "Titanic",
      year: 1997,
      director: "James Cameron",
      picture: "https://www.imdb.com/title/tt0120338/mediaviewer/rm2647458304/?ref_=tt_ov_i"
    },
    {
      name: "Level 16",
      year: 2018,
      director: "Danishka Esterhazy",
      picture: "https://www.imdb.com/title/tt4006302/mediaviewer/rm781937408/?ref_=tt_ov_i  "
    },
    {
      name: "Autopsy of Jane Doe",
      year: 2016,
      director: "André Øvredal",
      picture: "https://www.imdb.com/title/tt3289956/mediaviewer/rm2330868480/?ref_=tt_ov_i"
    }
  ];
  
  const movieList = document.getElementById("movieList");
  const movieItems = movies.map(movie => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = movie.picture;
    img.alt = `${movie.name} poster`;
    const text = document.createTextNode(`${movie.name} (${movie.year}), directed by ${movie.director}`);
    li.appendChild(img);
    li.appendChild(text);
    return li;
  });
  movieItems.forEach(movieItem => {
    movieList.appendChild(movieItem);
  });
  