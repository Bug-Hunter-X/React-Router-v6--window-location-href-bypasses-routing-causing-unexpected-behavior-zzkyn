import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {navigate('/about')}}>Go to About</button>
    </div>
  );
}

// About.js
export default function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}