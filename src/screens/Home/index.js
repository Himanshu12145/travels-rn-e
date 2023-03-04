import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go ?" />
        <Title text="Explore Attractions" style={styles.subtitle} />
        <Categories
          categories={[
            'All',
            'Popular',
            'Historical',
            'Trending',
            'Exclusive',
            'Random',
            'Most Popular',
            'Most Viewed',
          ]}
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
        />
        <View style={styles.row}>
          <AttractionCard
            title="Amusement Park"
            subtitle="Rome"
            imageSrc="https://images.herzindagi.info/image/2022/Mar/amusement-parks-in-India_g.jpg"
          />
          <AttractionCard
            title="Amusement Park"
            subtitle="Rome"
            imageSrc="https://images.herzindagi.info/image/2022/Mar/amusement-parks-in-India_g.jpg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
