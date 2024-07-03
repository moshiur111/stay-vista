import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
  return (
    <div>
      <MenuItem icon={BsFingerprint} label="My Bookings" address="my-bookings" />
    </div>
  );
};

export default GuestMenu;
