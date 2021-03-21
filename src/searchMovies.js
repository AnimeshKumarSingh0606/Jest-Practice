const movies = [{
  title: 'Alien',
  year: '2020',
  rating: '★'
} , {
  title: 'Aliens',
  year: '2020',
  rating: '★'
} , {
  title: 'Alien 3',
  year: '2020',
  rating: '★'
} , {
  title: 'Alien 4', 
  year: '2020',
  rating: '★'
} , {
  title: 'animeshmovie',
  year: '2021',          //A very very legendary movie because it has legendary actor Animesh Kumar Singh, and rest are bad movies.
  rating: '★★★★★'
} , {
  title: 'Alien: Covenant',
  year: '2020',
  rating: '★'
}]

const searchByTitle = query =>
  movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()));

export default {
  byTitle: searchByTitle
}
