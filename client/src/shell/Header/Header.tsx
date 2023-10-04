import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppShell, Avatar, Button, Container, Menu, Text, UnstyledButton, rem } from '@mantine/core'
import {
	IconAtom2Filled,
	IconDashboard,
	IconLogout,
	IconUser,
	IconSettings
} from '@tabler/icons-react'
import { AuthContext } from '@contexts'
import { LOG_IN_PATH, SIGN_UP_PATH } from '@routes'

export const HEADER_HEIGHT = rem(60)

export const Header = function Header() {
	const location = useLocation()
	const isAuthRoute = location?.pathname === LOG_IN_PATH || location?.pathname === SIGN_UP_PATH
	const {
		logOut,
		user: { auth, username }
	} = useContext(AuthContext)

	return (
		<AppShell.Header h={HEADER_HEIGHT} data-testid="shell-header" pos="relative">
			<Container
				display="flex"
				h="100%"
				size="xl"
				style={{
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<Text c="inherit" component={Link} lh="0" td="none" to="/">
					{/* TODO: spinning animation while loading */}
					<IconAtom2Filled size={36} />
				</Text>
				{!auth && !isAuthRoute && (
					<span>
						{/* TODO: loading icon when authenticating */}
						{/* TODO: mobile - login icon, hamburger */}
						<Button
							color="violet"
							component={Link}
							size="md"
							state={{ from: location }}
							to="/login"
							type="button"
							variant="outline"
						>
							Log in
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
							<Menu.Item leftSection={<IconSettings size={14} />}>
								<Text c="inherit" component={Link} td="none" to="/settings">
									Account Settings
								</Text>
							</Menu.Item>
							<Menu.Item leftSection={<IconDashboard size={14} />}>
								{/* Text component= Link */}
								<Text c="inherit" component={Link} td="none" to="/dashboard">
									Dashboard
								</Text>
							</Menu.Item>
							<Menu.Divider />
							<Menu.Item
								color="red"
								component="button"
								leftSection={<IconLogout size={14} />}
								onClick={() => logOut(username)}
							>
								Log out
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				)}
			</Container>
		</AppShell.Header>
	)
}
