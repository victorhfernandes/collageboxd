function YearOption() {
  const date = new Date();
  let year = date.getFullYear();
  const option = [];

  for (let i = 0; i <= date.getFullYear() - 2010; i++) {
    option.push(year);
    year--;
  }

  return option.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
}

export default YearOption;
