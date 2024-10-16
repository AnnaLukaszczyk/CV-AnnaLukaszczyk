import { Section } from "../../common/Section";
import { StyledMain } from "./styled";

export const Main = () => (
	<StyledMain>
		<Section name="Edukacja" isMain/>
    <Section name="Doświadczenie" isMain/>
    <Section name="Kursy" isMain/>
	</StyledMain>
);
