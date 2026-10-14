import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const meta = {
  title: 'Layout/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A swipeable, keyboard-accessible slider built on [Embla](https://www.embla-carousel.com).

\`\`\`tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from 'grand-mofftarkit'
\`\`\`

- Control slide width with classes on \`CarouselItem\` (e.g. \`basis-1/3\` for three per view).
- Pass Embla options via \`opts\` (e.g. \`{ loop: true }\`) and plugins via \`plugins\`.
- \`setApi\` gives you the Embla API for custom indicators.
`,
      },
    },
  },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const SHIPS = ['Executor', 'Devastator', 'Avenger', 'Stalker', 'Tyrant']

export const Playground: Story = {
  render: args => (
    <div className="px-12">
      <Carousel {...args} className="max-w-xs">
        <CarouselContent>
          {SHIPS.map(s => (
            <CarouselItem key={s}>
              <Card className="grid-bg">
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-xl font-semibold tracking-[0.2em] text-primary uppercase text-glow">{s}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const MultiplePerView: Story = {
  render: () => (
    <div className="px-12">
      <Carousel opts={{ align: 'start', loop: true }} className="max-w-2xl">
        <CarouselContent>
          {SHIPS.concat(SHIPS.map(s => `${s} II`)).map(s => (
            <CarouselItem key={s} className="basis-1/3">
              <div className="flex aspect-video items-center justify-center border border-border font-mono text-xs uppercase">
                {s}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
