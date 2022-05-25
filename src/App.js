import logo from './logo.svg';
import './App.css';
import CommitsPage from './views/CommitsPage';

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
