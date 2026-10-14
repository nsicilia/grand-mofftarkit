import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Overlays/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A touch-friendly panel that slides up from the bottom and can be dragged closed. Built on [Vaul](https://vaul.emilkowal.ski).

\`\`\`tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from 'grand-mofftarkit'
\`\`\`

A common pattern is \`Dialog\` on desktop and \`Drawer\` on mobile (see \`useIsMobile\`).
Set \`direction\` on \`Drawer\` for other edges.
`,
      },
    },
  },
  argTypes: { direction: { control: 'inline-radio', options: ['bottom', 'top', 'left', 'right'] } },
  args: { direction: 'bottom' },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: function Render(args) {
    const [thrust, setThrust] = useState([350])
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">Adjust thrust</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Sublight thrust</DrawerTitle>
              <DrawerDescription>Set engine output for approach.</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 p-4">
              <p className="text-center font-mono text-5xl text-primary text-glow">{thrust[0]}</p>
              <Slider value={thrust} onValueChange={setThrust} max={500} step={10} />
            </div>
            <DrawerFooter>
              <Button>Apply</Button>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
}
