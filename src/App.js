import PointBonus from './components/PointBonus';
import EnteringPoints from './components/EnteringPoints';
import './App.css';

function App() {
  return (
    <article>
    <div>
      <EnteringPoints/>
      <div width="500px">
        <PointBonus/>
      </div>
    </div>
    </article>
  );
}

export default App;
