import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons/';
import { faCheckSquare, faWallet } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './components/navigation bar/Navigation Bar';

function App() {

  library.add(faEthereum, faCheckSquare, faWallet );

  return (
    <NavigationBar />
  );
}

export default App;
