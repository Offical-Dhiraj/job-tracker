import { Application } from "../../models/application.model";

export const createApplication = async (data: any) =>
  await Application.create(data);

export const getApplications = async (userId: string, page = 1) => {
  const limit = 10;
  const skip = (page - 1) * limit;

  return await Application.find({ userId }).skip(skip).limit(limit);
};

export const updateApplication = async (id: string, userId: string, data: any) =>
  await Application.findOneAndUpdate({ _id: id, userId }, data, { new: true });

export const deleteApplication = async (id: string, userId: string) =>
  await Application.findOneAndDelete({ _id: id, userId });

export const updateStatus = async (id: string, userId: string, status: string) =>
  await Application.findOneAndUpdate(
    { _id: id, userId },
    { status },
    { new: true }
  );