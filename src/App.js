import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import Customer from './Components/Customer/Customer';
import BasicModal from './Components/CustomerModal/Modal';
import ModalState from './Context/ModalState';
import UserState from './Context/UserContext/UserState';

function App() {
  return (
    <UserState>
    <ModalState>
    <div className='App'>
      <Sidebar />
      <div className='app-r'>
        <TopNavbar />
        <Customer />
      </div>
    </div>
    <BasicModal />
    </ModalState>
    </UserState>
  );
}

export default App;
