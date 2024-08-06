import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Auth/Login";
import Reg from "./pages/Auth/Reg";
function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reg" element={<Reg />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
