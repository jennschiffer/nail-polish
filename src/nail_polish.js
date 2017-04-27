'use strict';

(function() {
  const axios = require('axios');
  const endpointURL = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';
  const localEndpoint = 'https://nail-polish.glitch.me/backup'; // every day is a winding road
  const container = document.getElementsByTagName('main')[0];
  
  const colors = [];
  axios.get(localEndpoint)
    .then(function (response) {
      // go through each product and spit out a div of that color's hex value
      console.log(response);
      response.data.forEach(product => {
        if ( product.product_colors.length > 0 ) {
          product.product_colors.forEach(color => {
            colors.push(
              `<a class="color" data-name="${color.colour_name}" data-hex="${color.hex_value}" style="background-color:${color.hex_value};" href="${product.product_link}">
                <b>${product.brand}</b>
                <i>${color.colour_name}</i>
              </a>`
            );
          })
        };
      });
      
      container.innerHTML = colors.join(' ');
    })
    .catch(function (error) {
      console.log(error);
    })
})();
