import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import throttle from 'lodash.throttle'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'


class Index extends React.Component {
  state = { displayingData: [], dataLength: 0, isCompletedLoadingData: false }

  onScroll = throttle(() => {
    const { isCompletedLoadingData, displayingData, dataLength } = this.state
    if (isCompletedLoadingData) return
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const { innerHeight } = window
    const { scrollHeight } = document.body

    if (scrollHeight - innerHeight - scrollTop < 300) {
      if (displayingData.length + 5 >= dataLength) {
        this.setState({ isCompletedLoadingData: true })
      }
      this.setState({
        displayingData: postEdges.slice(0, displayingData.length + 5)
      })
    }
  }, 80)

  componentDidMount() {
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges
    this.setState({
      dataLength: postEdges.length,
      displayingData: postEdges.slice(0, 5)
    })
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const { data, location } = this.props
    const { displayingData } = this.state
    const postEdges = data.allMarkdownRemark
    return (
      <Layout location={location} title="john's Dev log">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={displayingData} />
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
