import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface TutorialStepProps {
  title: string;
  text: string | ReactNode;
  img: string;
  reverse?: boolean;
}

const StepContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 2rem 7rem;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  background-color: ${({ reverse }) => (reverse ? '#f0f0f0' : '#ffffff')}; 
  gap: 1rem;
`;

const StepImage = styled.img`
  width: 60%;
`;

const StepText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const StepTitle = styled.h3`
  color: #FF5633;
  font-weight: 600;
  margin-top: 0;
`;

const TutorialStep: React.FC<TutorialStepProps> = ({ title, text, img, reverse }) => {
  return (
    <StepContainer reverse={reverse}>
      <StepImage src={img} alt="" />
      <div>
        <StepTitle>{title}</StepTitle>
        <StepText>{text}</StepText>
      </div>
    </StepContainer>
  );
};

export default TutorialStep;