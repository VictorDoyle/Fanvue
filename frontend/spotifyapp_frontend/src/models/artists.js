/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/artists/'




class ArtistModel {

    static allArtists = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
              
          },
     
        }).then(res => res.json())
        .catch( error => console.log(error))
      }

      static createArtist = (data) => {
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

     /*  static editArtist = (data) => {
        return fetch(`${API}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(data)
     
        }).then(res => res.json())
        .catch( error => console.log(error))
      } */

     











}

export default ArtistModel