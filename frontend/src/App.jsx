import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {

  return (
    <>
      <nav><Navbar/></nav> 
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet/>
      </main>
      <footer><Footer/></footer>
    </>
  )
}

export default App


// mdalmamunit427


// used:

// https://swiperjs.com/  --> The Most Modern Mobile Touch Slider
// https://react-icons.github.io/react-icons/   ---> react-icons 
// https://reactrouter.com/en/main/start/tutorial   --> React-route
// https://tailwindcss.com/docs/guides/vite   ---> tailwind for styles
// https://www.react-hook-form.com/  --> form lib  
// https://redux-toolkit.js.org/introduction/getting-started -- state
// https://sweetalert2.github.io/#download   -- alert UI lib for show pop-up messages