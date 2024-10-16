import { StyledWrapper } from "./styled";
import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";

export const Wrapper = () => (
	<StyledWrapper>
		<Header />
		<Main />
		<Aside />
	</StyledWrapper>
);
