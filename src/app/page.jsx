import AnalysisForm from "../components/AnalysisForm/AnalysisForm";

/**
 * メインページ
 */
const MainPage = () => {
  return (
    <main className="flex flex-col justify-center py-40">
      <h2 className="text-center text-2xl font-bold">画像AI分析サービス</h2>
      <AnalysisForm />
    </main>
  );
}

export default MainPage;