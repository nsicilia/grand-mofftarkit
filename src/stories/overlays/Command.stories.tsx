import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon, MapIcon, RadioIcon, SettingsIcon, ShieldIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Kbd } from '@/components/ui/kbd'

const meta = {
  title: 'Overlays/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A searchable list of commands, built on [cmdk](https://cmdk.paco.me). Use inline, or as a ⌘K palette with \`CommandDialog\`.

\`\`\`tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog } from 'grand-mofftarkit'
\`\`\`

Filtering is built in: items are matched on their text (or \`value\`). Handle selection with \`onSelect\` on each item.
`,
      },
    },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const Items = () => (
  <>
    <CommandEmpty>No command found.</CommandEmpty>
    <CommandGroup heading="Tactical">
      <CommandItem>
        <CrosshairIcon /> Lock target <CommandShortcut>⌘T</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <ShieldIcon /> Raise shields <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Navigation">
      <CommandItem>
        <MapIcon /> Open star map
      </CommandItem>
      <CommandItem>
        <RadioIcon /> Hail fleet
      </CommandItem>
      <CommandItem>
        <SettingsIcon /> Bridge settings
      </CommandItem>
    </CommandGroup>
  </>
)

export const Inline: Story = {
  render: () => (
    <Command className="max-w-md border border-border">
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <Items />
      </CommandList>
    </Command>
  ),
}

/** Press ⌘K / Ctrl+K, or the button. */
export const Palette: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen(o => !o)
        }
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }, [])
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Command palette <Kbd>⌘K</Kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command…" />
          <CommandList>
            <Items />
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
