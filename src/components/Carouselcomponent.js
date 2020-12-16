import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'http://localhost:3000/image/Goonies_carousel_RESIZE.jpg',
    altText: 'The Goonies',
    caption: '',
    header: 'The Goonies',
    key: '1'
  },
  {
    src: 'http://localhost:3000/image/afterhours_carousel_RESIZE.jpg',
    altText: 'After Hours',
    caption: '',
    header: 'After Hours',
    key: '2'
  },
  {
    src: 'http://localhost:3000/image/dayofthedead_carousel_RESIZE.jpg',
    altText: 'Day of the Dead',
    caption: '',
    header: 'Day of the Dead',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;