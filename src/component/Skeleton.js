import React from 'react';
import { Tr, Td, SkeletonDiv } from '../styles/TableStyles';

export default function Skeletion({ perPage }) {
  return (
    <>
      {Array.from({ length: perPage }).map((_, index) => (
        <Tr key={index}>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
          <Td><SkeletonDiv /></Td>
        </Tr>
      ))}
    </>
  );
}
