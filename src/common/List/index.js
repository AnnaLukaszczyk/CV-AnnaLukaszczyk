import { ListItem, StyledList } from "./styled";

export const List = ({ content }) => (
	<StyledList>
		<ListItem>{content}</ListItem>
	</StyledList>
);
