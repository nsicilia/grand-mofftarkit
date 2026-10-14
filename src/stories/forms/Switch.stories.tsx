import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An on/off setting that takes effect immediately. Glows when on.

\`\`\`tsx
import { Switch } from 'grand-mofftarkit'
\`\`\`

If the change only applies after a "Save" button, use a \`Checkbox\` instead.
`,
      },
    },
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'default'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { size: 'default', disabled: false },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="cloak" defaultChecked />
      <Label htmlFor="cloak">Sensor jamming</Label>
    </div>
  ),
}

export const Small: Story = { args: { size: 'sm', defaultChecked: true } }

export const SettingsList: Story = {
  render: () => (
    <div className="max-w-sm divide-y divide-border border border-border">
      {['Auto-targeting', 'Comm relay', 'Proximity alarm'].map((s, i) => (
        <div key={s} className="flex items-center justify-between p-3">
          <Label htmlFor={`s-${i}`}>{s}</Label>
          <Switch id={`s-${i}`} defaultChecked={i !== 1} />
        </div>
      ))}
    </div>
  ),
}
