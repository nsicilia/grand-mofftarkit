import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Switches between panels of related content in the same place. The active tab glows.

\`\`\`tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'grand-mofftarkit'
\`\`\`

\`TabsList\` has two looks: \`variant="default"\` (boxed segments) and \`variant="line"\` (underline indicator).
Set \`orientation="vertical"\` on \`Tabs\` for a side list.
`,
      },
    },
  },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { defaultValue: 'shields', orientation: 'horizontal' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const Panels = () => (
  <>
    {[
      ['shields', 'Deflector shields', 'Forward 98% · Aft 91%'],
      ['weapons', 'Turbolaser batteries', '24 of 30 operational'],
      ['engines', 'Sublight engines', 'Output 74%'],
    ].map(([v, t, d]) => (
      <TabsContent key={v} value={v}>
        <Card>
          <CardHeader>
            <CardTitle>{t}</CardTitle>
            <CardDescription>{d}</CardDescription>
          </CardHeader>
          <CardContent className="font-mono text-sm text-muted-foreground">All systems reporting.</CardContent>
        </Card>
      </TabsContent>
    ))}
  </>
)

export const Playground: Story = {
  render: args => (
    <Tabs {...args} className="max-w-lg">
      <TabsList>
        <TabsTrigger value="shields">Shields</TabsTrigger>
        <TabsTrigger value="weapons">Weapons</TabsTrigger>
        <TabsTrigger value="engines">Engines</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="weapons" className="max-w-lg">
      <TabsList variant="line">
        <TabsTrigger value="shields">Shields</TabsTrigger>
        <TabsTrigger value="weapons">Weapons</TabsTrigger>
        <TabsTrigger value="engines">Engines</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="engines" orientation="vertical" className="max-w-2xl">
      <TabsList>
        <TabsTrigger value="shields">Shields</TabsTrigger>
        <TabsTrigger value="weapons">Weapons</TabsTrigger>
        <TabsTrigger value="engines">Engines</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}
