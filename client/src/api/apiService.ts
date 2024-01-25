import baseAxios from "../configs/base.axios";

class ApiService {
  async post(endpoint: string, data: any): Promise<any> {
    try {
      return await baseAxios.post(endpoint, data);
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }

  async getById(endpoint: string, id: number): Promise<any> {
    try {
      return await baseAxios.get(`${endpoint}/${id}`);
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }

  async getAll(endpoint: string): Promise<any> {
    try {
      return await baseAxios.get(endpoint);
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }

  async get(endpoint: string): Promise<any> {
    try {
      const response = await baseAxios.get(endpoint);
      return response.data;
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }
  async patch(endpoint: string, id: number, formData: any): Promise<any> {}

  async put(endpoint: string, data: any): Promise<any> {
    try {
      const response = await baseAxios.put(endpoint, data);
      return response.data;
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }

  async delete(endpoint: string): Promise<any> {
    try {
      return await baseAxios.delete(endpoint);
    } catch (error) {
      alert("Lỗi trong quá trình xử lý");
      throw error;
    }
  }
}

export default ApiService;
