<template>
  <footer class="footer is-dark">
    <div class="container container-medium">
      <div class="footer-inner">
        <div class="columns">
          <div class="column">
            <div class="footer-content">
              <div class="columns is-mobile">
                <div class="column" v-for="section in $site.themeConfig.footer.sections">
                  <h6 class="footer-title">{{ section.title }}</h6>
                  <!-- /.footer-title -->
                  <ul class="footer-list nobullet">
                    <li v-for="item in section.nav" class="item-no-bullet">
                      <a :href="item.link">{{ item.text }}</a>
                    </li>
                  </ul>
                  <!-- /.footer-list -->
                </div>
                <!-- /.column -->
              </div>
              <!-- /.columns -->
            </div>
            <!-- /.footer-content -->
          </div>
          <!-- /.column -->
          <div class="column">
            <div class="footer-aside">
              <div class="footer-entry">
                <p>Kata Containers is an independent open source community collaboratively developing code under the Apache 2 license. The project is supported by the OpenStack Foundation; the community follows the OpenStack Foundation <a href="//www.openstack.org/legal/community-code-of-conduct/">Code of Conduct</a>.
                </p>
              </div>
              <!-- /.footer-entry -->
              <div class="footer-brand">
                <router-link to="/">
                  <img :src="require('../theme/svg/logo_white.svg')" alt="Kata Containers">
                </router-link>
              </div>
              <!-- /.footer-brand -->
            </div>
            <!-- /.footer-aside -->
          </div>
          <!-- /.column -->
        </div>
        <!-- /.columns -->
      </div>
      <!-- /.footer-inner -->
    </div>
    <!-- /.container-medium -->
  </footer>
  <!-- /.footer -->
</template>

<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'BaseFooter'
	}
</script>
