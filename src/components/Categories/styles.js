const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 2,
  },
  selectedItem: {
    color: '#000',
  },
  itemContainer: {
    marginRight: 17,
    marginVertical: 14,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});

export default styles;
