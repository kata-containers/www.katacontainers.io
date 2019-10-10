<template>
	<section class="section-article">
		<div class="container">
			<article class="article level">

        <figure v-if="image" class="article-image level-item level-right">
        <!-- <a href="/images/Airship_Diagram_SimplifiedArchitecture.jpg">
					<img
						:src="image"
						:alt="title"
					/>
          </a> -->
             <image-modal imgurl="../images/kata-explained1@2x.png" />

				</figure><!-- /.article-image -->
				<div class="article-content">
					<!-- /.article-title -->

					<div class="article__entry">
						<slot />
					</div><!-- /.article__entry -->
				</div><!-- /.article-content -->
			</article><!-- /.article -->
		</div><!-- /.container -->
	</section><!-- /.section-article -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "BaseArticle",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    image: {
      type: String,
      default: () => {}
    },
    title: {
      type: String,
      default: () => {}
    }
  }
};
</script>
