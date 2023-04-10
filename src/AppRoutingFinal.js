import { Link, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/auth/LoginPage';

const AppRoutingFinal = () => {

  //TO DO: Change the value from sessionStorage (or something dinamic)
  let loggin = true;

  return (
    <div>
      
        <Routes>
          {/*Redirections to protect our routes */}
          <Route exact path='/' element= 
          {
            loggin ? 
            (<Navigate  to='/dashboard' replace />)
            :
            (<Navigate to='/login' replace />)
          }/>
          <Route exact path='/'/>
        {/*Login route */}
          <Route exact path='/login' element={<LoginPage/>}/>
        {/*Dashboard route */}
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/dashboard' element=
          {
            loggin ? 
            (<Navigate  to='/login' replace />)
            :
            (<Navigate to='/dashboard' replace />)
          }
           />
           <Route exact path='/not-found' element={<NotFoundPage/>}/>  
        </Routes>
      
    </div>
  )
}

export default AppRoutingFinal;
