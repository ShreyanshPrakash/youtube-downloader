import styled from "styled-components";


export const SearchSectionWrapper = styled.div`
margin-bottom: 24px;
.search-section {
  margin: auto;
  padding: 24px 0px;
  display: flex;

  .search-container {
    border: 4px solid ${({ theme }) => theme?.colors?.greenLight};
    padding: 24px;
    margin: auto;

    display: flex;
    align-items: flex-start;
  }

  .helper-text {
    margin: 1px 8px;
    font-size: 12px;
    color: red;
    min-height: 14px;
  }
}
`;