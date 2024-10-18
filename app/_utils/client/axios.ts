import axios from "axios";

const axiosDefaults = {
  timeout: 20000,
};

export const axiosInstance = axios.create({
  ...axiosDefaults,
});
