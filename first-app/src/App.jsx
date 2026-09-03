import About from "./Components/About";
import Contact from "./Components/Contact";
import Homeclass from "./Components/Homeclass";
import Aboutclass from "./Components/Aboutclass";
import Home from "./Home";
// Fuctional component 
function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates omnis voluptatem, temporibus maxime aliquam non nesciunt ducimus itaque minus, sed mollitia
        dolore quae modi optio error dignissimos ea, minima sapiente.</p>
      <Home />
      <About />
      <Contact />
      <Homeclass />
      <Aboutclass />
      <h3>-Thank you</h3>
    </>
  )
}

export default App;