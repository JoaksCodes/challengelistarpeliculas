
class Pelicula {
    constructor(titulo, genero, año, sinopsis) {
      this.titulo = titulo;
      this.genero = genero;
      this.año = año;
      this.sinopsis = sinopsis;
    }
  }
  

  let peliculas = [
    new Pelicula('Pulp Fiction', 'Crimen', 1994, 'La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.'),
    new Pelicula('El señor de los anillos: El retorno del rey', 'Fantasía', 2003, 'Frodo y Sam, guiados por Gollum, siguen su peligrosa misión a través de Mordor para destruir el anillo.'),
    new Pelicula('La chica del dragón tatuado', 'Thriller', 2012 , 'Lisbeth Salander, una investigadora inusual, pero ingeniosa, se une a la búsqueda de la verdad de Blomkvist.'),
  ];
  
  function mostrarPeliculas(callback) {
    for (var i = 0; i < peliculas.length; i++) {
      callback(peliculas[i], i + 1);
    }
  }
  
  function mostrarDatosPelicula(pelicula, numero) {
    console.log('Película ' + numero + ":");
    console.log('Título: ' + pelicula.titulo);
    console.log('Género: ' + pelicula.genero);
    console.log('Año: ' + pelicula.año);
    console.log('Sinopsis:' + pelicula.sinopsis); 
  }

  mostrarPeliculas(mostrarDatosPelicula);