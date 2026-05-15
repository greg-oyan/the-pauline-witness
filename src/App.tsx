import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Letters from './pages/Letters'
import Letter from './pages/Letter'
import Teaching from './pages/Teaching'
import ThemeDetail from './pages/ThemeDetail'
import HowWeKnow from './pages/HowWeKnow'
import Distortions from './pages/Distortions'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="letters" element={<Letters />} />
        <Route path="letters/:id" element={<Letter />} />

        <Route path="teaching" element={<Teaching />} />
        <Route path="teaching/:id" element={<ThemeDetail />} />

        <Route path="how-we-know" element={<HowWeKnow />} />
        <Route path="distortions" element={<Distortions />} />

        <Route path="search" element={<Search />} />

        {/* Legacy redirects from the original reference structure */}
        <Route path="corpus" element={<Navigate to="/letters" replace />} />
        <Route path="themes" element={<Navigate to="/teaching" replace />} />
        <Route path="themes/:id" element={<RedirectThemes />} />
        <Route path="lab" element={<Navigate to="/how-we-know" replace />} />
        <Route path="caricatures" element={<Navigate to="/distortions" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function RedirectThemes() {
  const id = window.location.hash.match(/themes\/([^/?#]+)/)?.[1]
  return <Navigate to={id ? `/teaching/${id}` : '/teaching'} replace />
}
