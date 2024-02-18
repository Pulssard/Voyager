import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <Accordion className="container" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why celestial products?</Accordion.Header>
        <Accordion.Body>
        The celestial objects we offer aren't just products; they're windows into the boundless wonders of the cosmos. Each one encapsulates the magnificence and mystery of the universe, inviting us to explore and marvel at its grandeur.

Imagine holding a piece of stardust in your hand, a fragment born in the fiery heart of a distant star billions of years ago. Or gazing upon a replica of a nebula, where stars are born in breathtaking displays of color and light.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why should i buy? </Accordion.Header>
        <Accordion.Body>
          You have the chance to be among the first Cosmic Estate Investors, after a few millennia your investments will reach hundred of thousands of growth. Don't lose you chance! 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;