import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A styled dropdown for choosing one value from a list.

\`\`\`tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'grand-mofftarkit'
\`\`\`

- Needs to be searchable? Use \`Combobox\`.
- Need native mobile pickers or a plain \`<form>\` post? Use \`NativeSelect\`.
`,
      },
    },
  },
  argTypes: { disabled: { control: 'boolean' } },
  args: { defaultValue: 'scarif', disabled: false },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className="w-60">
        <SelectValue placeholder="Choose a destination" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="scarif">Scarif</SelectItem>
        <SelectItem value="yavin">Yavin IV</SelectItem>
        <SelectItem value="hoth">Hoth</SelectItem>
        <SelectItem value="endor">Endor</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Grouped: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-60">
        <SelectValue placeholder="Choose a vessel" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Imperial</SelectLabel>
          <SelectItem value="isd">Star Destroyer</SelectItem>
          <SelectItem value="tie">TIE Fighter</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Rebel</SelectLabel>
          <SelectItem value="xwing">X-wing</SelectItem>
          <SelectItem value="falcon">Millennium Falcon</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = {
  render: () => (
    <Select defaultValue="1">
      <SelectTrigger size="sm" className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Sector 1</SelectItem>
        <SelectItem value="2">Sector 2</SelectItem>
      </SelectContent>
    </Select>
  ),
}
