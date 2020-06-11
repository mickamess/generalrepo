export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      return this.$store.state.parts || {
        heads: [],
        torsos: [],
        bases: [],
        arms: [],
      };
    },
  },
};
