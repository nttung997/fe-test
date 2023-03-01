export default {
  methods: {
    getFee(amount) {
      if (amount < 1000) return Math.round(amount * 0.5 / 100)
      if (amount < 10000) return Math.round(amount * 0.8 / 100)
      return Math.round(amount * 0.5 / 100) + 150
    },
  },
}
