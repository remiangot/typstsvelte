<script lang="ts">
import './app.css' 
import { $typst as typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet'
import ButtonTypstToPdf from './lib/components/ButtonTypstToPdf.svelte'

let content = $state<string>(`
  = Test
  
  You can modify this text and export it to PDF.`)

$effect(() => {
  typst.setCompilerInitOptions({
    getModule: () => 'wasm/typst_ts_web_compiler_bg.wasm',
  })
  typst.setRendererInitOptions({
    getModule: () => 'wasm/typst_ts_renderer_bg.wasm',
  })
})
</script>


<main class="min-w-full font-sans mt-8 ml-4" >

  <div contenteditable="true" bind:innerText={content} class="w-2/3 border-2 rounded-md p-4 mb-4">
  
  </div>
  <ButtonTypstToPdf
    typst={typst}
    {content}
/>    

</main>
