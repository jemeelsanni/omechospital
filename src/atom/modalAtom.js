import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const profileState = atom({
  key: "profileState",
  default: null,
});
