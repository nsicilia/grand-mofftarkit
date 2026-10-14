import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const meta = {
  title: 'Feedback/Hover Card',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A preview card shown when hovering a link, for sighted mouse users. Richer than a tooltip.

\`\`\`tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from 'grand-mofftarkit'
\`\`\`

The content must not be the only way to reach information, since touch and keyboard users won't see it.
`,
      },
    },
  },
  argTypes: { openDelay: { control: 'number' }, closeDelay: { control: 'number' } },
  args: { openDelay: 200, closeDelay: 100 },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="p-8">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="link">@grandmofftarkin</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4">
            <Avatar size="lg">
              <AvatarFallback>GT</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-[0.15em] text-primary uppercase">Wilhuff Tarkin</p>
              <p className="font-mono text-xs text-muted-foreground">Grand Moff, Outer Rim Territories.</p>
              <p className="font-mono text-xs text-muted-foreground">Commissioned 0 BBY</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}
