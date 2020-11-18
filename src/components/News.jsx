import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNews } from '../redux/actions/news'

import styled from 'styled-components'

const Container = styled.section`
  padding: 1em;
  width: 50%;
`
const NewsSection = styled.section`
  background-color: white;
  margin: 1em;
  padding: 1em;
`
const Date = styled.div`
  color: grey;
  font-weight: 300;
  margin: 10px;
  font-size: 0.8rem;
`
const Description = styled.p`
  color: black;
  font-weight: 300;
  font-size: 1rem;
`
const Title = styled.h5`
  color: palevioletred;
  text-decoration: none;
  font-size: 1.3rem;
  &:hover {
    text-decoration: none;
    color: black;
  }
`
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const DateAuthor = styled.div`
  color: black;
  display: flex;
`

const Creator = styled.p`
  font-size: 1rem;
  margin: 10px;
`

function News() {
  const newsFeed = useSelector((state) => state.newsReducer.newsFeed)
  const loading = useSelector((state) => state.newsReducer.loading)
  const success = useSelector((state) => state.newsReducer.success)
  const error = useSelector((state) => state.newsReducer.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNews())
  }, [])
  return (
    <Container>
      <h1>News</h1>
      {loading && <p>Loading News...</p>}
      {!loading &&
        newsFeed.map((article) => (
          <NewsSection>
            <Link href={article.link}>
              <Title>{article.title}</Title>
            </Link>
            <DateAuthor>
              <Creator>{article.creator}</Creator>
              <Date>{article.isoDate.slice(0, 10)}</Date>
            </DateAuthor>
            <Description>{article.contentSnippet}</Description>
          </NewsSection>
        ))}
    </Container>
  )
}

export default News
