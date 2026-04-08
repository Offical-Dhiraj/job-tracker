import { useState } from "react";
import { api } from "../../api/axios";
import jsPDF from "jspdf";

export default function ResumeSuggestions() {
    const [role, setRole] = useState("");
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // 🔹 Generate AI Data
    const generate = async () => {
        try {
            if (!role.trim()) {
                alert("Enter role first");
                return;
            }

            setLoading(true);

            const res = await api.post("/ai/resume", { role });
            setData(res.data.data);

        } catch (err) {
            console.error(err);
            alert("Failed to generate");
        } finally {
            setLoading(false);
        }
    };

    // DOWNLOAD PDF
    const downloadPDF = () => {
        if (!data || !data.skills) {
            alert("Generate resume first");
            return;
        }

        const doc = new jsPDF();

        let y = 10;

        doc.setFontSize(18);
        doc.text("Resume", 10, y);

        y += 10;

        doc.setFontSize(12);
        doc.text(`Role: ${role}`, 10, y);

        y += 10;

        // Skills
        doc.text("Skills:", 10, y);
        y += 6;

        (data.skills || []).forEach((s: string) => {
            doc.text(`• ${s}`, 12, y);
            y += 6;
        });

        y += 4;

        // Points
        doc.text("Experience:", 10, y);
        y += 6;

        (data.points || []).forEach((p: string) => {
            doc.text(`• ${p}`, 12, y);
            y += 6;
        });

        y += 4;

        // Keywords
        doc.text("Keywords:", 10, y);
        y += 6;

        (data.keywords || []).forEach((k: string) => {
            doc.text(`• ${k}`, 12, y);
            y += 6;
        });

        doc.save("resume.pdf");

        console.log("PDF Downloaded ");
    };

    return (
        <div className="bg-gray-900 p-6 rounded-xl mt-6">

            <h2 className="text-white text-lg mb-4">
                ✨ AI Resume Generator
            </h2>

            {/* Input */}
            <input
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Enter role (Frontend Developer)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            {/* Generate Button */}
            <button
                onClick={generate}
                className="mt-4 w-full py-2 bg-purple-600 text-white rounded"
            >
                {loading ? "Generating..." : "Generate Resume"}
            </button>

            {/* Result */}
            {data && (
                <div className="mt-6 space-y-4">

                    {/* Skills */}
                    <div>
                        <h3 className="text-purple-400">Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {(data?.skills || []).map((s: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-purple-500/20 rounded">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Points */}
                    <div>
                        <h3 className="text-purple-400">Experience</h3>
                        <ul className="list-disc ml-5 text-gray-300">
                            {(data?.points || []).map((p: string, i: number) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Keywords */}
                    <div>
                        <h3 className="text-purple-400">Keywords</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {(data?.keywords || []).map((k: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-blue-500/20 rounded">
                                    {k}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Download Button */}
                    <button
                        onClick={downloadPDF}
                        className="w-full mt-4 py-2 bg-green-600 text-white rounded"
                    >
                        Download Resume PDF
                    </button>

                </div>
            )}
        </div>
    );
}