import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" w-80 bg-primaryLight dark:bg-primaryDark font-inter rounded-xl overflow-hidden ">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
