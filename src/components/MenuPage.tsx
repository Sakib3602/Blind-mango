import Nav from "./Nav";

import Menu from "./Menu";

import Footer from "./Footer";
import PageHero from "./PageHero";
// import Delivery from "./Delevery";
import imgx from "../assets/menu-blind-mango-bar.image.WhatsApp-Image-2024-11-05-at-18.21.32_d5cdd66b_upscayl_5x_ultrasharp.Woblo.png"

export default function MenuPage() {
  return (
    <>
      <Nav menuHref="/menu" />
      <PageHero imageSrc={imgx} />
      <Menu />
      {/* <Delivery
        foodoraHref="https://www.foodora.se/restaurant/mpru/the-blind-mango"
        uberEatsHref="https://www.ubereats.com/se-en/store/blind-mango-bar/IZ7EoSXKT0GIYQPGKrEOQg?srsltid=AfmBOopBfvBTKTe_snEd-X7cnzWDFht3rzdp1p8nplTbi-JNLz8YI2qw"
        woltHref="https://wolt.com/en/swe/goteborg/restaurant/blind-mango-bar"
      /> */}
      <Footer />
    </>
  );
}