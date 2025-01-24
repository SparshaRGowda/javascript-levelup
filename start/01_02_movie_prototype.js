// Write your code here
function Movie(title, director, genre, releaseYear, rating){
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function(){
  return`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
}

const mov = new Movie("hum", "sam", "romance", 1997, 4.5);
console.log(mov);
console.log(mov.getOverview());