import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      await axios.post('http://your_backend_url/start_recording');
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await axios.post('http://your_backend_url/stop_recording');
      setIsRecording(false);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  return (
    <View>
      <Text>{isRecording ? 'Recording...' : 'Not Recording'}</Text>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
      {/* Add audio playback UI here */}
    </View>
  );
};

export default App;
