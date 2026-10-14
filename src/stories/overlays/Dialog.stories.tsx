import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A modal window over a scanline overlay. Focus is trapped inside; Esc or the × closes it.

\`\`\`tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from 'grand-mofftarkit'
\`\`\`

- Always include a \`DialogTitle\` (screen readers announce it). Hide it visually with \`className="sr-only"\` if needed.
- For a confirm/cancel question about a destructive action, use \`AlertDialog\`.
- On mobile, \`Drawer\` often works better.
`,
      },
    },
  },
  argTypes: { defaultOpen: { control: 'boolean' } },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Transmit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm transmission</DialogTitle>
          <DialogDescription>Message will be relayed to all sector command.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Abort</Button>
          </DialogClose>
          <Button>Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit pilot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={e => e.preventDefault()} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>Pilot record</DialogTitle>
            <DialogDescription>Changes are logged with command.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="d-name">Name</Label>
            <Input id="d-name" defaultValue="Biggs Darklighter" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="d-sign">Callsign</Label>
            <Input id="d-sign" defaultValue="Red Three" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  ),
}

/** Control `open` yourself, e.g. to close after an async save. */
export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open from state</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled dialog</DialogTitle>
              <DialogDescription>open = {String(open)}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Done</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
