import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDynamicAnimation, MotiImage} from 'moti';

import {SIZES, images} from '../../constants';

const Walkthrough3 = ({animate}) => {
  // Moti intial images
  const motiImage1 = useDynamicAnimation(() => ({top: '30%', left: '40%'}));
  const motiImage2 = useDynamicAnimation(() => ({top: '40%', left: '15%'}));
  const motiImage3 = useDynamicAnimation(() => ({top: '50%', left: '45%'}));
  const motiImage4 = useDynamicAnimation(() => ({top: '25%', left: '25%'}));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({top: '30%', left: '55%'});
      motiImage2.animateTo({top: '50%', left: '15%'});
      motiImage3.animateTo({top: '60%', left: '50%'});
      motiImage4.animateTo({top: '20%', left: '20%'});
    }
  }, [animate]);

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
      }}>
      <MotiImage
        state={motiImage1}
        source={images.walkthrough_03_01}
        style={styles.image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_03_02}
        style={styles.image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_01_02}
        style={styles.image}
      />

      <MotiImage
        state={motiImage4}
        source={images.walkthrough_01_01}
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
export default Walkthrough3;
