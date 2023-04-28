import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Times from './pages/Times';

function App() {
 const [user, setUser] = useState();

  return (
    <div className="body-wrapper">
      {user ? <Times user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
