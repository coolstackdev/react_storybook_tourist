import React from "react"
import Enzyme, {
	shallow, // mounts component without entire DOM tree. Renders only the single component, not including its children. This is useful to isolate the component for pure unit testing. It protects against changes or bugs in a child component altering the behaviour or output of the component under test. Cannot access props passed into the root component (therefore also not default props), but can those passed into child components, and can test the effect of props passed into the root component. since component is only rendered "one level deep", if the render fn of the component contains children, they won't be rendered. references will just be made to the un-rendered child components
	render, //gives the result of render function (html). no access to lifecycle methods
	mount, //goes thru whole DOM tree. used when we want to trigger DOM events (ie. interact with DOM API) (eg. click).
 } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { createSerializer } from "enzyme-to-json"
import sinon from "sinon"

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }))

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Define globals to cut down on imports in test files
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon