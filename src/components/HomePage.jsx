import React,{useEffect,useState,useRef} from 'react'

const HomePage = ({ setAudioStream, setFile }) => {
  const [recordStatus, setRecordStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0);

  const mediaRecorder = useRef(null)
  const mimeType='audio/webm'
  
  async function startRecording() {
    let tempStream;
    console.log("start recording");

    try {
      const streamData =await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempStream = streamData;
    } catch (err) {
      console.log(err.message);
      return;
    }

    const media = new MediaRecorder(tempStream, { mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    setRecordStatus("recording")
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  }

  async function stopRecording() {
    setRecordStatus("inactive");
    console.log("Stop recording");

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      setAudioStream(audioBlob);
      setAudioChunks([]);
      setDuration(0);
    };
  }

  useEffect(() => {
    if (recordStatus === "inactive") {
      return;
    }

    const interval = setInterval(() => {
      setDuration((curr) => curr + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [recordStatus]);

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Trans<span className="text-[#ff6f00] bold">Lingo</span>
      </h1>

      <h3 className="font-medium md:text-lg">
        Record <span className="text-[#ff6f00]">&rarr;</span> Transcribe
      </h3>

      <button
        onClick={recordStatus === "recording" ? stopRecording : startRecording}
        className="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4"
      >
        <p className="text-[#ff6f00]">
          {recordStatus === "inactive" ? "Record" : `Stop Recording`}
        </p>
      </button>

      <p className="text-base">
        Or{" "}
        <label className="text-[#ff6f00] cursor-pointer hover:text-[#fe6e00] duration-200">
          upload
          <input
            onChange={(e) => {
              console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }}
            className="hidden"
            type="file"
            accept=".mp3, .wave"
          />
        </label>{" "}
        an mp3 file
      </p>
    </main>
  );
};

export default HomePage
