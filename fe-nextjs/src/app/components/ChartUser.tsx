"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  admin: {
    label: "Admin",
    color: "hsl(var(--chart-1))",
  },
  seller: {
    label: "Seller",
    color: "hsl(var(--chart-2))",
  },
  client: {
    label: "Client",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ChartUser({
  roleCounts,
}: {
  roleCounts: Record<string, number>;
}) {
  const [chartDataUser, setChartDataUser] = useState([
    { month: "January", admin: 2, seller: 5, client: 10 },
    { month: "February", admin: 3, seller: 10, client: 10 },
    { month: "March", admin: 4, seller: 40, client: 10 },
  ]);

  useEffect(() => {
    if (roleCounts) {
      setChartDataUser((prevData) =>
        prevData.map((data, index) => ({
          ...data,
          admin: roleCounts.ADMIN || 0,
          seller: roleCounts.SELLER || 0,
          client: roleCounts.CLIENT || 0,
        }))
      );
    }
  }, [roleCounts]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>Mar 2024 - Mar 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartDataUser}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="seller"
              type="monotone"
              stroke="var(--color-seller)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="client"
              type="monotone"
              stroke="var(--color-client)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="admin"
              type="monotone"
              stroke="var(--color-admin)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
