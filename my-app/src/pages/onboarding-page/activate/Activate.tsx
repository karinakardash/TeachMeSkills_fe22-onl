import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "../../../hooks";
import { activate } from "../../../features/auth/authSlice";
import styles from "../confirm-email-page/ConfirmEmailPage.module.css";

type ActivatePageProps = {};

export const Activate: React.FC = () => {
  const { uid, token } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (uid && token) {
      dispatch(activate({ isActivated: true }));
      console.log("Dispatch was called");
    } else {
      console.error("Activate data is missing");
    }
  }, [dispatch, token, uid]);

  return <div>Выполняется активация пользователя</div>;
};
