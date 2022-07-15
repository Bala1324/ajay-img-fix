import React, { useState } from "react";
import axios from "axios";
import "./Style.css";

function ImagesUpload() {
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: [],
  });

  const handleInputChange = (event) => {
    let temdata = []
    for (let i = 0; i < event.target.files.length; i++) {
      temdata.push(URL.createObjectURL(event.target.files[i]))
    }

    setuserInfo({
      ...userInfo,
      file: event.target.files,
      filepreview: temdata,
    });
  };
  const appendFormData = (file) => {
    const formdata = new FormData();
    for (let i = 0; i < file.length; i++) {
      formdata.append("file", file[i]);
      console.log(file)
    }
    return formdata

  }
  const [isSucces, setSuccess] = useState(null);
  const submit = () => {
    const formData = appendFormData(userInfo.file)

    axios
      .post("http://localhost:4000/api/property/images-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }
      });
  };

  return (
    <div className="container mr-60">
      <div className="formdesign">
        {isSucces !== null ? <h4> {isSucces} </h4> : null}
        <div className="form-row">
          <label className="text-white">Select Image :</label>
          <input
            type="file"
            className="form-control"
            name="upload_file"
            onChange={handleInputChange}
            multiple
          />
        </div>

        <div className="form-row">
          <button
            type="submit"
            className="btn btn-dark"
            onClick={() => submit()}
          >
            Save Image
          </button>
        </div>
      </div>

      <div className="previewimg">
        {userInfo.filepreview !== null ? (
          userInfo.filepreview.map((imgUrl) => {
            return (
              <img
                src={imgUrl}
                alt="UploadImage"
                width={200}
                height={200}
              />
            )
          })


        ) : null}
      </div>


    </div>
  );
}
export default ImagesUpload;
