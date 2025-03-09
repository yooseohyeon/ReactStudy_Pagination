import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [AllLectures, setAllLectures] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [FilterOperationType, setFilterOperationType] = useState({
    온라인: true,
    오프라인: true,
  });
  const [isSortedByLatest, SetIsSortedByLatest] = useState(true);
  const [isSortedByPeopleCount, SetIsSortedByPeopleCount] = useState(false);
  const [isSortedByInstitutionName, SetIsSortedByInstitutionName] = useState(false);
  const [showPagination, setShowPagination] = useState(false); // Pagination 렌더링 지연을 위한 상태 추가

  const loadData = async (page) => {
    try {
      setLoading(true);
      const result = await fetchData(page, 2000);  

      const finalData = result.data.slice(1);

      const filteredLectures = finalData.filter(item =>
        Object.values(item).some(value => value !== null) 
      );

      setAllLectures(filteredLectures);
      setTotalItems(filteredLectures.length);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);

      setTimeout(() => {
        setShowPagination(true);
      }, 10);
    }
  };
  
  useEffect(() => {
    loadData();
  }, []); 

  useEffect(() => {
    let filteredLectures = AllLectures.filter(lecture => {
      return (
        (FilterOperationType.온라인 && lecture.운영형태 === "온라인") ||
        (FilterOperationType.오프라인 && lecture.운영형태 === "오프라인")
      );
    });
  
    if (isSortedByLatest) {
      filteredLectures.sort((a, b) => {
        const dateA = new Date(a.강좌시작일);
        const dateB = new Date(b.강좌시작일);
        return dateB - dateA;
      });
    }

    if (isSortedByPeopleCount) {
      filteredLectures = filteredLectures.sort((a, b) => {
        const peopleCountA = (a["수강인원(남성)"]|| 0) + (a["수강인원(여성)"] || 0);
        const peopleCountB = (b["수강인원(남성)"]|| 0) + (b["수강인원(여성)"] || 0);
        return peopleCountB - peopleCountA;
      });
    }
  
    if (isSortedByInstitutionName) {
      filteredLectures = filteredLectures.sort((a, b) => {
        const nameA = a.기관명;
        const nameB = b.기관명;
        return nameA.localeCompare(nameB, 'ko');
      });
    }

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    setLectures(filteredLectures.slice(startIndex, endIndex));
    setTotalItems(filteredLectures.length);
  }, [currentPage, perPage, AllLectures, FilterOperationType, isSortedByLatest, isSortedByPeopleCount, isSortedByInstitutionName]);
  
  return (
    <DataContext.Provider
      value={{
        lectures,
        loading,
        error,
        totalItems,
        currentPage,
        setCurrentPage,
        perPage,
        setPerPage,
        FilterOperationType,
        setFilterOperationType,
        isSortedByLatest,
        SetIsSortedByLatest,
        isSortedByPeopleCount,
        SetIsSortedByPeopleCount,
        isSortedByInstitutionName,
        SetIsSortedByInstitutionName,
        showPagination,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
