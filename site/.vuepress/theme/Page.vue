<template>
  <main class="main">
  <div class="top-line"></div>
    <hero class="hero-intro is-primary" containerClass="container-thin" withEntry :title="$page.title">
      <template slot="entry">
        <p>{{$page.frontmatter.description}}</p>
      </template>
    </hero>

    <base-section class="section-article-simple" containerClass="container-thin">
      <article class="article-simple default-page">

        <Content :custom="false" />

      </article><!-- /.article-simple -->

    </base-section>
  </main><!-- /.main -->
</template>