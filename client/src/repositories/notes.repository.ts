import ApiService from "../api/apiService";

class NotesRepository {
  private apiService: any;
  constructor() {
    this.apiService = new ApiService();
  }
  async getAll() {
    return await this.apiService.get("api/v1/notes");
  }
  async getnotesById(id: string) {
    return await this.apiService.get(`api/v1/notes/details/:${id}`);
  }
  async deleteNotes(id: string) {
    return await this.apiService.delete(`api/v1/notes/${id}`);
  }
  async updateNotes(user_id: any, formRequestModel: any) {
    const res = await this.apiService.put(
      `api/v1/notes/${user_id}`,
      formRequestModel
    );
    return res;
  }
}

export default NotesRepository;
