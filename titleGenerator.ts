import * as elements from './titleElements';

let generateTitle = (): string => {
  const howMany = randomIntFromInterval(5, 20);
  const numberForReaction = randomIntFromInterval(2, howMany - 1);

  return `${howMany} ${fetchRandom(elements.things)} that ${fetchRandom(
    elements.people
  )} ${fetchRandom(elements.what)}. ${numberForReaction} will ${fetchRandom(
    elements.reaction
  )}!`;
};

let fetchRandom = (collection: string[]): string =>
  collection[randomIntFromInterval(0, collection.length - 1)];

let randomIntFromInterval = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export { generateTitle };
