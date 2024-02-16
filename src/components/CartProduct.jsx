import React,{ useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ClearIcon from '@mui/icons-material/Clear';

function CartProduct(props){
    const [amount, setAmount] = useState(props.quantity || 1);
    console.log(props.quantity)
    function handleChange(event){
        const newValue = event.target.value;
        if (/^\d+$/.test(newValue) && parseInt(newValue) > 0) {
            if(amount !== newValue){
                setAmount(newValue)
                props.changeAmount(newValue, props.id);
            }     
        }
                
    }
 
    return (
        <div>
        <div className="cart-container container">
        <ClearIcon className="clear-icon" onClick={() => props.deleteItem(props.id)}/>
            <img className="cartImg" src={"static/" + props.title + ".jpg"} alt={props.title}/> 
            <div className="priceFlex">
            <div className="cart-title"><h3>{props.title}</h3></div>
            <FloatingLabel
                controlId="floatingInput"
                label="Set Amount"
                
            >
            <Form.Control className="inputCart" onChange={handleChange} value={amount} type="number" placeholder="Amount" />
            </FloatingLabel>
            </div>
            <div className="priceFlex">
            <div className="cart-text"><h5>Price: {props.price }$</h5></div>
            <div className="cart-text"><h4>Total: {(parseFloat(amount) * parseFloat(props.price)) || props.price}$</h4></div>  
            </div>
        </div>
        <br></br>
        </div>
    );
}

export default CartProduct;


