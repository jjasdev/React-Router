
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './views/NavBar';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <div className="container">
          <Outlet />
      </div>
    </Fragment>
  );
}

export default App;
