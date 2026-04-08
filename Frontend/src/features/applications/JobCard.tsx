import { api } from "../../api/axios";
import { useQueryClient } from "@tanstack/react-query";

export default function JobCard({ app }: any) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this application?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/applications/${app._id}`);

      console.log("🗑 Deleted:", app._id);

      // refresh UI instantly
      queryClient.invalidateQueries({ queryKey: ["applications"] });

    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete");
    }
  };

  return (
    <div
      onClick={handleDelete}
      className="p-4 bg-gray-800 rounded-xl cursor-pointer hover:bg-red-500/20 transition-all duration-300"
    >
      <h3 className="text-white font-semibold">{app.role}</h3>
      <p className="text-gray-400 text-sm">{app.company}</p>

      {app.skills?.length > 0 && (
        <div className="flex gap-1 mt-2 flex-wrap">
          {app.skills.map((s: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}