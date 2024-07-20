import { useState } from 'react';
import NewsApi from './NewsApi';
import NewsCard from './NewsCard';
import NewsHeader from './NewsHeader';


const NewsList = () => {
  const [articles, setArticles] = useState([]);

  const handleDataFetched = (fetchedArticles) => {
    setArticles(fetchedArticles);
  };

  return (
    <div>
      <NewsHeader />
        <NewsApi onDataFetched={handleDataFetched} />
        <div>
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
    </div>
  );
};

export default NewsList;