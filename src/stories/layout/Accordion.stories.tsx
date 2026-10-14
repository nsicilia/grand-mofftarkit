import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Stacked sections that expand and collapse. Good for FAQs and long settings pages.

\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'grand-mofftarkit'
\`\`\`

\`type="single"\` allows one open section (add \`collapsible\` to allow closing it);
\`type="multiple"\` allows many. For a single show/hide region use \`Collapsible\`.
`,
      },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const SECTIONS = [
  ['Where is the rebel base?', 'Dantooine. They are on Dantooine. (Intelligence later found it abandoned.)'],
  [
    'Can the station be destroyed?',
    'A small one-man fighter could reach the thermal exhaust port. The risk is judged negligible.',
  ],
  ['Who commands the station?', 'Grand Moff Tarkin, with Lord Vader overseeing security.'],
]

export const Playground: Story = {
  args: { type: 'single', collapsible: true } as never,
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-0" className="max-w-lg">
      {SECTIONS.map(([q, a], i) => (
        <AccordionItem key={q} value={`item-${i}`}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: { type: 'multiple' } as never,
  render: () => (
    <Accordion type="multiple" defaultValue={['item-0', 'item-1']} className="max-w-lg">
      {SECTIONS.map(([q, a], i) => (
        <AccordionItem key={q} value={`item-${i}`}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
