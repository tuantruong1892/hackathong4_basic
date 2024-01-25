import express, { Request, Response } from "express";
import NotesService from "../services/notes.service";

const notesControler = express.Router();
const notesService = new NotesService();
notesControler.get("/", async (req: Request, res: Response) => {
  try {
    const sort = req.query.sort || undefined;
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 1;

    const result = await notesService.getAll(sort, page, limit);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});
notesControler.get("/detail/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result: any = await notesService.getOne(id);
    if (!result) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});

notesControler.post("/", async (req: Request, res: Response) => {
  try {
    const newNotes = {
      title: req.body.title,
      content: req.body.content,
    };
    await notesService.createNotes(newNotes);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    console.log(req);

    res.status(500).json({ msg: "loi gi day" });
  }
});

notesControler.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result: any = await notesService.deleteNotesById(id);
    console.log(result);

    if (!result) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(201).json({ msg: "Delete successfully" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});

notesControler.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updateNotes = { ...req.body };
    const result = await notesService.updateNotes(id, updateNotes);
    if (result[0] == 0) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(201).json({ msg: "Update successfully" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});
export default notesControler;
