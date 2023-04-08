
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';
import Delete from './components/Delete';


function App() {

  return (
    <BrowserRouter>
    <nav className='menubar'>
      <Link to='/'><Button >View</Button></Link>
      <Link to='create'><Button variant='secondary'>Create</Button></Link>
      <Link to='update'><Button variant='success'>Update</Button></Link>
      <Link to='delete'><Button variant='danger'>Delete</Button></Link>
    </nav>
    <Routes>
    <Route path='create' element={<Create></Create>}></Route>
    <Route path='update' element={<Update></Update>}></Route>
    <Route path='/' element={<View></View>}></Route>
    <Route path='delete' element={<Delete></Delete>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
