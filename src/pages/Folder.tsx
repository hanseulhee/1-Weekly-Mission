import { useQuery } from "@tanstack/react-query";

import AddLinkBar from "components/link/AddLinkBar";
import SearchBar from "components/search/SearchBar";
import { getUserFolderList } from "libs/apis/folder";
import { useState } from "react";
import styled from "styled-components";

function Folder() {
  const { data } = useQuery<UserFolder[]>({
    queryKey: ["folder"],
    queryFn: getUserFolderList,
  });

  const [isAllFolder, setIsAllFolder] = useState<boolean>(false);
  const [folderById, setFolderById] = useState<number>(0);

  // const handleFolderList = (e: MouseEvent<HTMLButtonElement>) => {
  //   setContent(e.currentTarget.innerText);
  // };

  const handleFolderById = (id: number) => {
    setFolderById(id);
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderInWrapper>
          <AddLinkBar />
        </StyledHeaderInWrapper>
      </StyledHeader>
      <StyledItemWrapper>
        <StyledItemInWrapper>
          <SearchBar />
          {/* <div className={styles.categoryWrapper}>
            <button
              className={
                content === "전체"
                  ? `${styles.selectEachCategoryWrapper}`
                  : `${styles.eachCategoryWrapper}`
              }
              onClick={(e) => {
                handleFolderList(e);
              }}
            >
              <span className={`${styles.content}`}>전체</span>
            </button>

            <button
              className={
                content === data?.name
                  ? `${styles.selectEachCategoryWrapper}`
                  : `${styles.eachCategoryWrapper}`
              }
              key={data?.id}
              onClick={(e) => {
                handleFolderById(data?.id);
                handleFolderList(e);
              }}
            >
              <span className={`${styles.content}`}>{`${data?.name}`}</span>
            </button>
          </div>
          <div className={styles.cardTitleWrapper}>
            <span className={styles.cardTitle}>{content}</span>
          </div>
          {content === "전체" ? (
            <div className={styles.buttonListWrapper}>
              <ButtonList />
            </div>
          ) : (
            ""
          )}
          <StyledItemWrapper>
            <StyledItemInWrapper className={styles.cardListWrapper}>
              {/* {정보가 없을 경우 ? (
                <span className={styles.content}>저장된 링크가 없습니다</span>
              ) : (
                <LinkCardList folderId={folderById} />
              )} */}
          {/* {content === "전체" ? (
                <>
                  <LinkCardListAll />
                </>
              ) : (
                <LinkCardList folderId={folderById} />
              )} */}
          {/* </div>
          </div>  */}
        </StyledItemInWrapper>
      </StyledItemWrapper>
    </StyledWrapper>
  );
}

export default Folder;

const StyledWrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 16rem;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blueBackgroud};
  min-height: 17rem;
  padding-bottom: 4.5rem;
`;

const StyledHeaderInWrapper = styled.div`
  width: 63%;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  min-height: 100%;
  padding: 3.5rem 16rem;

  @media (max-width: 1199px) and (min-width: 375px) {
    padding: 3.5rem 3.2rem;
  }
`;

const StyledItemInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 89%;
  gap: 4rem;
`;

const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.3rem;
`;

const StyledCardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StyledEachCategoryWrapper = styled.div`
  padding: 0.5rem 0.8rem;
  width: auto;
  border-radius: 0.5rem;
  background-color: white;
  border: 1px solid rgba(109, 106, 254, 1);
`;

const StyledSelectEachCategory = styled.div`
  padding: 0.5rem 0.8rem;
  width: auto;
  border-radius: 0.5rem;
  color: white;
  background-color: var(--primary);
  border: 1px solid rgba(109, 106, 254, 1);
`;

const StyledContent = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledCardTitleWrapper = styled.div`
  width: 100%;
`;

const StyledCardTitle = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const StyledButtonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;
