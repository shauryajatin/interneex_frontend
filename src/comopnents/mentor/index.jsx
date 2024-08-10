import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
`;

const Card = styled.div`
  flex: 0 0 100%; /* One card at a time for small screens */
  height: 300px;
  margin: 10px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  color: #333;

  @media (min-width: 768px) { /* Adjusting for larger screens */
    flex: 0 0 33.333%; /* Each card takes up one-third of the container width */
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  z-index: 2; /* Ensure the buttons are above other elements */
  &:focus {
    outline: none;
  }
  &.left {
    left: 10px;
  }
  &.right {
    right: 10px;
  }
`;

const Mentor = () => {
  const [offset, setOffset] = useState(0);

  const cards = [
    'Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'
  ];

  const slideLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 100;
      return Math.min(newOffset, 0);
    });
  };

  const slideRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 100;
      const maxOffset = -(100 / 1) * (cards.length - 1); // Now set to slide up to the last card
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Button className="left" onClick={slideLeft}>&lt;</Button>
      <CarouselContainer>
        <CardContainer style={{ transform: `translateX(${offset}%)` }}>
          {cards.map((card, index) => (
            <Card key={index}>{card}</Card>
          ))}
        </CardContainer>
      </CarouselContainer>
      <Button className="right" onClick={slideRight}>&gt;</Button>
    </div>
  );
};

export default Mentor;
