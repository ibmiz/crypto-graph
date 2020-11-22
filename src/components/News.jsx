import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getNews} from '../redux/actions/news'

import styled from 'styled-components'

const Container = styled.section`
  width: 50%;
`

const Title = styled.h1`
text-align: center;
`
const NewsSection = styled.div`
  background-color: transparent;
  border: 2px solid grey;
  margin: 1em;
  padding: 1em;
  border-radius: 15px;
`
const Date = styled.div`
  color: grey;
  font-weight: 300;
  margin: 10px;
  font-size: 0.8rem;
`
const Description = styled.p`
  color: white;
  font-weight: 300;
  font-size: 1rem;
`
const NewsTitle = styled.h5`
  color: #c10a3d;
  text-decoration: none;
  font-size: 1.3rem;
  margin: 0;
  &:hover {
    text-decoration: none;
    color: white;
  }
`
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const DateAuthorWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Author = styled.p`
  font-size: 1rem;
  margin: 0;
  display: flex;
`

const ArticleImg = styled.img`
  max-width:100%;
  max-height:100%;
  border-radius: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Button = styled.button`
  background: #C10A3D;
  color: white;
  font-size: 0.75em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  &:hover{
    outline: none;
    text-shadow: #ffffff 0 0 10px;
  }
`


function News() {
    const newsFeed = useSelector((state) => state.newsReducer.newsFeed)
    const loading = useSelector((state) => state.newsReducer.loading)
    const success = useSelector((state) => state.newsReducer.success)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    return (
        <Container>
            <Title>News</Title>
            {loading && !success && <p>Loading News...</p>}
            {!loading && !success && (
                <div>
                    <p>Failed to load news. Please try again</p>{' '}
                    <Button onClick={() => dispatch(getNews())}>Retry</Button>
                </div>
            )}
            {!loading &&
            success &&
            newsFeed.map((article) => (
                <NewsSection key={article.isoDate}>
                    <Link href={article.link}>
                        <NewsTitle>{article.title}</NewsTitle>
                    </Link>
                    <DateAuthorWrapper>
                        <Author>{article.creator}</Author>
                        <Date>{article.isoDate.slice(0, 10)}</Date>
                    </DateAuthorWrapper>
                    <ArticleImg src={article.imgSrc}></ArticleImg>
                    <Description>{article.contentSnippet}</Description>
                </NewsSection>
            ))}
        </Container>
    )
}

export default News
