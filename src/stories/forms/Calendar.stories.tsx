import type { Meta, StoryObj } from '@storybook/react-vite'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const meta = {
  title: 'Forms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A date grid built on [react-day-picker](https://daypicker.dev). All DayPicker props are supported.

\`\`\`tsx
import { Calendar } from 'grand-mofftarkit'
\`\`\`

For a date *field*, put the calendar inside a \`Popover\` (see **Date Picker** below).
`,
      },
    },
  },
  argTypes: {
    captionLayout: { control: 'inline-radio', options: ['label', 'dropdown'] },
    numberOfMonths: { control: { type: 'number', min: 1, max: 3 } },
    showOutsideDays: { control: 'boolean' },
  },
  args: { captionLayout: 'label', numberOfMonths: 1, showOutsideDays: true },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar {...args} mode="single" selected={date} onSelect={setDate} className="border border-border" />
  },
}

export const Range: Story = {
  render: function Render() {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 5 * 864e5),
    })
    return (
      <Calendar mode="range" numberOfMonths={2} selected={range} onSelect={setRange} className="border border-border" />
    )
  },
}

export const DatePicker: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date>()
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-60 justify-start font-mono normal-case tracking-normal">
            <CalendarIcon />
            {date ? format(date, 'PPP') : 'Pick a launch date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} captionLayout="dropdown" />
        </PopoverContent>
      </Popover>
    )
  },
}
