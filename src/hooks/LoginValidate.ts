// src/utils/auth.ts
import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const validateToken = async (): Promise<string> => {
  const userToken = useAuthStore((state) => state?.userToken ?? "");

  try {
    let res: any = await axios.post("http://localhost:3001/api/auth/validate", {
      token: userToken,
    });
    res = res?.data;
    if (!res?.success) {
      return "false";
    }
    return "true";
  } catch (err: any) {
    return `서버에서. ${err?.message ?? ""}`;
  }
};
