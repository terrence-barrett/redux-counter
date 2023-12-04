import './App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className='app-heading'>COUNTER APP</h1>
      <div className='btn-div'>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
      <h1 className='app-count'>{count}</h1>
    </div>
  );
}

export default App;
