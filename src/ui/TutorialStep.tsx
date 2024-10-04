import React from 'react';
import styled from '@emotion/styled';

interface TutorialStepProps {
  text: string;
  img: string;
  reverse?: boolean;
}

const StepContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const StepImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`;

const StepText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const TutorialStep: React.FC<TutorialStepProps> = ({ text, img, reverse }) => {
  return (
    <StepContainer reverse={reverse}>
      <StepImage src={img} alt="" />
      <StepText>{text}</StepText>
    </StepContainer>
  );
};

export default TutorialStep;