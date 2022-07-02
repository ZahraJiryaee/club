import { toast } from "react-toastify";

export function toasty(msg) {
  toast(msg);
}

export function toastSuccess(msg) {
  toast.success(msg);
}
export function toastInfo(msg) {
  toast.info(msg);
}
export function toastError(msg) {
  toast.error(msg);
}
export function toastWarning(msg) {
  toast.warn(msg);
}
