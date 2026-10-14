import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'

const meta = {
  title: 'Navigation/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A desktop-application style menu bar. Arrow keys move between menus once one is open.

\`\`\`tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from 'grand-mofftarkit'
\`\`\`

Items support the same options as \`DropdownMenu\`: checkbox, radio, sub-menus and shortcuts.
`,
      },
    },
  },
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="min-h-64">
      <Menubar className="w-fit">
        <MenubarMenu>
          <MenubarTrigger>Bridge</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New order <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Hail <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Alert level</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Yellow</MenubarItem>
                <MenubarItem>Red</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Tactical overlay</MenubarCheckboxItem>
            <MenubarCheckboxItem>Patrol routes</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Palette</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="imperial">
              <MenubarRadioItem value="imperial">Imperial</MenubarRadioItem>
              <MenubarRadioItem value="rebel">Rebel</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
}
