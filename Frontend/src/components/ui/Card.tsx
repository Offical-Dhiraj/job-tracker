import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

export default function Card({ item }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item._id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`card cursor-grab active:cursor-grabbing
        ${isDragging ? "opacity-50 scale-105 rotate-1" : ""}
      `}
    >
      <h3 className="font-semibold">{item.role}</h3>
      <p className="text-xs text-gray-400">{item.company}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1 mt-2">
        {item.skills?.map((s: string, i: number) => (
          <span
            key={i}
            className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-300 rounded"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}