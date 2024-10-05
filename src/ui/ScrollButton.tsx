import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: transparent;
  color: #000;
  padding: 0.3rem 0.6rem;
  border: 1.5px solid transparent;
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Outfit', sans-serif;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 30%;
    height: 2px;
    background-color: #000;
    position: absolute;
    bottom: -5px; 
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.1), #000, rgba(0, 0, 0, 0.1));
  }
`;

const StyledArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

const ScrollButton: React.FC<ScrollButtonProps> = ({
  children,
  targetId,
  onClick,
  disabled,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {children}<StyledArrowIcon icon={faArrowDown} />
    </StyledButton>
  );
};

export default ScrollButton;