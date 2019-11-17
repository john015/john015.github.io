import React, { PureComponent } from 'react'
import config from '../../../data/SiteConfig'
import './Footer.scss'

class Footer extends PureComponent {
  render() {
    const { copyright } = config
    if (!copyright) {
      return null
    }
    const isAboutPage = location && location.pathname.includes('/about')

    return (
      <footer className={isAboutPage ? 'footer hidden' : 'footer'}>
        <div className="notice-container">
          <span className="copyright">
            <h4>{copyright}</h4>
          </span>
          <br />
          <span className="based-on">
            <h4>
              Powered by
              <a href="https://www.gatsbyjs.org/"> Gatsby.js</a>
            </h4>
          </span>
          {/* <div className="rss">
            <Link to={url}>
              <Button flat secondary iconClassName="fa fa-rss">
                Subscribe
              </Button>
            </Link>
          </div> */}
        </div>
      </footer>
    )
  }
}

export default Footer
