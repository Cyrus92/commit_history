import logo from './logo.svg';
import './App.css';
import CommitsPage from './views/CommitsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App container">
      <div className="col-md-12 " >
        <h3 className='app_title'>Github Repos Commit History</h3>
      </div>
      <CommitsPage />       
    </div>
  );
}

export default App;
