import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder: integrate Google Trends/News APIs here
  const topics = [
    { title: "Best smartphones under ₹20000", slug: "best-smartphones-under-20000-2025" },
    { title: "Upcoming phones in October 2025", slug: "upcoming-phones-october-2025" },
  ];
  return NextResponse.json({ topics });
}


