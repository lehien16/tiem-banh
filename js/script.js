import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/login">Đăng nhập</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<User />} />
      </Routes>
    </Router>
  );
}