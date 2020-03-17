import ExperienceCard from '.'

describe('ExperienceCard', () => {
	let wrap
	const experience = {
		id: 1,
		title: "Moonlight by the Bosphorous",
		description: "Come out for a beautiful day on the bosphorous! come on my boat, baby...",
		previewImages: [
			"https://i0.wp.com/www.whisperwanderlust.com/wp-content/uploads/2019/02/Istanbul-Turkey-best-things-to-do-30.jpg?fit=1301%2C1894&ssl=1",
			"https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/turkey/istanbul/istanbul-guide-lead.jpg?imwidth=450",
			"https://pix10.agoda.net/geo/city/14932/1_14932_02.jpg?s=1920x822"
		]
	}
	beforeEach(() => {
		wrap = (props = {}) => shallow(<ExperienceCard {...props} experience={experience} />)
	})

	it('should render host name', () => {
		expect(
			wrap().find('DetailsStrip').first()
		)
	})
})