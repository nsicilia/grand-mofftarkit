import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Multi-line text field. Grows with its content (\`field-sizing: content\`).

\`\`\`tsx
import { Textarea } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  args: { placeholder: 'Enter transmission…' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { render: args => <Textarea className="max-w-md" {...args} /> }

export const WithLabel: Story = {
  render: () => (
    <div className="grid max-w-md gap-2">
      <Label htmlFor="report">Mission report</Label>
      <Textarea id="report" placeholder="Describe the engagement…" />
    </div>
  ),
}
