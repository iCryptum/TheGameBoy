import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
declare global {
  interface Window {
    ShopifyBuy: any;
  }
}
const ShopifyBuyButton: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef<boolean>(false);
  const { ref: scrollRef, controls } = useScrollAnimation();
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const componentId = 'product-component-1779754667734';
    const initializeShopify = () => {
      // Avoid initializing multiple times
      if (initializedRef.current) return;
      const node = containerRef.current || document.getElementById(componentId);
      if (!node) return;
      // Clear the element before rendering to avoid duplicate button frames
      node.innerHTML = '';
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        const client = window.ShopifyBuy.buildClient({
          domain: 'yee12z-jx.myshopify.com',
          storefrontAccessToken: '0f027255d5cadaad1d46a1b41c999d43',
        });
        window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
          ui.createComponent('product', {
            id: '8211190939722',
            node: node,
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
                    "color": "#ffffff" // Changed to match site's dark theme
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
                    "font-size": "18px",
                    "color": "#ffffff" // Changed to match site's dark theme
                  },
                  "compareAt": {
                    "font-size": "15.299999999999999px",
                    "color": "#a3a3a3"
                  },
                  "unitPrice": {
                    "font-size": "15.299999999999999px",
                    "color": "#a3a3a3"
                  },
                  "description": {
                    "color": "#e5e7eb" // Changed description text to tailwind gray-200 for readability
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
                    "color": "#ffffff"
                  },
                  "price": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "18px",
                    "color": "#ffffff"
                  },
                  "compareAt": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#a3a3a3"
                  },
                  "unitPrice": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "15.299999999999999px",
                    "color": "#a3a3a3"
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
          initializedRef.current = true;
        });
      }
    };
    const loadScript = () => {
      // Check if script element already exists in document
      let script = document.querySelector(`script[src="${scriptURL}"]`) as HTMLScriptElement | null;
      
      if (script) {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          initializeShopify();
        } else {
          script.addEventListener('load', initializeShopify);
        }
        return script;
      }
      script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = initializeShopify;
      
      const target = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
      target.appendChild(script);
      return script;
    };
    const scriptElement = loadScript();
    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener('load', initializeShopify);
      }
      
      // Cleanup the node content to prevent duplicate buttons if component updates or hot-reloads
      const node = containerRef.current || document.getElementById(componentId);
      if (node) {
        node.innerHTML = '';
      }
      initializedRef.current = false;
    };
  }, []);
  return (
    <section className="py-12 bg-[#1A1A1A]">
      <div 
        ref={scrollRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
        style={{
          opacity: controls.opacity,
          transform: `translateY(${controls.y}px)`,
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Secure Your Order</h2>
          <div className="mt-2 h-1 w-16 bg-[#FF6700] mx-auto"></div>
        </div>
        <div className="bg-[#242424] rounded-2xl p-6 sm:p-10 border border-gray-800 shadow-xl max-w-5xl mx-auto">
          {/* Shopify Button Target */}
          <div 
            id="product-component-1779754667734" 
            ref={containerRef}
            className="w-full flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};
export default ShopifyBuyButton;
