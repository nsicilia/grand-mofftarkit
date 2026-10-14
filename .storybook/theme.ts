import { create } from 'storybook/theming'

// Storybook chrome (sidebar, toolbar, docs pages) dressed to match the Imperial palette.
export default create({
  base: 'dark',
  brandTitle: 'GRAND MOFF TARKIT',
  fontBase: '"Rajdhani", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Share Tech Mono", ui-monospace, monospace',
  colorPrimary: '#ff3b30',
  colorSecondary: '#ff3b30',
  appBg: '#0b0d12',
  appContentBg: '#101218',
  appPreviewBg: '#101218',
  appBorderColor: 'rgba(255, 59, 48, 0.35)',
  appBorderRadius: 0,
  inputBorderRadius: 0,
  barBg: '#0b0d12',
  barSelectedColor: '#ff3b30',
  textColor: '#f3d4d0',
  textMutedColor: '#a88a87',
})
