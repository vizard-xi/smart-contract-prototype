import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons/';
import { faCheckSquare, faWallet } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './components/navigation bar/Navigation Bar';
import Content from './components/content/Content';

function App() {

  library.add(faEthereum, faCheckSquare, faWallet );

  return (
    <><NavigationBar /><Content /></>
  );
}

export default App;
