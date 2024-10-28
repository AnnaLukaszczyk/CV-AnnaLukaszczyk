import styled from "styled-components";

export const StyledAside = styled.aside`
	padding-top: 230px;
	height: 100%;
	width: 35%;
	box-shadow: 2px 0 3px gray;
	overflow: hidden;
	z-index: 1;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		padding-top: 200px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		padding-top: 170px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		padding-top: 150px;
	}
`;
