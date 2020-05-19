import faker from 'faker';

const twoNumber = (number) => `0${number}`.slice(-2);

const generatorDate = (dayGenerator = 1) => {
  const dateString = faker.date.recent(dayGenerator);
  const startDate = new Date(dateString);
  const day = startDate.getDate();
  const month = twoNumber(startDate.getMonth());
  const year = startDate.getFullYear();
  const hours = twoNumber(startDate.getHours());
  const minutes = twoNumber(startDate.getMinutes());

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
  };
};

const generatorGoals = () => {
  const goals = faker.lorem.words(faker.random.number(6));

  return `${goals.replace(/ /g, '; ')};`;
};

const randomLiveInfo = (options = {}) => {
  const blank = {};

  return Object.assign(
    blank,
    {
      titleShort: faker.lorem.sentence(2, 3),
      title: faker.lorem.sentence(5, 10),
      photo: faker.image.city(200, 200, true),
      start: generatorDate(),
      finish: generatorDate(2),
      goals: generatorGoals(),
      description: faker.lorem.sentence(20, 40),
    },
    { ...options }
  );
};

export { generatorDate, randomLiveInfo };
