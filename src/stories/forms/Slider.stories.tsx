import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Picks a value (or range) on a track. The thumb is a diamond; the empty track is hatched.

\`\`\`tsx
import { Slider } from 'grand-mofftarkit'
\`\`\`

Values are always arrays: \`[50]\` for one thumb, \`[20, 80]\` for a range.
`,
      },
    },
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
  },
  args: { defaultValue: [40], min: 0, max: 100, step: 1, disabled: false },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { render: args => <Slider className="max-w-sm" {...args} /> }

export const Range: Story = {
  args: { defaultValue: [20, 75] },
  render: args => <Slider className="max-w-sm" {...args} />,
}

export const WithValue: Story = {
  render: function Render() {
    const [value, setValue] = useState([62])
    return (
      <div className="max-w-sm space-y-3">
        <div className="flex justify-between">
          <Label>Field intensity</Label>
          <span className="font-mono text-sm text-primary">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} />
      </div>
    )
  },
}

export const Vertical: Story = { args: { orientation: 'vertical', defaultValue: [70] } }
