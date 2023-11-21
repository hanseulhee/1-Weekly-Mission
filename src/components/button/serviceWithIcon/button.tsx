import styled from "styled-components";

interface Props {
  img: string;
  title: string;
}

function Button({ img, title }: Props) {
  return (
    <StyledWrapper>
      <img src={img} alt={title} />
      <span>{title}</span>
    </StyledWrapper>
  );
}

export default Button;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  color: rgb(149, 156, 169);
  font-size: 1.2rem;
`;
