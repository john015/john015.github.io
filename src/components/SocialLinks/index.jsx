import React, { Component } from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon
} from 'react-share'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'
import './SocialLinks.scss'

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props
    const post = postNode.frontmatter
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
    const iconSize = mobile ? 36 : 48

    return (
      <div className="social-links">
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
        </GooglePlusShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
      </div>
    )
  }
}

export default SocialLinks
