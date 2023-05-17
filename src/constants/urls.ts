 const MoviesBaseURL = 'https://api.themoviedb.org/3'
 const imageURL = 'https://image.tmdb.org/t/p/w200'

const discover ='/discover/movie?'
export const urls ={
    page:`${discover}language=uk&page=`,
    genre:'/genre/movie/list',
    moviesGenre:`${discover}with_genres=`
}

export {
    MoviesBaseURL,
    imageURL
}