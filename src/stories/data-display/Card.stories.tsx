import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontalIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The main panel. Drawn with HUD corner brackets instead of a full border.

\`\`\`tsx
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from 'grand-mofftarkit'
\`\`\`

- \`CardAction\` sits top-right in the header (menus, badges).
- Add \`grid-bg\` or \`scanlines\` to the card for a schematic or CRT feel.
- Add \`border-b\` to \`CardHeader\` or \`border-t\` to \`CardFooter\` for divider lines.
`,
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Tractor beam</CardTitle>
        <CardDescription>Sector 7 · generator 3 of 7</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono text-sm">Power coupling stable. Output within tolerances.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Engage</Button>
        <Button size="sm" variant="ghost">
          Details
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Reactor core</CardTitle>
        <CardDescription>Main power</CardDescription>
        <CardAction>
          <Button size="icon-sm" variant="ghost" aria-label="Options">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress value={86} />
        <p className="font-mono text-xs text-muted-foreground">86% of rated output</p>
      </CardContent>
    </Card>
  ),
}

/** A key-number panel, using `grid-bg` and a glowing read-out. */
export const Stat: Story = {
  render: () => (
    <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
      {[
        ['Shields', '98%', 'Nominal'],
        ['Hull', '71%', 'Damaged'],
        ['Fighters', '24', 'Launched'],
      ].map(([t, v, s]) => (
        <Card key={t} className="grid-bg gap-2">
          <CardHeader>
            <CardDescription>{t}</CardDescription>
            <CardTitle className="font-mono text-3xl tracking-normal">{v}</CardTitle>
            <CardAction>
              <Badge variant={s === 'Damaged' ? 'destructive' : 'outline'}>{s}</Badge>
            </CardAction>
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
}

export const WithDividers: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Comm log</CardTitle>
        <CardDescription>Last 24 cycles</CardDescription>
      </CardHeader>
      <CardContent className="font-mono text-sm">12 transmissions received.</CardContent>
      <CardFooter className="border-t">
        <Button size="sm" variant="outline" className="w-full">
          Open log
        </Button>
      </CardFooter>
    </Card>
  ),
}
