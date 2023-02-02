import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router';
import "animate.css/animate.min.css";
function App() {
  return (
    <div className=" max-w-screen-2xl mx-auto"
    >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
