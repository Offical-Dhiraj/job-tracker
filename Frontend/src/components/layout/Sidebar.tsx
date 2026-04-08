export default function Sidebar() {
  return (
    <div className="w-60 h-screen glass p-5">

      <h2 className="text-purple-400 mb-6 font-semibold">
        Dashboard
      </h2>

      <div className="space-y-4 text-gray-400">
        <p>Overview</p>
        <p>Applications</p>
        <p>Analytics</p>
        <p>Settings</p>
      </div>

    </div>
  );
}