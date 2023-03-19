import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema({
  roadmap: { type: String },
  name: { type: String },
  sections: [
    {
      phase: {
        type: String,
      },
      path: [
        {
          topic: { type: String },
          description: { type: String },
          links: [{ type: String }],
          others: [
            {
              topic: { type: String },
              description: { type: String },
              links: [{ type: String }],
            },
          ],
        },
      ],
    },
  ],
});

export const RoadmapModel=mongoose.model("roadmap",RoadmapSchema);
