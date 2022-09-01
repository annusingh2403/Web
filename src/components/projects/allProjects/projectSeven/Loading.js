import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return <>
            <PropagateLoader
              size={30}
              color={'steelblue'}
            />
        </>;
};

export default Loading;
