"use client";
import Webcam from "react-webcam";
// import { ReactMediaRecorder } from "react-media-recorder";
import { useCallback, useRef, useState } from "react";
const videoConstraints = {
  width: 20,
  height: 10,
  facingMode: "user",
};

export default function Camera() {
  const mediaRecorderRef = useRef(null);
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartRecord = useCallback(() => {
    console.log("녹화 시작");
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopRecord = useCallback(() => {
    console.log("녹화 중단");
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    console.log("다운로드");
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>react-webcam library</h1>
        <a href="https://github.com/mozmorris/react-webcam">github</a>
        <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          audio={true}
        />
        <div>
          <button onClick={handleStartRecord}>녹화 시작</button>
          <button onClick={handleStopRecord}>녹화 중단</button>
          <button onClick={handleDownload}>다운로드</button>
        </div>
      </div>
    </>
  );
}
