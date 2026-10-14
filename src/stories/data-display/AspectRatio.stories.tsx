import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'Data Display/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Keeps its content at a fixed width-to-height ratio, e.g. for images, video or holo-feeds.

\`\`\`tsx
import { AspectRatio } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
  argTypes: { ratio: { control: 'select', options: [1, 4 / 3, 16 / 9, 21 / 9] } },
  args: { ratio: 16 / 9 },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-md">
      <AspectRatio {...args} className="flex items-center justify-center border border-border bg-primary/10 scanlines">
        <span className="font-mono text-xs tracking-widest text-primary uppercase text-glow">Holo-feed</span>
      </AspectRatio>
    </div>
  ),
}
