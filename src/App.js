import { Routes, Route, useNavigate} from 'react-router-dom';
import { useCustomContext } from './Context/UserContext';
import { Auth } from './Pages/Auth';
import { Tasks } from './Pages/Tasks';
import { useEffect } from 'react';
import { Result } from './Pages/Result';

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
        <Route path={"/tasks"} element={<Tasks/>}/>
        <Route path={"/result"} element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
