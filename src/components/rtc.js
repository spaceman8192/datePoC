"use client";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";
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
  const [recording, setRecording] = useState(false);
  const [recordingAudio, setRecordingAudio] = useState(false);
  //   const [videoType, setVideoType] = useState("video/mp4");
  //   // 기기별 비디오 타입 지정
  //   useEffect(() => {
  //     if (isAndroid) setVideoType("video/webm");
  //     else if (isIOS) setVideoType("video/mp4");
  //     else if (isChrome) setVideoType("video/webm");
  //     else if (isSafari) setVideoType("video/mp4");
  //   }, []);

  const handleRecording = async () => {
    setRecording(true);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video:
        type === "video"
          ? {
              width: 800,
              height: 1080,
              frameRate: 30,
            }
          : false,
      audio: true,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, {
      type,
    });
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

    refVideo.current.srcObject = stream;
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
        {recording && type === "video" && (
          <video
            autoPlay
            muted
            playsInline
            ref={refVideo}
            style={{ width: "90%", margin: "1em" }}
          ></video>
        )}

        {blob && !recording && (
          <video
            src={URL.createObjectURL(blob)}
            controls
            autoPlay
            style={{ width: "90%", margin: "1em" }}
          />
        )}
      </div>
    </>
  );
}
