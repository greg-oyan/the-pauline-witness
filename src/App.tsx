import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Corpus from './pages/Corpus'
import Letter from './pages/Letter'
import Themes from './pages/Themes'
import ThemeDetail from './pages/ThemeDetail'
import Lab from './pages/Lab'
import Caricatures from './pages/Caricatures'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="corpus" element={<Corpus />} />
        <Route path="letters/:id" element={<Letter />} />
        <Route path="themes" element={<Themes />} />
        <Route path="themes/:id" element={<ThemeDetail />} />
        <Route path="lab" element={<Lab />} />
        <Route path="caricatures" element={<Caricatures />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
