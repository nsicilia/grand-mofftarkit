import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

const meta = {
  title: 'Data Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Shows a keyboard key or shortcut.

\`\`\`tsx
import { Kbd, KbdGroup } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
  args: { children: '⌘' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Shortcut: Story = {
  render: () => (
    <p className="font-mono text-sm text-muted-foreground">
      Fire torpedoes:{' '}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>F</Kbd>
      </KbdGroup>
    </p>
  ),
}
