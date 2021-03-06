import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Card from 'react-md/lib/Cards'
import CardText from 'react-md/lib/Cards/CardText'
import nprogress from 'nprogress'
import throttle from 'lodash.throttle'
import 'nprogress/nprogress.css'
import Layout from '../layout'
import Disqus from '../components/Disqus'
import PostTags from '../components/PostTags'
import PostCover from '../components/PostCover'
import PostInfo from '../components/PostInfo'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.scss'

nprogress.configure({ showSpinner: false, trickle: false, minimum: 0 })

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: true
    }
  }

  componentDidMount() {
    nprogress.start()
    this.handleResize()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  onScroll = throttle(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const { innerHeight } = window
    const { scrollHeight } = document.body
    const height = scrollHeight - innerHeight
    const scrollPercent = 1 - (height - scrollTop) / height
    if (scrollPercent > 1) return
    nprogress.set(scrollPercent)
  }, 50)

  handleResize = () => {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false })
    } else {
      this.setState({ mobile: true })
    }
  }

  render() {
    const { pageContext, data, location } = this.props
    const { mobile } = this.state
    const { slug } = pageContext
    const expanded = !mobile
    const postOverlapClass = mobile ? 'post-overlap-mobile' : 'post-overlap'
    const postNode = data.markdownRemark
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    const coverHeight = mobile ? 180 : 280
    return (
      <Layout location={location}>
        <div className="post-page md-grid md-grid--no-spacing">
          <Helmet>
            <title>{post.title}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div
            className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
          >
            <Card className="md-grid md-cell md-cell--12 post detail-post-wrap">
              <PostCover postNode={postNode} coverHeight={coverHeight} />
              <CardText className="post-body">
                <h1 className="post-header">{post.title}</h1>
                <PostInfo postNode={postNode} />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </CardText>
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={mobile}
                />
              </div>
            </Card>
            <Disqus postNode={postNode} expanded={expanded} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`
