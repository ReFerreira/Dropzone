import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  state= {
    file: [],
    fileName: 'Choose File (accepted only .xlsx)'
  };
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage> { this.state.fileName}</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success"> Arquivo Ok! </UploadMessage>
  }

  handleOnChange = e => {
    const uploadedFile = e.target.files[0];

    console.log(uploadedFile);
  };

  render() {
    const { onUpload } = this.props;
    return (
      <Dropzone accept="text/*,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
        onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            
          >
            <input {...getInputProps()} onChange={this.handleOnChange}/>
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
