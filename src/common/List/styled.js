import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledList = styled.ul`
	margin: 10px 10px 0 10px;
	list-style: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		margin: 10px 8px 0 10px;
	}
`;

export const ListItem = styled.li`
	display: flex;
	align-items: flex-start;
	margin: ${({ $isMain }) => ($isMain ? "3px 12px" : "3px 0")};
	font-size: 15px;
	line-height: 1.4;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		margin: ${({ $isMain }) => ($isMain ? "3px 8px" : "3px 0")};
		font-size: 14px;
		line-height: 1.3;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 13.5px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
		margin: ${({ $isMain }) => ($isMain ? "3px 4px" : "3px 0")};
		font-size: 13px;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	margin: 6px 6px 0 0;
	height: 6px;
	color: ${({ $isMain }) => ($isMain ? "rgba(93, 93, 93, 1)" : "#2e7186")};
`;
