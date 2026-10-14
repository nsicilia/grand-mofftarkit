import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

const meta = {
  title: 'Overlays/Context Menu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A menu opened by right-click (or long-press on touch) on an area.

\`\`\`tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from 'grand-mofftarkit'
\`\`\`

Same item components as \`DropdownMenu\` (checkbox, radio, sub-menus, shortcuts). Context menus are hard to
discover, so every action in one should also be available somewhere visible.
`,
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-48 max-w-md items-center justify-center border border-dashed border-primary/50 grid-bg font-mono text-sm text-muted-foreground">
        Right-click the sector map
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>Sector 7G</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Scan <ContextMenuShortcut>S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Plot course <ContextMenuShortcut>P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>Jump (navicomputer offline)</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show patrol routes</ContextMenuCheckboxItem>
        <ContextMenuItem variant="destructive">Mark hostile</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
