import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTask from "./Components/AddTask";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/LoginGroup/Login'
import Register from './Components/LoginGroup/Register'
import PrivateRoute from './Components/Shared/PrivateRoute'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        }></Route>
        <Route path="/addTask" element={
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<AddTask></AddTask>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
