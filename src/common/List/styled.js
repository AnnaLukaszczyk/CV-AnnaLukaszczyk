import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledList = styled.ul`
	margin: 12px 10px 0 10px;
	list-style: none;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: flex-start;
	margin: 5px 0;
	font-size: 15px;
	line-height: 1.4;
`;

export const Icon = styled(FontAwesomeIcon)`
	margin: 6px 6px 0 0;
	height: 6px;
	color: ${({ $isMain }) => ($isMain ? "rgba(93, 93, 93, 1)" : "#2e7186")};
`;
