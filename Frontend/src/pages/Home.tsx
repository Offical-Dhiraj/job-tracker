export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Track Your Job Journey 
      </h1>

      <p className="text-gray-400 mb-6">
        AI-powered job tracker with smart resume suggestions
      </p>

      <div className="flex gap-4">
        <a href="/login" className="btn btn-primary">Login</a>
        <a href="/register" className="btn border border-white/20">Register</a>
      </div>
    </div>
  );
}