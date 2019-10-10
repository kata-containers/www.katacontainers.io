// import Buefy from "buefy";

import Field from "buefy/dist/components/field";
import Input from "buefy/dist/components/input";
import Checkbox from "buefy/dist/components/checkbox";
import Tag from "buefy/dist/components/tag";
import Modal from "buefy/dist/components/modal";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(Field);
  Vue.use(Input);
  Vue.use(Checkbox);
  Vue.use(Tag);
  Vue.use(Modal);
};
