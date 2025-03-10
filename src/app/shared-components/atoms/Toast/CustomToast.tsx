import React, { useEffect } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { clearNotification } from "../../../store/reducers/notification.slice";

const CustomToast: React.FC = () => {
    const dispatch = useAppDispatch();
    const { type, message } = useAppSelector((state) => state.notification);


    useEffect(() => {
        if (type && message) {
            setTimeout(() => {
                dispatch(clearNotification());
            }, 5000);
        }
    }, []);

  return (
    <div className={`p-3 m-2 ${type === 'error' ? 'bg-danger' : 'bg-success'} rounded toast fade show position-absolute bottom-0 end-0`} style={{ zIndex: 9999 }}>
      <Toast fade={false}>
        <ToastHeader>{type === 'error' ? "Error" : "Success"}</ToastHeader>
        <ToastBody>
          {message}
        </ToastBody>
      </Toast>
    </div>
  );
};

export default CustomToast;
