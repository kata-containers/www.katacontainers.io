<template>



<div class="columns ">


<div class="column" v-for="item in this.posts.items">
    <div class="card">
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src="../theme/images/Oval_3.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{ item.author  }}</p>
            <p class="subtitle is-6">{{ item.pubDate | Dateformatmd }} * {{ item.content | ReadingTime }}</p>
        </div>
        </div>
        <div class="content">
        <h3> <a :href="item.link" class="a-no-underline" >{{ item.title }}</a> </h3>
        {{ item.description | Subtitle }} [...] <a :href="item.link">Read More</a>
        </div>
    </div>
    </div>
</div>


</div>

	
</template>

<script>

    import axios from "axios";
	import moment from 'moment'

	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'LastPosts',

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
		},

		data() {
			return {
				posts: { items: [] },
			}
		},

		filters: {			
			Dateformatmd (value) {
				if (value) {
					return moment(String(value)).format('MMM DD')
				}
			},
			Subtitle(value) {
				const reg = /<\/?[^>]+(>|$)/g;
				return value.replace( reg  , "").slice(0, 210);
			},
			ReadingTime(value) {
				const reg = /<\/?[^>]+(>|$)/g;
				value = value.replace( reg  , "");
				const wordsPerMinute = 265;
				const noOfWords = value.split(/\s/g).length;
				const minutes = noOfWords / wordsPerMinute;
				const readTime = Math.ceil(minutes);
				return `${readTime} min read`;
			}			
		},
		/**
		 * The created lifecycle hook
		 * 
		 * @return {Void}
		 */
		mounted() {					
			
			axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/kata-containers')
				 .then((response) => {
					this.posts.items = response.data.items.slice(0, 3);
                 });
		},
	}
</script>
