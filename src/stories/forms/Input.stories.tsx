import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Single-line text field. Text is set in the mono face; focus adds the phosphor glow.

\`\`\`tsx
import { Input, Label } from 'grand-mofftarkit'
\`\`\`

Always pair with a \`Label\` (or wrap in \`Field\`). Set \`aria-invalid\` to show the error state.
Need an icon, prefix or button inside the field? Use \`InputGroup\`.
`,
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search', 'file'] },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean', description: 'Shows the destructive error state.' },
  },
  args: { type: 'text', placeholder: 'TK-421', disabled: false },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { render: args => <Input className="max-w-sm" {...args} /> }

export const WithLabel: Story = {
  render: () => (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="callsign">Callsign</Label>
      <Input id="callsign" placeholder="Red Five" />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="code">Clearance code</Label>
      <Input id="code" defaultValue="1138" aria-invalid />
      <p className="font-mono text-xs text-destructive">Code is out of date.</p>
    </div>
  ),
}

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Locked by command' } }

export const File: Story = { args: { type: 'file' } }
