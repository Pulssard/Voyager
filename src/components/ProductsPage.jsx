import React,{useState,useEffect} from "react";
import planets,{constellations, stars, galaxies} from "./planets";
import ProductCard from "./ProductCard";
import ProdPgFilter from "./ProdPgFilter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';

function ProductsPage(props){
    const [sortBy, setSortBy] = useState(null);
    const [showProducts, setShowProducts] = useState([]);

    function filterProducts(filter) {
        switch (filter) {
            case "planets":
                setShowProducts([...planets]);
                break;
            case "constellations":
                setShowProducts([...constellations]);
                break;
            case "stars":
                setShowProducts([...stars]);
                break;
            case "galaxies":
                setShowProducts([...galaxies]);
                break;
            default:
                // Show all products if filter doesn't match any specific category
                setShowProducts([...planets, ...constellations, ...stars, ...galaxies]);
                break;
        }
        console.log(filter);
    }

    // Call filterProducts function with the appropriate filter value
    useEffect(() => {
        filterProducts(props.filter); // Assuming props.filter contains the filter value
    }, [props.filter]);
    


    const sortAsc = () => {
        setSortBy('asc');
    };

    const sortDesc = () => {
        setSortBy('desc');
    };

    //const sortedPlanets = [...showProducts];

    if (sortBy === 'asc') {
        showProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
        showProducts.sort((a, b) => b.price - a.price);
    }

    return(
        <Row>
        <Col   md={3}>
            <ProdPgFilter filterProducts={filterProducts}/>
        </Col>
        <Col md={9} >
            <DropdownButton className="m-3 mx-auto" id="dropdown-item-button" title="Sort By">
                <Dropdown.Item as="button" onClick={sortAsc}> Price <RocketOutlinedIcon /> </Dropdown.Item>
                <Dropdown.Item as="button" onClick={sortDesc}> Price <RocketOutlinedIcon id="rocket-down" /> </Dropdown.Item>
            </DropdownButton>
            <div className="productsCarousel ">
            { showProducts.map( product => (
            <ProductCard   addProducts={() => props.addProducts(product)} key={product.id} price={product.price} title={product.title} text={product.text} status={product.status}/>
            ))}
            </div>
        </Col>
        </Row>
      ); 
}

export default ProductsPage;