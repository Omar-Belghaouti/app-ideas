import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {View, Text, ToastAndroid, Alert} from 'react-native';

export const YoutubeDisplayer = ({playerRef, YoutubeVideoID, playing}) => {
  function worning(err) {
    Alert.alert('info', err, 'ok', [
      {
        text: 'ok',
        style: 'cancel',
      },
    ]);
  }
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{position: 'absolute', top: '50%'}}>
        <Text>Loading pleas wait ...</Text>
      </View>
      <YoutubePlayer
        ref={playerRef}
        height={'100%'}
        width={'100%'}
        videoId={YoutubeVideoID}
        play={playing}
        volume={100}
        playbackRate={1}
      />
    </View>
  );
};
