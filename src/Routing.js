import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import path from './routes'
import Home from './pages/Home/Home'
  
  const Routing = () => {
    return(
      <Router>
        <Routes>
          <Route exact path={path.HOME} element={<Home/>}/>
        </Routes>
      </Router>
    )
  }
  

export default Routing