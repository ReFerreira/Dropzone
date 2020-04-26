/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {MdCheckCircle, MdError} from 'react-icons/md';
import { Container, FileInfo, Preview } from './styles';
import { FaFileExcel } from 'react-icons/fa';

const FileList = ({files}) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
      <FileInfo>
        <Preview />
          <FaFileExcel size={36} color="#00b33c"/>
        <div>
          <strong>{uploadedFile.name}</strong>
          <span>{uploadedFile.readableSize}<button onClick={() => {}}>Excluir</button></span>
        </div>
      </FileInfo>
      <div>
        {uploadedFile.uploaded && !uploadedFile.error &&(
          <CircularProgressbar 
          styles={{
            root: { width: 24}, 
            path: { stroke: '#7159c1'}
          }}
          strokeWidth={10}
          percentage={60}
          />
        )} 

          {!uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
          {uploadedFile.error && <MdError size={24} color="#e57878" />}
          
          
      </div>
    </li>
    ))}
  </Container>
);

export default FileList;
