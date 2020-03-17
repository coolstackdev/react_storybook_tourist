import React from 'react'
import styled from 'styled-components'
import { palette, prop } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	TagWrapper,
	Icon,
} from 'components'
import SectionWrapper from './SectionWrapper'
import { Search } from 'containers'
import cityTags from '../cityTags'

const WrapperHeadingSearch = styled.div``

const MainHeading = styled(Heading)`
  text-align: center;
  font-size: calc(1.7rem + 4vw);
  margin-bottom: 0.3em;
`

const SubHeading = styled(Heading)`
  text-align: center;
  font-size: calc(1.3rem + .8vw);
  color: ${palette('secondary', 1)};
  margin-top: 2.2em;
  font-family: ${font('primary')};
  font-weight: lighter;
`

const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`

const TagHeading = styled(Heading)`
  font-size: 1rem;
`

const StyledTagWrapper = styled(TagWrapper)`
  font-size: 0.85rem;
`

const ColoredText = styled.span`
  font-family: ${font('cursive')};
  color: ${prop('textColor')};
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
						<ColoredText textColor={palette('tertiary', 1)}>travel</ColoredText>
						{' '}
						<ColoredText textColor={palette('primary', 1)}>YOUR</ColoredText>
						{' '}
						<ColoredText textColor={palette('secondary', 2)}>way</ColoredText>
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
						<ColoredText textColor={palette('tertiary', 1)}>interests</ColoredText>
					</SubHeading>

				{mobile &&
					<MoreWrapper as="a" href="#what-we-do">
						<span >More</span>
						<Icon icon="chevron-down" />
					</MoreWrapper>
				}
			</SectionWrapper>
		</div>
	)
}

export default SectionOne