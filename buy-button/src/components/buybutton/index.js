import { useEffect } from "react";

const Buybutton = () => {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

  useEffect(() => {
    if (window.ShopifyBuy) {
      console.log("ShopifyBuy already exists.");
      if (window.ShopifyBuy.UI) {
        console.log("ShopifyBuy UI already exists.");
        ShopifyBuyInit();
      } else {
        console.log("ShopifyBuy UI dont exists.");
        loadScript();
      }
    } else {
      console.log("ShopifyBuy  dont exists.");
      loadScript();
    }
  }, []);

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "bimmer-city.myshopify.com",
      storefrontAccessToken: "b05f5c97279f52f0d16470ec5fbe4f73",
    });
    console.log(client, "client");

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "6852992794683",
        node: document.getElementById("product-component-1652354410669"),
        moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
                "carousel-button": {
                  display: "none",
                },
              },
              button: {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#e09e0d",
                },
                "background-color": "#f9af0e",
                ":focus": {
                  "background-color": "#e09e0d",
                },
                "border-radius": "40px",
                "padding-left": "45px",
                "padding-right": "45px",
              },
              price: {
                "font-weight": "bold",
                "font-size": "16px",
                color: "#f9af0e",
              },
              compareAt: {
                "font-weight": "bold",
                "font-size": "13.6px",
                color: "#f9af0e",
              },
              unitPrice: {
                "font-weight": "bold",
                "font-size": "13.6px",
                color: "#f9af0e",
              },
            },
            buttonDestination: "checkout",
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            text: {
              button: "Buy now",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#e09e0d",
                },
                "background-color": "#f9af0e",
                ":focus": {
                  "background-color": "#e09e0d",
                },
                "border-radius": "40px",
                "padding-left": "45px",
                "padding-right": "45px",
              },
              price: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                color: "#4c4c4c",
              },
              compareAt: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              unitPrice: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#e09e0d",
                },
                "background-color": "#f9af0e",
                ":focus": {
                  "background-color": "#e09e0d",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
          },
          toggle: {
            styles: {
              toggle: {
                "font-weight": "bold",
                "background-color": "#f9af0e",
                ":hover": {
                  "background-color": "#e09e0d",
                },
                ":focus": {
                  "background-color": "#e09e0d",
                },
              },
            },
          },
        },
      });
    });
  }

  return <div id='' className=''></div>;
};
export default Buybutton;
