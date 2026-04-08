import { asyncHandler } from "../../utils/asyncHandler";
import { Application } from "../../models/application.model";


// 🔹 CREATE APPLICATION
export const createApplication = asyncHandler(async (req: any, res: any) => {
  const { company, role, status, skills } = req.body;

  if (!company || !role) {
    throw new Error("Company and Role are required");
  }

  const app = await Application.create({
    company,
    role,
    status: status || "Applied",
    skills,
    userId: req.user.id, 
  });

  res.status(201).json({
    success: true,
    data: app,
  });
});


// 🔹 GET ALL APPLICATIONS
export const getApplications = asyncHandler(async (req: any, res: any) => {
  const apps = await Application.find({ userId: req.user.id }) // ✅ FIXED
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    data: apps,
  });
});


// 🔹 UPDATE STATUS (KANBAN DRAG)
export const updateStatus = asyncHandler(async (req: any, res: any) => {
  const { status } = req.body;

  const app = await Application.findByIdAndUpdate(
    req.params.id,
    { status },
    { returnDocument: "after" } 
  );

  res.json({
    success: true,
    data: app,
  });
});


// 🔹 DELETE APPLICATION
export const deleteApplication = asyncHandler(async (req: any, res: any) => {
  await Application.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Deleted successfully",
  });
});


// 🔹 UPDATE APPLICATION (EDIT)
export const updateApplication = asyncHandler(async (req: any, res: any) => {
  const { company, role } = req.body;

  const app = await Application.findByIdAndUpdate(
    req.params.id,
    { company, role },
    { returnDocument: "after" } 
  );

  res.json({
    success: true,
    data: app,
  });
});