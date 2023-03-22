import Navbar from './Nav';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title="welcome to my app";
  // const likes = 50;
  // const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/blogs/:id" element={<BlogDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
