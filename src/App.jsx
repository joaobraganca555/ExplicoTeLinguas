import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Error from './views/misc/Error';
import Layout from './layout/Layout';
import Schedule from './views/Schedule';
import Profile from './views/Profile';
import PriceList from './views/PriceList';
import NotFound from './views/misc/NotFound';
import Form from './views/Form';

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
          <Route path="formulario" element={<Form />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
