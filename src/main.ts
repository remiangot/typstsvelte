import { mount } from 'svelte'
import App from './App.svelte'

const elementApp = document.getElementById('app')
if (!elementApp) {
  throw new Error('No app element found in index.html')
}
const app = mount(App, {
  target: elementApp,
})

export default app
