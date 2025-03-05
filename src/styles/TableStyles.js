import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding-bottom: 60px;
`;

export const TheadTr = styled.tr`
  border-bottom: 1px solid #353535;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #d3d3d3;
`;

const TableCell = styled.td`
  text-align: left;

  &:nth-child(1) {
    width: 170px;
  }

  &:nth-child(2) {
    width: 600px;
  }

  &:nth-child(3) {
    width: 110px;
  }

  &:nth-child(4) {
    width: 110px;
  }

  &:nth-child(5) {
    width: 100px;
  }
    
  &:nth-child(6) {
    width: 90px;
  }

  &:nth-child(7) {
    width: 50px;
  }
`;

export const Th = styled(TableCell).attrs({ as: 'th' })`
  padding: 15px;
  font-weight: 700;
`;

export const Td = styled(TableCell)`
  padding: 25px 15px;
`;


export const SkeletonDiv = styled.div`
  width: 30%;
  height: 10px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;