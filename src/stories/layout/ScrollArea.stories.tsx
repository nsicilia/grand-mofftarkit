import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Layout/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A scroll container with a thin phosphor scrollbar that looks the same on every OS.

\`\`\`tsx
import { ScrollArea, ScrollBar } from 'grand-mofftarkit'
\`\`\`

Give it a fixed height (or width). Add \`<ScrollBar orientation="horizontal" />\` for horizontal scrolling.
`,
      },
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const SECTORS = Array.from({ length: 12 }, (_, i) => `Sector ${i + 1}`)
const LOG = Array.from({ length: 40 }, (_, i) => `${String(i).padStart(3, '0')} · TK-${400 + i} reported`)

export const Playground: Story = {
  render: () => (
    <ScrollArea className="h-64 w-72 border border-border">
      <div className="p-4">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">Duty log</p>
        {LOG.map(l => (
          <div key={l}>
            <p className="py-1 font-mono text-sm">{l}</p>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 border border-border whitespace-nowrap">
      <div className="flex gap-4 p-4">
        {SECTORS.map(s => (
          <div
            key={s}
            className="flex size-28 shrink-0 items-center justify-center border border-border grid-bg font-mono text-xs"
          >
            {s}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
