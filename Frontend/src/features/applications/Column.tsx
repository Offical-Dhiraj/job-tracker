import { useDroppable } from "@dnd-kit/core";
import Card from "../../components/ui/Card";

export default function Column({ id, title, items, activeId }: any) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });
  {items.length === 0 && (
  <p className="text-gray-400 text-sm text-center mt-4">
    No applications yet 
  </p>
)}

  return (
    <div
    
      ref={setNodeRef}
      className={`min-w-[280px] glass p-4 rounded-xl transition-all
        ${isOver ? "bg-purple-500/10 scale-[1.02]" : ""}
      `}
    >
      <h2 className="mb-3 text-purple-300 font-semibold">
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item: any) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}