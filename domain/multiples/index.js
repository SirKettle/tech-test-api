const MULTIPLE_OF_3_CODE = 'P';
const MULTIPLE_OF_5_CODE = 'E';

const isMultipleOf = of => val => val % of === 0;
const isMultipleOf3 = isMultipleOf(3);
const isMultipleOf5 = isMultipleOf(5);

const getMultiplesCode = input => {
  const multipleOf3 = isMultipleOf3(input);
  const multipleOf5 = isMultipleOf5(input);

  if (multipleOf3 && multipleOf5) {
    return `${MULTIPLE_OF_3_CODE}${MULTIPLE_OF_5_CODE}`;
  }

  if (multipleOf3) {
    return MULTIPLE_OF_3_CODE;
  }

  if (multipleOf5) {
    return MULTIPLE_OF_5_CODE;
  }

  return input;
};

module.exports = {
  isMultipleOf,
  getMultiplesCode,
};
