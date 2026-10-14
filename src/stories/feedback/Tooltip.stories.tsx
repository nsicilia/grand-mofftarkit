import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A short label shown on hover or keyboard focus.

\`\`\`tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from 'grand-mofftarkit'
\`\`\`

Wrap your app once in \`<TooltipProvider>\`. Use \`asChild\` on the trigger so the tooltip attaches to your
button rather than adding a wrapper. Don't put essential information or interactive content in a tooltip;
use \`Popover\` or \`HoverCard\` for that.
`,
      },
    },
  },
  argTypes: {
    defaultOpen: { control: 'boolean' },
    delayDuration: { control: 'number' },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="p-12">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Latency 12ms</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex gap-4 p-16">
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const IconButtonWithShortcut: Story = {
  render: () => (
    <div className="p-12">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" aria-label="Lock target">
            <CrosshairIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Lock target <Kbd>T</Kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
