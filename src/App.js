
import './App.css';
import AddTask from './Main-code/AddTask';
import TaskList from './Main-code/TaskList'
import UpdateTask from './Main-code/updateTask';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Button from './component/Button';

function App() {
  return (
    <>
 
 <BrowserRouter>
 <Routes>
<Route path="/" element={<TaskList/> } ></Route>
<Route path="/task" element={<AddTask/> } ></Route>
<Route path="/task/:id" element={<UpdateTask /> } ></Route>


 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
