import ReactPixel from "react-facebook-pixel"

const options = {
	autoConfig: true,
	debug: false
};

export const initPixel = pixelId => {
	ReactPixel.init(pixelId, null, options)
};

export const TrackPageView = () => {
	ReactPixel.pageView()
}

// export const TrackEvent = (event, data) => {
// 	ReactPixel.track(event, data);
// }