import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState} from "react";


function ProdPgFilter(props) {
  const filters = [
    {
      id:0,
      text:"All Products"
    },
    {
      id: 1,
      text:"Planets"
    },
    {
      id: 2,
      text: "Constellations"
    },
    {
      id: 3,
      text: "Stars"
    },
    {
      id: 4,
      text: "Galaxies"
    }];

    function handleClick(event) {
      const {id} = event.target;
      const text = event.target.innerText.toLowerCase();
      setIsClicked(id);
      props.filterProducts(text);
    }
    const [isClicked, setIsClicked] = useState();
  
  return (
    <ListGroup as="ul">
    {filters.map(filter => (
      <ListGroup.Item as="li"  key={filter.id} id={filter.id} onClick={handleClick} active={parseInt(isClicked) === filter.id} >{filter.text} </ListGroup.Item>
    ))}  
    </ListGroup>
  );
}

export default ProdPgFilter;

