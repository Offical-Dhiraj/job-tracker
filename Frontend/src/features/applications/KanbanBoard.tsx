import {
  DndContext,
  closestCorners,
  type DragEndEvent,
} from "@dnd-kit/core";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/axios";
import Column from "./Column";

const columns = [
  "Applied",
  "Phone Screen",
  "Interview",
  "Offer",
  "Rejected",
];

export default function KanbanBoard() {
  const queryClient = useQueryClient();

  const { data: apps = [], isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await api.get("/applications");
      return res.data.data;
    },
  });

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    await api.patch(`/applications/${active.id}/status`, {
      status: over.id,
    });

    queryClient.invalidateQueries({ queryKey: ["applications"] });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div key={col} className="min-w-[280px]">
            <Column
              id={col} 
              title={col}
              items={apps.filter((a: any) => a.status === col)}
            />
          </div>
        ))}
      </div>
    </DndContext>
  );
}