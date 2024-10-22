import { Layers, LayerBox, Layer1, Layer2, Layer3, StyledFooter } from "./styled";

export const Footer = () => (
	<StyledFooter>
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
	</StyledFooter>
);
