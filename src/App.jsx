import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './views/misc/Error';
import Home from './views/Home';
import Schedule from './views/Schedule';
import Profile from './views/Profile';

const App = () => {
  return (
    <Router>
      <div>
        {/* Define your routes within Routes */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="sobremim" element={<Profile />} />
            <Route path="horario" element={<Schedule />} />
            <Route path="precos" element={<Error />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
