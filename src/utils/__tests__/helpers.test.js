import * as helpers from '../helpers'

describe('helpers', () => {

	describe('formattedDateWithoutTime()', () => {
		it('should return a date string (MM/DD/YYYY) without time', () => {
			const date = new Date('12/22/2018')
			expect(
				helpers.formattedDateWithoutTime(date)
			).toBe('12/22/2018')
		});
		it('should return a date string (MM/DD/YYYY) without time, given 2 numbers with leading zero\'s', () => {
			const date = new Date('02/08/2018')
			expect(
				helpers.formattedDateWithoutTime(date)
			).toBe('02/08/2018')
		});
	});

	describe('convertTimeFromRawToProper()', () => {
		it('should return a properly formatted time, given a number', () => {
			let rawTime = 18
			expect(
				helpers.convertTimeFromRawToProper(rawTime)
			).toBe('18:00')
		});
		it('should return a properly formatted time, given a number with a decimal .5', () => {
			let rawTime = 23.5
			expect(
				helpers.convertTimeFromRawToProper(rawTime)
			).toBe('23:30')
		});
	});

	describe('getTimesForCurrentDate()', () => {
		it('should return an array of properly formatted times, given an array of raw formats', () => {
			const availabilities = {
				"08/31/2019": [9, 9.5, 12.5, 11],
			}
			const date = new Date('08/31/2019')
			expect(
				helpers.getTimesForCurrentDate(date, availabilities)
			).toStrictEqual(['9:00', '9:30', '12:30', '11:00'])
		});

		it('should return an empty array if given date does not exist as a key in the availabilities array', () => {
			const availabilities = {
				"08/31/2019": [9, 9.5, 12.5, 11],
			}
			const date = new Date('08/30/2019')
			expect(
				helpers.getTimesForCurrentDate(date, availabilities)
			).toStrictEqual([])
		});
	});
});