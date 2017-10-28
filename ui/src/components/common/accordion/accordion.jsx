import React, { Component } from 'react';

import './styles/accordion';

export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      /* default accordion max height */
      'accordionMaxHeight': 3000,

      /* default accordion status */
      'isActive': this.props.defaultActive
    };

    this.setMaxHeight = this.setMaxHeight.bind(this);
  }

  /* function to toogle accordion expand/collapse */
  toggleAccordion(e) {
    this.setState({
      'isActive': !this.state.isActive
    }, () => {
      const {
        afterToggleAccordion
      } = this.props;

      if(afterToggleAccordion && typeof afterToggleAccordion === 'function') {
        afterToggleAccordion(this.state.isActive);
      }
    });
  }

  componentWillMount() {
    this.setMaxHeight(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setMaxHeight(nextProps);
  }

  setMaxHeight(props) {
    /**
     * check whether accordionMaxHeight is given from parent
     * if accordionMaxHeight is greater than actual/current maxHeight then
     * replace with given accordionMaxHeight
     */
    if(props.accordionMaxHeight && props.accordionMaxHeight > this.state.accordionMaxHeight) {
      this.setState({'accordionMaxHeight': props.accordionMaxHeight});
    }
    /**
     * increase accordion height state if its less than accordion content height
     * 1500, 3000 are any random values
     */
    else if(this.refs.acc && this.refs.acc.offsetHeight + 1500 > this.state.accordionMaxHeight) {
      this.setState({'accordionMaxHeight': this.refs.acc.offsetHeight + 3000});
    }
  }

  render() {
    /**
     * <Accordion
     *   heading [string/redux object] - heading of accordion
     *   defaultActive [boolean] - true if need to expand accordion initialy
     * >
     *   ---body of accordion---
     * <Accordion/>
     * @type {String}
     */

    return(
      <div ref="acc" className={`accordion-container ${this.props.accordionClassName ? this.props.accordionClassName : ''} ${this.state.isActive ? 'active' : ''} ${this.props.hideThisAccordion && this.state.isActive ? 'show': ''}`}>

        {/* accordion heading section */}
        <div className={`accordion-heading cf ${this.state.isActive ? 'active' : ''}`} onClick={this.toggleAccordion.bind(this)}>

          {/* accordion heading */}
          <h3>{this.props.heading}</h3>

          {/* accordion toggle button */}
          <span className="toggleButton cf">
            <i className="left"></i>
            <i className="right"></i>
          </span>

          {/* container for other content which may need to include into accorsion header -- optional */}
          <span>{this.props.otherContent}</span>
        </div>

        {/* accordion body section */}
        <div
          className="accordion-content"
          style={{'maxHeight': this.state.isActive ? this.state.accordionMaxHeight : 0}}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
