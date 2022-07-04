import React from 'react';
import {Card} from 'react-native-paper';
import {Title, Info, Address, StarWrapper, InfoWrapper} from './styles';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/svgs/star';
import open from '../../../../assets/svgs/open';

export interface Restaurant {
  name: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
}

function* createStar(numberOfStar: number) {
  for (let i = 0; i < Math.floor(numberOfStar); i++) {
    yield <SvgXml xml={star} width={20} height={20} key={i} />;
  }
}

const RestaurantInfoCard = ({restaurant}: any) => {
  const {
    name = 'Some Restaurant',
    photos = [
      'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1',
    ],
    address = 'Rua dos Bobos, 1007',
    isOpenNow = true,
    rating = 4,
  } = restaurant;
  return (
    <Card>
      <Card.Cover source={{uri: photos[0]}} style={{height: 180}} />
      <Info>
        <Title>{name} </Title>
        <InfoWrapper>
          <StarWrapper>{Array.from(createStar(rating))}</StarWrapper>
          {isOpenNow && (
            <SvgXml
              xml={open}
              width={30}
              height={30}
              style={{marginRight: 8}}
            />
          )}
        </InfoWrapper>

        <Address>{address}</Address>
      </Info>
    </Card>
  );
};

export default RestaurantInfoCard;
