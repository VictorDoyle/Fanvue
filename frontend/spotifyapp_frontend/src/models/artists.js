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











}

export default ArtistModel