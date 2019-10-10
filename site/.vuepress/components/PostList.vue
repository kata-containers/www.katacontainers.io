<template>

  <div>
    <article-excerpt v-if="posts.length" v-for="post in posts" :key="post.path" :articleLink="post.path" :title="post.frontmatter.title" :author="post.frontmatter.author" :date="post.frontmatter.date" metaLink="https://www.google.com/">
      <div v-html="post.excerpt"></div>
    </article-excerpt>
    <div v-if="!posts.length">There don't seem to be any posts that match.</div>
  </div>

</template>

<script>

const inThisPath = (item, path) => {
  return item.path.match(new RegExp(`(${path})(?=.*html)`))
}

const inThisCategory = (item, category) => {
  if (category == 'all') return true;
  if (!item.frontmatter) return false;
  return item.frontmatter.category == category
}

const byThisAuthor = (item, author) => {
  if (author == 'any') return true;
  if (!item.frontmatter) return false;
  return item.frontmatter.author == author
}

export default {

  props: ["page","category","author"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let category = this.category || 'all';
      let author = this.author || 'any';

      let posts = this.$site.pages
        .filter(x => {
          return inThisPath(x, currentPage)
        })
        .filter(x => {
          return inThisCategory(x, category)
        })        
        .filter(x => {
          return byThisAuthor(x, author)
        })            
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>