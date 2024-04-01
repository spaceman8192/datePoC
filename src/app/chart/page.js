"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Webcam from "react-webcam";
// import { ReactMediaRecorder } from "react-media-recorder";

export default function Chart() {
  return (
    <>
      <h1>Apex Charts</h1>
      <Webcam />
    </>
  );
}
