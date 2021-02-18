import React, { useState } from 'react';

function App() {
  return <div>
    <div style={{marginBottom: "17px"}}>
      <h4>Click on each folder to conceal contents</h4>
    </div>

    <Folder name = "Desktop">
      <Folder name = "Music">
        <File name="rnb.mp3" />
        <File name="rap.mp3" />
      
      </Folder>


      <File name="selfie.jpeg" />
      <File name="wallpaper.png" />
    
    </Folder>

    <Folder name = "Applications">
      <File name="photo.jpeg" />
      <File name="doc.png" />
    </Folder>
    
  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{marginLeft: "17px"}}>
      {isOpen ? children : null}
    </div>
    </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  };

  return <div>
    <i className={` ${fileIcons[fileExtension]} icon`}></i>

    {name}
  </div>
}

export default App;
