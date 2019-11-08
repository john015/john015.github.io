import React, { Component } from 'react'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import { Link } from 'gatsby'
import ToolbarActions from '../ToolbarActions'
import Footer from '../Footer'
import GetNavList from './NavList'
import './Navigation.scss'

class Navigation extends Component {
  render() {
    const { children, config } = this.props
    return (
      <NavigationDrawer
        drawerTitle={config.siteTitle}
        toolbarTitle={(
          <Link to="/" className="nav-title">
            John`s Dev log
          </Link>
)}
        className="navigation-container"
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">{children}</div>
        <Footer />
      </NavigationDrawer>
    )
  }
}

export default Navigation
