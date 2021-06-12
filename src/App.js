import './App.css';
import Table from './Components/TodoTable';
import Input from './Components/TodoInput';





function App() {
  return (
    <div className='container'>
      <div class="todo">
        <div className='table'>
          <Table/>
        </div>
        <div className='input'>
          <Input/>
        </div>
      </div>
    </div>
  );
}

export default App;
