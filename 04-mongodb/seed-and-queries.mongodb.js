use fundamentals_playground;

db.tasks.drop();

db.tasks.insertMany([
  {
    title: "Review TS generics",
    status: "todo",
    owner: { id: 1, name: "Ren" },
    tags: ["typescript", "study"],
    estimateHours: 2,
    createdAt: new Date("2026-03-10T10:00:00Z")
  },
  {
    title: "Build Express middleware",
    status: "in_progress",
    owner: { id: 2, name: "Kai" },
    tags: ["api", "express"],
    estimateHours: 3,
    createdAt: new Date("2026-03-11T09:00:00Z")
  },
  {
    title: "Create React controlled form",
    status: "done",
    owner: { id: 1, name: "Ren" },
    tags: ["react"],
    estimateHours: 1.5,
    createdAt: new Date("2026-03-09T15:00:00Z")
  }
]);

db.tasks.find({}, { title: 1, status: 1, "owner.name": 1 });

db.tasks.updateOne(
  { title: "Review TS generics" },
  { $set: { status: "in_progress" }, $inc: { estimateHours: 0.5 } }
);

db.tasks.updateOne(
  { title: "Build Express middleware" },
  { $push: { tags: "backend" } }
);

db.tasks.aggregate([
  { $match: { status: { $in: ["todo", "in_progress", "done"] } } },
  { $group: { _id: "$status", count: { $sum: 1 }, avgEstimate: { $avg: "$estimateHours" } } },
  { $sort: { count: -1 } }
]);

// TODO 1: Find tasks owned by Ren only.
// TODO 2: Mark all in_progress tasks as done.
// TODO 3: Delete tasks where estimateHours < 2.
// TODO 4: Build an aggregation grouped by owner.name.
