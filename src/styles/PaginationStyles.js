import styled from 'styled-components';


export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 30px 0 10px 0;
`;

export const PageItem = styled.li.attrs(({ $isActive }) => ({
  'data-active': $isActive,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 3px;
  font-size: 15px;
  border-radius: 7px; 
  color:  ${({ $isActive }) => ($isActive ? "#fff" : "inherit")};
  background-color: ${({ $isActive }) => ($isActive ? "#007BFF" : "#fff")};
  cursor: pointer; 

  &:hover {
    background-color: #F1F1F1;
  }
`; 

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 40px;
  font-size: 16px;
  border-radius: 7px; 
  background-color: #fff; 
  cursor: pointer; 

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: #F1F1F1;
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: #fff;
    }
  }
`;

export const PageJump = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 16px;

  div {
    color: #3f3f3f;
  }
  
  span {
    margin: 0 10px;
  }
`

export const PageJumpInput = styled.input`
  width: 54px;
  height: 40px;
  text-align: center;
  font-weight: 500;
  border-radius: 7px; 
  border: 1px solid #ccc;

  &:focus {
    border: 2px solid #000;
  }
`

export const PageJumpButton = styled.button`
  width: 50px;
  height: 36px;
  margin-left: 20px;
  font-size: 15px;
  border-radius: 7px; 
  border: 1px solid #dddddd;
  background-color: #fff;
  cursor: pointer; 

  &:hover {
    background-color:#dddddd;
  }
  
`;
