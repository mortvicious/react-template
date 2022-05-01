import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Test from "./Test";
  
  const Routing = () => {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Test/>}/>
        </Routes>
      </Router>
    )
  }
  

export default Routing