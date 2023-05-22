import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './styles/global.css';

//Page Routes
const Recipes = lazy(() => import('./pages/Recipes'));
const Recipe = lazy(() => import('./pages/SingleRecipe'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<p>loading..</p>}>
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
