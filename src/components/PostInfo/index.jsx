import React, { Component } from 'react'
import FontIcon from 'react-md/lib/FontIcons'
import moment from 'moment'
import config from '../../../data/SiteConfig'
import './PostInfo.scss'

class PostInfo extends Component {
  render() {
    const { postNode } = this.props
    return (
      <div className="post-info">
        <div className="date">
          <FontIcon iconClassName="fa fa-calendar" />
          {moment(postNode.fields.date).format(config.dateFormat)}
        </div>
      </div>
    )
  }
}

export default PostInfo
