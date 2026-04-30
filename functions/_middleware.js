function acceptsMarkdown(request) {
  const accept = request.headers.get("accept") || "";
  return /\btext\/markdown\b/i.test(accept);
}

function htmlToMarkdown(html) {
  return html
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function estimateTokenCount(markdown) {
  if (!markdown) return "0";
  return String(markdown.split(/\s+/).filter(Boolean).length);
}

export async function onRequest(context) {
  const { request, next } = context;
  const response = await next();
  const contentType = response.headers.get("content-type") || "";

  if (
    (request.method === "GET" || request.method === "HEAD") &&
    acceptsMarkdown(request) &&
    contentType.includes("text/html")
  ) {
    const html = request.method === "HEAD" ? "" : await response.text();
    const markdown = htmlToMarkdown(html);
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set("vary", "Accept");
    headers.set("x-markdown-tokens", estimateTokenCount(markdown));

    return new Response(request.method === "HEAD" ? null : markdown, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
}
