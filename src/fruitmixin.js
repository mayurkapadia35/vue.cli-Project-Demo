export const fruitmixin={
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredfruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  },
  created () {
    console.log('Created');
  }
}
