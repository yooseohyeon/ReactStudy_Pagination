import React from 'react';
import { Tr, Td } from '../styles/TableStyles';

export default function LectureItem({ lecture }) {
  return(
    <Tr>
      <Td>{lecture.기관명}</Td>
      <Td>{lecture.강좌명}</Td>
      <Td>{lecture.강좌시작일}</Td>
      <Td>{lecture.강좌종료일}</Td>
      <Td>{lecture["결제금액(원)"]}</Td>
      <Td>{lecture.운영형태}</Td>
      <Td>{(lecture["수강인원(남성)"]|| 0) + (lecture["수강인원(여성)"] || 0)}</Td>
    </Tr>
  )
}