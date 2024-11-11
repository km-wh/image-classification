import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * DB接続
 */
const connectDb = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB接続に失敗しました。");
  }
};

/**
 * ai_analysis_logテーブルへのレコードの登録
 */
export const registerLog = async (data) => {
  try {
    // DB接続
    await connectDb();
    // ログ情報の登録
    const post = await prisma.log.create({ data });
  } finally {
    // DB切断
    await prisma.$disconnect();
  }
};
