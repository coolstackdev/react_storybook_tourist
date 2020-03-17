import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { languageAdd, languageRemove } from 'store/actions'
import { fromUserSelections } from 'store/selectors'

import { Languages } from 'components'

const LanguagesContainer = props => <Languages {...props}/>

LanguagesContainer.propTypes = {
	selectedLanguages: T.arrayOf(T.object).isRequired,
	addLanguage: T.func.isRequired,
	removeLanguage: T.func.isRequired
}

const mapStateToProps = state => ({
	selectedLanguages: fromUserSelections.getLanguages(state)
})

const mapDispatchToProps = (dispatch) => ({
	addLanguage: (choice) => dispatch(languageAdd(choice)),
	removeLanguage: (choice) => dispatch(languageRemove(choice))
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer)
