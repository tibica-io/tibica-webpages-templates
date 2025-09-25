<script setup>
  import MonkeySvg from "./assets/monkey.svg?component"
  import ViteSvg from "./assets/vite.svg?component"
  import VueSvg from "./assets/vue.svg?component"
  import TypescriptSvg from "./assets/typescript.svg?component"
</script>

<template>
  <main>
    <div class='main'>
      <div class='content'>
        <div class='inner-content'>
          <MonkeySvg class="monkey"/>

          <div class='tech-container'>
            <ViteSvg/>
            <VueSvg/>
            <TypescriptSvg/>
          </div>

          <div class='description-container'>
            <header class='header'>
              Vite + Vue + Typescript
            </header>
            <p class='description'>
              Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Site.
            </p>
          </div>
        </div>  
      </div>
    </div>
  </main>
</template>

<style>
  @import "./App.css";
</style>
