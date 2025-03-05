import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext'
import LectureItem from './LectureItem';
import Skeletion from './Skeleton';
import { Table, TheadTr, Th } from '../styles/TableStyles';

export default function LectureList() {
  const { lectures, loading, error, perPage } = useContext(DataContext);

  return (
    <Table>
      <thead>
        <TheadTr>
          <Th scope="col">기관명</Th>
          <Th scope="col">강좌명</Th>
          <Th scope="col">강좌시작일</Th>
          <Th scope="col">강좌종료일</Th>
          <Th scope="col">결제금액</Th>
          <Th scope="col">운영형태</Th>
          <Th scope="col">인원</Th>
        </TheadTr>
      </thead>
      <tbody>
        {loading ? (
          <Skeletion perPage={perPage} />
        ) : error ? (
          <tr>
            <td colSpan="7">오류 발생: {error}</td>
          </tr>
        ) : (
          lectures.map((lecture, index) => (
            <LectureItem key={index} lecture={lecture} />
          )))}
      </tbody>
    </Table>
  )
}