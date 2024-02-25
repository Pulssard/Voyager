import React,{useState,useEffect} from "react";
import planets,{constellations, stars, galaxies} from "./planets";
import ProductCard from "./ProductCard";
import ProdPgFilter from "./ProdPgFilter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import Pagination from 'react-bootstrap/Pagination';

function ProductsPage(props){
    const [sortBy, setSortBy] = useState(null);
    const [showProducts, setShowProducts] = useState([]);
    const [page,setPage] = useState(1);
    const itemsPerPage = 6;
    let items = [];

    const changePage = (event) => {
        const page = parseInt(event.target.innerText);
        setPage(page);
    };

    let sortedProducts = [...showProducts];
    function filterProducts(filter) {
        setPage(1); //when this function is triggered(to filter the products, the page will be change to 1, so the active page, by default would be the first one)
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

    const pages = Math.ceil(sortedProducts.length / itemsPerPage);

   
        
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item onClick={changePage} key={number} active={number === page}>
                {number}
            </Pagination.Item>
        );
    }


    const firstIndex = (itemsPerPage * page) - itemsPerPage;
    const lastIndex = (itemsPerPage * page);
    const slicedProducts = sortedProducts.slice(firstIndex, lastIndex);


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
            { slicedProducts.map( product => (
            <ProductCard   addProducts={() => props.addProducts(product)} key={product.id} price={product.price} title={product.title} text={product.text} status={product.status}/>
            ))}
            </div>
        </Col>
        <div className="pagination" >
            {items.length > 1 && <Pagination size="lg">{items}</Pagination>} 
        </div>
        </Row>
      ); 
}

export default ProductsPage;