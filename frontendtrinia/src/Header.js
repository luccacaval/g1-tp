import React from 'react';

const clear_content = () => {
  let content = document.getElementById('content');
  content.remove();
}

const Header = props => {
  const all = [
    {
      'name': 'Avengers',
      'id': 'Pelicula',
    },
    {
      'name': 'Breaking bad',
      'id': 'Serie',
    },
    {
      'name': 'Inglorious Basterds',
      'id': 'Pelicula',
    },
  ];
  const movie = () => {
    let movies = [];
    for(let i = 0; i < all.length; i++) {
      if(all[i].id == 'Pelicula') {
        movies.push(all[i]);
      }
    }
    clear_content();
    let content = document.getElementById('content')
    for (let movie of movies) {
      console.log(movie);
      let div = document.createElement('div')
      for (let elem in movie) {
        console.log(movie);
        let a = movie[elem];
        div.append(a);
        div.append(' ');
      }
      content.append(div)
    }

  }

  const serie = () => {
    let series = [];
    for(let i = 0; i < all.length; i++) {
      if(all[i].id == 'Serie') {
        series.push(all[i]);
      }
    }
    clear_content();
    let content = document.getElementById('content');
    for (let serie of series) {
      console.log(serie);
      let div = document.createElement('div')
      for (let elem in serie) {
        console.log(serie);
        let a = serie[elem];
        div.append(a);
        div.append(' ');
      }
      div.classList.add()
      content.append(div)
    }

  };
  return (
    <nav className="justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
      <h1>Soy un titulo</h1>
    </nav>
  );
};

export default Header;
