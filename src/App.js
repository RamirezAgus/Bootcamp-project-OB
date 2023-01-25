import './App.css';
import ClockWork from './components/container/clock_work';
import Father from './components/container/father';
import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import Greeting from './components/pure/greeting';
import GreetingFunction from './components/pure/greetingFunction';
import GreetingStyled from './components/pure/greetingStyled';
import OptionalRender from './components/pure/optionalRender';

const App = () => {
  return (
    <div className='App'>
      {/*<Greeting name="Agus"></Greeting>*/}
      {/*<GreetingFunction name="Agus"></GreetingFunction>*/}
      {/*Ejemplos de renderizado condicional */}
      {/*<OptionalRender />*/}
      {/*<TaskListComponent></TaskListComponent>*/}
      {/*Ejemplo de formulario en Formik y Yup*/}
      {/*<LoginFormik/>*/}
      <RegisterFormik/>
      {/*<GreetingStyled name = "Agustin"></GreetingStyled>*/}
      {/*Gestion de Eventos */}
      {/*<Father></Father>*/}
      {/*<ClockWork></ClockWork>*/}
    </div>
  )
}

export default App;
