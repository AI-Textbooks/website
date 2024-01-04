import { ImageResponse } from "@vercel/og";
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "ai:textbooks";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #6ee7b7, #a5f3fcb3)",
          }}
          tw="h-full w-full flex items-start justify-start"
        >
          <div tw="flex items-start justify-start h-full">
            <div tw="flex flex-col justify-between w-full h-full">
              <h1 tw="text-[60px] p-20 font-black font-bold font-heading text-left">
                {title}
              </h1>
              <div tw="text-2xl p-20 font-bold mb-0">ai-textbooks.com</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
