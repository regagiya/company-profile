import { getNewsDetail } from "@/lib/news_api";

export default async function blogDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;
  const data = await getNewsDetail(slug);

  console.log(data);

  return (
    <div>
      <h2 className="text-red-500">{data.title}</h2>
      <p>{data.author}</p>
      <p>{data.content}</p>
    </div>
  );
}
