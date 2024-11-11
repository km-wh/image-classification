/**
 * マイクロ秒精度の時刻文字列の取得
 * @returns マイクロ秒精度の時刻文字列
 */
export const GetNow = () => {
  // マイクロ秒精度の時間
  const highPrecisionTime = Date.now() + performance.now();
  
  // Date オブジェクトに変換
  const dateWithMicroseconds = new Date(highPrecisionTime);

  // ミリ秒までの部分を取得
  const isoString = dateWithMicroseconds.toISOString();

  // マイクロ秒部分を取得
  const microseconds = Math.floor((highPrecisionTime % 1000) * 1000) % 1000;

  // ミリ秒までの時刻にマイクロ秒を連結した文字列を返す
  const result = isoString.replace(
    "Z",
    `${String(microseconds).padStart(3, "0")}Z`
  );
  return result;
};
