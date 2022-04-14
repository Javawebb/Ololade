import { Routes, Route, useNavigate} from 'react-router-dom';
import { useCustomContext } from './Context/UserContext';
import { Auth } from './Pages/Auth';
import { Tasks } from './Pages/Tasks';
import { useEffect } from 'react';

function App() {
  const {user} = useCustomContext()
  const navigate = useNavigate()
  useEffect(() =>{
    if(!user.name){
      navigate('/')
    }else{
      navigate('/tasks')
    }
  }, [])
    

  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth/>}/>
        <Route path="tasks" element={<Tasks/>}/>
      </Routes>
    </div>
  );
}

export default App;
