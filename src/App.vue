<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: Raleway;
  src: url('./assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype'),
       url('./assets/fonts/Raleway-Italic-VariableFont_wght.ttf') format('truetype');
}

body {
  background-color: #fff8eb;
  font-family: Raleway, sans-serif;
  color: #160c28;
  font-size: 1vw;
  line-height: 1.65;
}


h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 38px;
  line-height: 44px;
  font-weight: 300;
}

h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
}

h5 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

a {
  color: #fff8eb;
  font-weight: 300;
  text-decoration: none;
}

.section {
  background-color: #fff8eb;
}

.container {
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 6em;
  padding-left: 6em;
}

.container.is--hero {
  min-height: 100vh;
  margin-top: 8em;
  padding-top: 3em;
  padding-bottom: 3em;
}

.separator {
  width: 100%;
  height: 1px;
}

.is--dark {
  background-color: #160c28;
  color: #fff8eb;
}
</style>
