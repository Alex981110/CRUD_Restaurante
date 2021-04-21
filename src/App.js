import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CrearPlatillo from './components/crearPlatillo/CrearPlatillo';
import EditarPlatillo from './components/editarPlatillo/EditarPlatillo';
import ListaPlatillos from './components/listaPlatillos/ListaPlatillos';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={ListaPlatillos} />
          <Route exact path="/crearPlatillo" component={CrearPlatillo} />
          <Route exact path="/editarPlatillo" component={EditarPlatillo} />
        </Switch>
      </Router>
    </main>
  )
}

export default App