import { Section } from "../../common/Section";
import { StyledAside } from "./styled";

export const Aside = () => (
	<StyledAside>
		<Section
			name="Umiejętności"
			content={[
				"znajomość Responsive Web Design (RWD) i zasad projektowania UI",
				"podstawowa znajomość: HTML, CSS (Flexbox, Grid), JavaScript, React",
				"GitHub",
				"Figma",
				"Trello",
				"zdolność analitycznego myślenia",
				"umiejętność efektywnego zarządzania czasem",
				"bezproblemowa praca w zespole",
				"język angielski - B1",
			]}
		/>
		<Section
			name="Mocne strony"
			content={[
				"kreatywność",
				"dokładność i szczegółowość", 
				"szybkie uczenie się"
			]}
		/>
		<Section
			name="Jak pracuję"
			content={[
				"energicznie", 
				"zadaniowo", 
				"skutecznie", 
				"efektywnie"
			]}
		/>
	</StyledAside>
);
