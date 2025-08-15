import { HiArrowRightOnRectangle } from "react-icons/hi2";

import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
