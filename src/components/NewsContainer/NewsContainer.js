import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = (articles) => {
  return (
    articles.local.map(article => {
      return (
        <article>
          <NewsArticle article= { article }/>
        </article>
      )
    })
  )
}

export default NewsContainer;
