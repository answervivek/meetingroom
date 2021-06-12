import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { RoomBooking, BasicRoom, QuickStandupRoom, MultimediaRoom } from './pages/roombooking';
import BookingHistory from './pages/bookinghistory';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/roombooking' exact component={RoomBooking} />
        <Route path='/roombooking/basicroom' exact component={BasicRoom} />
        <Route path='/roombooking/quickstanduproom' exact component={QuickStandupRoom} />
        <Route path='/roombooking/multimediaroom' exact component={MultimediaRoom} />
        <Route path='/bookinghistory' exact component={BookingHistory} />
      </Switch>
    </Router>
  );
}

export default App;
