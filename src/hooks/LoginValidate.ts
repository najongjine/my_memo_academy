// src/utils/auth.ts
import axios from "axios";
import { useAuthStore } from "../store/authStore";

/**
 * 토큰 이상함 : "false"
 * 토큰 정상: "true"
 * 서버에러: "서버에러 ..."
 */
export const useValidateToken = async (): Promise<string> => {
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
    return `서버에러. ${err?.message ?? ""}`;
  }
};
