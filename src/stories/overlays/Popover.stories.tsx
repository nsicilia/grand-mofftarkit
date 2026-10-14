import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const meta = {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Floating content anchored to a trigger, opened on click. Can hold interactive content like forms.

\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent } from 'grand-mofftarkit'
\`\`\`

Position with \`side\` and \`align\` on \`PopoverContent\`. For hover-only previews use \`HoverCard\`;
for a list of actions use \`DropdownMenu\`.
`,
      },
    },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Set coordinates</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid gap-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Jump vector</p>
            {['X', 'Y', 'Z'].map(a => (
              <div key={a} className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={`p-${a}`}>Axis {a}</Label>
                <Input id={`p-${a}`} defaultValue="0.000" className="col-span-2 h-8" />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
