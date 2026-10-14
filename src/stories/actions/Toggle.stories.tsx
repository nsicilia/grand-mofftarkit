import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShieldIcon } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'Actions/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A two-state button. When on it fills with phosphor and its label glows.

\`\`\`tsx
import { Toggle } from 'grand-mofftarkit'
\`\`\`

Use for toolbar-style on/off options. For a settings on/off value use \`Switch\`; for a set of options use \`ToggleGroup\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    pressed: { control: 'boolean', description: 'Controlled state. Omit and use `defaultPressed` for uncontrolled.' },
    disabled: { control: 'boolean' },
  },
  args: { children: 'Cloak', variant: 'default', size: 'default', 'aria-label': 'Toggle cloak' },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Outline: Story = { args: { variant: 'outline', defaultPressed: true } }

export const WithIcon: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle shields" defaultPressed>
      <ShieldIcon /> Shields
    </Toggle>
  ),
}
