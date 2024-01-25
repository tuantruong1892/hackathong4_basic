import { Request, Response } from "express";
import notesRepository from "../repositories/notes.repository";

class NotesService {
  private notesRepository: notesRepository;

  constructor() {
    this.notesRepository = new notesRepository();
  }

  async getAll(sort: any, page: number, limit: number): Promise<any> {
    let offset = Math.ceil((page - 1) * limit);

    return await this.notesRepository.getAll(sort, limit, offset);
  }
  async getOne(id: number) {
    return await this.notesRepository.getOne(id);
  }
  async createNotes(formRequest: any) {
    await this.notesRepository.createNotes(formRequest);
  }

  async deleteNotesById(id: number) {
    const data = await this.notesRepository.deleteById(id);
    return data;
  }

  async updateNotes(id: number, formUpdate: any) {
    const data = await this.notesRepository.updateNotes(id, formUpdate);
    return data;
  }
}

export default NotesService;
