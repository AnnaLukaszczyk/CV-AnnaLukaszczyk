import { ListItem, StyledList, Icon } from "./styled";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const List = ({ items = [] }) => (
	<StyledList>
		{items.map((item, index) => (
			<ListItem key={index}><Icon icon={faCircle} />{item}</ListItem>
		))}
	</StyledList>
);
