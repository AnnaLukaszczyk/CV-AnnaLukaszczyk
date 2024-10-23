import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Link = styled.a`
color: black;
font-weight: bold;
text-decoration: none;
`

export const ContactLink = styled.a`
color: azure;
text-decoration: none;
`

export const Icon = styled(FontAwesomeIcon)`
	margin-right: 10px;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
`;