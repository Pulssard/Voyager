import React from "react";
import ProductCard from "./ProductCard";
import planets,{constellations, stars, galaxies} from "./planets";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1600, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const products = [...planets,...constellations,...galaxies,...stars];
function SaleCarousel(props) {
  
  return (

    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2500} infinite={true}>
    {products.filter((planet) => planet.status === "sale")
      .map(planet => (<ProductCard className="saleCard"  addProducts={() => props.addProducts(planet)} key={planet.id} price={planet.price} title={planet.title} text={planet.text} status={planet.status} path={planet.path} />
    ))}
    </Carousel>

  ); 
}

export default SaleCarousel;
