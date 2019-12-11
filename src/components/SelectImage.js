import React, { useEffect } from 'react';

import useApiContext from '../contexts/ApiDataContext';

import statics from '../statics';

import './SelectImage.css';

const SelectImage = props => {
  const { apiData, setImageUrls } = useApiContext({
    reducer(apiData, action) {
      return action.changes;
    }
  });

  if (apiData.imageLibrary.length === 0) {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => { setImageUrls(data.data.memes) })
      .then(() => { props.dispatch({ type: statics.SET, value: { loading: false } }) });
  }

  useEffect(
    () => {
      /*global $*/
      $(".imgSelect").liMarquee({
        direction: 'left',
        loop: -1,
        scrolldelay: 0,
        scrollamount: 100,
        circular: true,
        drag: true
      });
    },
    [props.loading]
  );

  const imageSelectHandler = e => {
    const { src } = e.target;
    e.preventDefault();

    props.dispatch({ type: statics.SET, value: { imageUrl: src } });

    props.history.push("/show");
  };

  return props.loading ? (
    <div className="imgSelect">Loading...</div>
  ) : (
      <div className="imgSelect str_wrap">
        {apiData.imageLibrary.map((value, index) => {
          return (
            <img height="100" src={value.url} key={value.name} alt={value.name} onClick={imageSelectHandler} />
          );
        })}
      </div>
    );
};

export default SelectImage;