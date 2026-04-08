export default function Navbar() {
  return (
    <div className="glass px-4 md:px-6 py-4 flex justify-between items-center">

      <h1 className="text-lg md:text-xl font-bold text-purple-400">
        JobTracker
      </h1>

      <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
        <span>Dashboard</span>
        <span>Profile</span>
        <span className="text-red-400">Logout</span>
      </div>

    </div>
  );
}