import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useDynamicAnimation, MotiImage} from 'moti';

import {SIZES, images} from '../../constants';

const Walkthrough4 = ({animate}) => {
  // Moti intial images
  const motiImage1 = useDynamicAnimation(() => ({top: '30%', right: '50%'}));
  const motiImage2 = useDynamicAnimation(() => ({top: '35%', left: '50%'}));
  const motiImage3 = useDynamicAnimation(() => ({top: '50%', left: '35%'}));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({top: '8%', right: '85%'});
      motiImage2.animateTo({top: '15%', left: '85%'});
      motiImage3.animateTo({top: '85%', left: '80%'});
    }
  }, [animate]);

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
      }}>
      <Image
        source={images.walkthrough_04_01}
        style={{
          ...styles.image,
          top: '15%',
          left: '25%',
          width: '50%',
          height: '70%',
        }}
      />

      <MotiImage
        state={motiImage1}
        source={images.walkthrough_04_02}
        style={styles.image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_04_03}
        style={styles.image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_04_04}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: SIZES.radius,
  },
});
export default Walkthrough4;
