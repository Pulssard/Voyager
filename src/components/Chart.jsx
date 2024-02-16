import React, { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CartProduct from "./CartProduct";

 function Chart(props) {
    const [products, setProducts] = useState([...props.products]);
    const [isPromo, setIsPromo] = useState(false);
    const [promo,setPromo] = useState("");
    const [quantities, setQuantities] = useState(props.quantity);
    const [total, setTotal] = useState([]);


    function changeAmount(newAmount, productId) {
        setQuantities(prevQuantities => {
            // Update quantity for the given product id
            const updatedQuantities = { ...prevQuantities, [productId]: newAmount };
            // Call props.changeAmount with the updated quantities
            props.changeAmount(updatedQuantities);
            return updatedQuantities; // Return the updated quantities
        });
        console.log(quantities); // This will log the previous state, not the updated one
    }
        
    function deleteItem(id){//deletes the item from the cart,and the call the cangeAmount function in order to update the amoun and the price showed to the user
        const updatedProducts = products.filter(item => item.id !== id);
        setProducts(updatedProducts);
        props.deleteItem(id);
        changeAmount();
    }
         
    function handleChange(event){
        const promoInput = event.target.value;
        setPromo(promoInput);
    }
    function handleClick(){
        if (promo === "moon"){//ideally moon should be in an .env file, but as a pet project it's not crucial
            setIsPromo(true);//changin the isPromo to true if the promo applied in the promo input is the same as "moon"
        }
    }
    
    useEffect(() => {
        // Check for duplicate products
        const uniqueNewProducts = props.products.filter(newProduct => !products.some(existingProduct => existingProduct.id === newProduct.id));

        // Update the state with new unique products
        setProducts(prevProducts => [...prevProducts, ...uniqueNewProducts]);

        // Initialize quantities state with default values or quantities passed as props
        const initialQuantities = {};
        props.products.forEach(product => {
            initialQuantities[product.id] = props.quantity[product.id] || 1;
        });
        setQuantities(initialQuantities);
    }, [props.products])
    
    function totalPrice() {
        let totalPrice = 0;
        products.forEach(product => {
            const quantity = quantities[product.id] || 0; // Default to 0 if quantity not found
            totalPrice += product.price * quantity;
        });

        // Apply discount if promo is inserted
        if (isPromo) {
            totalPrice *= 0.85; // Applying 15% discount
        }

        // Add shipping cost
        totalPrice += 13;
        console.log("Total price calculated:", totalPrice);
        // Update the total state
        setTotal( totalPrice);
    }

    useEffect(() => {
        totalPrice();
    }, [quantities,isPromo]);//the totalPrice is called after first render, and every time one of the dependencies is changed

    return (
        <>
        <Row className="cart" >
        <h1 className="gradient-text">My Cart</h1>
        <Col >
            {products.length > 0 ? products.map((product) => ( 
                <CartProduct changeAmount={changeAmount} deleteItem={deleteItem}  quantity={props.quantity[product.id]} key={product.id} id={product.id} title={product.title}  price={product.price}/>
            )) : <img className="cart-img" src="https://astrobites.org/wp-content/uploads/2022/06/Galaxy-KK-246-is-isolated-in-a-cosmic-void.png" alt="cosmic void" />}
        </Col>
        <Col  md={4}>
        <InputGroup  onChange={handleChange} >
        <Form.Control
        className="mr-1"
          placeholder="Promo code is: moon"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button onClick={handleClick}  variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
      <hr></hr>
            <p>Shipping cost: <p className="floatRight">{products.length > 0 && "13$"}</p></p>
            <p>Discount: <p className="floatRight" style={!isPromo ? {display: "none"} : {}}>15%</p></p>
            <hr></hr>
            <h2>TOTAL:{products.length >0 && parseFloat(total).toFixed(2) + "$"}</h2> 
            <Button variant="warning">Checkout</Button>
        </Col>
        </Row>
        </>
    );
}

export default Chart;