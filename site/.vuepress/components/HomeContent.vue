<template>
  <main class="main">
    <hero class="hero-main is-primary" withButton :title="$page.frontmatter.hero.headline" :image="require('../theme/images/hero-image.png')">
      <template slot="buttons">
        <a :href="$page.frontmatter.hero.button.url" class="button is-primary-dark is-rounded">
          <span>{{ $page.frontmatter.hero.button.title }}</span>

          <span class="ico">
            <img :src="require('../theme/svg/arrow-left.svg')" alt="Learn More" />
          </span>
        </a>
      </template>
    </hero>

    <base-article :image="require('../theme/images/kata-explained1@2x.png')">
      <slot name="about"></slot>
    </base-article>
<!-- Features Table -->    
<div class="features-section">
<div class="container">
  <h2 class="features">Features</h2>
  <table class="table" style="width:100%; background-color: white;">
    <tbody>
      <tr>
        <td class="is-selected is-primary-blue"><img class="feature-icons" :src="require('../theme/svg/security-badge.svg')" alt="Security"/><h6 class="padding-top-5">Security</h6></td>
        <td>Runs in a dedicated kernel, providing isolation of network, I/O and memory and can utilize hardware-enforced isolation with virtualization VT extensions.</td>
      </tr>
      <tr>
        <td class="is-selected is-primary-blue"><img class="feature-icons" :src="require('../theme/svg/compatibiity-badge.svg')" alt="Compatibility"/><h6  class="padding-top-10">Compatibility</h6></td>
        <td>Supports industry standards including OCI container format, Kubernetes CRI interface, as well as legacy virtualization technologies.</td>
      </tr>
      <tr>
        <td class="is-selected is-primary-blue"><img class="feature-icons" :src="require('../theme/svg/preformance-growth.svg')" alt="Performance"/><h6>Performance</h6></td>
        <td>Delivers consistent performance as standard Linux containers; increased isolation without the performance tax of standard virtual machines.</td>
      </tr>
      <tr>
        <td class="is-selected is-primary-blue"><img class="feature-icons" :src="require('../theme/svg/bullseye-simplicity.svg')" alt="Simplicity"/><h6>Simplicity</h6></td>
        <td>Eliminates the requirement for nesting containers inside full blown virtual machines; standard interfaces make it easy to plug in and get started.</td>
      </tr>
    </tbody>
  </table>
</div>  
</div>
<!-- /Features Table -->
    <base-section class="section-modified">
      <div class="section-inner">
        <div class="columns">
          <div class="column">
            
            <div class="list-numeric">
              <h4 class="list-numeric-title">How to Get Involved.</h4>
              <ul>
                <li>
                  <h6>Stay in the loop</h6>
                  <p class="p-simple-item-bullet">Join the mailing list: <a href="http://lists.katacontainers.io">http://lists.katacontainers.io</a> </p>
                  <p class="p-simple-item-bullet">Slack: <a href="http://bit.ly/KataSlack">bit.ly/KataSlack</a>  
                    IRC: <a href="#kata-dev">#kata-dev</a>
                  </p>
                </li>
                <li>
                  <h6>Weekly Architecture Meetings</h6>
                  <p>Updates from the community on a weekly basis.</p>
                  <p class="p-simple-item-bullet">
                    <a href="https://etherpad.openstack.org/p/katacontainers-2019-architecture-committee-mtgs">View the Etherpad</a>
                  </p>
                </li>
                <li>
                  <h6>Share your story.</h6>
                  <p>Are you running Kata Containers?</p>
                  <p class="p-simple-item-bullet">Take the Kata Containers <a href="https://www.surveymonkey.com/r/KataContainers">User Survey!</a>
                  </p>
                </li>
              </ul>
            </div>

          </div><!-- /.column -->

          <div class="column">
            <slot name="announcement"></slot>
          </div><!-- /.column -->
        </div><!-- /.columns -->
      </div><!-- /.section-inner -->
    </base-section>


 <section class="section search-content">

  <div class="search-content">
    <h3 class="search-content-title">Subscribe to News About Kata</h3>
    <!-- /.hero-title -->
    <div class="search-content-subtitle">Stay up to date on Kata Containers and Open Infrastructure community news.
    </div>
    <div v-if="withEntry" class="hero-entry">
      <slot name="entry"/>
    </div>
    <!-- /.hero-entry -->
    <div v-if="withButton" class="hero-actions">
      <slot name="buttons"/>
    </div>
    <!-- /.hero-actions -->
  </div>

  <b-field position="is-centered">

    <form method="post" id="e2ma_signup" onsubmit="return signupFormObj.checkForm(this)" action="https://app.e2ma.net/app2/audience/signup/1862950/1771360/">

      <input id="id_prev_member_email" name="prev_member_email" type="hidden">
      <input id="id_source" name="source" type="hidden">
      <input id="id_group_4036448" name="group_4036448" type="hidden" value="4036448">
      <input type="hidden" name="private_set" value="{num_private}">

      <input placeholder="Email Address" id="id_email" name="email" type="email" required class="search-container-input" size="is-large">
      </input>

        <!-- <button class="search-container-submit">Search</button> -->

        <a href="#" class="button is-primary no-border-search-submit" onclick="document.getElementById('e2ma_signup').submit();">
          <span>SUBMIT</span>
          
          <span class="ico">
            <img :src="require('../theme/svg/arrow-left.svg')" alt="Call To Action">
          </span>
        </a>


    </form>
    
  </b-field>



  </section>


  </main><!-- /.main -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "HomeContent"
};
</script>
