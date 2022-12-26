import './App.css';
import ClockWork from './components/container/clock_work';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import GreetingFunction from './components/pure/greetingFunction';
import GreetingStyled from './components/pure/greetingStyled';

const App = () => {
  return (
    <div className='App'>
      {/*<Greeting name="Agus"></Greeting>*/}
      {/*<GreetingFunction name="Agus"></GreetingFunction>*/}
      <TaskListComponent></TaskListComponent>
      <GreetingStyled name = "Agustin"></GreetingStyled>
      <ClockWork></ClockWork>
    </div>
  )
}

export default App;
