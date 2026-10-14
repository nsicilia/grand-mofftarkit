import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Page navigation links. Purely presentational: you compute which pages to show.

\`\`\`tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from 'grand-mofftarkit'
\`\`\`

Mark the current page with \`isActive\` on \`PaginationLink\`.
`,
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: function Render() {
    const [page, setPage] = useState(2)
    const go = (p: number) => (e: React.MouseEvent) => {
      e.preventDefault()
      setPage(Math.min(Math.max(p, 1), 10))
    }
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(page - 1)} />
          </PaginationItem>
          {[1, 2, 3].map(p => (
            <PaginationItem key={p}>
              <PaginationLink href="#" isActive={p === page} onClick={go(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive={page === 10} onClick={go(10)}>
              10
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={go(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
}
