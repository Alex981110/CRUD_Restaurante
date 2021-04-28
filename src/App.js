import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import CrearPlatillo from './components/crearPlatillo/CrearPlatillo';
import EditarPlatillo from './components/editarPlatillo/EditarPlatillo';
import ListaPlatillos from './components/listaPlatillos/ListaPlatillos';
import Mision from './components/mision/Mision';
import Promocion from './components/promo/Promocion';
import Vision from './components/vision/Vision';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/"><Redirect to = "/restaurante"></Redirect></Route>
          <Route exact path="/restaurante" component={ListaPlatillos} />
          <Route exact path="/restaurante/crearPlatillo" component={CrearPlatillo} />
          <Route exact path="/restaurante/editarPlatillo/:idPlatillo" component={EditarPlatillo} />
          <Route exact path="/restaurante/vision" component={Vision} />
          <Route exact path="/restaurante/mision" component={Mision} />
          <Route exact path="/restaurante/promocion" component={Promocion} />
        </Switch>
      </Router>
    </main>
  )
}

export default App