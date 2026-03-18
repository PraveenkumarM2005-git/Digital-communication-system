import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <ProtectedRoute>
      <Navbar />
      <Dashboard />
      <Chat />
    </ProtectedRoute>
  );
}

export default App;