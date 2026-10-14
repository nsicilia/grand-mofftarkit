import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const meta = {
  title: 'Overlays/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A menu of actions or options opened from a button. Fully keyboard navigable.

\`\`\`tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuShortcut } from 'grand-mofftarkit'
\`\`\`

For right-click menus use \`ContextMenu\`; for an app-style menu bar use \`Menubar\`.
Use \`variant="destructive"\` on an item for dangerous actions.
`,
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="p-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Officer menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Grand Moff Tarkin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon /> Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon /> Settings <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Summon</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Lord Vader</DropdownMenuItem>
                <DropdownMenuItem>Admiral Motti</DropdownMenuItem>
                <DropdownMenuItem>General Tagge</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOutIcon /> Dissolve Senate
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

export const CheckboxAndRadio: Story = {
  render: function Render() {
    const [shields, setShields] = useState(true)
    const [beam, setBeam] = useState(false)
    const [mode, setMode] = useState('stun')
    return (
      <div className="p-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Systems</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Systems</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={shields} onCheckedChange={setShields}>
              Deflector shields
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={beam} onCheckedChange={setBeam}>
              Tractor beam
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Blaster mode</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={mode} onValueChange={setMode}>
              <DropdownMenuRadioItem value="stun">Stun</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kill">Kill</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}
