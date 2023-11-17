import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

interface GetProps {
      link: string;
      config?: AxiosRequestConfig<any>;
      data?: any;
}


const axiosInstance: AxiosInstance = axios.create({
      baseURL: 'https://api.bitpin.ir/',
});

export async function Get({ link, config }: GetProps) {
      return await axiosInstance.get(link, config);
}
export async function Post({ link, data, config }: GetProps) {
      return await axiosInstance.post(link, data, config);
}
export async function Delete({ link, config }: GetProps) {
      return await axiosInstance.delete(link, config);
}
export async function Put({ link, data, config }: GetProps) {
      return await axiosInstance.put(link, data, config);
}