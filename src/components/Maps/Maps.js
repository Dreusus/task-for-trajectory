import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapWithObjects({ carsList }) {
  return (
    <div className='map__container' >
      <YMaps query={{ apikey: '5f95f950-a5cb-4a02-85e8-1f0ca24711ce' }}>
        <Map
          defaultState={{
            center: [59.939095, 30.315868],
            zoom: 10,
          }}
          style={{ width: '100%', height: '400px' }}
        >
          {carsList.map((object) => (
            <Placemark
              key={object.id}
              geometry={[object.latitude, object.longitude]}
              properties={{ balloonContent: object.name }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default MapWithObjects;