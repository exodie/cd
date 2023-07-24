import { FC } from "react";

import iconBtn from "./assets/icon-btn.svg";
import iconDownloadBtn from "./assets/icon-download.svg";
import iconQrcode from "./assets/icon-qrcode.svg";
import { InboxOutlined } from "@ant-design/icons";

import { Button, Input, Typography, Upload, UploadProps, message } from "antd";

const App: FC = (): JSX.Element => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "http://localhost:5174/",
    listType: "picture",
    maxCount: 1,
    accept: ".png",
    progress: {
      strokeWidth: 2,
      strokeColor: {
        from: "#f0f",
        to: "#ff0",
      },
    },

    beforeUpload(file) {
      console.log({ file });
      return true;
    },

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="app">
      <Typography.Title style={{ color: "#007adf", margin: "90px auto" }}>
        {"<C&D />"}
      </Typography.Title>

      <div
        style={{
          margin: "0 auto",
          maxWidth: 550,
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Paste link"
          style={{
            maxWidth: 430,
            width: 430,
            height: 40,
            margin: "25px 10px",
            border: "2px solid #007adf",
          }}
        />

        <Button
          style={{
            width: 70,
            height: 40,
            margin: "0 auto",
            border: "2px solid #007adf",
          }}
        >
          <img src={iconBtn} width={30} height={30} />
        </Button>
      </div>

      <div
        style={{
          margin: "100px auto",
          maxWidth: 720,
          height: 350,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Upload.Dragger
          {...props}
          style={{ background: "rgba(208, 208, 208, 1)", border: "2px solid #007adf", width: 350, height: 350 }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>

          <p className="ant-upload-text">Drop .mp3 files</p>
        </Upload.Dragger>

        {/* container */}
        <div
          style={{
            maxWidth: "350px",
            width: "100%",
            maxHeight: 350,
            padding: 10,
            background: "rgba(208, 208, 208, 1)",
            borderRadius: 10,
            border: "2px solid #007adf",
            marginLeft: 20,
          }}
        >
          {/* output info */}
          <div
            style={{
              maxWidth: 290,
              height: 50,
              display: "flex",
              alignItems: "center",

              borderRadius: 5,
              border: "2px solid black",

              margin: "10px 30px",

              background: "rgba(217, 217, 217, 1)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 30,
                margin: "auto auto auto 10px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                borderRadius: 3,
                fontSize: 14,
              }}
            >
              .mp3
            </div>

            <div style={{ fontSize: 14, margin: "auto auto auto 10px" }}>
              file__name.wav
            </div>

            <div
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: 3,
                margin: "auto auto auto 30px",
                padding: "5px"
              }}
            >
              <img src={iconDownloadBtn} width={20} height={20} />
            </div>
            <div
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: 3,
                margin: "auto 10px auto 5px",
                padding: "5px",
              }}
            >
              <img src={iconQrcode} width={20} height={20} />
            </div>
          </div>

          {/* output info */}
          <div
            style={{
              maxWidth: 290,
              height: 50,
              display: "flex",
              alignItems: "center",

              borderRadius: 5,
              border: "2px solid black",

              margin: "10px 30px",

              background: "rgba(217, 217, 217, 1)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 30,
                margin: "auto auto auto 10px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                borderRadius: 3,
                fontSize: 14,
              }}
            >
              .mp3
            </div>

            <div style={{ fontSize: 14, margin: "auto auto auto 10px" }}>
              file__name.wav
            </div>

            <div
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: 3,
                margin: "auto auto auto 30px",
                padding: "5px"
              }}
            >
              <img src={iconDownloadBtn} width={20} height={20} />
            </div>
            <div
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: 3,
                margin: "auto 10px auto 5px",
                padding: "5px",
              }}
            >
              <img src={iconQrcode} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
