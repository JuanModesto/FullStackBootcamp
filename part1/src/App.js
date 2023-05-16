import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'

const App = () => {
  return (
    <>
      <Mensaje message='Estamos trabajando' color='red'/>
      <Mensaje message='en un curso' color='green'/>
      <Mensaje message='de React' color='yellow'/>

    </>
  );
}

export default App;
