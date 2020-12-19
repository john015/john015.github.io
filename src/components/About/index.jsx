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
  font-size: 16px;
  line-height: 2.2;
  color: rgba(0, 0, 0, 0.87);
  white-space: pre-wrap;

  @media (max-width: 639px) {
    font-size: 14px;
    white-space: normal;
  }
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
      <article className="about-container md-grid mobile-fix">
        <Card css={AboutWrapperCSS} className="md-cell--8">
          <section css={AboutSectionCSS}>
            <h2>안녕하세요.</h2>
            {"웹 프론트엔드 개발자 이상원입니다. \n저는 새로운 기술을 배우고 쓰는 것을 좋아하며, 수려한 UI/UX의 제품을 만드는걸 즐깁니다. \n현재는 비바리퍼블리카에서 프론트엔드 개발자로 일하고 있습니다. \n이 블로그에는 주로 제가 관심 있는 주제나 공유하고 싶은 내용들을 포스팅 하고 있습니다. \n최대한 한국어로 되어 있는 정보가 적은 주제를 포스팅하려고 하는데 쉽지 않네요.. \n재미있어 보이는 기술이 새로 나왔을 때 제게 메일 주시면 확인한 뒤 관련해서 포스팅 해보겠습니다."}
          </section>
        </Card>
      </article>
    )
  }
}

export default About
