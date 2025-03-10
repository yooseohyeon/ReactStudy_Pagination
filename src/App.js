import React from 'react';
import { DataProvider } from '../src/context/DataContext';
import GlobalStyle from './styles/GlobalStyle';
import LectureList from './component/LectureList';
import PerPageSelect from './component/PerPageSelect';
import SortSelect from './component/SortSelect';
import Pagination from './component/Pagination';
import styled from 'styled-components';

const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: auto;
  margin-bottom: 10px;
`;

export default function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <h1>강좌 목록</h1>
      <SelectContainer>
        <PerPageSelect />
        <SortSelect />
      </SelectContainer>
      <LectureList />
      <Pagination />
    </DataProvider>
  );
}
