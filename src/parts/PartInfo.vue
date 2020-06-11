<template>
    <div>
        <h1>{{ part.title }}</h1>
    <div>
    {{ part.description }}
    </div>
    </div>
</template>

<script>
import GetPartMixin from './get-parts-mixin';

export default {
  name: 'Partinfo',
  mixins: [GetPartMixin],
  props: {
    partType: { type: String },
    id: { type: [Number, String] },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
