export default {
  filters: {
    moneyFormater: function (value) {
      let formatter = new Intl.NumberFormat();
      return formatter.format(value);
    }
  }
}

