import { AppShell, Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Outlet } from 'react-router-dom'
import { Header, HEADER_HEIGHT } from '../Header'
import { AuthProvider } from '@contexts'

export default function Shell() {
	return (
		// TODO: theme
		<MantineProvider>
			<AuthProvider>
				<AppShell data-testid="shell" padding="sm">
					<Header />
					<Container
						size="xl"
						style={{
							height: `calc(100vh - ${HEADER_HEIGHT})`
						}}
					>
						<Outlet />
					</Container>
				</AppShell>
			</AuthProvider>
		</MantineProvider>
	)
}
