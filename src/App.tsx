import { Helmet } from "react-helmet-async"
import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Nav from "./components/Nav"


function App() {
  const description = "Blind Mango Bar is a vibrant and inclusive bar located in the heart of Gothenburg, Sweden. We offer a unique experience where guests can enjoy delicious food and drinks in a welcoming atmosphere. Our menu features a variety of dishes, including vegan and vegetarian options, as well as a selection of cocktails and beverages. Whether you're looking for a place to relax with friends or celebrate a special occasion, Blind Mango Bar is the perfect destination for an unforgettable night out."

  return (
    <>
    <Helmet>
      <title>Blind Mango Bar</title>
      <meta name="description" content={description} />
  
    </Helmet>
      <Nav></Nav>
      <Hero></Hero>
      <About/>
      <Menu />
      <Footer mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.4013367959824!2d11.952525712862352!3d57.69265104082776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff7723ff75f29%3A0xc3971739e81f68!2sBlind%20Mango%20Bar!5e0!3m2!1sen!2sbd!4v1792575644876!5m2!1sen!2sbd"></Footer>
            
    </>
  )
}

export default App
