import React from 'react';

import s from './map.module.css';

const Map = () => {
  return (
    <a
      target={'_blank'}
      href="https://www.google.com/maps/place/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%B4%D0%B8%D1%82%D1%8F%D1%87%D0%B0+%D0%BC%D1%83%D0%B7%D0%B8%D1%87%D0%BD%D0%B0+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+%E2%84%962+%D1%96%D0%BC.+%D0%92.+%D0%9F.+%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE/@49.5841929,34.590422,17z/data=!4m15!1m8!3m7!1s0x40d825e5a6576a0d:0xcdfded8b7b40ec91!2z0J_QvtC70YLQsNCy0LAsINCf0L7Qu9GC0LDQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAzNjAwMA!3b1!8m2!3d49.588267!4d34.5514169!16s%2Fg%2F1yl47h1b0!3m5!1s0x40d8258254ac4567:0xc2613c5e01d53723!8m2!3d49.5837019!4d34.5925758!16s%2Fg%2F1td16c4n?hl=uk"
      rel="noreferrer"
      className={s.container}
    >
      <img src="/img/map.png" alt="map" className={s.map} />
    </a>
  );
};

export default Map;
