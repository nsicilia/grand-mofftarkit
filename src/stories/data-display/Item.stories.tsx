import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRightIcon, RadioTowerIcon, ShieldCheckIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const meta = {
  title: 'Data Display/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A flexible row: media, title + description, and actions. The building block for lists, settings rows and menus.

\`\`\`tsx
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from 'grand-mofftarkit'
\`\`\`

Use \`asChild\` to make the whole row a link. Stack rows in \`ItemGroup\` with \`ItemSeparator\` between them.
`,
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'muted'] },
    size: { control: 'inline-radio', options: ['default', 'sm'] },
  },
  args: { variant: 'outline', size: 'default' },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Item {...args} className="max-w-md">
      <ItemMedia variant="icon">
        <ShieldCheckIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Deflector shield</ItemTitle>
        <ItemDescription>Projected from the forest moon of Endor.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Inspect
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Item asChild variant="outline" className="max-w-md">
      <a href="#comms">
        <ItemMedia variant="icon">
          <RadioTowerIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Comm array</ItemTitle>
          <ItemDescription>3 unread transmissions</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </a>
    </Item>
  ),
}

export const List: Story = {
  render: () => (
    <ItemGroup className="max-w-md border border-border">
      {[
        ['GT', 'Grand Moff Tarkin', 'Commander, Death Star'],
        ['DV', 'Darth Vader', 'Supreme Commander'],
        ['AM', 'Admiral Motti', 'Senior Commander'],
      ].map(([i, n, r], idx) => (
        <div key={n}>
          {idx > 0 && <ItemSeparator />}
          <Item size="sm">
            <ItemMedia>
              <Avatar>
                <AvatarFallback>{i}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{n}</ItemTitle>
              <ItemDescription>{r}</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      ))}
    </ItemGroup>
  ),
}
