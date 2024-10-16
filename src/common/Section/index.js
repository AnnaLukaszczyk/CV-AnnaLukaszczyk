import { List } from "../List";
import { SectionTitle, SectionTitleShadow, StyledSection } from "./styled";

export const Section = ({ name, isMain, content }) => (
	<StyledSection>
		<SectionTitleShadow>
			<SectionTitle $isMain={isMain}>{name}</SectionTitle>
		</SectionTitleShadow>
		<List content={content} />
	</StyledSection>
);
