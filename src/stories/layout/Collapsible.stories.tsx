import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const meta = {
  title: 'Layout/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Shows and hides one region. Unstyled by design: you supply the trigger and content.

\`\`\`tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'grand-mofftarkit'
\`\`\`
`,
      },
    },
  },
  argTypes: { defaultOpen: { control: 'boolean' } },
  args: { defaultOpen: false },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Collapsible {...args} className="max-w-sm space-y-2">
      <div className="flex items-center justify-between border border-border px-3 py-2">
        <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">3 contacts on sensors</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle contacts">
            <ChevronsUpDownIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="border border-border px-3 py-2 font-mono text-sm">Contact 1 · Corellian corvette</div>
      <CollapsibleContent className="space-y-2">
        <div className="border border-border px-3 py-2 font-mono text-sm">Contact 2 · X-wing</div>
        <div className="border border-border px-3 py-2 font-mono text-sm">Contact 3 · Unknown</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
