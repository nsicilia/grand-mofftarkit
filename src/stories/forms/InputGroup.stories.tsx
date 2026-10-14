import type { Meta, StoryObj } from '@storybook/react-vite'
import { CopyIcon, SearchIcon, SendIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'

const meta = {
  title: 'Forms/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An input with icons, text, or buttons attached inside the same frame. Focus glow wraps the whole group.

\`\`\`tsx
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton, InputGroupText } from 'grand-mofftarkit'
\`\`\`

Use \`InputGroupInput\` / \`InputGroupTextarea\` (not plain \`Input\`) inside the group. Position each
\`InputGroupAddon\` with \`align\`: \`inline-start\`, \`inline-end\`, \`block-start\`, \`block-end\`.
`,
      },
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search archives…" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const PrefixAndSuffix: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>holo://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="imperial-archives" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.emp</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput readOnly defaultValue="ACCESS-CODE-1138" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

/** A message composer: textarea with a toolbar addon below. */
export const Composer: Story = {
  render: () => (
    <InputGroup className="max-w-md">
      <InputGroupTextarea placeholder="Compose transmission…" />
      <InputGroupAddon align="block-end">
        <InputGroupText>Encrypted · Imperial code</InputGroupText>
        <InputGroupButton variant="default" size="sm" className="ml-auto">
          Send <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
