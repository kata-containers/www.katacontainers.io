<template>
  <div class="bar is-dark-gray">
    <div class="container">
      <div class="bar-inner">
        <div class="bar-logo">
          <img :src="require('../theme/images/bar-logo.svg')" alt="Meet the Kata Community">
        </div>
        <!-- /.bar-logo -->
        <div class="bar-entry">
          <p>Read our latest use case, Application of Kata Containers in Baidu AI Cloud</p>
        </div>
        <!-- /.bar-entry -->
        <a href="katacontainers.io/baidu" target="_blank" class="bar-btn">Read Now</a>
      </div>
      <!-- /.bar-inner -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.bar -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Bar"
};
</script>
