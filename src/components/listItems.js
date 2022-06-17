import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import DnsIcon from "@mui/icons-material/Dns";
import ApiIcon from "@mui/icons-material/Api";
import MemoryIcon from "@mui/icons-material/Memory";
import ForumIcon from "@mui/icons-material/Forum";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import {HOME_ROUTE} from "../utils/constants/routes";
import List from "@mui/material/List";
import {Collapse} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export const MainListItems = () => {
	const [accountsOpen, setAccountsOpen] = React.useState(false);
	const [parsingOpen, setParsingOpen] = React.useState(false);
	const [mailOpen, setMailOpen] = React.useState(false);
	const [settingsOpen, setSettingsOpen] = React.useState(false);

	const handleAccountsClick = () => {
		setAccountsOpen(!accountsOpen);
	};

	const handleParsingClick = () => {
		setParsingOpen(!parsingOpen);
	};

	const handleMailClick = () => {
		setMailOpen(!mailOpen);
	};

	const handleSettingsClick = () => {
		setSettingsOpen(!settingsOpen);
	};

	return (
		<React.Fragment>
			<ListItemButton href={HOME_ROUTE}>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Главная" />
			</ListItemButton>

			<ListItemButton onClick={handleAccountsClick}>
				<ListItemIcon>
					<AccountCircleIcon />
				</ListItemIcon>
				<ListItemText primary="Аккаунты" />
				{accountsOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={accountsOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="Мои" />
					</ListItemButton>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarIcon />
						</ListItemIcon>
						<ListItemText primary="Известные" />
					</ListItemButton>
				</List>
			</Collapse>

			<ListItemButton onClick={handleParsingClick}>
				<ListItemIcon>
					<MemoryIcon />
				</ListItemIcon>
				<ListItemText primary="Парсинг" />
				{parsingOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={parsingOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<GroupsIcon />
						</ListItemIcon>
						<ListItemText primary="По группам" />
					</ListItemButton>
				</List>
			</Collapse>

			<ListItemButton onClick={handleMailClick}>
				<ListItemIcon>
					<MailIcon />
				</ListItemIcon>
				<ListItemText primary="Рассылка" />
				{mailOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={mailOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ForumIcon />
						</ListItemIcon>
						<ListItemText primary="По чатам" />
					</ListItemButton>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="По личным сообщениям" />
					</ListItemButton>
				</List>
			</Collapse>

			<ListItemButton onClick={handleSettingsClick}>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Настройки" />
				{settingsOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={settingsOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<DnsIcon />
						</ListItemIcon>
						<ListItemText primary="Прокси" />
					</ListItemButton>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ApiIcon />
						</ListItemIcon>
						<ListItemText primary="API id" />
					</ListItemButton>
				</List>
			</Collapse>

			<ListItemButton>
				<ListItemIcon>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText primary="Мой профиль" />
			</ListItemButton>
		</React.Fragment>
	);
};

