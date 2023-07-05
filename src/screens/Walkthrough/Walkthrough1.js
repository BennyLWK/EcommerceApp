import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';

import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';

import {SIZES, constants} from '../../constants';

const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
  // Row 1
  const [row1Images, setRow1Images] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);

  const [currentPosition, setCurrentPosition] = useState(0);

  // Row 2
  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);

  const [row2CurrentPosition, setRow2CurrentPosition] = useState(0);

  // Ref
  const row1FlatListRef = useRef();
  const row2FlatListRef = useRef();

  useEffect(() => {
    let positionTimer;

    const timer = () => {
      positionTimer = setTimeout(() => {
        // Increment scroll position with each new interval

        // Slider 1
        setCurrentPosition(prevPosition => {
          const position = Number(prevPosition) + 1;

          row1FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row1FlatListRef?.current?.scrollToOffset({offset, animated: false});
            return offset;
          } else {
            return position;
          }
        });
        // Slider 2
        setRow2CurrentPosition(prevPosition => {
          const position = Number(prevPosition) + 1;
          row2FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset =
            constants.walkthrough_01_02_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row2FlatListRef?.current?.scrollToOffset({offset, animated: false});
            return offset;
          } else {
            return position;
          }
        });

        timer();
      }, 32);
    };
    timer();
    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  // Render
  return (
    <View>
      <GestureHandlerRootView>
        {/* Slider 1 */}
        <FlatList
          ref={row1FlatListRef}
          decelerationRate="fast"
          horizontal
          showsHorizontalScrollIndicator={false}
          listKey="Slider1"
          keyExtractor={(_, index) => `Slider_${index}`}
          data={row1Images}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: ITEM_WIDTH,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={item} style={{width: 110, height: 110}} />
              </View>
            );
          }}
        />

        {/* Slider 2 */}
        <FlatList
          ref={row2FlatListRef}
          decelerationRate="fast"
          style={{marginTop: SIZES.padding, transform: [{rotate: '180deg'}]}}
          horizontal
          showsHorizontalScrollIndicator={false}
          listKey="Slider2"
          keyExtractor={(_, index) => `Slider2_${index}`}
          data={row2Images}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: ITEM_WIDTH,
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [{rotate: '180deg'}],
                }}>
                <Image source={item} style={{width: 110, height: 110}} />
              </View>
            );
          }}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default Walkthrough1;
