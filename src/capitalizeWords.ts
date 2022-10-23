const capitalize = (s: string) => `${s[0].toUpperCase()}${s.substr(1)}`;
const mapWords = (modifier: (word: string) => string) => (sentence: string) =>
  sentence.split(' ').map(modifier).join(' ');
const capitalizeWords = mapWords(capitalize);

export default capitalizeWords;
