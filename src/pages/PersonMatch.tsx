import React, { useState } from "react";

const PersonMatch: React.FC = () => {
    const [result, setResult] = useState("누구누구");
    const [confidence, setConfidence] = useState(80);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        // 여기에 추론 요청 로직 넣으면 됨
        console.log("선택된 파일:", file.name);
        setResult("누구누구");
        setConfidence(80);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-8">얼굴 맞추기</h1>

            {/* 얼굴 카드 리스트 */}
            <div className="space-y-4 w-full max-w-md">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="flex items-center bg-white shadow rounded-lg p-4"
                    >
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0" />
                        <div className="ml-4">
                            <p className="text-gray-600 font-medium">이름:</p>
                            <p className="text-gray-800">???</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 파일 선택 */}
            <div className="mt-10">
                <label className="cursor-pointer px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow">
                    파일 선택
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </label>
            </div>

            {/* 결과 출력 */}
            <div className="mt-10 text-center text-lg">
                <p>
                    <span className="font-semibold">결과:</span> {result}
                </p>
                <p>
                    <span className="font-semibold">confidence:</span> {confidence}%
                </p>
            </div>
        </div>
    );
};

export default PersonMatch;
