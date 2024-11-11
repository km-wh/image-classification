import fetch from "node-fetch";

/**
 * 画像分析APIへの送信
 * @param {*} imagePath 画像ファイルPath
 * @returns レスポンス
 */
export const analyzeImage = async (imagePath) => {
  let signal = undefined;
  if (process.env.API_TIMEOUT && Number(process.env.API_TIMEOUT) > 0) {
    signal = AbortSignal.timeout(Number(process.env.API_TIMEOUT));
  }

  try {
    const response = await fetch(process.env.API_AI_URL, {
      method: "POST",
      body: JSON.stringify({ image_path: imagePath }),
      signal,
    });
    return response;
  } catch (error) {
    if (signal.aborted) {
      // タイムアウトの場合、エラー内容を設定
      return Response.json(
        {},
        {
          status: 500,
          statusText: error?.message,
        }
      );
    } else {
      throw error;
    }
  }
};
