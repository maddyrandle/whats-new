import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ({ articles }) => {
  return (
    articles.map(article => {
      return (
        <article>
          <NewsArticle
            key = { article.id }
            headline = { article.headline }
            img = { article.img }
            description = { article.description }
            url = { article.url }
          />
        </article>
      )
    })
  )
}

export default NewsContainer;
