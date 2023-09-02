export const colorByOptions = option => {
  switch (option) {
    case 'good':
      return 'lightgreen';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'pink';
    default:
      return 'white';
  }
};
