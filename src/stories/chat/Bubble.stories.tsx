import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from '@/components/ui/bubble'

const meta = {
  title: 'Chat/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A chat message bubble. Usually placed inside \`Message\`, which adds the avatar and header.

\`\`\`tsx
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from 'grand-mofftarkit'
\`\`\`

- \`align="end"\` for the current user's messages.
- Group consecutive messages from the same sender in \`BubbleGroup\`.
- \`BubbleContent asChild\` can render a \`<button>\` or \`<a>\` for clickable bubbles.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
    },
    align: { control: 'inline-radio', options: ['start', 'end'] },
  },
  args: { variant: 'default', align: 'start' },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex max-w-md flex-col">
      <Bubble {...args}>
        <BubbleContent>Help me, Obi-Wan Kenobi. You're my only hope.</BubbleContent>
      </Bubble>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3">
      {(['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const).map(v => (
        <Bubble key={v} variant={v}>
          <BubbleContent>variant=&quot;{v}&quot;</BubbleContent>
        </Bubble>
      ))}
    </div>
  ),
}

export const Conversation: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-6">
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>Lord Vader, the rebel ship has been boarded.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>No plans were found in the main computer.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>Tear this ship apart until you've found those plans.</BubbleContent>
        <BubbleReactions>⚡</BubbleReactions>
      </Bubble>
    </div>
  ),
}
