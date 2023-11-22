import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Input from "../Input/Input";

const NewsList = () => {
  const [news, setNews] = useState([]);
  //   const [search, setSearch] = useState("pakistan");
  //   const [finalsearch, setFinalSearch] = useState("");
  const NewsData = async () => {
    const url = `https://news-api14.p.rapidapi.com/search?q=pakistan&language=en&pageSize=10`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "76415a1239mshb3e3bab58411229p19f3b9jsn74ccfe6763a9",
        "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setNews(result.articles);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    NewsData();
  }, []);

  return (
    <>
      <Input />
      {news?.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </>
  );
};

export default NewsList;
