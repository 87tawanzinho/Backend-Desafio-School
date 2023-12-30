import { Request, Response } from "express";
import Notes from "../models/grades";

export default async function (req: Request, res: Response) {
  try {
    const { subject, grade, semester } = req.body;

    const existSemester = await Notes.findOne({ semester, subject });

    if (existSemester) {
      return res
        .status(400)
        .json({ error: "Subject already added to this semester" });
    }

    const newNote = new Notes({
      semester,
      subject,
      grade,
    });

    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" + error });
  }
}
