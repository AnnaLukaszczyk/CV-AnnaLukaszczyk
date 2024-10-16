import { SectionTitle, SectionTitleShadow, StyledSection } from "./styled";

export const Section = ({ name, isMain }) => (
	<StyledSection>
		<SectionTitleShadow>
			<SectionTitle $isMain={isMain}>{name}</SectionTitle>
		</SectionTitleShadow>
	</StyledSection>
);
