import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/Routing';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ErrorToast, successToast } from './Plugins/Toast/Toast';
function App() {
  // successToast('hi hello')
  // ErrorToast('error message')
  return (
    <>
    <ToastContainer/>
   <Routing/>

    </>
  );
}

export default App;
