import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 3rem;
  color: #000;
  border: 2px solid #000;
  border-radius: 50px;
   width: 2rem; 
  height: 2rem; 
  cursor: pointer;
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
  transition: opacity 0.3s ease;

  &:hover {
    color: grey;
    border: 2px solid grey;
  }
`;

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setVisible(footerTop <= windowHeight);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} visible={visible}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default ScrollToTopButton;