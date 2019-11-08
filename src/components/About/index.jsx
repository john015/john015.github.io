import React, { Component } from 'react'
import Card from 'react-md/lib/Cards/Card'
import CardText from 'react-md/lib/Cards/CardText'
import './About.scss'

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <p className="about-text md-body-1">test</p>
            </CardText>
          </div>
        </Card>
      </div>
    )
  }
}

export default About
