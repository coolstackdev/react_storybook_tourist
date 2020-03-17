import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifNotProp } from 'styled-tools'
import { palette } from 'styled-theme'
import Color from 'color'
import onClickOutside from 'react-onclickoutside'
import { useCategories, useWindowSize, useGuestCounter } from 'hooks'
import {
	Card,
	Tag,
	Icon,
} from 'components'
import { Search, GuestCounterButton, CategoryButton } from 'containers'

const Col = styled.div`
	display: flex;
	flex-direction: column;
`

const StyledCard = styled(Card)`
	position: absolute;
	left: 0;
	right: 0;
	top: 49px;
	background-color: ${palette('grayscale', 7)};
	z-index: 4;
	width: 100%;
	box-shadow: 0 12px 20px rgba(0,0,0,0.8);

	@media screen and (min-width: 800px) {
		top: 1%;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.2em;

	.react-autosuggest__container {
		margin: 0;
		height: 100%;
		text-align: center;

		.react-autosuggest__suggestions-container--open {
			top: 38px;
		}

		.react-autosuggest__input {
			height: 2em;
		}
	}
`

const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const LeftCol = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
`

const StyledSearch = styled(Search)`
	width: 100%;
`

const RightCol = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 40%;
	margin-left: 3em;
	max-width: 10em;
	max-height: 6em;

`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const GuestRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	&:first-child {
		margin-bottom: auto;
	}
`

const GuestType = styled.span`
	display: inline-block;
	width: 1.8em;
`

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	margin-left: 2em;
`

const AddRemoveGuestButton = styled(Icon)`
	display: inline-block;
	border-radius: 50%;
	color: ${palette('grayscale', 4)};
	width: 1.7rem;
	height: 1.7rem;
	cursor: pointer;
	border: 1.5px solid ${palette('grayscale', 4)};

	& svg {
		padding: 0.2em;
		color: ${ifNotProp('disabled', palette('secondary', 0), palette('grayscale', 5))};
	}
`

const GuestAmountWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${palette('secondary', 1)};
	width: 1.7rem;
	height: 1.7rem;
	border-radius: 50%;
	font-size: 0.8em;
	font-weight: bold;
	color: ${palette('secondary', 1)};
	user-select: none;
`

const GuestAmount = styled.span`
	height: 56%;
`

const AgeRestriction = styled.span`
	position: absolute;
	bottom: -8px;
	align-self: flex-start;
	font-size: 0.7rem;
`

const StyledGuestCounterButton = styled(GuestCounterButton)`
	margin: 0 auto;
`

const TagSection = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	margin-top: 1em;
`

const TagWrapper = styled.div`
	position: relative;
	margin: 0.2em;
`

const StyledTag = styled(Tag)`
	display: inline-block;
	background-color: ${prop('backgroundColor')};
	margin: 0 0.3em;
	height: 3em;
	font-size: 0.8em;
	font-weight: bold;
	transition: background-color 250ms ease-out;
	color: ${palette('grayscale', 0)};
	width: 100%;
	border-radius: 1.2em;

	&:hover {
		background-color: ${prop('backgroundHoverColor')};
	}
`

const TagCloseButton = styled.span`
	position: absolute;
	top: 0;
	right: 4px;
	cursor: pointer;

	&:hover {
		color: ${palette('grayscale', 3)};
	}
`

const FilterBlock = ({ setFilterOpen }) => {
	const { categories, removeCategory } = useCategories()
	const { adults, kids, removeAdult, addAdult, removeKid, addKid } = useGuestCounter()
	const { width } = useWindowSize()
	const mobile = width < 800
	FilterBlock.handleClickOutside = () => setFilterOpen(false)

	const categoryTags = categories.map(category => {
		const backgroundColor = Color(category.hex).darken(0.05).hsl().toString()
		const backgroundHoverColor = Color(category.hex).darken(0.1).hsl().toString()

		return (
			<TagWrapper key={category.id} onClick={() => removeCategory(category)}>
				<StyledTag key={category.id} backgroundColor={backgroundColor} backgroundHoverColor={backgroundHoverColor}>
					{category.name}
				</StyledTag>
				<TagCloseButton>&times;</TagCloseButton>
			</TagWrapper>
		)
	})

	return (
		<StyledCard>
			<Wrapper>
				{mobile ?
					<>
						<TopBar>
							<Search filterBlock />
							<StyledGuestCounterButton />
						</TopBar>
						<TagSection>
							{categoryTags}
							<CategoryButton />
						</TagSection>
					</>
					:
					<Row>
						<LeftCol>
							<StyledSearch filterBlock />
							<TagSection>
								{categoryTags}
								<CategoryButton />
							</TagSection>
						</LeftCol>

						<RightCol>
							<GuestRow>
								<GuestType>Adults</GuestType>
								<CounterWrapper>
									<AddRemoveGuestButton onClick={removeAdult} icon="remove" disabled={adults <= 1} />
									<GuestAmountWrapper>
										<GuestAmount>{adults}</GuestAmount>
									</GuestAmountWrapper>
									<AddRemoveGuestButton onClick={addAdult} icon="add" />
								</CounterWrapper>
							</GuestRow>
							<GuestRow>
								<Col>
									<GuestType>Kids</GuestType>
								</Col>
								<CounterWrapper>
									<AddRemoveGuestButton onClick={removeKid} icon="remove" disabled={kids <= 0} />
									<GuestAmountWrapper>
										<GuestAmount>{kids}</GuestAmount>
									</GuestAmountWrapper>
									<AddRemoveGuestButton onClick={addKid} icon="add" />
								</CounterWrapper>
							</GuestRow>
							<AgeRestriction>0-8 years</AgeRestriction>
						</RightCol>
					</Row>
				}
			</Wrapper>
		</StyledCard>
	)
}

const clickOutsideConfig = {
	handleClickOutside: () => FilterBlock.handleClickOutside
}

export default onClickOutside(FilterBlock, clickOutsideConfig)