import {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from 'react-router-dom'


//Pages Import
import GuestPage from './pages/GuestPage';
import ListData from './Components/ListData';
import Inc from './Components/Inc';
import Todo from './pages/Todo';
import Css from './pages/Css';
import ArrayData from './pages/arrayData';
import ObjectData from './pages/objectData';
import FrameworkCSS from './pages/frameworkCss';
import { render } from '@testing-library/react';
// import PrivatePage from './pages/PrivatePage';


function App(){
  return(
    <Router>
      <div >
        <nav>
          <ul style={{display: "flex", flexDirection: "row"}}>
              <li style={{marginRight:"50px"}}>
                  <Link to="/">Home</Link>
              </li>
              <li style={{marginRight:"50px"}}>
                  <Link to="/ArrayData">List Data</Link>
              </li>
              <li style={{marginRight:"50px"}}>
                  <Link to="/todo">Todo</Link>
              </li>
              <li style={{marginRight:"50px"}}>
                  <Link to="/css">CSS</Link>
              </li>
              <li style={{marginRight:"50px"}}>
                  <Link to="/inc">Increment</Link>
              </li>
          </ul>
        </nav>

      <Switch>
        <PrivateRoute path="/ArrayData">
          <ArrayData />
        </PrivateRoute>

        <PrivateRoute path="/todo">
          <Todo />
        </PrivateRoute>

        <PrivateRoute path="/css">
          <Css />
        </PrivateRoute>

        <PrivateRoute path="/inc">
          <Inc />
        </PrivateRoute>

        <PrivateRoute path="/objectData">
          <ObjectData />
        </PrivateRoute>

        <Route path="/" component={GuestPage}/>

        {/* <Route path="/login">
          <Login />
        </Route> */}

      </Switch>

      </div>
    </Router>
  )
}


// function App(){
//   const [isLoggedIn] = useState(true)
//   return(
//     <div>
//       {
//         isLoggedIn ? < PrivatePage/> : <GuestPage />
//       }
//     </div>
//   )
// }

const fakeAuth = {
  isAuthenticate : false,
  Authenticated(cb) {
    fakeAuth.isAuthenticate = true;
    setTimeout(cb, 50);
  },

  signOut(cb){
    fakeAuth.isAuthenticate = false;
    setTimeout(cb, 50);
  }
}

function PrivateRoute({ children, ...rest }) {
  return(
    <Route
      {...rest}
      render={({location}) => 
        fakeAuth.isAuthenticate ? (
          children
        ) : (<Redirect to={{pathname: "/Login", state: { from:location }}}/>)} />
  )
}


export default App