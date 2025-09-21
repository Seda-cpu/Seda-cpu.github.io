import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";





function App() {

  return (
    <Router>
      <div className="bg-background dark:bg-darkGray min-h-screen">
        <div className="p-8 text-titleBlack dark:text-softGray">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
