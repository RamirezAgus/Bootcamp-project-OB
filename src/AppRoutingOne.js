import { useEffect } from 'react';

import { Link, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/profilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/tasksDetailPage';
import LoginPage from './pages/auth/LoginPage';

const AppRoutingOne = () => {

  let logged = false;


  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Your first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Your second task'
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
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={
            logged ?
            (<Navigate to='/'/>) 
            :
            (<LoginPage/>)
          }>
          </Route>
          <Route path='/not-found' element={<NotFoundPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/profile' element={
            logged ?
          (<ProfilePage/>)
          :
          (<Navigate to='/login' replace={true}/>)
          }>
          </Route>
          <Route path='/tasks' element={<TasksPage/>}></Route>
          <Route 
            path='/task/:id' 
            render= {
              ({match}) => (<TasksDetailPage task={taskList[match.params.id-1]}/>)
            }
            >

            </Route>
        </Routes>
      </main>
    </div>
  )
}

export default AppRoutingOne;
