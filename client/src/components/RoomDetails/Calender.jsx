import { DateRange } from "react-date-range";

const Calender = ({value}) => {
  return <DateRange>
    rangeColors={['#F43F5E']}
    ranges={value}
    direction={'vertical'}
    </DateRange>;
};

export default Calender;
