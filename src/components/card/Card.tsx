import { NO_CARD_IMAGE } from "constants/common";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formatDate from "utils/formatDate";
import formatPeriod from "utils/formatPeriod";

function Card({ url, description, imageSource, createdAt }: FolderLinks) {
  return (
    <Link to={url} target="_blank">
      <StyledWrapper>
        <StyledCardImgWrapper>
          <StyledCardImg
            src={imageSource ? imageSource : NO_CARD_IMAGE}
            alt="cardImg"
          />
        </StyledCardImgWrapper>
        <StyledContentWrapper>
          <StyledTime>{formatPeriod(createdAt)}</StyledTime>
          <StyledDescription>{description}</StyledDescription>
          <span>{formatDate(createdAt)}</span>
        </StyledContentWrapper>
      </StyledWrapper>
    </Link>
  );
}

export default Card;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
  border-radius: 0.9375rem;
  color: black;
  overflow: hidden;
  font-weight: 400;
`;

const StyledCardImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  :hover {
    transform: scale(1.3);
    transition: 0.2s;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  height: 13rem;
  padding: 1.5rem 1rem;
  gap: 10px;
`;

const StyledTime = styled.span`
  color: #666666;
  line-height: 17px;
`;

const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  line-height: 24px;
`;
