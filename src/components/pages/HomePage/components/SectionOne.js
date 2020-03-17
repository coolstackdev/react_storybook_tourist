import React from 'react'
import styled from 'styled-components'
import { palette, prop, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	TagWrapper,
	Icon,
} from 'components'
import SectionWrapper from './SectionWrapper'
import { Search } from 'containers'
import cityTags from '../cityTags'

const WrapperHeadingSearch = styled.div`
	
`

const MainHeading = styled(Heading)`
	display: flex;
	text-align: center;
	font-size: 53px;
	margin-bottom: 20px;
	margin-top: 0px;

	& div:nth-child(2){
		margin: 10px 10px 0 10px;
	}

	@media screen and (min-width: 800px) {
		font-size: 135px;
		margin: 0 80px 55px 80px;

		& div:nth-child(2){
			margin: 30px 30px 0 30px;
		}
  }
`

const SubHeading = styled(Heading)`
  text-align: center;
  font-size: 25px;
  color: ${palette('secondary', 1)};
  font-family: Avenir;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
	letter-spacing: normal;
	
	@media screen and (min-width: 800px) {
		font-size: 30px;
		margin-top: 40px;

		& span {
			font-size: 38px;
		}
	}
`

const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`

const TagHeading = styled(Heading)`
	font-size: 1rem;
	
	@media screen and (min-width: 800px) {
		font-size: 1.25rem;
	}
`

const StyledTagWrapper = styled(TagWrapper)`
	font-size: 1rem;
	color: #555555;
	font-weight: bold;
  font-stretch: normal;
  font-style: normal;
	line-height: 1.1;
	font-family: Avenir;
	background-color: #f5f5f5;
	padding: 8px 20px;
	margin-top: 15px;

	@media screen and (min-width: 800px) {
		font-size: 1.25rem;
		margin: 32px 25.5px 0 25.5px;
		padding: 13px 35px;
	}
`

const ColoredText = styled.span`
	font-stretch: normal;
	font-style: normal;
	line-height: 1.1;
	letter-spacing: normal;
	font-size: ${ifProp('middleText', '43px')};
	font-family: ${ifProp('specialText', 'Gloria Hallelujah', 'Avenir')};
	font-weight: ${ifProp('specialText', 'normal', 'bold')};
	color: ${prop('textColor')};
	margin-top: ${ifProp('middleText', '16px')};
	
	@media screen and (min-width: 800px) {
		margin-top: ${ifProp('middleText', '30px')};
		font-size: ${ifProp('middleText', '103px')};
	}
`

const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;
	color: ${palette('secondary', 1)};
	text-decoration: none;

	&:visited {
		color: ${palette('secondary', 1)};
	}
	&:hover {
		color: ${palette('secondary', 1)};
		text-decoration: none;
	}
	&:active {
		color: ${palette('secondary', 1)};
	}
`

const StyledText = styled.div`
	display: flex;
	flex-direction: row;
`

const Image = styled.img`
	object-fit: contain;
	position: absolute;
	margin-left: 76px;
  margin-top: 92px;
	box-sizing: border-box;

	@media screen and (max-width: 400px) {
		margin-left: 32px;
		margin-top: 40px;
		width: 12px;
		height: 12px;
	}
`

const SectionOne = ({
	mobile,
	...props
}) => {

	const populateInputField = (cityid, cityname) => {
		props.history.push({
			pathname: `/${cityname}/personalize`,
			state: cityid
		})
		dataLayer.push({
			event: 'HomePage city tag clicked',
			cityClicked: cityname
		})
		window.analytics.track('HomePage city tag clicked', {
			cityClicked: cityname
		})
	}

	return (
		<div className="section">
			<SectionWrapper>
				<WrapperHeadingSearch>
					<MainHeading level={1} reverse>
						<StyledText>
							<ColoredText textColor={palette('tertiary', 1)}>travel</ColoredText>
						</StyledText>
						<StyledText>
							<ColoredText specialText middleText textColor={palette('primary', 1)}>YOUR</ColoredText>
							<Image src={require('../../../atoms/Icon/icons/specialTextSub.png')} />
						</StyledText>
						<StyledText>
							<ColoredText textColor={palette('secondary', 2)}>way</ColoredText>
						</StyledText>
					</MainHeading>
					<Search placeholder="Where are you going?" />
				</WrapperHeadingSearch>
					<TagSection>
						<TagHeading>Explore top destinations</TagHeading>
						<StyledTagWrapper populateInputField={populateInputField} palette="secondary" tags={cityTags} />
					</TagSection>
					<SubHeading level={2} reverse>
						Experiences that match your
										{' '}
						<ColoredText specialText textColor={palette('primary', 1)}>interests</ColoredText>
					</SubHeading>

				{/* {mobile &&
					<MoreWrapper as="a" href="#what-we-do">
						<span >More</span>
						<Icon icon="chevron-down" />
					</MoreWrapper>
				} */}
			</SectionWrapper>
		</div>
	)
}

export default SectionOne