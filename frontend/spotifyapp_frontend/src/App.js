import { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import routes from './config/routes'


function App() {
  /* Find localStorage Token. if true user is logged in */
 /*  const [ mainState , setMainState] = useState({
    displayed_form: '',
    logged_in: localStorage.getItem('token') ? true : false,
    username: ''
  })


  useEffect( () => {
      if (mainState.logged_in) {
        fetch('http://localhost:8000/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(json => {
            setMainState({ username: json.username });
          });
          console.log(mainState, "test")
      }
    }
  )
 */


  return (
    <>
    <NavigationBar />
    {/* pages included in routes */}
    {routes}

    </>
  );
}

export default App;
