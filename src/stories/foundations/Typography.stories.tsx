import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Two families, loaded from Google Fonts by the stylesheet:

| Role | Family | Tailwind | Use for |
| --- | --- | --- | --- |
| UI | Rajdhani | \`font-sans\` (default) | Titles, labels, buttons, navigation |
| Data | Share Tech Mono | \`font-mono\` | Values, descriptions, inputs, tables, codes |

**Convention:** headings and labels are \`uppercase\` with wide tracking (\`tracking-[0.2em]\`), in
\`text-primary\`; titles add \`text-glow\`. Read-outs and free text use \`font-mono\`.
`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs text-muted-foreground">
          Display · text-3xl uppercase tracking-[0.2em] text-glow
        </p>
        <h1 className="text-3xl font-bold tracking-[0.2em] text-primary uppercase text-glow">Death Star plans</h1>
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground">Title · text-lg uppercase tracking-[0.2em] text-glow</p>
        <h2 className="text-lg font-semibold tracking-[0.2em] text-primary uppercase text-glow">
          Thermal exhaust port
        </h2>
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground">Label · text-xs uppercase tracking-[0.2em]</p>
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Sector designation</p>
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground">Body · font-sans text-base</p>
        <p className="max-w-prose text-base">
          The battle station is heavily shielded and carries a firepower greater than half the star fleet.
        </p>
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground">Data · font-mono text-sm</p>
        <p className="font-mono text-sm">TK-421 · 33 75 · 42 86 · ETA 00:14:52</p>
      </div>
    </div>
  ),
}
