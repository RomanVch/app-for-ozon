import './style.css';

import { useSelector } from 'react-redux';

import { viewImgData } from '../Redux/calculateImgReducer';

export const ViewImg = () => {
  const Imgs = useSelector(viewImgData);
  return (
    <div className="view-imgs">
      {Imgs.map((file, index) => {
        if (file.name) {
          if (!(index % 40)) {
            return (
              <>
                <div key={index} className={'position-image'}>
                  <div className="image" />
                </div>
                <div key={index} className={'position-image'}>
                  <div className="image" />
                </div>
                <div key={index} className={'position-image'}>
                  <div className="image" />
                </div>
                <div key={index} className={'position-image'}>
                  <div className="image" />
                </div>
                <div key={index} className={'position-image'}>
                  {
                    <img
                      className="image"
                      src={URL.createObjectURL(file as Blob | MediaSource)}
                      alt="preview"
                    />
                  }
                </div>
              </>
            );
          } else {
            return (
              <div key={index} className={'position-image'}>
                {
                  <img
                    className="image"
                    src={URL.createObjectURL(file as Blob | MediaSource)}
                    alt="preview"
                  />
                }
              </div>
            );
          }
        } else {
          return (
            <div key={index} className={'position-image'}>
              <div className="image">{file.toString()}</div>
            </div>
          );
        }
      })}
    </div>
  );
};
