/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/albums/'



class AlbumModel {

    static allAlbums = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }

      static createAlbum = (data) => {
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

      /* todo: 
        static allAlbumsByArtist = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }
      
      
      */


}

export default AlbumModel