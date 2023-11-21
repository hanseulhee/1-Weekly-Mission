import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  content: string;
  link: string;
}

function Button({ content, link }: Props) {
  return (
    <StyledWrapper>
      <StyledText to={link}>{content}</StyledText>
    </StyledWrapper>
  );
}

export default Button;

const StyledWrapper = styled.div`
  display: flex;
  width: 9rem;
  padding: 1.15rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;

const StyledText = styled(Link)`
  color: ${({ theme }) => theme.color.gray};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
