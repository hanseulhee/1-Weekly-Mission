import Button from "components/button/serviceWithIcon/button";
import styled from "styled-components";

function ButtonList() {
  return (
    <StyledWrapper>
      <Button img="assets/images/share.svg" title="공유" />
      <Button img="assets/images/pen.svg" title="이름 변경" />
      <Button img="assets/images/delete.svg" title="삭제" />
    </StyledWrapper>
  );
}

export default ButtonList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  color: rgb(149, 156, 169);
  font-size: 1.2rem;
`;
