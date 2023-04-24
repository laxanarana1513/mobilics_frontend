import './App.css';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { NavLink } from "react-router-dom";
import Header from './components/Header';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

import Task5 from './pages/Task5';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';

function App() {


  let routes = (
    <Routes>
      <Route path='/task5' element={<Task5 />} />
      <Route path='/task4' element={<Task4 />} />
      <Route path='/task3' element={<Task3 />} />
      <Route path='/task2' element={<Task2 />} />
      <Route path='/task1' element={<Task1 />} />
      <Route path='/' />
    </Routes>
  )

  return (
    <div className="App">
      <Header />
      <div className="container-fluid" style={{ padding: '8px 28px' }}>
        <div className="d-flex section">
          <div className="btn-grp">
            <button type="button" class="btn btn-danger">
              <NavLink className="nav-link" to='/task1'>Task 1</NavLink>
            </button>
            <button type="button" class="btn btn-danger">
              <NavLink className="nav-link" to='/task2'>Task 2</NavLink>
            </button>
            <button type="button" class="btn btn-danger">
              <NavLink className="nav-link" to='/task3'>Task 3</NavLink>
            </button>
            <button type="button" class="btn btn-danger">
              <NavLink className="nav-link" to='/task4'>Task 4</NavLink>
            </button>
            <button type="button" class="btn btn-danger">
              <NavLink className="nav-link" to='/task5'>Task 5</NavLink>
            </button>
          </div>

          {routes}
        </div>
      </div>
    </div>
  );
}

export default App;
