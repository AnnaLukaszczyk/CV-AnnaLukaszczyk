import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	margin: 50px;
	max-width: 820px;
	height: 1100px;
	background-color: #fff;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		margin: 5.5vw;
	}
`;
