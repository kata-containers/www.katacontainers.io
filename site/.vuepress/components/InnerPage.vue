<template>
  <main class="main">
    <hero class="hero-intro is-primary" containerClass="container-thin" withEntry title="Page Title">
      <template slot="entry">
        <p>This could be a short summary of what a reader might find on this page.</p>
      </template>
    </hero>

    <base-section class="section-article-simple" containerClass="container-thin">
      <article class="article-simple">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin purus ante, et porta eros volutpat nec. Nullam tincidunt ultrices lorem, vel euismod mi placerat nec. Nullam porttitor nibh sagittis, suscipit lorem pharetra, <a href="#">example link here</a>. Pellentesque posuere vitae magna quis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat orci eu sapien dictum, et bibendum nulla pellentesque. Nullam fringilla dolor eget nibh iaculis volutpat. Donec tempor accumsan consectetur. Etiam lobortis cursus neque ac eleifend. Maecenas pharetra vehicula arcu quis fermentum. Integer ullamcorper tortor in magna condimentum, vitae fringilla lacus fringilla. Aenean malesuada bibendum diam nec volutpat. Nullam pretium tellus nisi, ut aliquam arcu consectetur blandit.</p>

        <h2>H2</h2>

        <h3>H3</h3>

        <h4>H4</h4>

        <h5>H5</h5>

        <p>Donec dui massa, porttitor sit amet dignissim sed, placerat eget orci. Pellentesque id ullamcorper elit. Aliquam accumsan, neque eu pulvinar eleifend, lorem ante lacinia diam, id vehicula erat velit nec tortor.</p>

        <img src="../theme/images/sample-photo.png" alt="Sample Photo" />

        <p>Donec dui massa, porttitor sit amet dignissim sed, placerat eget orci. Pellentesque id ullamcorper elit. Aliquam accumsan, neque eu pulvinar eleifend, lorem ante lacinia diam, id vehicula erat velit nec tortor.</p>
      </article><!-- /.article-simple -->

      <div class="form">
        <form>
          <h5 class="form-title">Form</h5><!-- /.form-title -->

          <div class="form-body">
            <field-wrap label="Label">
              <b-input placeholder="Placeholder text" />
            </field-wrap>

            <field-wrap label="Label">
              <b-input value="Entered text" placeholder="Placeholder text" />
            </field-wrap>

            <field-wrap type="is-danger" label="Another Label" message="This field is required.">
              <b-input placeholder="Placeholder text" />
            </field-wrap>

            <div class="checkboxes">
              <h6 class="checkboxes-title">Question for the following check boxes</h6><!-- /.checkboxes-title -->

              <div class="checkbox-wrap">
                <b-checkbox>Option number one</b-checkbox>
              </div><!-- /.checkbox -->

              <div class="checkbox-wrap">
                <b-checkbox>The second option</b-checkbox>
              </div><!-- /.checkbox -->

              <div class="checkbox-wrap">
                <b-checkbox>Option number three</b-checkbox>
              </div><!-- /.checkbox -->
            </div><!-- /.checkboxes -->
          </div><!-- /.form-body -->

          <div class="form-foot">
            <button class="button is-large is-primary is-rounded">submit</button>
          </div><!-- /.form-foot -->
        </form>
      </div><!-- /.form -->
    </base-section>
  </main><!-- /.main -->
</template>

<script>

	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'InnerPage'

	}
</script>
