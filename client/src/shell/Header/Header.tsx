import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	Avatar,
	Button,
	Container,
	Header as AppHeader,
	Menu,
	UnstyledButton,
	createStyles,
	rem
} from '@mantine/core'
import {
	IconAtom2Filled,
	IconDashboard,
	// TODO
	// IconLogin,
	IconLogout,
	IconUser,
	IconSettings
} from '@tabler/icons-react'
import { AuthContext } from '@contexts'
import { LOG_IN_PATH, SIGN_UP_PATH } from '@routes'

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
	const location = useLocation()
	const isAuthRoute = location?.pathname === LOG_IN_PATH || location?.pathname === SIGN_UP_PATH
	const { classes } = useStyles()
	const {
		logOut,
		user: { auth, username }
	} = useContext(AuthContext)

	return (
		<AppHeader className={classes.root} data-testid="shell-header" height={HEADER_HEIGHT}>
			<Container className={classes.header} size="xl">
				<div className={classes.logo} data-testid="shell-header-logo">
					<Link to="/">
						{/* TODO: spinning animation while loading */}
						<IconAtom2Filled size={36} />
					</Link>
				</div>
				{!auth && !isAuthRoute && (
					<span>
						{/* TODO: loading icon when authenticating */}
						{/* TODO: mobile - login icon, hamburger */}

						<Button
							color="violet"
							component={Link}
							state={{ from: location }}
							to="/login"
							variant="outline"
							size="md"
						>
							Log In
						</Button>
					</span>
				)}
				{/*
					// TODO: types - username should be guaranteed based on auth
				 */}
				{auth && username && (
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
							<Menu.Item icon={<IconSettings size={14} />}>
								<Link className={classes.link} to="/settings">
									Account Settings
								</Link>
							</Menu.Item>
							<Menu.Item icon={<IconDashboard size={14} />}>
								<Link className={classes.link} to="/dashboard">
									Dashboard
								</Link>
							</Menu.Item>
							<Menu.Divider />
							<Menu.Item
								color="red"
								component="button"
								icon={<IconLogout size={14} />}
								onClick={() => logOut(username)}
							>
								Log out
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				)}
			</Container>
		</AppHeader>
	)
}
