import { useEffect } from 'react';

import { Link, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/profilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/tasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/statePage';

const AppRoutingOne = () => {

  let logged = false;

  let taskList = [
    {
        id: 1,
        name: 'Task 1',
        description: 'My first Task'
    },
    {
        id: 1,
        name: 'Task 2',
        description: 'My second Task'
    }
]
  


  useEffect(() => {
    localStorage.getItem('credentials');
    console.log('User logged?', logged);
  },[]);

  return (
    <div>
      <aside>
        <Link to='/'>| HOME |</Link>
        <Link to='/about'>| ABOUT |</Link>
        <Link to='/faqs'>| FAQs |</Link>
        <Link to='/profile'>| PROFILE |</Link>
        <Link to='/task/1'>| Task 1 |</Link>
        <Link to='/task/2'>| Task 2 |</Link>
        <Link to='/not-found'>| No existing Route |</Link>
        <Link to='/tasks'>| To Do List |</Link>
        <Link to='/login'>| Login |</Link>
      </aside>
      <main>
        <Routes>
          <Route path='/' element={<HomePage logged={logged}/>}/>
          <Route path='/online-state' element={<StatePage/>}/>
          <Route path='/login' element={ logged ? <HomePage/> : <LoginPage/>}/>
          <Route path='/not-found' element={<NotFoundPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/profile' element={ logged ? <ProfilePage/> : <Navigate to='/login' replace/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
          <Route path='/task/:id' element={<TasksDetailPage task={taskList}/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default AppRoutingOne;
