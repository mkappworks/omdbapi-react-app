import styled from "styled-components";

export const Pagination = styled.div`
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-item {
    padding: 10px;
    color: #0064c8;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
  }

  .page-item.active {
    color: #ffffff;
    background-color: #0064c8;
  }

  .page-item.disabled {
    color: #696767;
  }
`;
