/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/albums/'



class AlbumModel {

    static allAlbums = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
           /* add token dynamically here */
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }





}

export default AlbumModel