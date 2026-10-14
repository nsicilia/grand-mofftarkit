import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Selects one or more independent options. Glows when checked.

\`\`\`tsx
import { Checkbox } from 'grand-mofftarkit'
\`\`\`

Use \`checked\` + \`onCheckedChange\` for controlled state, \`defaultChecked\` for uncontrolled.
For mutually exclusive options use \`RadioGroup\`.
`,
      },
    },
  },
  argTypes: {
    checked: { control: 'select', options: [true, false, 'indeterminate'] },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean' },
  },
  args: { disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="override" defaultChecked />
      <Label htmlFor="override">Manual override</Label>
    </div>
  ),
}

export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Checkbox id="lock" checked={checked} onCheckedChange={v => setChecked(v === true)} />
          <Label htmlFor="lock">Target lock</Label>
        </div>
        <p className="font-mono text-xs text-muted-foreground">checked = {String(checked)}</p>
      </div>
    )
  },
}

export const List: Story = {
  render: () => (
    <div className="space-y-3">
      {['Deflector shields', 'Turbolasers', 'Tractor beam', 'Hyperdrive'].map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <Checkbox id={`sys-${i}`} defaultChecked={i < 2} disabled={i === 3} />
          <Label htmlFor={`sys-${i}`}>{s}</Label>
        </div>
      ))}
    </div>
  ),
}
