import { NextResponse } from "next/server";
import { analyzeImage } from "../../../actions/analysis";
import { registerLog } from "../../../actions/log";

/**
 * 画像分析処理
 * @param {*} req リクエスト
 * @param {*} _res レスポンス
 * @returns レスポンス
 */
export const POST = async (req, _res) => {
  const { image_path } = await req.json();
  let data = {};

  // 画像分析APIへの送信
  const request_timestamp = new Date();
  const response = await analyzeImage(image_path);
  const response_timestamp = new Date();

  if (response?.status === 200) {
    // ステータスコード:200の場合
    data = await response.json();

    // レスポンス内容からログ情報を作成し、DBへ登録
    await registerLog({
      image_path,
      success: data?.success != null ? data?.success : false,
      message: data?.message,
      class: data?.estimated_data?.class,
      confidence: data?.estimated_data?.confidence,
      request_timestamp,
      response_timestamp,
    });
  } else {
    // ステータスコード:200以外の場合

    // 失敗のログ情報をDBへ登録
    await registerLog({
      image_path,
      success: false,
      message: `${response.status}:${response.statusText}`,
      request_timestamp,
      response_timestamp,
    });
  }

  // レスポンスを返す
  return NextResponse.json(data, {
    status: response?.status,
    statusText: response?.statusText,
  });
};

export const dynamic = "force-dynamic";
