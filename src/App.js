import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkEx from './components/WorkEx';

function App() {
  return (
    <div className="main">
      <PersonalInfo />
      <Education />
      <WorkEx />
    </div>
  );
}

export default App;
