import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileTextIcon, ImageIcon, TriangleAlertIcon, XIcon } from 'lucide-react'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from '@/components/ui/attachment'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Data Display/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A file chip with upload state, for composers and message threads.

\`\`\`tsx
import { Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction } from 'grand-mofftarkit'
\`\`\`

\`state\` drives the styling: \`idle\` (dashed), \`uploading\` / \`processing\` (title shimmers), \`error\`, \`done\`.
`,
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['idle', 'uploading', 'processing', 'error', 'done'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'xs'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { state: 'done' },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Attachment {...args}>
      <AttachmentMedia>{args.state === 'uploading' ? <Spinner /> : <FileTextIcon />}</AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>death-star-plans.dat</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const States: Story = {
  render: () => (
    <AttachmentGroup>
      <Attachment state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>schematic.holo</AttachmentTitle>
          <AttachmentDescription>Uploading… 42%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <TriangleAlertIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>intercept.wav</AttachmentTitle>
          <AttachmentDescription>Signal jammed</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="done">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>yavin-recon.png</AttachmentTitle>
          <AttachmentDescription>860 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
}
