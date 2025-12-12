"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { skills } from "@/app/lib/data";

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--primary))",
  },
};

interface SkillsChartProps {
  onSkillSelect: (skill: string | null) => void;
}

// Optional strong typing for chart data
type SkillData = {
  name: string;
  proficiency: number;
};

export default function SkillsChartInner({ onSkillSelect }: SkillsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={skills}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
          accessibilityLayer
        >
          <CartesianGrid horizontal={false} />

          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            width={120}
          />

          <XAxis dataKey="proficiency" type="number" hide />

          <Tooltip
            cursor={{ fill: "hsl(var(--background))" }}
            content={<ChartTooltipContent indicator="dot" />}
          />

          <Bar
            dataKey="proficiency"
            radius={[0, 4, 4, 0]}
            fill="var(--color-proficiency)"
            onClick={(data: any) => onSkillSelect(data?.payload?.name || null)}
            className="cursor-pointer"
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
