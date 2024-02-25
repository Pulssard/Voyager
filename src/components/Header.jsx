import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from "react";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Main from './Main';
import ProductsPage from "./ProductsPage";
import News from "./News";
import Chart from './Chart';
import Settings from './Settings';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import planets,{ constellations, galaxies, stars } from './planets';
import ProductCard from './ProductCard';
import Faq from "./Faq";

function Header() {
  const [cartProducts, setCartProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [quantity, setQuantity] = useState();
  const [isAdded, setIsAdded] = useState(false);

 function handleSearchChange(event){
  console.log(event);
  const value = event.target.value;
  if(value.length > 0 ){
    setSearchInput(value);
  }
 }

  function handleSearchClick(e){ 
    setSearchItem("");
    const allProducts = [...planets, ...constellations, ...stars, ...galaxies];
    const searchedProduct = allProducts.filter(product => product.title.toLowerCase() === searchInput.toLowerCase());
    if(searchedProduct.length > 0){
      setSearchItem(searchedProduct);  
    } 
 }


  function handleEnter(e){
    if(e.key=== "Enter"){
      e.preventDefault();
      handleSearchClick(e);
    }
  }

  function addProducts(props){
   const exists = cartProducts.some(product => product.id === props.id);
    
    if (!exists) {
        // If the product doesn't exist, add it to the cartProducts array
        setCartProducts(prevValue => {
            return [...prevValue, props];
        });
        setIsAdded(true);//show the message that the product has been added to cart      
        setTimeout(() => {
          setIsAdded(false);
        },3000);
  }}



  function changeAmount(props){
    setQuantity(props);
    console.log(quantity);
  }


  function deleteItem(id){
    const updatedProducts = cartProducts.filter(item => item.id !== id);
    setCartProducts(updatedProducts);   
}

  return (
    <BrowserRouter forceRefresh={true}>
    <Navbar expand="lg" className="bg-body-tertiary mb-4 header-background">
      <Container fluid >
        <Navbar.Brand  as={Link} to="/" style={{color:"white"}}>Voyager <SatelliteAltIcon /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white"}}/>
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            
          >
            <Nav.Link as={Link}  to="/products" style={{color:"white"}} >Products</Nav.Link>
            <Nav.Link as={Link} to="/news" style={{color:"white"}}>News</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown" >
              <NavDropdown.Item as={Link} to="/faq">F.A.Q</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/chart" style={{color:"white"}}>
              <div className="cart-header"><ShoppingBagOutlinedIcon/>{cartProducts.length > 0 && <div className='cart-label'>{cartProducts.length}</div>}</div>
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onKeyDown={handleEnter}  >
            <Form.Control
              onChange={handleSearchChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button as={Link} to={"/searchproduct"} onClick={handleSearchClick} type="submit" variant="dark" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {isAdded && <div className='pop-up'>Product has been added to cart!</div>}
    <Routes>
      <Route path="/products" element={<ProductsPage addProducts={addProducts} />} />
      <Route path="/" element={<Main addProducts={addProducts}  />} />
      <Route path="/news" element={<News />} />
      <Route path="chart" element={<Chart deleteItem={deleteItem} products={cartProducts} changeAmount={changeAmount} quantity={quantity || 1}/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/searchproduct" element={searchItem.length > 0 ? (
        <div className="mainFlex">
    <ProductCard 
      title={searchItem[0].title} 
      text={searchItem[0].text} 
      price={searchItem[0].price} 
      status={searchItem[0].status} 
      addProducts={() => addProducts(searchItem[0])}
    />
    </div>
  ) : <div className="search-flex"><img className="not-found" src="https://astrobites.org/wp-content/uploads/2022/06/Galaxy-KK-246-is-isolated-in-a-cosmic-void.png" alt="cosmic void" /><p>There is no such product in our list, please try another one...</p></div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default Header;
