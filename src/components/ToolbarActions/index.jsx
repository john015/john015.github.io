import React, { Component } from 'react'
import UserLinks from '../UserLinks'
import './ToolbarActions.scss'
import { css } from '@emotion/core'

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
          <a css={baseLinkCSS} href="/">
            <i class="fa fa-home md-icon" />
          </a>
          <a css={AboutLinkCSS} href="/about">
            <i class="fa fa-user md-icon" />
          </a>
          <UserLinks config={config} />
        </div>
      </div>
    )
  }
}

export default Toolbar
