import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface TutorialStepProps {
  addText?: string | ReactNode;
  title: string;
  text: string | ReactNode;
  img: string;
  reverse?: boolean;
}

const StepContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  padding: 2rem 7rem;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  background-color: ${({ reverse }) => (reverse ? "#f0f0f0" : "#ffffff")};
  gap: 1rem;
  position: relative;
`;

const StepImage = styled.img`
  width: 60%;
`;

const StepText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const AdditionalText = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`;

const AdditionalTextContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 1rem;
`;

const StepTitle = styled.h3`
  color: #ff5633;
  font-weight: 600;
  margin-top: 0;
`;

const TutorialStep: React.FC<TutorialStepProps> = ({
  title,
  text,
  img,
  addText,
  reverse,
}) => {
  return (
    <StepContainer reverse={reverse}>
      <StepImage src={img} alt="" />
      <div>
        <AdditionalTextContainer>
          <AdditionalText>{addText}</AdditionalText>
        </AdditionalTextContainer>
        <div>
          <StepTitle>{title}</StepTitle>
          <StepText>{text}</StepText>
        </div>
      </div>
    </StepContainer>
  );
};

export default TutorialStep;
