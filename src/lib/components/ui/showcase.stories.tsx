import type { Meta, StoryObj } from '@storybook/react-vite'
import { CrosshairIcon, TriangleAlertIcon } from 'lucide-react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/index'

const meta = {
  title: 'Design System/Showcase',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Buttons: Story = {
  args: { children: 'Engage' },
  render: args => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} />
      <Button variant="secondary">Standby</Button>
      <Button variant="outline">Scan sector</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="destructive">Fire</Button>
      <Button variant="link">Logs</Button>
      <Button size="icon" aria-label="Target">
        <CrosshairIcon />
      </Button>
      <Button disabled>Offline</Button>
    </div>
  ),
}

export const Console: Story = {
  render: () => (
    <div className="grid max-w-5xl gap-6 md:grid-cols-2">
      <Card className="grid-bg">
        <CardHeader>
          <CardTitle>Tractor beam</CardTitle>
          <CardDescription>SECTOR 7 · GENERATOR 3 OF 7</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Power output</Label>
            <Progress value={72} />
          </div>
          <div className="space-y-3">
            <Label>Field intensity</Label>
            <Slider defaultValue={[40]} max={100} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lock">Target lock</Label>
            <Switch id="lock" defaultChecked />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="override" />
            <Label htmlFor="override">Manual override</Label>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Badge>Online</Badge>
          <Badge variant="outline">TK-421</Badge>
          <Badge variant="destructive">Breach</Badge>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comm uplink</CardTitle>
          <CardDescription>ENCRYPTED CHANNEL · IMPERIAL CODE</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="callsign">Callsign</Label>
            <Input id="callsign" placeholder="TK-421" />
          </div>
          <div className="space-y-2">
            <Label>Destination</Label>
            <Select defaultValue="scarif">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="scarif">Scarif</SelectItem>
                <SelectItem value="yavin">Yavin IV</SelectItem>
                <SelectItem value="hoth">Hoth</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">Transmission</Label>
            <Textarea id="msg" placeholder="Enter message…" />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Ping</Button>
            </TooltipTrigger>
            <TooltipContent>Latency 12ms</TooltipContent>
          </Tooltip>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Transmit</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm transmission</DialogTitle>
                <DialogDescription>Message will be relayed to all sector command.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Abort</Button>
                </DialogClose>
                <Button>Send</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

      <div className="space-y-4 md:col-span-2">
        <Tabs defaultValue="shields">
          <TabsList>
            <TabsTrigger value="shields">Shields</TabsTrigger>
            <TabsTrigger value="weapons">Weapons</TabsTrigger>
            <TabsTrigger value="nav">Navigation</TabsTrigger>
          </TabsList>
          <TabsContent value="shields" className="pt-2">
            <Alert>
              <AlertTitle>Deflector status nominal</AlertTitle>
              <AlertDescription>Forward shields at 98%. Aft shields at 91%.</AlertDescription>
            </Alert>
          </TabsContent>
          <TabsContent value="weapons" className="pt-2">
            <Alert variant="destructive">
              <TriangleAlertIcon />
              <AlertTitle>Thermal exhaust port exposed</AlertTitle>
              <AlertDescription>Two metres wide. Ray-shielded. Recommend closer inspection.</AlertDescription>
            </Alert>
          </TabsContent>
          <TabsContent value="nav" className="pt-2">
            <div className="h-24 scanlines bg-primary/10" />
          </TabsContent>
        </Tabs>
        <Separator />
      </div>
    </div>
  ),
}
