import UserInform from "components/profile/UserInform";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <StyledWrapper>
      <Link to="/">
        <img src="assets/images/logo.png" alt="logo" />
      </Link>
      <UserInform />
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  top: 0;
  background-color: ${({ theme }) => theme.color.blueBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0 160px;
  z-index: 1;

  @media (max-width: 1199px) and (min-width: 375px) {
    padding: 0 2rem;
  }
`;
