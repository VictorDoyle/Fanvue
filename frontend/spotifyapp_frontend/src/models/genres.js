/* API call to Django Backend */
const API = 'http://localhost:8000/api/genres/'


class GenreModel {

    static allGenres = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        }).then(res => res.json())
       
        
        .catch( error => console.log(error))
    }

    static createGenre = (data) => {
      return fetch(`${API}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
   
      }).then(res => res.json())
      .catch( error => console.log(error))
    }

    static deleteGenre = (data) => {
      return fetch(`${API}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
   
      }).then(res => res.json())
      .catch( error => console.log(error))
    }

      











}

export default GenreModel