import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox'

const SYSTEMS = [
  'Alderaan',
  'Bespin',
  'Coruscant',
  'Dagobah',
  'Endor',
  'Hoth',
  'Kashyyyk',
  'Naboo',
  'Scarif',
  'Tatooine',
]

const meta = {
  title: 'Forms/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A searchable select: type to filter, arrow keys to move, Enter to pick. Supports single and multiple values.

\`\`\`tsx
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from 'grand-mofftarkit'
\`\`\`

Pass the full list to \`items\`. \`ComboboxList\` takes a render function and is called with each item still
matching the filter. Built on Base UI's Combobox.
`,
      },
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Combobox items={SYSTEMS}>
      <ComboboxInput placeholder="Search systems…" className="w-64" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No system found</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

/** `multiple` with chips. The chips container is the popup's anchor (`useComboboxAnchor`). */
export const MultipleWithChips: Story = {
  render: function Render() {
    const anchor = useComboboxAnchor()
    return (
      <Combobox items={SYSTEMS} multiple defaultValue={['Hoth', 'Endor']}>
        <ComboboxChips ref={anchor} className="w-80">
          <ComboboxValue>
            {(values: string[]) => (
              <>
                {values.map(v => (
                  <ComboboxChip key={v}>{v}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add system…" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No system found</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}
