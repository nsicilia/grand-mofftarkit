import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Forms/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Layout primitives for forms: label, control, description and error laid out consistently.
Works with any control and any form library.

\`\`\`tsx
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldSet, FieldLegend } from 'grand-mofftarkit'
\`\`\`

- \`Field\` wraps one control. Set \`orientation="horizontal"\` for checkbox/switch rows.
- \`FieldGroup\` stacks fields; \`FieldSet\` + \`FieldLegend\` group related ones.
- Set \`data-invalid\` on \`Field\` and \`aria-invalid\` on the control to show errors.
`,
      },
    },
  },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal', 'responsive'] },
  },
  args: { orientation: 'vertical' },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Field {...args} className="max-w-sm">
      <FieldLabel htmlFor="pilot">Pilot name</FieldLabel>
      <Input id="pilot" placeholder="Wedge Antilles" />
      <FieldDescription>As registered with squadron command.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="code">Clearance code</FieldLabel>
      <Input id="code" defaultValue="0000" aria-invalid />
      <FieldError>Code rejected by the shield gate.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="f-armed" defaultChecked />
        <FieldLabel htmlFor="f-armed">Arm proton torpedoes</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="f-auto">Targeting computer</FieldLabel>
          <FieldDescription>Disable to use the Force.</FieldDescription>
        </FieldContent>
        <Switch id="f-auto" defaultChecked />
      </Field>
    </FieldGroup>
  ),
}

/** Wrapping a whole option in `FieldLabel` turns it into a selectable card. */
export const ChoiceCards: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend>Squadron</FieldLegend>
      <RadioGroup defaultValue="red">
        {[
          ['red', 'Red Squadron', 'X-wing starfighters'],
          ['gold', 'Gold Squadron', 'Y-wing bombers'],
        ].map(([v, t, d]) => (
          <FieldLabel key={v} htmlFor={`sq-${v}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{t}</FieldTitle>
                <FieldDescription>{d}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={v} id={`sq-${v}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <form className="max-w-md" onSubmit={e => e.preventDefault()}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Flight plan</FieldLegend>
          <FieldDescription>Filed with Imperial traffic control.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fp-ship">Vessel</FieldLabel>
              <Input id="fp-ship" placeholder="Lambda-class shuttle" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fp-code">Clearance code</FieldLabel>
              <Input id="fp-code" placeholder="TYDIRIUM" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Button type="submit">File plan</Button>
          <Button type="button" variant="ghost">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}
