import styled from "styled-components";

function SearchBar() {
  return (
    <StyledWrapper>
      <StyledSearchImg src="assets/images/search.svg" alt="reading_glasses" />
      <StyledInput type="text" placeholder="링크를 검색해 보세요." />
    </StyledWrapper>
  );
}

export default SearchBar;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray};
  width: 100%;
  padding: 1.7rem;
  border-radius: 1rem;
  font-weight: 400;
`;

const StyledSearchImg = styled.img`
  width: 1.5rem;
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.2rem;
  font-size: 1.4rem;
`;
