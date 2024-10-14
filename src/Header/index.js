import {
	StyledHeader,
	Layers,
	LayerBox,
	Layer1,
	Layer2,
	Layer3,
} from "./styled";

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
	</StyledHeader>
);
