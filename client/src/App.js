import './App.css';
import Navbar from './components/NavBar'
import AllUsers from './components/AllUsers'
import AddUsers from './components/AddUsers'
import EditUsers from './components/EditUsers'
import MernStack from './components/MernStack'
import NotFound from './components/NotFound'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (

    <>
    <div className="App">
    {/* <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/> */}
      <BrowserRouter>
      
     <Navbar/>  
     <Switch>
     <Route exact path = "/" component={MernStack}/> 
     <Route path = "/addusers" component={AddUsers}/>
     <Route path = "/allusers" component={AllUsers}/>
     <Route path = "/editusers/:id" component={EditUsers}/>
     <Route component={NotFound}/>
     </Switch>
     
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
