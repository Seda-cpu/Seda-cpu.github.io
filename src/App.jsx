import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";




function App() {

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="text-titleBlack dark:text-softGray">
          <Routes>
            <Route path="/" element={<MainLayout> <Home/> </MainLayout>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
