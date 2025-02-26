import { useContext } from 'react'
import { LayoutContext } from './LayoutProvider.tsx'

export const useLayout = () => {
	const context = useContext(LayoutContext)
	if (!context) {
		throw new Error('useLayoutContext must be used within a LayoutProvider')
	}
	return context
}