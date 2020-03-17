/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gtmStart } from 'store/actions'

class GoogleTagManager extends Component {
  static propTypes = {
    startGTM: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.startGTM()
  }

  render() {
    const iframe = `
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
        height="0"
        width="0"
        style="display:none;visibility:hidden">
      </iframe>
    `
    return <noscript dangerouslySetInnerHTML={{ __html: iframe }} />
  }
}

const mapDispatchToProps = dispatch => ({
  startGTM: () => dispatch(gtmStart(gtmId)),
})

export default connect(null, mapDispatchToProps)(GoogleTagManager)
