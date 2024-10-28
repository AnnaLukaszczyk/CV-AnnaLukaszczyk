import styled from "styled-components";

export const StyledMain = styled.main`
	padding-top: 200px;
	height: 100%;
	width: 65%;
	background-color: #e1e1e1;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		padding-top: 170px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		padding-top: 140px;
	}
`;

export const Description = styled.p`
	text-align: justify;
`;
