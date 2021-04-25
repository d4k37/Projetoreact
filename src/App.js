
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import paginainicial from './components/pages/paginainicial'
import Servicos from './components/pages/Servicos';
import Produtos from './components/pages/Produtos';
import Login from './components/pages/Login';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={paginainicial}/>
        <Route path='/servicos' component={Servicos}/>
        <Route path='/produtos' component={Produtos}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
