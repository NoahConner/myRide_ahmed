import React, { useState } from 'react';
import { ActivityIndicator, Image as RNImage, View } from 'react-native';
import { getImageSource } from '../constants/HelperFunctions';

const Image = ({ fileName, style, resizeMode }) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <View>
      {loading && <ActivityIndicator />}
      {fileName ? (
        <RNImage resizeMode={resizeMode} source={{ uri: getImageSource(fileName) }} style={style} onLoad={handleImageLoad} />
      ):null}
    </View>
  );
};

export default Image;
