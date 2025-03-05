import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 120px;
  margin: 0;
`;

export const SelectLabel = styled.p`
  margin-bottom: 7px;
`

export const SelectHeaber = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin-bottom: 3px;
  padding: 10px 10px;
  font-size: 16px;
  border-radius: 5px; 
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer; 

  svg {
    transform:  ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 300ms ease;
  }
`;

export const SelectOption = styled.div`
  width: 88px;
  padding: 15px 15px;
  border-radius: 5px; 
  border: 1px solid #ccc;
`

export const SelectItem = styled.button`
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer; 

  &:last-child {
    margin-bottom: 0;
  }
`