import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import PATH from './routes'
import Home from '../pages/Home/Home'
  
  const Routing = () => {
    return(
      <Router>
        <Routes>
          <Route exact path={PATH.HOME} element={<Home/>}/>
        </Routes>
      </Router>
    )
  }
  

export default Routing