import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {

  const navigate = useNavigate();

  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  // we should implement user registration
  // before that we use static profile data
  // we also will use redux and subscribe all our pages to the global store
  const [profile, setProfile] = useState({
    "id": "AlSharp85",
    "userAvatar": "https://pbs.twimg.com/profile_images/1231999572899172359/5UAx3GP__400x400.jpg"
  });

  return (
    <div className="App">
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={to => navigate(to)}
        appearance={{
          layout: {
            socialButtonsPlacement: 'bottom',
          }
        }}
      >
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout profile={profile} />}>
            <Route path="home" element={<Home />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="*" element={<Profile />} />
          </Route>
        </Routes>
      </ClerkProvider>
    </div>
  );
}

export default App;
