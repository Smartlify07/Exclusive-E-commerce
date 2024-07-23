import { toast } from "react-toastify";
import { uid } from "uid";

export const notify = (message, type) => {
  const toastId = uid(5);

  if (type === "error") {
    toast.error(message, {
      toastId,
    });
  } else {
    toast.success(message, {
      toastId,
    });
  }
};
