import React from 'react';
import './NewsArticle.css';

const NewsArticle = (article) => {
  return (
    <section className="news-article">
      <img src={ article.img } alt=""/>
      <h2>{ article.headline }</h2>
      <p>{ article.description }</p>
      <a href={ article.url }>Read Full Article</a>
    </section>
  )
}

export default NewsArticle;
