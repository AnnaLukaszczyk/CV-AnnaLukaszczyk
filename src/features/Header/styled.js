import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledHeader = styled.header`
	position: absolute;
	height: 220px;
	width: 100%;
	background-color: transparent;
	overflow: hidden;
	z-index: 2;
`;

export const Layers = styled.div`
	position: relative;
	height: 200px;
	width: 100%;
`;

export const LayerBox = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5));
`;

export const Layer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const Layer1 = styled(Layer)`
	background-color: #2e7084;
	clip-path: polygon(0 0, 100% 0, 100% 70%, 86% 100%, 0% 20%);
`;

export const Layer2 = styled(Layer)`
	width: 101%;
	background-color: #2e7186;
	clip-path: polygon(20% 0, 100% 0, 100% 90%);
`;

export const Layer3 = styled(Layer)`
	background-color: #397c90bb;
	background: linear-gradient(
		165deg,
		rgba(57, 124, 144, 1) 54%,
		rgba(57, 124, 144, 0.01) 100%
	);
	clip-path: polygon(0 0, 100% 0, 100% 30%, 64% 96%, 0% 50%);
`;

export const Data = styled.div`
	position: absolute;
	display: flex;
	left: 56px;
	top: 20px;
`;

export const PhotoBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 186px;
	width: 150px;
	border-radius: 3px;
	background: linear-gradient(
		90deg,
		rgba(146, 203, 221, 1) 0%,
		rgba(34, 89, 105, 1) 100%
	);
`;

export const Photo = styled.img`
	height: 180px;
	width: 144px;
`;

export const NameAndContact = styled.div`
	margin-left: 100px;
	color: azure;
`;

export const Name = styled.h1`
	margin-top: 16px;
	font-size: 32px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
`;

export const Icon = styled(FontAwesomeIcon)`
	margin-right: 10px;
	filter: drop-shadow(1px 1px 2px rgb(26, 26, 26));
`;

export const Mail = styled.p`
	margin: 10px 0;
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
`;

export const PhoneNumber = styled.p`
	text-shadow: 1px 1px 2px rgb(26, 26, 26);
`;
