interface Props {
  year: string;
}

const PeriodOption = ({ year }: Props) => {
  const month = [
    "All Year",
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

  const option: string[] = [];
  for (let i = 0; i <= dateI + 1; i++) {
    option.push(month[i]);
  }

  return option.map((item, index) => (
    <option key={index} value={index}>
      {item}
    </option>
  ));
};

export default PeriodOption;
