import "./App.css";
import ClockWork from "./components/container/clock_work";
import Father from "./components/container/father";
import TaskListComponent from "./components/container/task_list";
import AsyncExample from "./components/pure/asyncExample";
import AxiosCrudExample from "./components/pure/axiosCrudExample";
import AxiosExample from "./components/pure/axiosExample";
import FetchExamples from "./components/pure/fetchExamples";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import Greeting from "./components/pure/greeting";
import GreetingFunction from "./components/pure/greetingFunction";
import GreetingStyled from "./components/pure/greetingStyled";
import ObservableExample from "./components/pure/observableExample";
import OptionalRender from "./components/pure/optionalRender";

import Updater from "./components/sw/Updater";

const App = () => {
  const version = "app-v3-Front";
  return (
    <div className="App">
      <h1>Version {version}</h1>
      {/*<Greeting name="Agus"></Greeting>*/}
      {/*<GreetingFunction name="Agus"></GreetingFunction>*/}
      {/*Ejemplos de renderizado condicional */}
      {/*<OptionalRender />*/}
      {/*<TaskListComponent></TaskListComponent>*/}
      {/*Ejemplo de formulario en Formik y Yup*/}
      {/*<LoginFormik/>*/}
      {/* <RegisterFormik/>*/}
      {/*<GreetingStyled name = "Agustin"></GreetingStyled>*/}
      {/*Gestion de Eventos */}
      {/*<Father></Father>*/}
      {/*<ClockWork></ClockWork>*/}
      {/*Ejemplos de Asincronia */}
      {/*<AsyncExample/>*/}
      {/*<ObservableExample/>*/}
      {/*<FetchExamples/>*/}
      {/*<AxiosExample/>*/}
      <AxiosCrudExample />
      <Updater />
    </div>
  );
};

export default App;
