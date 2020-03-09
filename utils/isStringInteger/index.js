const isStringInteger = str => {
  if (isNaN(str)) {
    return false;
  }

  return Number.isInteger(Number(str));
};

module.exports = isStringInteger;
