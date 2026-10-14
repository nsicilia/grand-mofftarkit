import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Marker, MarkerContent } from '@/components/ui/marker'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@/components/ui/message'

const meta = {
  title: 'Chat/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A chat row: avatar, sender header, one or more bubbles, and a footer (time, status).

\`\`\`tsx
import { Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter, MessageGroup } from 'grand-mofftarkit'
\`\`\`

\`align="end"\` mirrors the layout for the current user. Put \`Bubble\`s inside \`MessageContent\`.
`,
      },
    },
  },
  argTypes: { align: { control: 'inline-radio', options: ['start', 'end'] } },
  args: { align: 'start' },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-lg">
      <Message {...args}>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Grand Moff Tarkin</MessageHeader>
          <Bubble variant={args.align === 'end' ? 'default' : 'muted'}>
            <BubbleContent>You may fire when ready.</BubbleContent>
          </Bubble>
          <MessageFooter>14:02 · Delivered</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const Thread: Story = {
  render: () => (
    <MessageGroup className="max-w-lg gap-6">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Darth Vader</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>I find your lack of faith disturbing.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Enough of this! Vader, release him.</BubbleContent>
          </Bubble>
          <MessageFooter>Read</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
