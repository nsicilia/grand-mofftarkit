import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from '@/components/ui/native-select'

const meta = {
  title: 'Forms/Native Select',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A styled native \`<select>\`. Uses the platform picker (best on mobile) and works with plain form posts.

\`\`\`tsx
import { NativeSelect, NativeSelectOption } from 'grand-mofftarkit'
\`\`\`

The open list is drawn by the browser, so only the closed control is themed. For a fully themed list use \`Select\`.
`,
      },
    },
  },
  argTypes: { disabled: { control: 'boolean' }, 'aria-invalid': { control: 'boolean' } },
  args: { disabled: false },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-60">
      <NativeSelect {...args} defaultValue="hoth">
        <NativeSelectOption value="">Choose a system</NativeSelectOption>
        <NativeSelectOption value="hoth">Hoth</NativeSelectOption>
        <NativeSelectOption value="dagobah">Dagobah</NativeSelectOption>
        <NativeSelectOption value="bespin">Bespin</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const Grouped: Story = {
  render: () => (
    <div className="max-w-60">
      <NativeSelect>
        <NativeSelectOptGroup label="Outer Rim">
          <NativeSelectOption value="tatooine">Tatooine</NativeSelectOption>
          <NativeSelectOption value="hoth">Hoth</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Core Worlds">
          <NativeSelectOption value="coruscant">Coruscant</NativeSelectOption>
          <NativeSelectOption value="alderaan">Alderaan</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
}
