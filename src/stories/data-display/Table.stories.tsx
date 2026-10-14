import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ROWS = [
  { id: 'TK-421', post: 'Docking bay 327', status: 'Missing', hours: 0 },
  { id: 'TK-330', post: 'Detention block AA-23', status: 'On duty', hours: 6 },
  { id: 'TK-117', post: 'Tractor beam control', status: 'On duty', hours: 4 },
  { id: 'TK-982', post: 'Hangar 7', status: 'Off duty', hours: 0 },
]

const meta = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Semantic table markup with console styling: phosphor header row, mono cells, highlighted hover and selected rows.

\`\`\`tsx
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from 'grand-mofftarkit'
\`\`\`

This is presentational only. For sorting, filtering and pagination, drive it with
[TanStack Table](https://tanstack.com/table) as in the shadcn "Data Table" guide.
Mark a selected row with \`data-state="selected"\`.
`,
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Table>
      <TableCaption>Garrison roster · Death Star I</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Designation</TableHead>
          <TableHead>Post</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.map(r => (
          <TableRow key={r.id}>
            <TableCell>{r.id}</TableCell>
            <TableCell>{r.post}</TableCell>
            <TableCell>
              <Badge variant={r.status === 'Missing' ? 'destructive' : r.status === 'On duty' ? 'default' : 'outline'}>
                {r.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{r.hours}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{ROWS.reduce((n, r) => n + r.hours, 0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const SelectableRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox aria-label="Select all" />
          </TableHead>
          <TableHead>Designation</TableHead>
          <TableHead>Post</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.map((r, i) => (
          <TableRow key={r.id} data-state={i === 1 ? 'selected' : undefined}>
            <TableCell>
              <Checkbox aria-label={`Select ${r.id}`} defaultChecked={i === 1} />
            </TableCell>
            <TableCell>{r.id}</TableCell>
            <TableCell>{r.post}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
