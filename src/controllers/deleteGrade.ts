import { Request, Response } from "express";
import Notes from "../models/grades";

export default async function deleteGrade(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Notes.findOneAndDelete({ _id: id });

    return res.status(200).json({ message: "Deletado com sucesso." });
  } catch (err) {
    return res.status(500).json({ message: "Erro," + err });
  }
}
