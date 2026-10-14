import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Forms/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
[react-hook-form](https://react-hook-form.com) bindings. \`FormField\` connects a control to the form;
\`FormLabel\`, \`FormDescription\` and \`FormMessage\` are wired to its id and error automatically.

\`\`\`tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from 'grand-mofftarkit'
import { useForm } from 'react-hook-form'
\`\`\`

Not using react-hook-form? Use the library-agnostic \`Field\` components instead.
Validation below uses built-in \`rules\`; a schema resolver (zod, valibot…) works the same way.
`,
      },
    },
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

type Values = { callsign: string; squadron: string; autopilot: boolean }

/** Submit empty to see validation messages. */
export const Playground: Story = {
  args: {} as never,
  render: function Render() {
    const form = useForm<Values>({ defaultValues: { callsign: '', squadron: '', autopilot: false } })
    return (
      <Form {...form}>
        <form
          className="max-w-sm space-y-6"
          onSubmit={form.handleSubmit(v => toast('Pilot registered', { description: JSON.stringify(v) }))}
        >
          <FormField
            control={form.control}
            name="callsign"
            rules={{ required: 'Callsign is required', minLength: { value: 3, message: 'At least 3 characters' } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Callsign</FormLabel>
                <FormControl>
                  <Input placeholder="Red Five" {...field} />
                </FormControl>
                <FormDescription>Used on all comm channels.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="squadron"
            rules={{ required: 'Squadron is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Squadron</FormLabel>
                <FormControl>
                  <Input placeholder="Red" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="autopilot"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between">
                <FormLabel>Autopilot</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>
      </Form>
    )
  },
}
