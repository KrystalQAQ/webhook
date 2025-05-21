import axios from "axios";
import { API_BASE_URL, DEFAULT_CONFIG } from "./config";

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  ...DEFAULT_CONFIG,
  headers: {
    ...DEFAULT_CONFIG.headers,
  },
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      throw new ApiError(
        error.response.status,
        `HTTP error! status: ${error.response.status}`
      );
    }
    throw new ApiError(500, error.message);
  }
);

/**
 * 发送 API 请求
 * @param {string} endpoint - API 端点
 * @param {Object} [data] - 请求数据
 * @param {Object} [config] - 请求配置
 * @returns {Promise<any>} 响应数据
 */
export async function request(endpoint, data = null, config = {}) {
  try {
    const method = config.method || "POST";
    const requestConfig = {
      ...config,
      method,
    };

    // 根据请求方法处理数据
    if (method === "GET") {
      requestConfig.params = data;
    } else {
      requestConfig.data = data;
    }

    return await axiosInstance(endpoint, requestConfig);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, error.message);
  }
}
