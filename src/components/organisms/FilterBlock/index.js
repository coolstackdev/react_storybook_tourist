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
	position: initial;
	background-color: ${palette('grayscale', 7)};
	width: 100%;
	box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.8);
	border-radius: 106px;

	@media screen and (max-width: 500px) {
		position: absolute;
		z-index: 4;
		left: 0;
		right: 0;
		top: 69px;
		border-radius: 20px;
	}

	@media screen and (min-width: 800px) {
		margin-top: 40px;
    margin-bottom: 28px;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 23px 1.2em;

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

	@media screen and (min-width: 800px) {
		padding: 36px 1.2em;
	}
`

const TopBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const LeftCol = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;

	& input{
		height:40px !important;
	}

	@media screen and (min-width: 800px) {
		margin-left: 65px;
		width: 60%;

		& input{
			height:58px !important;
		}
	}
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
	width: 20%;
	margin-right: 70px;
	max-width: 15em;
	max-height: 6em;
	font-size: 20px;

	@media screen and (max-width: 500px) {
		margin-left: 2em;
		margin-right: 0;
		margin-top: 10px;
		width: 80%;
		font-size: 16px;
	}
`

const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 800px) {
		flex-direction: row;
	}
`

const GuestRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	&:first-child {
		margin-bottom: 30px;
    margin-top: 10px;
	}

	@media screen and (max-width: 500px) {
		&:first-child {
			margin-bottom: 0;
			margin-top: 0;
		}	
	}
`

const GuestType = styled.span`
	display: inline-block;
	width: 1.8em;
	font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
	letter-spacing: normal;
	font-family: Avenir;
`

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 50%;
	justify-content: space-between;
	margin-left: 0.4em;

	@media screen and (min-width: 800px) {
		margin-left: 3.4em;
		width: 100%;
	}
`

const AddRemoveGuestButton = styled(Icon)`
	display: inline-block;
	border-radius: 50%;
	color: #b99f9f;
	width: 1.9rem;
	height: 1.9rem;
	cursor: pointer;
	box-shadow: 0px 0px 15px 0.5px rgba(0,0,0,0.15);
  border-radius: 25px;

	& svg {
		padding: 0.3em;
	}

	@media screen and (min-width: 800px) {
		width: 2.6rem;
		height: 2.6rem;
		margin-right: 19px;
		margin-left: 19px;

		& svg {
			padding: 0.5em;
		}
	}
`

const GuestAmountWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.7rem;
	height: 1.7rem;
	font-size: 0.8em;
	font-weight: bold;
	color: ${palette('secondary', 1)};
	user-select: none;
	margin-top: 10px;

`

const GuestAmount = styled.span`
	height: 100%;
	font-size: 16px;
	font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: normal;

	@media screen and (min-width: 800px) {
		font-size: 22px;
	}
`

const AgeRestriction = styled.span`
	position: absolute;
	bottom: -9px;
	align-self: flex-start;
	font-size: 0.7rem;
	color: ${palette('grayscale', 4)};
	letter-spacing: 1.5px;

	@media screen and (min-width: 800px) {
		letter-spacing: 2px;
		bottom: -19px;
	}
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
	margin-top: 10px;
	margin-left: 1em;

	@media screen and (min-width: 800px) {
		margin-top: 1em;
		margin-left: 1em;
	}
`

const TagWrapper = styled.div`
	position: relative;
	margin:7px 5px 0 0;

	@media screen and (min-width: 800px) {
		margin:15px 25px 0 0;
	}
`

const StyledTag = styled(Tag)`
	display: inline-block;
	background-color: ${prop('backgroundColor')};
	margin: 0 0.3em;
	height: 2.5em;
	font-size: 13px;
	font-weight: bold;
	// transition: background-color 250ms ease-out;
	color: white;
	width: 100%;
	border-radius: 20px;
	padding: 0.3em 0.5em;
	-webkit-transition:0.3s all ease;
	transition:0.3s ease all;
	overflow: hidden;
	position: relative;
	font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
	letter-spacing: normal;
	font-family: Avenir;

	&:hover {
		span {
				top:0;
		}
	}

	@media screen and (min-width: 800px) {
		padding: 0.3em 18px;
		font-size: 16px;
	}
`

const HoverTag = styled.span`
	color:#fff;
	position:absolute;
	height: 2.5em;
	top:-40px;
	width:100%;
	left:0;
	padding: 0.3em 18px;
	padding-top: 0.6em;
	background-color: #3bd01d;
	transition: all 0.3s ease;

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
					<HoverTag>Remove</HoverTag>
					{category.name}
				</StyledTag>
				{/* <TagCloseButton>&times;</TagCloseButton> */}
			</TagWrapper>
		)
	})

	return (
		<StyledCard>
			<Wrapper>
				{/* {mobile ?
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
					: */}
					<Row>
						<LeftCol class='searchfilter'>
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
							<AgeRestriction>0-4 years old</AgeRestriction>
						</RightCol>
					</Row>
				{/* } */}
			</Wrapper>
		</StyledCard>
	)
}

const clickOutsideConfig = {
	handleClickOutside: () => FilterBlock.handleClickOutside
}

export default onClickOutside(FilterBlock, clickOutsideConfig)