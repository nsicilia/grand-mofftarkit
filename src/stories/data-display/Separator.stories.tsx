import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Data Display/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A thin divider line, horizontal or vertical.

\`\`\`tsx
import { Separator } from 'grand-mofftarkit'
\`\`\`

Decorative by default (hidden from screen readers). Set \`decorative={false}\` when it separates meaningful sections.
`,
      },
    },
  },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className={args.orientation === 'vertical' ? 'flex h-6 items-center gap-4' : 'max-w-sm space-y-4'}>
      <span className="font-mono text-sm">Fore</span>
      <Separator {...args} />
      <span className="font-mono text-sm">Aft</span>
    </div>
  ),
}

export const InToolbar: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase">
      <span>Weapons</span>
      <Separator orientation="vertical" />
      <span>Shields</span>
      <Separator orientation="vertical" />
      <span>Engines</span>
    </div>
  ),
}
