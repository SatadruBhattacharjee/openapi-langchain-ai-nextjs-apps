import { type Mask } from "../mask";

export type BuiltinMask = Omit<Mask, "id"> & {
  builtin: true;
};
