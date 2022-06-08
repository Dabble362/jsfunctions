function filter_list(l) {
  const result = l.filter((element) => typeof element === "number");
  return result;
}
