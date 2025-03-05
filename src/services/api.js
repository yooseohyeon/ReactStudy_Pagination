const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchData = async (page, perPage) => {
  try {
    const url = new URL(apiUrl);
    url.searchParams.append("page", page);
    url.searchParams.append("perPage", perPage);
    url.searchParams.append("serviceKey", apiKey);

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류:", error);
    throw error;
  }
};


