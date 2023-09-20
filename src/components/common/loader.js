import React from 'react';
import { ScaleLoader } from 'react-spinners'

function Loader(props) {
  if (props.loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 999999
      }}><ScaleLoader color={'#b277f9'} loading={props.loading} /></div>
    );
  }
}

export default React.memo(Loader);