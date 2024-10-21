import { Section } from "../../common/Section";
import { Description, StyledMain } from "./styled";
import { CertyficateLink } from "../../common/Links";
import { List } from "../../common/List";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export const Main = () => (
	<StyledMain>
		<Section
			isMain
			name="O mnie"
			content={[
				<Description>
					Od około 1,5 roku interesuję się programowaniem. Praca w mundurze przestała mi sprawiać satysfakcję, a brak możliwości rozwoju skłonił mnie do podjęcia decyzji o zmianie branży. Szczególnie przypadł mi do gustu frontend, dlatego postanowiłam pogłębić swoją wiedzę w tym zakresie.
				</Description>,
			]}
			showIcons={false}
		/>
		<Section
			isMain
			name="Edukacja"
			content={[
				"06.11.2010 r. - Wyższa Szkoła Ekonomii i Innowacji w Lublinie - Wydział Administracji - magister",
			]}
		/>
		<Section
			isMain
			name="Doświadczenie"
			content={[
				<Description>
					28.05.2007 r. - 09.06.2023 r. - Funkcjonariusz Straży Granicznej, ostatnie zajmowane stanowisko: Specjalista Zespołu Kontroli Ruchu Granicznego Grupy Granicznej Placówki SG w Dołhobyczowie.
				</Description>,
				<List
					items={[
						"kontrola dokumentów podróżnych",
						"reagowanie na incydenty związane z bezpieczeństwem",
						"współpraca z innymi służbami i instytucjami",
					]}
					isMain
					customIcon={faMinus}
				/>
			]}
		/>
		<Section
			isMain
			name="Kursy"
			content={[
				<span>
					01.10.2024 r. - Kurs Frontend Developer od podstaw -{" "}
					<CertyficateLink />
				</span>,
			]}
		/>
		<Section isMain name="Projekty" content={[""]} />
	</StyledMain>
);
