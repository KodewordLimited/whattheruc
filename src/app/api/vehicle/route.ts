import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search");

  if (!search) {
    return Response.json({ error: "Missing search parameter" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.roadtrip.nz/vehicles/public?Search=${encodeURIComponent(search)}&Country=NZ`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    return Response.json(
      { error: "Vehicle not found" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return Response.json(data);
}
