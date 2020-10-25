import React, { Component } from 'react'
import Card from 'react-md/lib/Cards/Card'
import { css } from '@emotion/core'

const AboutWrapperCSS = css`
  width: 75%;
  max-width: 800px;
  padding: 24px 40px;
  margin: 60px auto 0 auto;
  @media (max-width: 639px) {
    position: absolute;
    height: calc(100vh - 56px);
    margin: 0;
    width: 100%;
    padding: 24px 16px;
    word-break: keep-all;
    box-shadow: none;
  }
`

const AboutSectionCSS = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  > p {
    font-size: 18px;
    line-height: 1.9;
  }
  color: rgba(0, 0, 0, 0.87);
`

const HighlightedTextCSS = css`
  font-size: 16px;
  color: #d23669;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  position: relative;
  bottom: 1px;
  margin: 0 4px;
  padding: 0.1em;
  border-radius: 0.3em;
  font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
    'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
    'Courier New', Courier, monospace;
`

const LinkCSS = css`
  position: relative;
  font-size: 14px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: #d23669;
  }
`

const CompanyNameCSS = css`
  display: inline-block;
  margin-left: 4px;
`

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card css={AboutWrapperCSS} className="md-cell--8">
          <div css={AboutSectionCSS}>
            <h2>안녕하세요.</h2>
            <p>웹 프론트엔드 개발자 이상원입니다.</p>
            <p>새로운 기술을 익히고 쓰는 것을 좋아하며, 수려한 UI/UX의 제품을 만드는걸 즐깁니다.</p>
            <p>
              현재는 <span css={HighlightedTextCSS}>토스</span>를 운영하는 비바리퍼블리카에서 프론트엔드 개발자로 일하고 있습니다.
            </p>
            <p>
              이 블로그는 제가 관심 있는 주제나, 새롭게 업데이트된 기능을 주로
              포스팅 합니다.
            </p>
            <p>
              최대한 한국어로 되어 있는 정보들이 적은 주제를 포스팅하려고 노력
              중입니다.
            </p>
            <p>
              만약 제 블로그 글의 내용에 틀린 내용이 있을경우 댓글로
              지적해주시면 감사하겠습니다.
            </p>
          </div>
        </Card>
      </div>
    )
  }
}

export default About
