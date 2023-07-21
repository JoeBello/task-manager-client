import { AppShell, MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

export default function Shell() {
	return (
		// TODO: theme
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<AppShell data-testid="shell" header={<Header />} padding="sm">
				<Outlet />
			</AppShell>
		</MantineProvider>
	)
}
