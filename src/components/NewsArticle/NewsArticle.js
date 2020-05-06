import React from 'react';
import './NewsArticle.css';

const NewsArticle = (article) => {
  return (
    <section>
      <img src={ article.article.img } alt="descriptive picture of article"/>
      <h2>{ article.article.headline }</h2>
      <p>{ article.article.description }</p>
      <a href={ article.article.url }>Read Full Article</a>
    </section>
  )
}

export default NewsArticle;
