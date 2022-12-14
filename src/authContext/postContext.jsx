import React, { useState } from "react";

const PostContext = React.createContext({
  imageId: null,
  setImageId: null,
});

export const PostContextProvider = (props) => {
  const [imageId, setImageId] = useState("")  


  // console.log("IMAGE ID " + imageId)
  return (
    <PostContext.Provider
      value={{
        imageId: imageId,
        setImageId: setImageId,

      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
