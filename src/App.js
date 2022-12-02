import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/login';
import Signup from './component/signup';

import Privaterouteauser from './util/privaterouteadminlogin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          //user path
          <Route element={<Privaterouteauser/>}>

            <Route exact path='/' element={<Home/>}/>

            </Route>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
