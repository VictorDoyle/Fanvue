/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/genres/'



class GenreModel {

    static allGenres = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
       /*  'Authorization': JWT */
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }











}

export default GenreModel