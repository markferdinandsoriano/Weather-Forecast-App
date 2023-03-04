const concatKey = (data: Array<{ [key: string]: unknown }>, key: string) => {
  var result = data.map((obj) => obj[key]).join(",");
  return result;
};
export default concatKey;
