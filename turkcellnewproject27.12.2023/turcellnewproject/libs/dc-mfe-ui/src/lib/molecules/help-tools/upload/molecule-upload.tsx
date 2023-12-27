import React, { useState, useEffect } from 'react';
import { Upload } from 'antd';
import styles from './molecule-upload.module.scss';
import { MyUpload } from "./types/upload-interfaces";
import {AtomButton, AtomInput} from "@atoms";
import { UploadChangeParam } from 'antd/lib/upload/interface';

export function MyMoleculeUpload(props: MyUpload) {
  const { labelStatement,label,customRequest, showUploadList, disabled = false ,value} = props;
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = async (info: UploadChangeParam) => {
    console.log("hey")
    console.log(info.file.status)
    if (info.file.status === 'uploading') {
      await setSelectedFile(info.file.name)
      console.log("Dosya yükleniyor...");
    } else if (info.file.status === 'done') {
      await setSelectedFile(info.file.name || "");
      console.log("Dosya yüklendi!");
    } else if (info.file.status === 'removed') {
      await setSelectedFile("ffh");
    }
  };





  return (
    <div className={styles['a-trkclAppUploadWrapper']}>
      <div className={styles['a-trkclAppUploadInputChoose']}>
        <AtomInput label={label} value={selectedFile} readOnly className={styles['a-trkclAppUploadInput']}/>
        {selectedFile !== "" && <AtomInput label={labelStatement} className={styles['a-trkclAppUploadInputStatement']} />}
      </div>
      <Upload
        customRequest={customRequest}
        showUploadList={false}
        disabled={disabled}
        onChange={handleFileChange}
      >
        <AtomButton disabled={disabled} variant="secondary" className={styles['a-trkclAppUploadButton']} text={selectedFile !== "" ? "Değiştir" : "Dosya Seç"}/>
      </Upload>
    </div>
  );
}

export default MyMoleculeUpload;
