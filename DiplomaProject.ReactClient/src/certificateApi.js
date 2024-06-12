import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const createCertificate = async (data) => {
  const response = await axiosInstance.post(`/Certificate`, data);
  return response.data;
};

export const getAllCertificates = async () => {
  return (await axiosInstance.get(`/Certificate`)).data;
};

export const getByIdCertificate = async (id) => {
  return (await axiosInstance.get(`/Certificate/${id}`)).data;
};

export const deleteCertificate = async (id) => [
  await axiosInstance.delete(`/Certificate/${id}`),
];
