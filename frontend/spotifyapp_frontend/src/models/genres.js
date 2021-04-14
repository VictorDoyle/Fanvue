/* API call to Django Backend */
const API = 'http://localhost:8000/api/genres/'



class GenreModel {

    static allGenres = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }











}

export default GenreModel