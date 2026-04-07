import { asyncHandler } from "../../utils/asyncHandler";
import * as service from "./app.service";

export const createApp = asyncHandler(async (req: any, res: any) => {
  const app = await service.createApplication({
    ...req.body,
    userId: req.user.id,
  });
  res.status(201).json({ success: true, data: app });
});

export const getApps = asyncHandler(async (req: any, res: any) => {
  const apps = await service.getApplications(req.user.id, req.query.page);
  res.json({ success: true, data: apps });
});

export const updateApp = asyncHandler(async (req: any, res: any) => {
  const app = await service.updateApplication(
    req.params.id,
    req.user.id,
    req.body
  );
  res.json({ success: true, data: app });
});

export const deleteApp = asyncHandler(async (req: any, res: any) => {
  await service.deleteApplication(req.params.id, req.user.id);
  res.json({ success: true });
});

export const updateStatus = asyncHandler(async (req: any, res: any) => {
  const app = await service.updateStatus(
    req.params.id,
    req.user.id,
    req.body.status
  );
  res.json({ success: true, data: app });
});