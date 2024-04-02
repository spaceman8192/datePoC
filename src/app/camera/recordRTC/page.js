import dynamic from "next/dynamic";

export default function Page() {
  const RTCComp = dynamic(() => import("@/components/rtc"), { ssr: false });
  return (
    <>
      <h1>RecordRTC</h1>
      <hr />
      <RTCComp type="video" />
      <hr />
      <RTCComp type="audio" />
    </>
  );
}
