import styled from "styled-components";

function NotFound() {
  return <StyledMsg>헉! 페이지를 찾을 수 없어요 😢</StyledMsg>;
}

export default NotFound;

const StyledMsg = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
