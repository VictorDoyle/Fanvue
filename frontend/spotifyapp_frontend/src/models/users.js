/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/users/'



/* =========== TEST ROUTE (checkall users on app)=========== */

class UserModel {

    static getUser = () => {
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

export default UserModel