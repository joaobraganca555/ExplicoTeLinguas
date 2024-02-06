import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Error from './views/misc/Error';
import Layout from './views/Layout';
import Schedule from './views/Schedule';
import Profile from './views/Profile';
import PriceList from './views/PriceList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect from the base URL to /#/sobremim */}
          <Route index element={<Navigate replace to="/sobremim" />} />
          <Route path="sobremim" element={<Profile />} />
          <Route path="horario" element={<Schedule />} />
          <Route path="precos" element={<PriceList />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
