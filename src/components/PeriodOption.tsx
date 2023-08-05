interface Props {
  year: string;
}

const PeriodOption = ({ year }: Props) => {
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
  const dateI = year === String(date.getFullYear()) ? date.getMonth() : 11;
  console.log("year: " + year);
  console.log("FullYear: " + date.getFullYear());

  const option: string[] = [];
  for (let i = 0; i <= dateI + 1; i++) {
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

export default PeriodOption;
