import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar'

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A person or unit identifier: an image with initials as fallback.

\`\`\`tsx
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup } from 'grand-mofftarkit'
\`\`\`

\`AvatarFallback\` shows while the image loads or if it fails, so always include one.
`,
      },
    },
  },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] } },
  args: { size: 'default' },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Avatar {...args}>
      <AvatarFallback>WT</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'default', 'lg'] as const).map(s => (
        <Avatar key={s} size={s}>
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

/** `AvatarBadge` marks presence or status. */
export const WithBadge: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarFallback>DV</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      {['LS', 'HS', 'LO', 'CB'].map(i => (
        <Avatar key={i}>
          <AvatarFallback>{i}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+8</AvatarGroupCount>
    </AvatarGroup>
  ),
}
