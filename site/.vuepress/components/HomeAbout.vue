<template>
  <a :href="link" class="button is-primary is-rounded">
    <span>LEARN MORE</span>
    
    <span class="ico">
      <img :src="require('../theme/svg/arrow-left.svg')" alt="Call To Action">
    </span>
  </a>
</template>

<script>
export default {
  props: ['buttonName','link']
}
</script>
