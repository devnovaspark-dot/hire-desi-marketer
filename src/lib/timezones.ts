import { TimezoneLocation } from "@/types";

export const CLIENT_TIMEZONES: TimezoneLocation[] = [
  {
    id: "us-east",
    city: "New York / Toronto",
    country: "US & Canada (ET)",
    timezone: "America/New_York",
    region: "North America",
  },
  {
    id: "uk",
    city: "London",
    country: "United Kingdom (GMT/BST)",
    timezone: "Europe/London",
    region: "Europe",
  },
  {
    id: "uae",
    city: "Dubai",
    country: "UAE (GST)",
    timezone: "Asia/Dubai",
    region: "Middle East",
  },
  {
    id: "aus",
    city: "Sydney",
    country: "Australia (AEST/AEDT)",
    timezone: "Australia/Sydney",
    region: "Asia-Pacific",
  },
  {
    id: "india-hq",
    city: "Bhubaneswar",
    country: "India (IST) — Headquarters",
    timezone: "Asia/Kolkata",
    region: "India HQ",
    isHq: true,
  },
];

export interface TimezoneStatus {
  timeStr: string;
  hour: number;
  day: string;
  isOnline: boolean;
  statusText: string;
}

export function getTimezoneStatus(tz: string, isHq: boolean = false): TimezoneStatus {
  try {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: tz,
    });

    const hourStr = now.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: tz,
    });
    const hour = parseInt(hourStr, 10) % 24;

    const day = now.toLocaleString("en-US", {
      weekday: "short",
      timeZone: tz,
    });

    // Active shift: 9:00 AM to 6:00 PM (hour 9 to 17), Monday through Saturday
    const isOnline = hour >= 9 && hour < 18 && day !== "Sun";
    const statusText = isOnline ? "Team online now" : "Shift starts 9 AM";

    return {
      timeStr,
      hour,
      day,
      isOnline,
      statusText,
    };
  } catch {
    return {
      timeStr: "--:-- --",
      hour: 12,
      day: "Mon",
      isOnline: true,
      statusText: "Active shift",
    };
  }
}
