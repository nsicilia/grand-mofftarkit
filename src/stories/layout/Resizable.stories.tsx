import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

const meta = {
  title: 'Layout/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Panels the user can resize by dragging the handle (or with the keyboard). Built on
[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) v4.

\`\`\`tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'grand-mofftarkit'
\`\`\`

- \`orientation\` on the group: \`horizontal\` or \`vertical\`.
- Sizes: a string is a percentage (\`defaultSize="30"\`), a number is pixels.
- \`withHandle\` on \`ResizableHandle\` shows a grip.
`,
      },
    },
  },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

const Pane = ({ label }: { label: string }) => (
  <div className="flex h-full items-center justify-center p-4 font-mono text-xs tracking-widest text-primary uppercase">
    {label}
  </div>
)

export const Playground: Story = {
  render: args => (
    <ResizablePanelGroup {...args} className="min-h-64 max-w-2xl border border-border">
      <ResizablePanel defaultSize="35">
        <Pane label="Star map" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65">
        <Pane label="Tactical" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Nested: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-72 max-w-2xl border border-border">
      <ResizablePanel defaultSize="30" minSize="20">
        <Pane label="Fleet" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="70">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="60">
            <Pane label="Viewscreen" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="40">
            <Pane label="Console" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
