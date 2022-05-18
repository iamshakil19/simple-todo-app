import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTask from "./Components/AddTask";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/addTask" element={<AddTask></AddTask>}></Route>
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
