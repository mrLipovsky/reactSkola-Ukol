import './App.css';
import Film from './components/Film';
import allMovies from './components/data'

function App() {
  return (
    <div className="movie-section">
      <Film movieImage={allMovies[0].image} movieTitle={allMovies[0].title} movieAge={allMovies[0].age} movieTags={allMovies[0].tags} movieDescription={allMovies[0].description}/>
      <Film movieImage={allMovies[1].image} movieTitle={allMovies[1].title} movieAge={allMovies[1].age} movieTags={allMovies[1].tags} movieDescription={allMovies[1].description}/>
      <Film movieImage={allMovies[2].image} movieTitle={allMovies[2].title} movieAge={allMovies[2].age} movieTags={allMovies[2].tags} movieDescription={allMovies[2].description}/>
      <Film movieImage={allMovies[3].image} movieTitle={allMovies[3].title} movieAge={allMovies[3].age} movieTags={allMovies[3].tags} movieDescription={allMovies[3].description}/>
    </div>
  );
}

export default App;
