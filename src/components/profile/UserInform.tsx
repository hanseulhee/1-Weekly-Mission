import { useQuery } from "@tanstack/react-query";
import Button from "components/button";
import { DEFAULT_PROFILE_IMAGE } from "constants/common";
import QUERY_KEYS from "constants/queryKeys";
import { getUserProfile } from "libs/apis/user";
import styles from "styles/modules/user.module.css";
import manageStatus from "utils/manageStatus";

function UserInform() {
  const { isLoading, isError, data } = useQuery<User>({
    queryKey: [QUERY_KEYS.sample.user],
    queryFn: getUserProfile,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }

  return (
    <div className={styles.profileWrapper}>
      {data?.email === undefined ? (
        <Button content="로그인" link="/signin" />
      ) : (
        <>
          <img src={DEFAULT_PROFILE_IMAGE} alt="profile" />
          <span>{data?.email}</span>
        </>
      )}
    </div>
  );
}

export default UserInform;