import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible label for a form control. Rendered uppercase and tracked, in the muted colour.

\`\`\`tsx
import { Label } from 'grand-mofftarkit'
\`\`\`

Link it to its control with \`htmlFor\` / \`id\`. Disabled controls placed as a \`peer\` before the label dim it automatically.
`,
      },
    },
  },
  args: { children: 'Hyperdrive status' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithControl: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="armed" />
      <Label htmlFor="armed">Torpedoes armed</Label>
    </div>
  ),
}
