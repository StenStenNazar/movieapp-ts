 const MoviesBaseURL = 'https://api.themoviedb.org/3'
 const imageURL = 'https://image.tmdb.org/t/p/w400'
 const imageUrlOriginal = 'https://image.tmdb.org/t/p/original'

const discover ='/discover/movie?'
const urls ={
    movieWithGenre:'with_genres=',
    page:`${discover}language=uk&page=`,
    allGenres:'/genre/movie/list',
    moviesGenre:`${discover}with_genres=`,
    moviesSearch:`/search/movie?query=`,
    movieVideos:`movie/`
}

export {
    urls,
    MoviesBaseURL,
    imageURL,
    imageUrlOriginal
}