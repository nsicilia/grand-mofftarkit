import type { Meta, StoryObj } from '@storybook/react-vite'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

const meta = {
  title: 'Forms/Input OTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
One-time-code entry, one character per slot. Paste and autofill work across slots.

\`\`\`tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from 'grand-mofftarkit'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
\`\`\`

Render one \`InputOTPSlot\` per character with \`index\` 0…maxLength-1. Restrict input with \`pattern\`.
`,
      },
    },
  },
  argTypes: {
    maxLength: { control: { type: 'number', min: 4, max: 8 } },
    disabled: { control: 'boolean' },
  },
  args: { maxLength: 6, disabled: false, children: null },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <InputOTP maxLength={6} disabled={args.disabled} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const FourDigits: Story = {
  render: () => (
    <InputOTP maxLength={4} defaultValue="1138">
      <InputOTPGroup>
        {[0, 1, 2, 3].map(i => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}
