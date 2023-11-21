import { AxiosResponse } from "axios";
import { instance } from "libs/api";

export async function getUserSampleProfile() {
  const response = await instance.get<{}, SampleUser>("/api/sample/user");
  return response;
}

export async function getUserProfile() {
  const response = await instance.get<{}, AxiosResponse<User[]>>(
    "/api/users/1"
  );
  return response.data;
}