import React from 'react';
import styled from 'styled-components'
import { size } from 'styled-theme';
import ReactFullpage from '@fullpage/react-fullpage';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section`
  width: 100%;
	box-sizing: border-box;
	margin: 2rem auto;
  /* max-width: ${size('maxWidth')}; */
`

const Footer = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 999;
`

const FullpageTemplate = ({
	header,
	footer,
	children,
	...props
 }) => {

		return (
			<>
				<Header>{header}</Header>
				<ReactFullpage
					{...props}
					licenseKey={process.env.FULLPAGE_API_KEY}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<Content fullpageApi={fullpageApi}>{children}</Content>
							</ReactFullpage.Wrapper>
						)
					}}
				/>
				<Footer>{footer}</Footer>
			</>
		);
}


export default FullpageTemplate