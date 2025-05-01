<script lang="ts">
import { FileDown } from '@lucide/svelte'
import type { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { defaultTypstPreamble } from './typstPreamble'

let {
  content,
  typst,
}: { content: string; classNames?: string[]; typst: TypstSnippet } = $props()

async function exportPdf(typstContent: string) {
  const mainContent = defaultTypstPreamble + typstContent
  // const response = await fetch('assets/logoCoopmaths.png')
  // const pngData = await response.arrayBuffer()
  // typst.mapShadow('logoCoopmaths', new Uint8Array(pngData))
  const pdfData = await typst.pdf({ mainContent })
  if (pdfData == null) {
    console.error('Failed to generate PDF')
    return
  }
  const pdfFile = new Blob([pdfData], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(pdfFile)
  link.download = 'MathALÉA - Test de connaissance.pdf'
  link.click()
  setTimeout(() => URL.revokeObjectURL(link.href), 1000)
}
</script>

<button
  onclick={() => exportPdf(content)}
  type="button"
>
<FileDown /> <span class="text-xl">PDF</span>
</button>

