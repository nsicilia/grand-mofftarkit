import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon, GaugeIcon, MapIcon, RadioTowerIcon, SettingsIcon, ShieldIcon, UsersIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { inline: false, iframeHeight: 520 },
      description: {
        component: `
A composable application sidebar: collapsible, keyboard toggle (⌘B / Ctrl+B), and an off-canvas sheet on mobile.

\`\`\`tsx
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset, SidebarTrigger } from 'grand-mofftarkit'
\`\`\`

- Wrap the page in \`SidebarProvider\` and put your main content in \`SidebarInset\`.
- \`collapsible\`: \`offcanvas\` (slides away), \`icon\` (shrinks to icons), or \`none\`.
- \`variant\`: \`sidebar\`, \`floating\`, or \`inset\`.
- Mark the current page with \`isActive\` on \`SidebarMenuButton\`; give it \`tooltip\` text for icon mode.
- Read or set the state anywhere below the provider with \`useSidebar()\`.
`,
      },
    },
  },
  argTypes: {
    collapsible: { control: 'inline-radio', options: ['offcanvas', 'icon', 'none'] },
    variant: { control: 'inline-radio', options: ['sidebar', 'floating', 'inset'] },
    side: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: { collapsible: 'icon', variant: 'sidebar', side: 'left' },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const NAV = [
  { title: 'Overview', icon: GaugeIcon, active: true },
  { title: 'Star map', icon: MapIcon },
  { title: 'Weapons', icon: CrosshairIcon, badge: '3' },
  { title: 'Shields', icon: ShieldIcon },
  { title: 'Comms', icon: RadioTowerIcon, badge: '12' },
  { title: 'Personnel', icon: UsersIcon },
]

export const Playground: Story = {
  render: args => (
    <SidebarProvider className="min-h-[520px]">
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center bg-primary text-primary-foreground chamfer">
                  <ShieldIcon className="size-4" />
                </div>
                <div className="grid leading-tight">
                  <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Executor</span>
                  <span className="font-mono text-xs text-muted-foreground">Super Star Destroyer</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Bridge</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <Avatar>
                  <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <span className="font-mono text-xs">Lord Vader</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Overview</span>
        </header>
        <main className="flex-1 p-6 grid-bg">
          <p className="font-mono text-sm text-muted-foreground">
            Press ⌘B / Ctrl+B or the trigger to collapse the sidebar.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}
