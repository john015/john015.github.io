import React, { Component } from 'react'
import UserLinks from '../UserLinks'
import './ToolbarActions.scss'
import { css } from '@emotion/core'
import { Link } from 'gatsby';

const baseLinkCSS = css`
  position: absolute;
  color: #fff;
  width: 40px;
  height: 44px;
  padding: 10px;
  right: 170px;
`

const AboutLinkCSS = css`
  ${baseLinkCSS};
  right: 130px;
`

const IconCSS = css`
  font-size: 24px;
  color: #fff;
`
class Toolbar extends Component {
  render() {
    const { config } = this.props
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <Link css={baseLinkCSS} to="/">
            <i className="fa fa-home md-icon" />
          </Link>
          <Link css={AboutLinkCSS} to="/about">
            <i className="fa fa-user md-icon" />
          </Link>
          <UserLinks config={config} />
        </div>
      </div>
    )
  }
}

export default Toolbar
