<template>
  <box withActions title="Kata Containers 1.5 Release">
    <slot></slot>

    <template slot="actions">
      <a :href="link" class="button is-primary is-rounded">
        <span>{{ buttonName }}</span>
        
        <span class="ico">
          <img :src="require('../theme/svg/arrow-left.svg')" alt="Call To Action">
        </span>
      </a>
    </template>
  </box>
</template>

<script>
export default {
  props: ['buttonName','link']
}
</script>
