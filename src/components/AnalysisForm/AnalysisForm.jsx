"use client";

import { useState } from "react";

/**
 * 画像分析フォーム
 */
const AnalysisForm = () => {
  const [imagePath, setImagePath] = useState(
    "/image/d03f1d36ca69348c51aa/c413eac329e1c0d03/test.jpg"
  );

  /**
   * 画像分析処理
   * @param state ステート
   */
  const analyze = async (formData) => {
    const image_path = formData.get("imagePath");

    const response = await fetch(`api/analysis`, {
      method: "POST",
      body: JSON.stringify({ image_path }),
    });
    // レスポンスの表示
    if (response.status !== 200) {
    }
  };

  return (
    <form
      className="mt-10 mx-auto w-full max-w-sm md:max-w-lg"
      action={analyze}
    >
      <label htmlFor="imagePath" className="block text-sm font-medium">
        画像ファイルPath
      </label>
      <input
        id="imagePath"
        name="imagePath"
        value={imagePath}
        onChange={(e) => setImagePath(e.target.value)}
        required
        className="block mt-2 py-2 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 "
      />
      <button
        type="submit"
        disabled={!imagePath.length}
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400"
      >
        分析
      </button>
    </form>
  );
};

export default AnalysisForm;
