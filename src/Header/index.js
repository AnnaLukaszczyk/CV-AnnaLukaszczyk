import {
	StyledHeader,
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
	Data,
	PhotoBackground,
	Photo,
	NameAndContact,
	Name,
  Icon,
  Mail,
  PhoneNumber,
} from "./styled";
import CVPhoto from "./CV-photo.jpg";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Header = () => (
	<StyledHeader>
		<div>
			<Layers>
				<LayerBox>
					<Layer1 />
				</LayerBox>
				<LayerBox>
					<Layer2 />
				</LayerBox>
				<LayerBox>
					<Layer3 />
				</LayerBox>
			</Layers>
		</div>
		<Data>
			<PhotoBackground>
				<Photo src={CVPhoto} alt="Zdjęcie Anny Łukaszczyk" />
			</PhotoBackground>
			<NameAndContact>
				<Name>Anna Łukaszczyk</Name>
        <Mail><Icon icon={faEnvelope} />anna.lukaszczyk222@gmail.com</Mail>
        <PhoneNumber><Icon icon={faPhone} />+48 607 17 44 33</PhoneNumber>
			</NameAndContact>
		</Data>
	</StyledHeader>
);
