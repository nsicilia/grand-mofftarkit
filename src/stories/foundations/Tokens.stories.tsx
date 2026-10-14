import type { Meta, StoryObj } from '@storybook/react-vite'

const GROUPS: { title: string; tokens: [string, string][] }[] = [
  {
    title: 'Palette source',
    tokens: [
      ['--phosphor', 'The palette hue. Everything below derives from it.'],
      ['--signal', 'Secondary highlight for lines and accents.'],
    ],
  },
  {
    title: 'Surfaces',
    tokens: [
      ['--background', 'Page background (black glass).'],
      ['--card', 'Raised panels: cards, alerts, attachments.'],
      ['--popover', 'Floating surfaces: menus, popovers, tooltips.'],
      ['--muted', 'Quiet fills, empty tracks.'],
      ['--secondary', 'Secondary button fill.'],
      ['--accent', 'Hover fill for list rows.'],
    ],
  },
  {
    title: 'Content',
    tokens: [
      ['--foreground', 'Body text.'],
      ['--muted-foreground', 'Labels, descriptions, captions.'],
      ['--primary', 'Phosphor: primary actions, titles, active states.'],
      ['--primary-foreground', 'Text on a primary fill.'],
      ['--destructive', 'Errors and dangerous actions. Always red.'],
    ],
  },
  {
    title: 'Lines',
    tokens: [
      ['--border', 'Panel and divider lines.'],
      ['--input', 'Form control outlines.'],
      ['--ring', 'Focus glow colour.'],
    ],
  },
  {
    title: 'Charts',
    tokens: [
      ['--chart-1', 'Series 1.'],
      ['--chart-2', 'Series 2.'],
      ['--chart-3', 'Series 3.'],
      ['--chart-4', 'Series 4.'],
      ['--chart-5', 'Series 5.'],
    ],
  },
]

const meta = {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
These are the standard shadcn CSS variables, so shadcn-compatible code keeps working. Use them through
Tailwind as usual: \`bg-primary\`, \`text-muted-foreground\`, \`border-border\`, \`bg-chart-1\`…

Two extras are available as Tailwind colours too: \`text-phosphor\` and \`text-signal\`. The glow is a
shadow token: \`shadow-glow\`. Corner radius is \`0\` everywhere, so \`rounded-md\` etc. resolve to square.

Swatches below update when you switch palettes in the toolbar.
`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ColorTokens: Story = {
  render: () => (
    <div className="space-y-8">
      {GROUPS.map(g => (
        <section key={g.title} className="space-y-3">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{g.title}</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.tokens.map(([name, use]) => (
              <div key={name} className="flex items-center gap-3 border border-border/50 p-2">
                <div className="size-12 shrink-0 border border-border" style={{ background: `var(${name})` }} />
                <div className="min-w-0">
                  <code className="font-mono text-sm text-foreground">{name}</code>
                  <p className="font-mono text-xs text-muted-foreground">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
}

export const Glow: Story = {
  name: 'Glow (shadow-glow)',
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="flex size-24 items-center justify-center border border-primary font-mono text-xs shadow-glow">
        shadow-glow
      </div>
      <div className="flex size-24 items-center justify-center border border-primary font-mono text-xs text-primary text-glow">
        text-glow
      </div>
    </div>
  ),
}
