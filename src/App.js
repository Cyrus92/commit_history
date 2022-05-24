import logo from './logo.svg';
import './App.css';
import ProjectSwitcher from './component/ProjectSwitcher';

function App() {
  return (
    <div className="App container">
      <div className="col-md-12 " >
        <h3 className='app_title'>Github Repos Commit History</h3>
      </div>
      <ProjectSwitcher />       
    </div>
  );
}

export default App;
