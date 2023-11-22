import React from "react";

const NewsCard = (props) => {
  const { article } = props;

  return (
    <div>
      <h2>{article.title}</h2>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <p>{article.published_date}</p>
    </div>
  );
};

export default NewsCard;
