import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Data Display/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Shows completion of a task or a level (power, shields, fuel). Rendered as a segmented bar over a hatched track.

\`\`\`tsx
import { Progress } from 'grand-mofftarkit'
\`\`\`

\`value\` is 0–100. For an unknown duration use \`Spinner\` or \`Skeleton\` instead.
`,
      },
    },
  },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
  args: { value: 64 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { render: args => <Progress className="max-w-md" {...args} /> }

export const Animated: Story = {
  render: function Render() {
    const [v, setV] = useState(8)
    useEffect(() => {
      const t = setInterval(() => setV(x => (x >= 100 ? 0 : x + 4)), 300)
      return () => clearInterval(t)
    }, [])
    return (
      <div className="max-w-md space-y-2">
        <div className="flex justify-between text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          <span>Hyperdrive charge</span>
          <span className="font-mono text-primary">{v}%</span>
        </div>
        <Progress value={v} />
      </div>
    )
  },
}
