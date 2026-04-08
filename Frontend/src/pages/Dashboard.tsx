import KanbanBoard from "../features/applications/KanbanBoard";
import ResumeSuggestions from "../features/applications/ResumeSuggestions";

export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto p-4 md:p-6 space-y-8">

      {/* Applications */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Applications
        </h1>

        <KanbanBoard />
      </div>

      {/* Resume Generator */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <ResumeSuggestions />
      </div>

    </div>
  );
}