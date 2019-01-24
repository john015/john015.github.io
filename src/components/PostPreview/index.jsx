import React, { Component } from 'react'
import Card from 'react-md/lib/Cards/Card'
import CardText from 'react-md/lib/Cards/CardText'
import FontIcon from 'react-md/lib/FontIcons'
import { Link } from 'gatsby'
import moment from 'moment'
import Media from 'react-md/lib/Media'
import PostTags from '../PostTags'
import PostCover from '../PostCover'
import config from '../../../data/SiteConfig'
import './PostPreview.scss'

class PostPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: true
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false })
    } else {
      this.setState({ mobile: true })
    }
  }

  render() {
    const { postInfo } = this.props
    const { mobile } = this.state
    const expand = mobile
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <Link style={{ textDecoration: 'none' }} to={postInfo.path}>
          <Media style={{ height: coverHeight, paddingBottom: '0px' }}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
          </Media>
          <div className="title-container">
            <h2>{postInfo.title}</h2>
            <div className="date">
              <FontIcon iconClassName="fa fa-calendar" />
              {moment(postInfo.date).format(config.dateFormat)}
            </div>
          </div>
        </Link>

        <CardText expandable={expand}>
          {postInfo.excerpt}
          <PostTags tags={postInfo.tags} />
        </CardText>
      </Card>
    )
  }
}

export default PostPreview
