<template>
  <div class="bar is-dark-gray">
    <div class="container">
      <div class="bar-inner">
        <div class="bar-logo">
          <img :src="require('../theme/images/bar-logo.svg')" alt="Meet the Kata Community">
        </div>
        <!-- /.bar-logo -->
        <div class="bar-entry">
          <p>Meet the Kata Containers Community at the Open Infrastructure Summit, November 4-6, 2019 in Shanghai, China!</p>
        </div>
        <!-- /.bar-entry -->
        <a href="//medium.com/kata-containers/kata-containers-featured-at-open-infrastructure-summit-shanghai-in-november-ad16c78748c1" target="_blank" class="bar-btn">View Sessions</a>
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
