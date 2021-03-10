import React from 'react';
import{ view } from '@risingstack/react-easy-state';
import appStore from './appStore';
import Beer from './Beer';
import { Col, Row } from 'antd';

const BeerList = () => (
    <div className="beerlist">
      {!appStore.beers.length ? (
        <h3>No matching beers found!</h3>
      ) : (
        
        appStore.beers.map(beer => <Beer key={beer.name} {...beer} />)
      )}
      
    </div>
  );
  
  export default view(BeerList);
  