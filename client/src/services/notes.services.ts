import NotesRepository from "../repositories/notes.repository";
import StudentRepository from "../repositories/notes.repository";

class NotesService {
  private notesRepository: any;
  constructor() {
    this.notesRepository = new NotesRepository();
  }
  async getAll() {
    const data = await this.notesRepository.getAll();
    return data;
  }
  async getStudentById(id: string) {
    const data = await this.notesRepository.getStudentById(id);
    return data;
  }
  async deleteNotes(id: string) {
    const data = await this.notesRepository.deleteNotes(id);
    return data;
  }
  async updateStudent(id: any, formRequestModel: any) {
    try {
      return await this.notesRepository.updateStudent(id, formRequestModel);
    } catch (error: any) {
      throw error;
    }
  }
}
export default NotesService;
