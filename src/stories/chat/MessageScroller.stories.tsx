import type { Meta, StoryObj } from '@storybook/react-vite'
import { SendIcon } from 'lucide-react'
import { useState } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Message, MessageAvatar, MessageContent } from '@/components/ui/message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller'

const meta = {
  title: 'Chat/Message Scroller',
  component: MessageScroller,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The scroll container for a chat thread. It sticks to the bottom as new messages arrive, keeps your place
when you scroll up, and shows a "jump to latest" button.

\`\`\`tsx
import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent,
  MessageScrollerItem, MessageScrollerButton } from 'grand-mofftarkit'
\`\`\`

Structure: \`Provider > MessageScroller > Viewport > Content > Item*\`, with \`MessageScrollerButton\`
as a sibling of the viewport. Give each item a stable \`messageId\`. The container needs a height.
`,
      },
    },
  },
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

const SEED = [
  ['DV', 'The Emperor has dissolved the Council permanently.'],
  ['GT', 'The regional governors now have direct control over their territories.'],
  ['DV', 'Fear will keep the local systems in line.'],
  ['GT', 'Fear of this battle station.'],
  ['DV', 'And what of the rebellion?'],
  ['GT', 'They will be crushed with one swift stroke.'],
]

/** Type a message and send; the thread auto-scrolls. Scroll up to see the jump button. */
export const Playground: Story = {
  render: function Render() {
    const [messages, setMessages] = useState(SEED.map(([who, text], i) => ({ id: String(i), who, text })))
    const [draft, setDraft] = useState('')
    const send = () => {
      if (!draft.trim()) return
      setMessages(m => [...m, { id: String(m.length), who: 'ME', text: draft }])
      setDraft('')
    }
    return (
      <div className="flex h-[28rem] max-w-lg flex-col border border-border">
        <MessageScrollerProvider>
          <MessageScroller>
            <MessageScrollerViewport className="p-4">
              <MessageScrollerContent className="gap-4">
                {messages.map(m => (
                  <MessageScrollerItem key={m.id} messageId={m.id}>
                    <Message align={m.who === 'ME' ? 'end' : 'start'}>
                      {m.who !== 'ME' && (
                        <MessageAvatar>
                          <Avatar size="sm">
                            <AvatarFallback>{m.who}</AvatarFallback>
                          </Avatar>
                        </MessageAvatar>
                      )}
                      <MessageContent>
                        <Bubble variant={m.who === 'ME' ? 'default' : 'muted'}>
                          <BubbleContent>{m.text}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
        <form
          className="border-t border-border p-3"
          onSubmit={e => {
            e.preventDefault()
            send()
          }}
        >
          <InputGroup>
            <InputGroupInput value={draft} onChange={e => setDraft(e.target.value)} placeholder="Transmit…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton type="submit" size="icon-xs" aria-label="Send">
                <SendIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    )
  },
}
