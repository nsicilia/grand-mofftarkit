import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'Navigation/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Top-level site navigation with optional rich dropdown panels.

\`\`\`tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent,
  NavigationMenuLink, navigationMenuTriggerStyle } from 'grand-mofftarkit'
\`\`\`

For a plain link at the top level, apply \`navigationMenuTriggerStyle()\` to \`NavigationMenuLink\`.
For an app's menu bar (File / Edit…) use \`Menubar\` instead.
`,
      },
    },
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const LINKS = [
  ['Star Destroyers', 'Imperial-class capital ships.'],
  ['TIE series', 'Short-range starfighters.'],
  ['AT-AT', 'All-terrain armoured transport.'],
  ['Death Star', 'Orbital battle station.'],
]

export const Playground: Story = {
  render: () => (
    <div className="min-h-72">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Fleet</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[28rem] gap-1 p-2 md:grid-cols-2">
                {LINKS.map(([t, d]) => (
                  <li key={t}>
                    <NavigationMenuLink href="#">
                      <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{t}</span>
                      <span className="font-mono text-xs text-muted-foreground">{d}</span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sectors</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1 p-2">
                {['Core Worlds', 'Mid Rim', 'Outer Rim'].map(s => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              Archives
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
