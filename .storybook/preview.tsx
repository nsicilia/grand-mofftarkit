import { withThemeByDataAttribute } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'
import { TooltipProvider } from '../src/lib/components/ui/tooltip'
import '../src/lib/tailwind/theme.css'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <TooltipProvider>
        <div className="min-h-screen bg-background p-8 text-foreground">
          <Story />
        </div>
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
