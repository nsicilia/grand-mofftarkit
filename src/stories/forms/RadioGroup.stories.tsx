import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const meta = {
  title: 'Forms/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Selects exactly one option from a small set. Radios stay round so they read differently from checkboxes.

\`\`\`tsx
import { RadioGroup, RadioGroupItem } from 'grand-mofftarkit'
\`\`\`

For more than ~5 options use \`Select\`.
`,
      },
    },
  },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    disabled: { control: 'boolean' },
  },
  args: { defaultValue: 'stun', disabled: false },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <RadioGroup {...args}>
      {['stun', 'kill', 'ion'].map(v => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v} id={`mode-${v}`} />
          <Label htmlFor={`mode-${v}`}>{v}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: args => (
    <RadioGroup {...args} className="flex gap-6">
      {['stun', 'kill', 'ion'].map(v => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v} id={`h-${v}`} />
          <Label htmlFor={`h-${v}`}>{v}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
