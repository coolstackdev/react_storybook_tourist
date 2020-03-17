import React, { useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'
import './styles.scss'
import {
	Spinner,
	Heading,
	Button,
	ExperienceCard,
} from 'components'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ExperienceListWrapper = styled.div`
	margin: 0 auto 1rem;
	padding: 0;
	width: 100%;
`

const ExperienceUnorderedList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 0;
	padding: 0;
`

const ExperienceItem = styled.li`
	position: relative;
	display: block;
	margin-bottom: 2rem;
`

const ErrorHeading = styled(Heading)`
	font-family: ${font('cursive')};
`

const ExperienceList = ({
	list,
	experienceId,
	loading,
	noExperiences,
	...props
}) => {

	useEffect(() => {
		// props.setNumExperiences(list.length)
		if (!props.myExperiencePage) {
			props.setNumExperiences(list.length)
		}
	}, [list])

	if (noExperiences) {
		return (
			<Wrapper>
				<ErrorHeading>Your search is too specific! <br /> </ErrorHeading>
				<Button to='/'>Try a different city</Button>
			</Wrapper>
		)
	}

	const experienceList = list.map(experience => {
		return (
			<ExperienceItem key={experience.experienceid}>
				<ExperienceCard
					experience={experience}
					experienceId={experienceId}
					{...props}
				/>
			</ExperienceItem>
		)
	})

	return (
		<>
			{loading &&
				<Spinner />
			}
			{loading ||
				<Container>
					<ExperienceListWrapper>
						<ExperienceUnorderedList>
							{experienceList}
						</ExperienceUnorderedList>
					</ExperienceListWrapper>
				</Container>
			}
		</>
	)

}

ExperienceList.propTypes = {
	list: T.arrayOf(T.shape({
		experienceid: T.string.isRequired,
		title: T.string.isRequired,
		host_name: T.string.isRequired,
		host_thumbnail_url: T.string.isRequired,
		rating: T.number.isRequired,
		tag_line: T.string.isRequired,
		duration_in_minutes: T.number.isRequired,
		base_price: T.number.isRequired,
		number_in_base: T.number.isRequired,
		extra_person_cost: T.number.isRequired,
		currency: T.string.isRequired,
	})),
	loading: T.bool,
}

export default ExperienceList