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
	SummaryPanel,
	ReviewsPanel
} from './components/panels'

const Form = styled.form`
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
	margin-top: 3em;
`

const SaveButton = styled(Button)`
	position: relative;
	left: 85%;
	padding-left: 50px;
	padding-right: 50px;
	border-radius: 30px;
`

const StyledTabPanel = styled(TabPanel)`
	&.react-tabs__tab-panel--selected {
		margin-top: 1em;
	}

	& input {
		border: none;
		box-shadow: 0 3px 16px 0 rgba(0,0,0,0.15);
		border-radius: 25px;
		padding: 0px 25px;
		height: 60px;
	}

	& label {
		margin-left: 10px;
		font-size: 20px;
	}
`

const StyledTab = styled(Tab)`
	display: inline-block;
	cursor: pointer;
	padding: 12px 12px;
	border: none;
	text-align: center;

	&.react-tabs__tab--selected {
		background-color: red;
		color: white;
		border-radius: 20px;
	}
`

const PanelArea = styled.div`
	width: 100%;
`

const EditExperienceForm = ({
	handleSubmit,
	...props
}) => {
	const [explanationOpen, setExplanationOpen] = useState('')
	const [tabNumber, setTabNumber] = useState(0)
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
		<VerticalTabs defaultIndex={0} onSelect={tabIndex => setTabNumber(tabIndex)}>
			<VerticalTabList>
				<StyledTab>General Info</StyledTab>
				<StyledTab>Highlights</StyledTab>
				<StyledTab>Expectations</StyledTab>
				<StyledTab>Location</StyledTab>
				<StyledTab>Price/Discount</StyledTab>
				<StyledTab>Images</StyledTab>
				{ experiencename && props.user.isadmin === 'True' &&
					<StyledTab>Reviews</StyledTab>
				}
				{/* <Tab>Summary</Tab> */}
			</VerticalTabList>
			<PanelArea>
				<Form onSubmit={handleSubmit} onKeyPress={event => {
					if (event.which === 13) {
						event.preventDefault();
					}
				}}>
					{ tabNumber !== 6 && 
						<SaveButton type="submit">Save</SaveButton>
					}
					<ToastContainer hideProgressBar />
					<StyledTabPanel>
						<GeneralInfoPanel
							handleFocusField={handleFocusField}
							explanationOpen={explanationOpen}
							setExplanationOpen={setExplanationOpen}
							{...props}
							/>
					</StyledTabPanel>
					<StyledTabPanel>
						<HighlightsPanel
							handleFocusField={handleFocusField}
							explanationOpen={explanationOpen}
							setExplanationOpen={setExplanationOpen}
							{...props}
						/>
					</StyledTabPanel>
					<StyledTabPanel>
						<ExpectationsPanel {...props} />
					</StyledTabPanel>
					<StyledTabPanel>
						<LocationPanel {...props} />
					</StyledTabPanel>
					<StyledTabPanel>
						<PriceDiscountPanel {...props} />
					</StyledTabPanel>
					<StyledTabPanel>
						<ImagesPanel {...props} />
					</StyledTabPanel>
					
					{/* <TabPanel>
						<SummaryPanel {...props}/>
					</TabPanel> */}
				</Form>
				{ experiencename && props.user.isadmin === 'True' &&
						<StyledTabPanel>
							<ReviewsPanel {...props} />
						</StyledTabPanel>
				}
			</PanelArea>
		</VerticalTabs>
	)

}

EditExperienceForm.propTypes = {
	handleSubmit: T.func.isRequired,
}

export default EditExperienceForm