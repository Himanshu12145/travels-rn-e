import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import ImgToBase64 from 'react-native-image-base64';

import InfoCard from '../../components/InfoCard';
import styles from './styles';
import Title from '../../components/Title';
import MapView, {Marker} from 'react-native-maps';
import {ScrollView} from 'react-native-gesture-handler';
import Share from 'react-native-share';

const AttractionDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.009,
    latitudeDelta: 0.009,
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onShare = async () => {
    try {
      const imageWithoutParams = mainImage?.split('?')[0];
      const imageParts = imageWithoutParams?.split('.');
      const imageExtension = imageParts[imageParts?.length - 1];
      const base64Image = await ImgToBase64.getBase64String(mainImage);

      Share.open({
        title: item?.name,
        message: 'Hey, I wanted to share with you this amazing attraction',
        url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (e) {
      console.log('sharing error :>> ', e);
    }
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{uri: mainImage}}
          imageStyle={{borderRadius: 20}}
          style={styles.mainImage}>
          <View style={styles.header}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Image
                source={require('../../assets/back.png')}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={8}>
              <Image
                source={require('../../assets/share.png')}
                style={styles.icon}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={{maxWidth: '70%'}}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Title style={styles.title} text={item?.entry_price} />
        </View>

        <InfoCard
          text={item?.address}
          icon={require('../../assets/location_circle.png')}
        />
        <InfoCard
          text={`OPEN
${item?.opening_time} - ${item?.closing_time}`}
          icon={require('../../assets/schedule.png')}
        />
        <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name} />
        </MapView>
        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate('Map', {item})}>
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
