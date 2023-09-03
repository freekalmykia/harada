import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';

function App() {

  // we should implement user registration
  // before that we use static profile data
  // we also will use redux and subscribe all our pages to the global store
  const [profile, setProfile] = useState({
    "id": "AlSharp85",
    "userAvatar": "https://pbs.twimg.com/profile_images/1231999572899172359/5UAx3GP__400x400.jpg"
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout profile={profile} />}>
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
