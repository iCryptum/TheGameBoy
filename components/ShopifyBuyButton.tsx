import React, { useEffect, useRef } from 'react';

const ShopifyBuyButton: React.FC = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      const headOrBody = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
      headOrBody.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      // @ts-ignore
      const ShopifyBuy = window.ShopifyBuy;
      if (!ShopifyBuy || !ShopifyBuy.UI) return;
      
      const client = ShopifyBuy.buildClient({
        domain: 'yee12z-jx.myshopify.com',
        storefrontAccessToken: '0f027255d5cadaad1d46a1b41c999d43',
      });
      
      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: '8211190939722',
          node: document.getElementById('product-component-1779754667734'),
          moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                  },
                  "text-align": "left"
                },
                "title": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "normal",
                  "font-size": "28px",
                  "color": "#1b1a1a"
                },
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#e65d00"
                  },
                  "background-color": "#ff6700",
                  ":focus": {
                    "background-color": "#e65d00"
                  },
                  "padding-left": "24px",
                  "padding-right": "24px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                },
                "price": {
                  "font-size": "18px"
                },
                "compareAt": {
                  "font-size": "15.299999999999999px"
                },
                "unitPrice": {
                  "font-size": "15.299999999999999px"
                }
              },
              "buttonDestination": "checkout",
              "layout": "horizontal",
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true,
                "description": true
              },
              "width": "100%",
              "text": {
                "button": "Buy now"
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#e65d00"
                  },
                  "background-color": "#ff6700",
                  ":focus": {
                    "background-color": "#e65d00"
                  },
                  "padding-left": "24px",
                  "padding-right": "24px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                },
                "title": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  "color": "#4c4c4c"
                },
                "price": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": "#4c4c4c"
                },
                "compareAt": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "unitPrice": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                }
              },
              "googleFonts": [
                "Montserrat"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#e65d00"
                  },
                  "background-color": "#ff6700",
                  ":focus": {
                    "background-color": "#e65d00"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false,
              "googleFonts": [
                "Montserrat"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Montserrat, sans-serif",
                  "background-color": "#ff6700",
                  ":hover": {
                    "background-color": "#e65d00"
                  },
                  ":focus": {
                    "background-color": "#e65d00"
                  }
                },
                "count": {
                  "font-size": "16px"
                }
              },
              "googleFonts": [
                "Montserrat"
              ]
            }
          }
        });
      });
    }

    // @ts-ignore
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  }, []);

  return <div id="product-component-1779754667734" className="w-full max-w-2xl mx-auto bg-white rounded-lg p-2 sm:p-4 text-black shadow-xl mt-8"></div>;
};

export default ShopifyBuyButton;
