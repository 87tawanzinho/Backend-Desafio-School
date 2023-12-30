import { Response, Request } from "express";
import Notes from "../models/grades";

export default async function getGrade(req: Request, res: Response) {
  const AllNotes = await Notes.find();
  res.status(200).json(AllNotes);
}
