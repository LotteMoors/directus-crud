export async function api(url: string, method: "PUT" | "POST" | "GET" | "DELETE", data: object | undefined) {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
