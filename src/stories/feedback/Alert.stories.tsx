import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoIcon, TriangleAlertIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An inline status message that stays on the page. Marked by a thick phosphor bar on the left.

\`\`\`tsx
import { Alert, AlertTitle, AlertDescription } from 'grand-mofftarkit'
\`\`\`

For a transient message use \`toast()\` (Sonner). For one that needs a decision use \`AlertDialog\`.
An icon placed as the first child is laid out automatically.
`,
      },
    },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'destructive'] } },
  args: { variant: 'default' },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Alert {...args} className="max-w-lg">
      <InfoIcon />
      <AlertTitle>Deflector status nominal</AlertTitle>
      <AlertDescription>Forward shields at 98%. Aft shields at 91%.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-lg">
      <TriangleAlertIcon />
      <AlertTitle>Thermal exhaust port exposed</AlertTitle>
      <AlertDescription>Two metres wide, ray-shielded. Recommend immediate inspection.</AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert className="max-w-lg">
      <AlertTitle>Hyperspace jump complete</AlertTitle>
    </Alert>
  ),
}
