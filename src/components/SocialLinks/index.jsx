import React, { Component } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'
import './SocialLinks.scss'

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props
    const post = postNode.frontmatter
    const url = encodeURI(urljoin(config.siteUrl, config.pathPrefix, postPath))
    const iconSize = mobile ? 36 : 48
    return (
      <div className="social-links">
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
      </div>
    )
  }
}

export default SocialLinks
