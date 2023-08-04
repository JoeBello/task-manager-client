import { AppShell, Container, MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { AuthProvider } from '@contexts'

export default function Shell() {
	return (
		// TODO: theme
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<AuthProvider>
				<AppShell data-testid="shell" header={<Header />} padding="sm">
					<Container size="xl">
						<Outlet />
					</Container>
				</AppShell>
			</AuthProvider>
		</MantineProvider>
	)
}
