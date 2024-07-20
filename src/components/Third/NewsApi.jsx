import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsApi = ({ onDataFetched }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY2}`
        );
        onDataFetched(response.data.articles);
      } catch (error) {
        // console.error("에러 내용:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataFetched]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생 : {error.message}</p>;

  return null;
};

export default NewsApi;