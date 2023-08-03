const SelectOption = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  console.log(date.getMonth());

  const option: string[] = [];
  for (let i = 0; i <= date.getMonth() + 1; i++) {
    if (i === 0) {
      option.push("All Year");
      continue;
    }
    option.push(month[i - 1]);
  }

  return option.map((item, index) => (
    <option key={index} value={index}>
      {item}
    </option>
  ));
};

export default SelectOption;
