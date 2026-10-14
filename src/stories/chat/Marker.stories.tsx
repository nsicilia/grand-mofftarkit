import type { Meta, StoryObj } from '@storybook/react-vite'
import { LockIcon } from 'lucide-react'
import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'

const meta = {
  title: 'Chat/Marker',
  component: Marker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A small inline label in a thread: date dividers, system events ("encryption enabled"), unread markers.

\`\`\`tsx
import { Marker, MarkerIcon, MarkerContent } from 'grand-mofftarkit'
\`\`\`

\`variant\`: \`default\` (plain), \`separator\` (lines either side), \`border\` (underlined).
`,
      },
    },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'separator', 'border'] } },
  args: { variant: 'separator' },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-md">
      <Marker {...args}>
        <MarkerContent>Cycle 7 · 03:00</MarkerContent>
      </Marker>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="max-w-md">
      <Marker>
        <MarkerIcon>
          <LockIcon />
        </MarkerIcon>
        <MarkerContent>Channel encrypted with Imperial code</MarkerContent>
      </Marker>
    </div>
  ),
}
