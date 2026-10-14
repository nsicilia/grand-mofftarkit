import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon, RadarIcon, ShieldIcon, TriangleAlertIcon, ZapIcon } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Examples/Command Center',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A full dashboard built only from library components: stats, charts, a table, controls and alerts. Used for the README screenshots.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const POWER = [
  { t: '00', reactor: 62, shields: 80 },
  { t: '04', reactor: 70, shields: 74 },
  { t: '08', reactor: 66, shields: 88 },
  { t: '12', reactor: 84, shields: 71 },
  { t: '16', reactor: 78, shields: 90 },
  { t: '20', reactor: 92, shields: 86 },
  { t: '24', reactor: 88, shields: 95 },
]
const SORTIES = [
  { s: 'A', tie: 12, int: 6 },
  { s: 'B', tie: 18, int: 4 },
  { s: 'C', tie: 9, int: 8 },
  { s: 'D', tie: 15, int: 10 },
  { s: 'E', tie: 21, int: 7 },
]
const config = {
  reactor: { label: 'Reactor', color: 'var(--chart-1)' },
  shields: { label: 'Shields', color: 'var(--chart-2)' },
  tie: { label: 'TIE/ln', color: 'var(--chart-1)' },
  int: { label: 'Interceptor', color: 'var(--chart-2)' },
} satisfies ChartConfig

const FLEET = [
  { ship: 'Executor', cls: 'Super Star Destroyer', sector: 'Hoth', status: 'Engaged' },
  { ship: 'Devastator', cls: 'Imperial I', sector: 'Tatooine', status: 'Patrol' },
  { ship: 'Avenger', cls: 'Imperial II', sector: 'Hoth', status: 'Engaged' },
  { ship: 'Tyrant', cls: 'Imperial II', sector: 'Hoth', status: 'Damaged' },
]

const STATS = [
  { label: 'Reactor output', value: '92%', note: '+6 cycle', icon: ZapIcon },
  { label: 'Deflector', value: '95%', note: 'Nominal', icon: ShieldIcon },
  { label: 'Contacts', value: '37', note: '4 hostile', icon: RadarIcon },
  { label: 'Fighters', value: '144', note: '72 launched', icon: CrosshairIcon },
]

export const Dashboard: Story = {
  render: () => (
    <div className="min-h-screen space-y-6 bg-background p-8 text-foreground">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Death Squadron</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Hoth system</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold tracking-[0.2em] text-primary uppercase text-glow">Command center</h1>
        </div>
        <div className="flex items-center gap-4">
          <Tabs defaultValue="ops">
            <TabsList>
              <TabsTrigger value="ops">Operations</TabsTrigger>
              <TabsTrigger value="fleet">Fleet</TabsTrigger>
              <TabsTrigger value="intel">Intel</TabsTrigger>
            </TabsList>
          </Tabs>
          <AvatarGroup>
            {['DV', 'FP', 'KO'].map(i => (
              <Avatar key={i}>
                <AvatarFallback>{i}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <Button>Launch fighters</Button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {STATS.map(s => (
          <Card key={s.label} className="grid-bg gap-3">
            <CardHeader>
              <CardDescription>{s.label}</CardDescription>
              <CardTitle className="font-mono text-4xl tracking-normal">{s.value}</CardTitle>
              <CardAction>
                <s.icon className="size-5 text-primary" />
              </CardAction>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground">{s.note}</CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Power distribution</CardTitle>
            <CardDescription>Last 24 cycles · main reactor vs deflector grid</CardDescription>
            <CardAction>
              <ToggleGroup type="single" variant="outline" size="sm" defaultValue="24">
                <ToggleGroupItem value="6">6h</ToggleGroupItem>
                <ToggleGroupItem value="24">24h</ToggleGroupItem>
                <ToggleGroupItem value="7d">7d</ToggleGroupItem>
              </ToggleGroup>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer config={config} className="h-56 w-full">
              <AreaChart data={POWER} margin={{ left: 0, right: 0 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="t" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  dataKey="shields"
                  type="step"
                  fill="var(--color-shields)"
                  fillOpacity={0.15}
                  stroke="var(--color-shields)"
                  isAnimationActive={false}
                />
                <Area
                  dataKey="reactor"
                  type="step"
                  fill="var(--color-reactor)"
                  fillOpacity={0.35}
                  stroke="var(--color-reactor)"
                  isAnimationActive={false}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tractor beam</CardTitle>
            <CardDescription>Generator 3 of 7</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Power coupling</Label>
                <span className="font-mono text-sm text-primary">72%</span>
              </div>
              <Progress value={72} />
            </div>
            <div className="space-y-3">
              <Label>Field intensity</Label>
              <Slider defaultValue={[58]} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="cc-lock">Target lock</Label>
              <Switch id="cc-lock" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="cc-jam">Sensor jamming</Label>
              <Switch id="cc-jam" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Fleet status</CardTitle>
            <CardDescription>Death Squadron · 4 capital ships</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vessel</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FLEET.map(f => (
                  <TableRow key={f.ship}>
                    <TableCell>{f.ship}</TableCell>
                    <TableCell className="text-muted-foreground">{f.cls}</TableCell>
                    <TableCell>{f.sector}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          f.status === 'Damaged' ? 'destructive' : f.status === 'Engaged' ? 'default' : 'outline'
                        }
                      >
                        {f.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sorties</CardTitle>
              <CardDescription>By squadron</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={config} className="h-28 w-full">
                <BarChart data={SORTIES}>
                  <XAxis dataKey="s" tickLine={false} axisLine={false} />
                  <Bar dataKey="tie" fill="var(--color-tie)" isAnimationActive={false} />
                  <Bar dataKey="int" fill="var(--color-int)" isAnimationActive={false} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Shield generator detected</AlertTitle>
            <AlertDescription>North ridge. Ground assault required.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  ),
}
