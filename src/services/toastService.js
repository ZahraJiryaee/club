import { toast } from "react-toastify";

export function toasty(msg) {
  toast(msg);
}

export function success(msg) {
  toast.success(msg);
}
export function info(msg) {
  toast.info(msg);
}
export function error(msg) {
  toast.error(msg);
}
export function warning(msg) {
  toast.warn(msg);
}
