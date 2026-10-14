import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDownIcon, MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Actions/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Joins related buttons (and inputs or text) into one segmented control.

\`\`\`tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from 'grand-mofftarkit'
\`\`\`

For a set of **toggleable** options use \`ToggleGroup\` instead.
`,
      },
    },
  },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <Button variant="outline">Fore</Button>
      <Button variant="outline">Port</Button>
      <Button variant="outline">Aft</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Shields</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="Decrease">
        <MinusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Increase">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder="Coordinates" />
      <Button variant="outline">Plot</Button>
    </ButtonGroup>
  ),
}

/** Split button: a main action plus a menu trigger, divided by a separator. */
export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Jump</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More jump options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}
