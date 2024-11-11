/**
 * マイクロ秒精度の時刻文字列の取得
 * @returns マイクロ秒精度の時刻文字列
 */
export const GetNow = () => {
  // マイクロ秒精度の時間
  const highPrecisionTime = Date.now() + performance.now();
  
  // Date オブジェクトに変換
  const dateWithMicroseconds = new Date(highPrecisionTime);

  // マイクロ秒の部分を手動で設定
  const isoString = dateWithMicroseconds.toISOString();

  // マイクロ秒部分を取得
  const microseconds = Math.floor((highPrecisionTime % 1000) * 1000) % 1000;

  // マイクロ秒精度の時刻文字列を作成し、返す
  const result = isoString.replace(
    "Z",
    `${String(microseconds).padStart(3, "0")}Z`
  );
  console.log(result);
  return result;
};
