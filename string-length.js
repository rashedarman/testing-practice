function stringLength(str) {
  console.log(str.length);
  if (!(str.length >= 1 && str.length <= 10)) {
    throw new Error(
      'string must be at least 1 character long and no longer than 10 characters'
    );
  }
  return str.length;
}

module.exports = stringLength;
