import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './styles/global.css';
import Loader from './components/Loader';

//Page Routes
const Recipes = lazy(() => import('./pages/Recipes'));
const Recipe = lazy(() => import('./pages/SingleRecipe'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Recipes />} />
            <Route path='/:slug' element={<Recipe />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
