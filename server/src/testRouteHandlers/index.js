module.exports = {
  fakeYelpSearch: (req, res) => {
    const fakeResData = {
      region: {
        span: {
          latitude_delta: 0.05618667999999616,
          longitude_delta: 0.10994306856343883,
        },
        center: {
          latitude: 29.9498904,
          longitude: -90.0848897779257,
        },
      },
      total: 40,
      businesses: [
        {
          is_claimed: true,
          rating: 4.5,
          mobile_url: 'http://m.yelp.com/biz/good-karma-cafe-new-orleans?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=iTT8z88K8eKh3S5gHML-4A',
          rating_img_url: 'https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png',
          review_count: 52,
          name: 'Fake Karma Cafe',
          rating_img_url_small: 'https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
          url: 'http://www.yelp.com/biz/good-karma-cafe-new-orleans?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=iTT8z88K8eKh3S5gHML-4A',
          categories: [Object],
          menu_date_updated: 1470311021,
          phone: '5044014698',
          snippet_text: 'Even if you\'re not vegetarian this food is the Shizz! Unique ...',
          image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/c5hgQUfeBhAeOO2xm1EpvQ/ms.jpg',
          snippet_image_url: 'http://s3-media2.fl.yelpcdn.com/photo/xBNlCeXmveCCqXj4Lf_GEw/ms.jpg',
          display_phone: '+1-504-401-4698',
          rating_img_url_large: 'https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png',
          menu_provider: 'single_platform',
          id: 'good-karma-cafe-new-orleans',
          is_closed: false,
          location: {
            address: '2940 Canal StSteA',
            coordinate: {
              latitude: 29.9671440124512,
              longitude: -90.0906677246094,
            },
          },
        },
      ],
    };
    // simulate network latency
    setTimeout(() => {
      res.send(fakeResData);
    }, 500);
  },
};
