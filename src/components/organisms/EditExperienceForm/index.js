import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'
import {
	Spinner,
	Heading,
	Button,
} from 'components'
import {
	GeneralInfoPanel,
	HighlightsPanel,
	ExpectationsPanel,
	LocationPanel,
	PriceDiscountPanel,
	ImagesPanel,
	SummaryPanel
} from './components/panels'

const Form = styled.form`
  width: 100%;
  padding: 0;

	.react-tabs__tab-panel {
		margin-top: 5em;
	}
`

const VerticalTabs = styled(Tabs)`
  display: flex;
`

const VerticalTabList = styled(TabList)`
  display: flex;
	flex-direction: column;
	margin-right: 2em;
`

const SaveButton = styled(Button)`
	float: right;
`

const EditExperienceForm = ({
	handleSubmit,
	...props
}) => {
	const [explanationOpen, setExplanationOpen] = useState('')
	const { experiencename } = props.match.params

	const handleFocusField = (fieldName) => {
		setExplanationOpen(fieldName)
	}

	if (!props.user) {
		return <h1>Please sign in</h1>
	}

	if (!props.detail.experienceid) {
		return <Spinner />
	}

	return (
		<VerticalTabs defaultIndex={0}>
			<VerticalTabList>
				<Tab>General Info</Tab>
				<Tab>Highlights</Tab>
				<Tab>Expectations</Tab>
				<Tab>Location</Tab>
				<Tab>Price/Discount</Tab>
				<Tab>Images</Tab>
				{/* <Tab>Summary</Tab> */}
			</VerticalTabList>

			<Form onSubmit={handleSubmit} onKeyPress={event => {
				if (event.which === 13) {
					event.preventDefault();
				}
			}}>
				<SaveButton type="submit">Save</SaveButton>
				<ToastContainer hideProgressBar />
				<TabPanel>
					<GeneralInfoPanel
						handleFocusField={handleFocusField}
						explanationOpen={explanationOpen}
						setExplanationOpen={setExplanationOpen}
						{...props}
						/>
				</TabPanel>

				<TabPanel>
					<HighlightsPanel
						handleFocusField={handleFocusField}
						explanationOpen={explanationOpen}
						setExplanationOpen={setExplanationOpen}
						{...props}
					/>
				</TabPanel>
				<TabPanel>
					<ExpectationsPanel {...props} />
				</TabPanel>
				<TabPanel>
					<LocationPanel {...props} />
				</TabPanel>
				<TabPanel>
					<PriceDiscountPanel {...props} />
				</TabPanel>
				<TabPanel>
					<ImagesPanel {...props} />
				</TabPanel>
				{/* <TabPanel>
					<SummaryPanel {...props}/>
				</TabPanel> */}
			</Form>
		</VerticalTabs>
	)

}

EditExperienceForm.propTypes = {
	handleSubmit: T.func.isRequired,
}

export default EditExperienceForm