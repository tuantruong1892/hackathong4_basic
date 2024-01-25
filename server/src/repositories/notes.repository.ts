import { Op } from "sequelize";
import Notes from "../models/notes.model";

class notesRepository {
  async getAll(sort: any, limit: number, offset: number) {
    if (sort) {
      return await Notes.findAll({
        order: [["Notes", sort]],
        offset,
        limit,
      });
    } else {
      return await Notes.findAll({
        offset,
        limit,
      });
    }
  }
  async getOne(id: number) {
    return await Notes.findOne({
      where: {
        id,
      },
    });
  }
  async createNotes(formRequest: any) {
    await Notes.create(formRequest);
  }

  async deleteById(id: number) {
    return await Notes.destroy({
      where: {
        id,
      },
    });
  }

  async updateNotes(id: number, formUpdate: any) {
    return await Notes.update(formUpdate, {
      where: {
        id,
      },
    });
  }
}

export default notesRepository;
