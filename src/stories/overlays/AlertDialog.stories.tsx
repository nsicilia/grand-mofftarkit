import type { Meta, StoryObj } from '@storybook/react-vite'
import { TriangleAlertIcon } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Overlays/Alert Dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A modal that interrupts to ask for confirmation. Unlike \`Dialog\`, it can't be dismissed by clicking outside;
the user must choose an action.

\`\`\`tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle,
  AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from 'grand-mofftarkit'
\`\`\`

Make the action label say what happens ("Destroy", not "OK"). Pass \`variant\` to \`AlertDialogAction\` to make it destructive.
`,
      },
    },
  },
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Fire superlaser</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Destroy Alderaan?</AlertDialogTitle>
          <AlertDialogDescription>
            This cannot be undone. The planet and its population will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stand down</AlertDialogCancel>
          <AlertDialogAction variant="destructive">You may fire when ready</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Eject core</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlertIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Eject reactor core?</AlertDialogTitle>
          <AlertDialogDescription>Main power will be lost.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Eject</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
