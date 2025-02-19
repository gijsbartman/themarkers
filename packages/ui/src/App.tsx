import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">TheMarkers Dashboard</h1>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
