import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

export default function Home() {
  return <><Navbar/><main><Hero/><About/><TechStack/><Experience/><Projects/><Contact/></main><Footer/></>;
}
