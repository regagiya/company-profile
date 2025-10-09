import { getNewsDetail } from "@/lib/news_api";

export default async function blogDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;
  const data = await getNewsDetail(slug);
  console.log(data);

  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-black">{data.title}</h2>
      <p>{data.author}</p>
      <p>{data.content}</p>
    </div>
  );
}
