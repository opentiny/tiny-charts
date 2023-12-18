import React, { useState, useEffect } from 'react';
import ColorPicker from '@nce/eview-react/ColorPicker';
import TextField from '@nce/eview-react/TextField';
import { codeToHex } from '../../../../src/components/SpecialChart/util/color';

export default function ColorSelect(props) {
  const { text, controlProps, setRefresh } = props;
  const [color, setColor] = useState(props.color);

  const colorChange = (value) => {
    setColor(value);
    controlProps(value);
  };

  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  useEffect(() => {
    setColor(props.color);
    setRefresh(false);
  }, [props.refresh]);
  
  return (
    <div className='colorSelect'>
      <div className='colorSelect-text'>{text}</div>
      <ColorPicker
        zIndex={999}
        value={color}
        onColorChange={colorChange}
      />
      <TextField disabled value={codeToHex(color).toUpperCase()}></TextField>
    </div>
  );
}
