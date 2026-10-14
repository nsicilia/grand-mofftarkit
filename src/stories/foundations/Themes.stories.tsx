import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'

const PALETTES = [
  { id: 'imperial', name: 'Imperial', note: 'Red. Star Destroyer bridges and Death Star consoles. The default.' },
  { id: 'blueprint', name: 'Blueprint', note: 'Blue. Technical schematics and Imperial archive readouts.' },
  { id: 'rebel', name: 'Rebel', note: 'Amber. X-wing targeting computers and Rebel command.' },
  { id: 'terminal', name: 'Terminal', note: 'Green. Weathered CRTs on freighters and outposts.' },
] as const

const meta = {
  title: 'Foundations/Themes',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Each palette is a single **phosphor** hue (plus a supporting **signal** colour). Every shadcn token
(\`--primary\`, \`--border\`, \`--card\`, \`--ring\`, chart and sidebar colours…) is derived from it with
\`color-mix()\`, so a new palette is two lines of CSS:

\`\`\`css
[data-theme='sith'] {
  --phosphor: oklch(0.6 0.26 20);
  --signal: oklch(0.9 0.02 20);
}
\`\`\`

Apply a palette with \`data-theme\` on \`<html>\` or on any element. Palettes nest, so one panel can
use a different palette from the rest of the page (see below).
`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/** The same panel rendered in all four palettes side by side, each scoped with its own `data-theme`. */
export const AllPalettes: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {PALETTES.map(p => (
        <div key={p.id} data-theme={p.id} className="bg-background p-4 text-foreground">
          <Card>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>data-theme=&quot;{p.id}&quot;</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-sm text-muted-foreground">{p.note}</p>
              <Progress value={64} />
              <div className="flex items-center gap-3">
                <Button size="sm">Engage</Button>
                <Button size="sm" variant="outline">
                  Scan
                </Button>
                <Switch defaultChecked />
                <Badge>Online</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  ),
}
