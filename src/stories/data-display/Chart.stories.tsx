import type { Meta, StoryObj } from '@storybook/react-vite'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const DATA = [
  { cycle: 'C1', shields: 82, power: 64 },
  { cycle: 'C2', shields: 74, power: 70 },
  { cycle: 'C3', shields: 91, power: 58 },
  { cycle: 'C4', shields: 66, power: 81 },
  { cycle: 'C5', shields: 88, power: 77 },
  { cycle: 'C6', shields: 95, power: 90 },
]

const config = {
  shields: { label: 'Shields', color: 'var(--chart-1)' },
  power: { label: 'Power', color: 'var(--chart-2)' },
} satisfies ChartConfig

const meta = {
  title: 'Data Display/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Thin wrapper around [Recharts](https://recharts.org). You write normal Recharts; \`ChartContainer\` applies the
theme and exposes each series colour as \`var(--color-<key>)\`.

\`\`\`tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from 'grand-mofftarkit'
import { BarChart, Bar, XAxis } from 'recharts'
\`\`\`

1. Describe your series in a \`ChartConfig\` (label + colour). Use \`var(--chart-1…5)\` so charts follow the palette.
2. Give \`ChartContainer\` a height (e.g. \`className="h-64"\`).
3. Reference colours as \`fill="var(--color-shields)"\`.
`,
      },
    },
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const BarChartStory: Story = {
  name: 'Bar',
  args: {} as never,
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-2xl">
      <BarChart data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="cycle" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="shields" fill="var(--color-shields)" />
        <Bar dataKey="power" fill="var(--color-power)" />
      </BarChart>
    </ChartContainer>
  ),
}

export const LineChartStory: Story = {
  name: 'Line',
  args: {} as never,
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-2xl">
      <LineChart data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="cycle" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} width={32} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line dataKey="shields" stroke="var(--color-shields)" strokeWidth={2} dot={false} type="monotone" />
        <Line dataKey="power" stroke="var(--color-power)" strokeWidth={2} dot={false} type="step" />
      </LineChart>
    </ChartContainer>
  ),
}

export const AreaChartStory: Story = {
  name: 'Area',
  args: {} as never,
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-2xl">
      <AreaChart data={DATA}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="cycle" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="shields"
          type="step"
          fill="var(--color-shields)"
          fillOpacity={0.3}
          stroke="var(--color-shields)"
        />
      </AreaChart>
    </ChartContainer>
  ),
}
