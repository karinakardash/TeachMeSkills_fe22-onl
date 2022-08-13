import { baseUrl, commonPostHeaders } from "../../api/config";
import {
  ActivatePayload,
  LoginPayload,
  LoginResponse,
  RefreshResponse,
  RegisterPayload,
  RegisterResponse,
} from "./types";

export namespace AuthApi {
  export async function register(
    payload: RegisterPayload
  ): Promise<RegisterResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/users/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
      });
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  let activatePromise = Promise.resolve({ isActivated: false });

  export async function isActivated() {
    const result = await activatePromise;
    return result.isActivated;
  }
  export async function activate(payload: ActivatePayload) {
    let resolveCb!: (payload: ActivatePayload) => void;
    const chainedPromise = new Promise<ActivatePayload>((r) => (resolveCb = r));
    activatePromise = activatePromise.then(() => chainedPromise);

    try {
      const result = await fetch(`${baseUrl}auth/users/activation/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
      });
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      const data = await result.text();
      resolveCb({ isActivated: true });
      return data;
    } catch (e) {
      resolveCb({ isActivated: false });
      throw e;
    }
  }

  export async function login(payload: LoginPayload): Promise<LoginResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/jwt/create/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: commonPostHeaders,
      });
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  export async function refresh(
    refreshToken: string
  ): Promise<RefreshResponse> {
    try {
      const result = await fetch(`${baseUrl}auth/jwt/refresh/`, {
        method: "POST",
        body: JSON.stringify({ refresh: refreshToken }),
        headers: commonPostHeaders,
      });
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
