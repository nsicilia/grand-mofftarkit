import { withThemeByDataAttribute } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'
import { Toaster } from '../src/lib/components/ui/sonner'
import { TooltipProvider } from '../src/lib/components/ui/tooltip'
import '../src/lib/tailwind/theme.css'
import theme from './theme'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    docs: { theme },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Introduction', 'Themes', 'Tokens', 'Typography', 'Utilities'],
          'Actions',
          'Forms',
          'Data Display',
          'Feedback',
          'Overlays',
          'Navigation',
          'Layout',
          'Chat',
          'Examples',
        ],
      },
    },
  },
  decorators: [
    (Story, { viewMode }) => (
      <TooltipProvider>
        <div className={viewMode === 'docs' ? 'bg-background p-6' : 'min-h-screen bg-background p-8'}>
          <Story />
        </div>
        <Toaster />
      </TooltipProvider>
    ),
    withThemeByDataAttribute({
      themes: { imperial: 'imperial', blueprint: 'blueprint', rebel: 'rebel', terminal: 'terminal' },
      defaultTheme: 'imperial',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
