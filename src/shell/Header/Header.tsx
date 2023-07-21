import {
	Avatar,
	Container,
	Header as AppHeader,
	Menu,
	Text,
	UnstyledButton,
	createStyles,
	rem
} from '@mantine/core'
import { IconAtom2Filled, IconUser } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const HEADER_HEIGHT = rem(60)

// TODO: theme
const useStyles = createStyles(() => ({
	root: {
		position: 'relative',
		zIndex: 1
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%'
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
	logo: {
		lineHeight: 0
	}
}))

export default function Header() {
	const { classes } = useStyles()
	const auth = true

	// TODO: authentication
	// user details
	// avatar
	// const user = true

	return (
		<AppHeader className={classes.root} data-testid="shell-header" height={HEADER_HEIGHT}>
			<Container className={classes.header} size="xl">
				<div className={classes.logo} data-testid="shell-header-logo">
					<Link to="/">
						{/* TODO: spin while loading */}
						<IconAtom2Filled size={36} />
					</Link>
				</div>
				{!auth && (
					<span>
						<Link className={classes.link} to="/login">
							<Text size="lg">Log In</Text>
						</Link>
					</span>
				)}
				{auth && (
					<Menu
						data-testid="shell-header-menu"
						shadow="md"
						width={200}
						position="bottom-start"
					>
						<Menu.Target>
							<UnstyledButton>
								<Avatar radius="xl" variant="outline">
									<IconUser />
								</Avatar>
							</UnstyledButton>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item>
								<Link className={classes.link} to="/settings">
									Account Settings
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link className={classes.link} to="/dashboard">
									Dashboard
								</Link>
							</Menu.Item>
							<Menu.Divider />
							{/* TODO: onLogOut */}
							<Menu.Item color="red">Log out</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				)}
			</Container>
		</AppHeader>
	)
}
