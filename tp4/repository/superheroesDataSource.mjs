// repository/superheroesDataSource.mjs

//Este archivo define una abstraccion que otras clases de persistencia deben implementar
export default class SuperheroesDataSource {
  //Metodo abstracto para obtener todos los superheroes
  obtenerTodos() {
    throw new Error('Este metodo debe ser implementado por la subclase');
  }
}
