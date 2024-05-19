import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import api from '../services/api';

const ImageProcessingScreen = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const processImage = async () => {
    const formData = new FormData();
    formData.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    const response = await api.post('/process-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setProcessedImage(response.data.processedImageUrl);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Process Image" onPress={processImage} />
      {processedImage && (
        <View>
          <Text style={styles.resultText}>Processed Image:</Text>
          <Image source={{ uri: processedImage }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  resultText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ImageProcessingScreen;
