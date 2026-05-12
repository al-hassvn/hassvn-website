import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get("days") || "30");

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Check if prisma is connected
    if (!prisma) {
      return NextResponse.json({
        overview: {
          totalPageViews: 0,
          totalContacts: 0,
          totalProjects: 0,
          totalPosts: 0,
        },
        pageViews: [],
        dailyStats: [],
      });
    }

    const [pageViews, totalContacts, totalProjects, totalPosts] = await Promise.all([
      prisma.analytics.groupBy({
        by: ["page"],
        where: { date: { gte: startDate } },
        _sum: { views: true },
        orderBy: { _sum: { views: "desc" } },
      }),
      prisma.contact.count(),
      prisma.project.count(),
      prisma.post.count(),
    ]);

    // Get daily stats for chart
    const dailyStats = await prisma.analytics.groupBy({
      by: ["date"],
      where: { date: { gte: startDate } },
      _sum: { views: true, uniqueViews: true },
      orderBy: { date: "asc" },
    });

    return NextResponse.json({
      overview: {
        totalPageViews: pageViews.reduce((sum, p) => sum + (p._sum.views || 0), 0),
        totalContacts,
        totalProjects,
        totalPosts,
      },
      pageViews,
      dailyStats,
    });
  } catch (error) {
    console.error("Analytics error:", error);
    // Return empty data instead of error
    return NextResponse.json({
      overview: {
        totalPageViews: 0,
        totalContacts: 0,
        totalProjects: 0,
        totalPosts: 0,
      },
      pageViews: [],
      dailyStats: [],
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page } = body;

    if (!page) {
      return NextResponse.json(
        { error: "Page is required" },
        { status: 400 }
      );
    }

    // Check if prisma is connected
    if (!prisma) {
      return NextResponse.json({ success: true });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const analytics = await prisma.analytics.upsert({
      where: {
        page_date: {
          page,
          date: today,
        },
      },
      update: {
        views: { increment: 1 },
      },
      create: {
        page,
        views: 1,
        uniqueViews: 1,
        date: today,
      },
    });

    return NextResponse.json(analytics);
  } catch (error) {
    console.error("Track analytics error:", error);
    return NextResponse.json({ success: true });
  }
}
