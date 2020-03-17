import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	ExperienceDetail
} from 'components'
import { moveObjectFieldToArray } from 'utils/helpers'

const SummaryPanel = ({
	...props
}) => {

	const { detail } = props

	return (
		<ExperienceDetail
			detail={{
				host_summary: detail.host_summary,
				included: detail.included,
				expect: detail.expect,
				bring: detail.bring,
				start_location: detail.start_location,
				end_location: detail.end_location,
				latitude: detail.latitude,
				longitude: detail.longitude,
				highlights: detail.highlights,
				experienceid: detail.experienceid,
				title: detail.title,
				tag_line: detail.tag_line,
				nickname: detail.nickname,
				host_name: detail.host_name,
				description: detail.description,
				cityid: detail.city.cityid,
				city: detail.city,
				country: detail.country,
				languages: detail.languages,
				rating: detail.rating,
				base_price: detail.base_price, //! change to new fields
				original_price: detail.original_price,
				number_in_base: detail.number_in_base,
				extra_person_cost: detail.extra_person_cost,
				categories: detail.categories,
				capacity: detail.capacity,
				duration_in_minutes: detail.duration_in_minutes,
				experience_length: detail.experience_length,
				photos: detail.experience.photos,
			}}
			adults={2}
			kids={2}
			editExperiencePage
		/>
	)
}

SummaryPanel.propTypes = {
}

export default SummaryPanel