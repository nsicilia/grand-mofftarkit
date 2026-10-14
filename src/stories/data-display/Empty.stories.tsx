import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

const meta = {
  title: 'Data Display/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The "nothing here yet" state for lists, searches and dashboards. Explain why it's empty and offer the next step.

\`\`\`tsx
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RadarIcon />
        </EmptyMedia>
        <EmptyTitle>No contacts</EmptyTitle>
        <EmptyDescription>
          Long-range sensors show nothing in this sector. Widen the sweep or change sectors.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">Widen sweep</Button>
          <Button size="sm" variant="outline">
            Change sector
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
}

/** Inside a grid panel, without a border. */
export const OnGrid: Story = {
  render: () => (
    <Empty className="grid-bg">
      <EmptyHeader>
        <EmptyTitle>Archive sealed</EmptyTitle>
        <EmptyDescription>Requires Imperial clearance level 5.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
