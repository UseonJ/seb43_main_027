import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { type GamePagePostType, PageInfoType } from '../../types/dataTypes';

import PostItem from '../GameChannel/PostItem';

interface SearchContentsType {
  isSelectTab: '전체' | '게시글';
  searchContentsInfo: SearchContentsInfo;
}

export interface SearchContentsInfo {
  data: GamePagePostType[];
  pageInfo: PageInfoType;
}
interface SearchContentsWrapperType {
  isPreview: boolean;
}

const SearchContents = ({
  isSelectTab,
  searchContentsInfo
}: SearchContentsType) => {
  return (
    <StyledSearchContentsWrapper
      isPreview={isSelectTab === '전체' ? true : false}
    >
      {searchContentsInfo.data.length > 0 &&
      searchContentsInfo.data[0].postId > 0 ? (
        isSelectTab === '전체' ? (
          searchContentsInfo.data
            .slice(0, 5)
            .map((post, index) => (
              <PostItem
                key={index}
                postId={post.postId}
                userName={post.userName}
                title={post.title}
                views={post.views}
                postTag={post.postTag}
                commentCount={post.commentCount}
                likeCount={post.likeCount}
                createdAt={post.createdAt}
              />
            ))
        ) : (
          searchContentsInfo.data.map((post, index) => (
            <PostItem
              key={index}
              postId={post.postId}
              userName={post.userName}
              title={post.title}
              views={post.views}
              postTag={post.postTag}
              commentCount={post.commentCount}
              likeCount={post.likeCount}
              createdAt={post.createdAt}
            />
          ))
        )
      ) : (
        <StyledEmptyItem>검색 결과가 없습니다.</StyledEmptyItem>
      )}
    </StyledSearchContentsWrapper>
  );
};

export default SearchContents;

const StyledSearchContentsWrapper = styled.div<SearchContentsWrapperType>`
  display: flex;
  ${(p) =>
    p.isPreview
      ? 'flex-direction: column; height:30%; width:80%; '
      : 'flex-direction: column; height:80%; width:80%'};
`;

const StyledEmptyItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  font-size: 18px;
  font-weight: 700;
  color: var(--default-text-color);
`;
