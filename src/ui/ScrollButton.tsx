import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


interface ScrollButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<ScrollButtonProps>`
  background-color: transparent;
  color: #000;
  padding: 0.3rem 0.6rem;
  border: 1.5px solid transparent;
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Outfit', sans-serif;
  position: relative;

 &:hover {
    // border: 1.5px solid #000;
    background-color: #D2D2D2;
  }

  &:focus {
   background-color: #D2D2D2;
  }

  &::after {
    content: '';
    display: block;
    width: 30%;
    height: 2px;
    background-color: #000;
    position: absolute;
    bottom: -5px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

const ScrollButton: React.FC<ScrollButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}<StyledArrowIcon icon={faArrowDown} />
    </StyledButton>
  );
};

export default ScrollButton;
