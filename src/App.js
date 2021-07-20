import logo from './logo.svg';
import './App.css';
import { Navbar  } from './Component/Navbar';
import { Slider  } from './Component/Slider';
import {Addcackedetails} from './Component/Add_cake_details'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Addcackedetails></Addcackedetails>
      </>
  );
}

export default App;
