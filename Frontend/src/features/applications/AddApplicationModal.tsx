import { useState } from "react";
import { api } from "../../api/axios";
import { useQueryClient } from "@tanstack/react-query";
import Input from "../../components/ui/Input";

export default function AddApplicationModal({ onClose }: any) {
  const [jd, setJd] = useState("");
  const [parsed, setParsed] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();

  const parse = async () => {
    try {
      if (!jd.trim()) {
        alert("Please paste job description first");
        return;
      }

      setLoading(true);

      console.log("Sending JD:", jd);

      const res = await api.post("/ai/parse", {
        jd: jd,
      });

      console.log("AI RESPONSE:", res.data);

      setParsed(res.data.data);
    } catch (err: any) {
      console.error("PARSE ERROR:", err?.response?.data || err.message);

      alert(
        err?.response?.data?.message ||
          "AI parsing failed. Check backend."
      );
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Save Application
  const save = async () => {
    

    if (!parsed) {
      alert("Please parse job description first");
      return;
    }

    try {
      const res = await api.post("/applications", {
        company: parsed.company || "Unknown",
        role: parsed.role || "Unknown",
        skills: parsed.skills || [],
        status: "Applied",
      });


      // refresh applications
      await queryClient.invalidateQueries({ queryKey: ["applications"] });

      // close modal
      onClose();
    } catch (err: any) {
      console.error(" SAVE ERROR:", err?.response?.data || err.message);

      alert(
        err?.response?.data?.message ||
          "Failed to save application"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      
      <div className="bg-[#111827] p-6 rounded-2xl w-[90%] max-w-lg">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">
            ✨ AI Add Application
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✖
          </button>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
          placeholder="Paste Job Description..."
          value={jd}
          onChange={(e) => setJd(e.target.value)}
        />

        {/* Parse Button */}
        <button
          onClick={parse}
          disabled={loading}
          className="w-full mt-4 py-2 bg-blue-600 rounded-lg text-white"
        >
          {loading ? "Parsing..." : "🤖 Parse JD"}
        </button>

        {/* Parsed Data */}
        {parsed && (
          <div className="mt-5 space-y-3">

            <Input value={parsed.company || ""} readOnly />
            <Input value={parsed.role || ""} readOnly />

            {/* Skills */}
            {parsed.skills && (
              <div className="flex flex-wrap gap-2">
                {parsed.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Save Button */}
            <button
              onClick={save}
              className="w-full mt-4 py-2 bg-green-600 rounded-lg text-white"
            >
               Save Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}