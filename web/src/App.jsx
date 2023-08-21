import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="notification" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="*" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
