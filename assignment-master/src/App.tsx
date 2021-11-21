
import './App.scss';
import Order from './components/order/Order';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Order />
    <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
