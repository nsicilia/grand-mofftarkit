import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon, Loader2Icon, RadarIcon, SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Triggers an action. Filled variants have chamfered corners; outline and ghost keep a plain frame.

\`\`\`tsx
import { Button } from 'grand-mofftarkit'
\`\`\`

- **default** for the main action of a view; use one per area.
- **outline / secondary** for supporting actions, **ghost** for low-emphasis or toolbar actions.
- **destructive** for irreversible actions; confirm with an \`AlertDialog\`.
- Use \`asChild\` to style a link (\`<Button asChild><a href="…">…</a></Button>\`).
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'Visual style.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'],
      description: 'Height and padding. `icon*` sizes are square, for icon-only buttons.',
      table: { defaultValue: { summary: 'default' } },
    },
    asChild: { control: 'boolean', description: 'Render the child element with button styling.' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Engage', variant: 'default', size: 'default', disabled: false },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <SendIcon /> Transmit
      </Button>
      <Button variant="outline">
        Scan <RadarIcon />
      </Button>
    </div>
  ),
}

/** Always give icon-only buttons an `aria-label`. */
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="icon-xs" aria-label="Target">
        <CrosshairIcon />
      </Button>
      <Button size="icon-sm" aria-label="Target">
        <CrosshairIcon />
      </Button>
      <Button size="icon" aria-label="Target">
        <CrosshairIcon />
      </Button>
      <Button size="icon-lg" variant="outline" aria-label="Target">
        <CrosshairIcon />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2Icon className="animate-spin" /> Calculating jump
    </Button>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="outline">
      <a href="#archives">Open archives</a>
    </Button>
  ),
}
