import React, { useState } from "react";

const fields = ["Name", "ARR", "Ticket", "Description", "Milestone", "Pricing"];

const NotionStyleForm: React.FC = () => {
  const [slugField, setSlugField] = useState<string>("Name");
  const [selectedFields, setSelectedFields] = useState<string[]>(["Name", "Ticket"]);
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

  const toggleField = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadedFiles(e.target.files);
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded-lg bg-white shadow">
      {/* Slug Field */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Slug Field</label>
        <select
          value={slugField}
          onChange={(e) => setSlugField(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>

      {/* Field List */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Column</label>
        <div className="flex flex-col gap-2">
          {fields.map((field) => (
            <div
              key={field}
              className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFields.includes(field)}
                  onChange={() => toggleField(field)}
                  className="accent-black"
                />
                <span className="text-sm">{field}</span>
              </label>
              <span className="text-sm text-gray-600">{field}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Multiple File Upload */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Upload Files</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full text-sm"
        />
      </div>

      {/* Submit */}
      <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
        Import from Projects
      </button>
    </div>
  );
};

export default NotionStyleForm;
