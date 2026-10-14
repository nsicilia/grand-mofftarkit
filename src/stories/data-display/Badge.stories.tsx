import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleDotIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A short status or category tag, set in tracked uppercase mono.

\`\`\`tsx
import { Badge } from 'grand-mofftarkit'
\`\`\`

Use \`asChild\` to make a badge a link.
`,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'] },
    children: { control: 'text' },
  },
  args: { children: 'Online', variant: 'default' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge>Online</Badge>
      <Badge variant="secondary">Standby</Badge>
      <Badge variant="outline">TK-421</Badge>
      <Badge variant="destructive">Breach</Badge>
      <Badge variant="ghost">Archived</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Badge variant="outline">
      <CircleDotIcon /> Tracking
    </Badge>
  ),
}
