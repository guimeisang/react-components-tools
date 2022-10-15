import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './index.less';

const defaultSrc =
  'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';

export const AvatarCropper: React.FC = () => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState(defaultSrc);
  const [cropper, setCropper] = useState<any>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className="avatar-container">
      <div>
        <input type="file" onChange={onChange} />
        <div className="cropper-container">
          <Cropper
            style={{ height: 400, width: '100%' }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
        </div>
      </div>
      <div className="avatar-container-right">
        <div className="box">
          <div>Preview</div>
          <div
            className="img-preview"
            style={{ width: '300px', height: '300px' }}
          ></div>
        </div>
        <div className="box">
          <div>
            <span>Crop</span>
            <button onClick={getCropData}>Crop Image</button>
          </div>
          <img className="img-cropped" src={cropData} alt="cropped" />
        </div>
      </div>
    </div>
  );
};

export default AvatarCropper;
