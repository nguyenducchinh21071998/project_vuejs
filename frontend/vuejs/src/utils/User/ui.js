import Vue from "vue";

export const confirm = (
  message = "",
  title = "",
  okeTitle = "キャンセル",
  cancelTitle = "削除する"
) => {
  const vm = new Vue({});
  return vm.$bvModal
    .msgBoxConfirm(
      message || "本当にこの管理ユーザーを削除して\nよろしいですか？",
      {
        modalClass: "c-confirm-box-modal",
        dialogClass: "c-confirm-box-dialog",
        okOnly: true,
        title: title,
        cancelDisabled: true,
        size: "sm",
        buttonSize: "lg",
        okVariant: "primary",
        okTitle: okeTitle,
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0 d-flex justify-content-around",
        hideHeaderClose: false,
        centered: true,
        cancelTitle: cancelTitle
      }
    )
    .then(value => value)
    .catch(err => err);
};

export const toast = (
  message,
  title = null,
  autoHideDelay = 2000,
  toaster = "b-toaster-top-center",
  variant = "primary"
) => {
  const vm = new Vue({});
  return vm.$bvToast.toast(message, {
    title,
    noCloseButton: false,
    autoHideDelay,
    appendToast: true,
    toaster,
    variant,
    noFade: false,
    solid: true
  });
};