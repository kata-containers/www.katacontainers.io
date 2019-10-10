<template>
	<div class="article-excerpt">
		<h5 class="article-excerpt-title">
			<router-link v-if="articleLink" :to="articleLink">{{ title }}</router-link>

			<span v-else>{{ title }}</span>
		</h5><!-- /.article-excerpt-title -->

		<div class="article-excerpt-entry">
			<slot />
		</div><!-- /.article-excerpt-entry -->

		<div class="article-excerpt-meta">
			<p>By <a :href="authorLink">{{ authorName }}</a> on {{ friendlyDate }}</p>
		</div><!-- /.article-excerpt-meta -->
	</div><!-- /.article-excerpt -->
</template>

<script>
const matchesAuthor = (page, author) => {
  if (page.path == "/authors/" + author + ".html") return true;
};

export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "ArticleExcerpt",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    articleLink: {
      type: null,
      default: () => {}
    },
    title: {
      type: String,
      default: () => {}
    },
    author: {
      type: String,
      default: () => {}
    },
    date: {
      type: String,
      default: () => {}
    }
  },
  computed: {
    friendlyDate() {
      return new Date(this.date).toLocaleDateString();
    },
    authorLink() {
      return "/blog/?author=" + this.author;
    },
    authorName() {
      let author = this.author;
      let authors = this.$site.pages.filter(x => {
        return matchesAuthor(x, author);
      });
      if (authors.length && authors[0].frontmatter)
        return authors[0].frontmatter.name;
    }
  }
};
</script>
