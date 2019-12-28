import React, { Component } from 'react'
// import ReactDisqusComments from 'react-disqus-comments'
import urljoin from 'url-join'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import Snackbar from 'react-md/lib/Snackbars'
import { DiscussionEmbed } from 'disqus-react'
import config from '../../../data/SiteConfig'
import './Discuss.scss'

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: []
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: '댓글이 등록되었습니다' })
    this.setState({ toasts })
  }

  render() {
    const { postNode } = this.props
    if (!config.disqusShortname) {
      return null
    }
    const post = postNode.frontmatter
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug)
    const disqusConfig = {
      url,
      identifier: post.title,
      title: post.title
    }

    return (
      <Card className="md-grid md-cell md-cell--12 disqus-wrap">
        <CardTitle
          title="Comments"
          avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
        />
        <CardText>
          <DiscussionEmbed
            shortname={config.disqusShortname}
            config={disqusConfig}
          />
        </CardText>
        <Snackbar
          toasts={this.state.toasts}
          onDismiss={this.onSnackbarDismiss}
        />
      </Card>
    )
  }
}

export default Disqus
