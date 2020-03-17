import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import { moveObjectFieldToArray }from 'utils/helpers'
import {
	Heading,
	Field,
	Paragraph,
	Spinner,
} from 'components'
import { FieldExplanation, SearchCities } from '../index'
import { ExperienceCategorySelection, LanguageAutosuggest, DurationSelection } from '../explanations'

const GeneralInfoPanel = ({
	explanationOpen,
	handleFocusField,
	...props
}) => {

	const categoryNamesList = moveObjectFieldToArray(props.detail.categories, 'name')

	const durationString = () => {
		if (!props.detail.experience_length) {
			return ''
		}
		let durationArray = (' ' + props.detail.experience_length).slice(1).split(':')
		return `${durationArray[0]} days | ${durationArray[1]} hours | ${durationArray[2]} minutes`
	}
	return (
		<>
			<Field name="title" label="Title" autocomplete="off" onFocus={() => handleFocusField('title')} onChange={(e) => props.updateAttribute('title', e.target.value)} value={props.detail.title || ''} className="ignore-react-onclickoutside" />
			<FieldExplanation {...props} hidden={explanationOpen !== 'title'} content={
				<Paragraph>Come up with the name for your tour that will summarize the uniqueness of the experience and will excite a traveler. Max 50 characters</Paragraph>
			}/>

			<Field name="tagline" label="Tagline" onFocus={() => handleFocusField('tagline')} onChange={(e) => props.updateAttribute('tag_line', e.target.value)} value={props.detail.tag_line || ''} className="ignore-react-onclickoutside" />
			<FieldExplanation {...props} hidden={explanationOpen !== 'tagline'} content={
				<Paragraph>Come up with a tagline that sells your experience in as few words as possible. This will appear front and center when people are looking through all the experiences</Paragraph>
			}/>

			<Field name="categories" label="Categories" onFocus={() => handleFocusField('categories')} readOnly value={categoryNamesList.toString().replace(/,/g, ' | ') || ''} className="ignore-react-onclickoutside" />
			{/* <Field name="categories" label="Categories" onFocus={() => handleFocusField('categories')} readOnly value={categoryNamesList || ''} className="ignore-react-onclickoutside" /> */}
			<FieldExplanation hidden={explanationOpen !== 'categories'} content={<ExperienceCategorySelection {...props} />}/>

			<Field name="city" label="City" onFocus={() => handleFocusField('city')} readOnly value={props.detail.city || ''} className="ignore-react-onclickoutside" />
			<FieldExplanation hidden={explanationOpen !== 'city'} content={<SearchCities {...props} />}/>

			<Field name="languages" label="Languages" onFocus={() => handleFocusField('languages')} readOnly value={props.detail.languages.toString().replace(/,/g, ' | ') || ''} />
			<FieldExplanation hidden={explanationOpen !== 'languages'} content={<LanguageAutosuggest {...props} />}/>

			<Field name="duration" label="Duration" onFocus={() => handleFocusField('duration')} readOnly value={durationString() || ''} />
			<FieldExplanation hidden={explanationOpen !== 'duration'} content={<DurationSelection {...props} />} />

			<Field name="description" label="Description" onFocus={() => handleFocusField('description')} onChange={(e) => props.updateAttribute('description', e.target.value)} value={props.detail.description || ''} />
			<FieldExplanation hidden={explanationOpen !== 'description'} content={
				<Paragraph>Write an engaging description that includes specific details about the places that travellers will visit and activities they will participate in and what makes the experience unique. Max 1000 characters</Paragraph>
			}/>
		</>
	)
}

GeneralInfoPanel.propTypes = {
	explanationOpen: T.string.isRequired,
	handleFocusField: T.func
}

export default GeneralInfoPanel