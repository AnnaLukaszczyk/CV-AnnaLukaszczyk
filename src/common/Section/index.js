import { SectionTitle, SectionTitleShadow, StyledSection } from "./styled";

export const Section = ({name}) => (
	<StyledSection>
		<SectionTitleShadow>
			<SectionTitle>{name}</SectionTitle>
		</SectionTitleShadow>
	</StyledSection>
);
