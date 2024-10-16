import styled from "styled-components";

export const StyledSection = styled.section`
	margin: 20px 0;
`;

export const SectionTitleShadow = styled.div`
	filter: drop-shadow(-5px 2px 8px rgba(0, 0, 0, 0.8));
`;

export const SectionTitle = styled.h2`
	padding: 3px 15px;
	font-size: 20px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: azure;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
	background: linear-gradient(
		10deg,
		rgba(74, 146, 168, 1) 0%,
		rgba(43, 108, 128, 1) 35%,
		rgba(35, 94, 112, 1) 100%
	);
	clip-path: polygon(
		0 0,
		70% 0,
		75% 48%,
		100% 48%,
		100% 51%,
		75% 52%,
		70% 100%,
		0% 100%
	);
`;
