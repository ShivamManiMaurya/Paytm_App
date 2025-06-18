// lib/response.ts
import { ApiResponse } from "./types/types";

export function successResponse<T>(
  data: T,
  message = "Success",
  status = 200
): ApiResponse<T> {
  return { success: true, message, status, data };
}

export function errorResponse(
  message = "Something went wrong",
  status = 500
): ApiResponse {
  return { success: false, message, status };
}
