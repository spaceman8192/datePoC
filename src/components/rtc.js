"use client";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";
import Webcam from "react-webcam";
import { useState, useRef, useEffect } from "react";

const videoConstraints = {
  width: 20,
  height: 10,
  facingMode: "user",
};

export default function RecordRTCComp({ type }) {
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordingAudio, setRecordingAudio] = useState(false);
  const handleRecording = async () => {
    setRecording(true);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video:
        type === "video"
          ? {
              width: 1920,
              height: 1080,
              frameRate: 30,
            }
          : false,
      audio: true,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: type });
    recorderRef.current.startRecording();
  };

  const handleRecordingAudio = async () => {
    setRecordingAudio(true);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "audio" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    setRecording(false);
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = () => {
    invokeSaveAsDialog(blob);
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    // refVideo.current.srcObject = stream;
  }, [stream, refVideo]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>[ {type} ]</h1>
        <div>
          <button onClick={handleRecording}>녹화 시작</button>
          <button onClick={handleStop}>녹화 중단</button>
          <button onClick={handleSave}>다운로드</button>
        </div>
        <div>{recording ? <h2>녹화중</h2> : ""}</div>
        {blob && !recording && (
          <video
            src={URL.createObjectURL(blob)}
            controls
            autoPlay
            ref={refVideo}
            style={{ width: "700px", margin: "1em" }}
          />
        )}
        {recording && type === "video" && (
          <Webcam
            ref={webcamRef}
            videoConstraints={videoConstraints}
            audio={false}
          />
        )}
      </div>
    </>
  );
}
