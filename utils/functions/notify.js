import { toast } from "react-toastify";
import { uid } from "uid";

export const notify = (message) => {
  const toastId = uid(5);

  toast.success(message, {
    toastId,
  });
};
