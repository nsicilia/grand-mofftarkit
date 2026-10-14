import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Actions/Toggle Group',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A set of toggles. \`type="single"\` behaves like a radio group, \`type="multiple"\` like checkboxes.

\`\`\`tsx
import { ToggleGroup, ToggleGroupItem } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
  argTypes: {
    type: {
      control: false,
      description: '`single` (one value, string) or `multiple` (array). See the Multiple story.',
    },
    variant: { control: 'inline-radio', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    spacing: { control: { type: 'number', min: 0, max: 4 }, description: 'Gap between items. `0` joins them.' },
  },
  args: { type: 'single', variant: 'outline', size: 'default', spacing: 0 },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <ToggleGroup variant={args.variant} size={args.size} spacing={args.spacing} type="single" defaultValue="stun">
      <ToggleGroupItem value="stun">Stun</ToggleGroupItem>
      <ToggleGroupItem value="kill">Kill</ToggleGroupItem>
      <ToggleGroupItem value="ion">Ion</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline" defaultValue={['fore', 'aft']}>
      <ToggleGroupItem value="fore">Fore</ToggleGroupItem>
      <ToggleGroupItem value="port">Port</ToggleGroupItem>
      <ToggleGroupItem value="starboard">Starboard</ToggleGroupItem>
      <ToggleGroupItem value="aft">Aft</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Spaced: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" spacing={2} defaultValue="1">
      <ToggleGroupItem value="1">Wing 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Wing 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Wing 3</ToggleGroupItem>
    </ToggleGroup>
  ),
}
