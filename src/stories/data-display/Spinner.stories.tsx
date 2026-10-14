import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Data Display/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An indeterminate loading indicator in the phosphor colour. It renders an SVG, so size it with \`size-*\`.

\`\`\`tsx
import { Spinner } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-10" />
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button disabled>
        <Spinner className="text-current" /> Decrypting
      </Button>
      <Badge variant="outline">
        <Spinner /> Syncing
      </Badge>
    </div>
  ),
}
