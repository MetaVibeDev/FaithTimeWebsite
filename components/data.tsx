// 确保文件顶部没有'use client'指令
import parse from "html-react-parser";
// 定义FaithTime数据项的类型
interface FaithTimeItem {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  contenttitle?: { rendered: string };
  contentsubtitle?: { rendered: string };
  contenttext?: { rendered: string };
  contentimage?: {
    value?: {
      guid?: string;
    };
    rendered?: string;
  };
  [key: string]: any;
}

export default async function FaithTimeData() {
  // 从lib/queries导入数据获取函数
  const { getALLfaithtime } = await import("@/lib/queries");

  // 获取数据
  const data = await getALLfaithtime();

  // 检查数据是否存在
  if (!data || (typeof data === "object" && data.notFound)) {
    return (
      <div className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Faith Time Data</h2>
          <p className="text-red-500">No data found</p>
        </div>
      </div>
    );
  }

  // 确保数据是数组
  const items = Array.isArray(data) ? data : [data];

  return (
    <div className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Faith Time Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: FaithTimeItem) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title?.rendered || "Untitled"}
              </h3>
              <div className="text-gray-600">
                {parse(item.content?.rendered || "")}
              </div>
              <div className="text-gray-600">
                {parse(item.contenttitle?.rendered || "")}
              </div>
              <div className="text-gray-600">
                {parse(item.contentsubtitle?.rendered || "")}
              </div>
              <div className="text-gray-600">
                {parse(item.contenttext?.rendered || "")}
              </div>
              <div className="mt-4">
                <img
                  src={item.contentimage?.value?.guid || ""}
                  alt={item.contenttitle?.rendered || ""}
                  className="w-full h-auto rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.png"; // 替换为你的占位图路径
                  }}
                />
              </div>
              <div className="mt-4 text-sm text-gray-500">
                ID: {item.id} | Date: {new Date(item.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
