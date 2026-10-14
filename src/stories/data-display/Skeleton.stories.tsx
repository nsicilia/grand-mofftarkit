import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '@/components/ui/skeleton'

const meta = {
  title: 'Data Display/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A pulsing hatched placeholder shown while content loads. Size it with classes to match the content it replaces.

\`\`\`tsx
import { Skeleton } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { args: { className: 'h-4 w-64' } }

export const CardLoading: Story = {
  render: () => (
    <div className="flex max-w-sm items-center gap-4">
      <Skeleton className="size-12" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
}
