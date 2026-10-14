import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

const meta = {
  title: 'Feedback/Toast (Sonner)',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Transient notifications powered by [Sonner](https://sonner.emilkowal.ski).

\`\`\`tsx
import { Toaster } from 'grand-mofftarkit'
import { toast } from 'sonner'

// once, at the app root
<Toaster />

// anywhere
toast.success('Jump complete')
\`\`\`

Storybook already renders a \`<Toaster />\`, so the buttons below just call \`toast()\`.
`,
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast('Transmission received')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Target destroyed')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info('Entering hyperspace')}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Shields at 20%')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error('Hyperdrive failure')}>
        Error
      </Button>
    </div>
  ),
}

export const WithDescriptionAndAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Message intercepted', {
          description: 'Origin: Tantive IV',
          action: { label: 'Decode', onClick: () => toast.success('Decoded') },
        })
      }
    >
      Show toast
    </Button>
  ),
}

/** `toast.promise` shows loading, then success or error. */
export const PromiseToast: Story = {
  name: 'Promise',
  render: () => (
    <Button
      onClick={() =>
        toast.promise(new Promise(r => setTimeout(r, 2000)), {
          loading: 'Calculating jump coordinates…',
          success: 'Coordinates locked',
          error: 'Navicomputer offline',
        })
      }
    >
      Plot course
    </Button>
  ),
}
