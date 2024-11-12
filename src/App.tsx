import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './routes/Home';
import Mixer from './routes/Mixer';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='mixer' element={<Mixer />} />
        {/* <Route path='mockup' element={<Mockup />} /> */}
      </Route>
    </Routes>
  )
};

export default App;
