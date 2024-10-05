import styled from "@emotion/styled";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string | undefined;
  target?: string;
  disabled?: boolean;
}

const StyledLink = styled.a<PrimaryButtonProps>`
  background-color: #ff5633;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #a52c24;
  }

  &:focus {
    background-color: #a52c24;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  target,
  disabled,
}) => {
  return (
    <StyledLink href={disabled ? undefined : href} target={target} disabled={disabled}>
      {children}
    </StyledLink>
  );
};

export default PrimaryButton;