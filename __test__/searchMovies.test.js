import searchMovies from '../src/searchMovies';

describe('testing searchMovies function', () => {

  test('by title', () =>
    expect(searchMovies.byTitle('animeshmovie')).toMatchSnapshot())

  test('is case insensitive', () => {
    expect(searchMovies.byTitle('Animeshmovie').length).toBe(1);
    expect(searchMovies.byTitle('animeshmovie').length).toBe(1);
  })

  test('sequencial search', () =>
    ['a', 'alien', 'alien 3'].forEach((query) =>
      expect(searchMovies.byTitle(query)).toMatchSnapshot()
    )
  )
})
