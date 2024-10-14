import styled from "styled-components";

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