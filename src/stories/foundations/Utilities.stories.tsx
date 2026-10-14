import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

const meta = {
  title: 'Foundations/Utilities',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Tailwind utilities shipped with the stylesheet. They give your own components the same look as the library.
All follow the active palette.

| Class | Effect | Used by |
| --- | --- | --- |
| \`chamfer\` | Cuts the top-left and bottom-right corners (clip-path). Clips outer shadows, so pair it with fills, not outlines. | Button (filled variants) |
| \`hud-corners\` | Card fill plus bracket marks in each corner. The host needs \`relative\`, \`absolute\` or \`fixed\` positioning. | Card, Dialog |
| \`scanlines\` | CRT raster lines. | Dialog / Sheet / Drawer overlays |
| \`grid-bg\` | Blueprint targeting grid. | — |
| \`hatch\` | Diagonal hatching for empty tracks. | Progress, Slider, Skeleton |
| \`text-glow\` | Phosphor bloom around text. | Titles, active tabs |
| \`shadow-glow\` | Phosphor bloom around a box. | Focus states, popovers |
| \`shimmer\` | Animated sweep across text while loading. | Attachment |
`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Tile = ({ label, className, children }: { label: string; className: string; children?: ReactNode }) => (
  <div className="space-y-2">
    <div className={`relative flex h-28 items-center justify-center border border-border ${className}`}>{children}</div>
    <code className="font-mono text-xs text-muted-foreground">{label}</code>
  </div>
)

export const Gallery: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Tile label="chamfer" className="chamfer border-0 bg-primary" />
      <Tile label="hud-corners" className="hud-corners border-0" />
      <Tile label="scanlines" className="scanlines bg-primary/30" />
      <Tile label="grid-bg" className="grid-bg" />
      <Tile label="hatch" className="hatch" />
      <Tile label="text-glow" className="">
        <span className="text-2xl font-bold tracking-[0.2em] text-primary uppercase text-glow">Alert</span>
      </Tile>
      <Tile label="shadow-glow" className="border-primary shadow-glow" />
      <Tile label="shimmer" className="">
        <span className="shimmer font-mono text-sm text-muted-foreground">Decrypting transmission…</span>
      </Tile>
    </div>
  ),
}

/** Utilities compose: a custom read-out panel built only from Tailwind and the classes above. */
export const Composed: Story = {
  render: () => (
    <div className="relative grid-bg hud-corners max-w-md p-6">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Hyperdrive</p>
      <p className="font-mono text-4xl text-primary text-glow">0.5 × </p>
      <div className="mt-4 h-3 border border-primary/40 hatch">
        <div className="h-full w-2/3 bg-primary shadow-glow" />
      </div>
    </div>
  ),
}
