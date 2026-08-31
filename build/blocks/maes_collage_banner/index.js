/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/maes_collage_banner/edit.tsx"
/*!*************************************************!*\
  !*** ./src/blocks/maes_collage_banner/edit.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_collage_banner_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/collage_banner_types */ "./src/types/collage_banner_types.ts");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_maes_image_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/maes-image-grid */ "./src/components/maes-image-grid.tsx");
/* harmony import */ var _components_maes_collage_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/maes-collage-banner */ "./src/components/maes-collage-banner.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/maes_collage_banner/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */







/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: 'Images',
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'maes-domain'),
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
            onSelect: el => {
              const image = {
                id: el.id,
                url: el.url,
                isVertical: el.width - el.height > 0 ? false : true
              };
              setAttributes({
                background: [image]
              });
            },
            allowedTypes: ['image'],
            multiple: false,
            labels: {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'maes-domain')
            },
            mediaPreview: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_maes_image_grid__WEBPACK_IMPORTED_MODULE_6__.MAESImageGrid, {
              images: attributes.background
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collage images', 'maes-domain'),
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
            onSelect: el => {
              const images = el.map(single => {
                const image = {
                  id: single.id,
                  url: single.url,
                  isVertical: single.sizes.full.width - single.sizes.full.height > 0 ? false : true
                };
                _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
                  path: `maes/v1/media/${single.id}`
                }).then(data => {
                  if (typeof data == 'object' && data != undefined && _types_collage_banner_types__WEBPACK_IMPORTED_MODULE_3__.SidePrefRestSchema.safeParse(data).success) {
                    image.sidePref = _types_collage_banner_types__WEBPACK_IMPORTED_MODULE_3__.SidePrefRestSchema.parse(data).side_pref;
                  } else {
                    console.log(_types_collage_banner_types__WEBPACK_IMPORTED_MODULE_3__.SidePrefRestSchema.safeParse(data));
                  }
                });
                return image;
              });
              setAttributes({
                imgs: [...images]
              });
            },
            allowedTypes: ['image'],
            multiple: true,
            labels: {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Images', 'maes-domain')
            },
            mediaPreview: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_maes_image_grid__WEBPACK_IMPORTED_MODULE_6__.MAESImageGrid, {
              images: attributes.imgs
            })
          })
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_maes_collage_banner__WEBPACK_IMPORTED_MODULE_7__.MAESCollageBanner, {
        imgs: attributes.imgs,
        background: attributes.background[0]
      })
    }))]
  });
}

/***/ },

/***/ "./src/blocks/maes_collage_banner/index.tsx"
/*!**************************************************!*\
  !*** ./src/blocks/maes_collage_banner/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/maes_collage_banner/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/maes_collage_banner/edit.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/maes_collage_banner/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      width: '100%',
      height: '100%',
      viewBox: '0 0 8684 8684',
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: 'M659.261,3146.55l-659.261,-380.624l1596.91,-2765.93l2033.47,1174.02l-536.013,928.402l-2435.1,0l-0,1044.13Zm5263.67,-1044.13l-334.258,-1247.47l2268.04,-607.719l826.621,3084.99l-659.26,176.649l-0,-1406.46l-2101.14,0Zm1684.48,1626.42l0,1789.52l-6531.48,-0l0,-1789.52l6531.48,0Zm-6531.48,-1209.75l6531.48,-0l0,793.084l-6531.48,0l0,-793.084Zm6948.15,2317.68l659.26,380.625l-1596.91,2765.93l-2544.08,-1468.83l334.555,-579.466l3147.18,-0l-0,-1098.26Zm-3628.3,1098.26l-422.607,731.977l2231.39,1288.29l-2615.74,700.885l-729.131,-2721.16l1536.09,-0Zm-1967.45,-0l390.805,1458.51l-1021.54,589.786l-1797.59,-3113.51l659.261,-380.624l-0,1445.84l1769.06,-0Z'
      })
    })
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/components/maes-collage-banner.tsx"
/*!************************************************!*\
  !*** ./src/components/maes-collage-banner.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAESCollageBanner: () => (/* binding */ MAESCollageBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_settings_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/settings_types */ "./src/types/settings_types.ts");
/* harmony import */ var _maes_collage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maes-collage */ "./src/components/maes-collage.tsx");





function MAESCollageBanner({
  background,
  imgs
}) {
  const defaultData = {
    site_title: '',
    site_url: '',
    slogan: '',
    logo: ''
  };
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultData);
  //get the rest data
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: 'maes/v1/settings'
    }).then(restData => {
      if (typeof restData == 'object' && restData != undefined) {
        if (_types_settings_types__WEBPACK_IMPORTED_MODULE_3__.SettingsSchema.safeParse(restData).success) {
          setData(_types_settings_types__WEBPACK_IMPORTED_MODULE_3__.SettingsSchema.parse(restData));
        } else {
          console.log(_types_settings_types__WEBPACK_IMPORTED_MODULE_3__.SettingsSchema.safeParse(restData));
        }
      }
    });
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: 'maes-collage-banner',
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: 'maes-collage-banner-content',
      children: [data.logo ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: 'logo logo-banner',
        src: data.logo
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: 'banner-title',
        children: data.site_title
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: 'slogan',
        children: data.slogan
      })]
    }), background != null || imgs.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maes_collage__WEBPACK_IMPORTED_MODULE_4__.MAESCollage, {
      background: background,
      imgs: imgs
    }) : '']
  });
}

/***/ },

/***/ "./src/components/maes-collage.tsx"
/*!*****************************************!*\
  !*** ./src/components/maes-collage.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAESCollage: () => (/* binding */ MAESCollage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function MAESCollage({
  background,
  imgs
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [isWide, setIsWide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const rotationRange = 60;
  function rollPosition(item) {
    var _a, _b, _c;
    let top = Math.random();
    let left = Math.random();
    // reroll position if it is in the middle (top > 0.2 && top < 0.8 && left > 0.2 && left < 0.8)
    // side pref only works with bottom top right at the moment should be changed in future
    // shuld be random throug log scaling and stuff
    // temporary for banner only
    while (top > 0.2 && top < 0.6 && left < 0.8 && left > 0.2 || left < 0.4 && !isWide || left < 0.7 && item.isVertical || top < 0.7 && ((_a = item.sidePref) === null || _a === void 0 ? void 0 : _a.bottom) || top > 0.3 && ((_b = item.sidePref) === null || _b === void 0 ? void 0 : _b.top) || left < 0.8 && ((_c = item.sidePref) === null || _c === void 0 ? void 0 : _c.right)) {
      top = Math.random();
      left = Math.random();
    }
    const rotation = rotationRange;
    let rotationByPlace = (left * 2 - 1) * (top * 2 - 1) * rotation;
    if (!item.isVertical) {
      // invert rotation if image is horizontal
      rotationByPlace = rotationByPlace * -1;
      // flip upside down if horizontal image is in the top of area
      // if (top < 0.5) {
      // 	rotationByPlace = rotationByPlace - 180
      // }
    }
    const fromCenter = (left * 2 - 1 < 0 ? (left * 2 - 1) * -1 : left * 2 - 1) * (top * 2 - 1 < 0 ? (top * 2 - 1) * -1 : top * 2 - 1);
    const position = {
      rotation: rotationByPlace,
      top: top * 120 - 10,
      left: left * 120 - 10,
      zIndex: Math.floor(fromCenter * 100),
      blur: (fromCenter * -1 + 0.6) * 4,
      brightness: fromCenter + 0.6
    };
    return position;
  }
  function theImages() {
    const theImgs = imgs.map((item, index) => {
      const position = rollPosition(item);
      return (
        // change to div with background insted of img
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: item.url,
          style: {
            transform: `
                            translate(-50%, -50%)
							scale(.6)
                            rotate(${position.rotation}deg)
                        `,
            top: `${position.top}%`,
            left: `${position.left}%`,
            zIndex: position.zIndex,
            filter: `blur(${position.blur}px) 
							drop-shadow(0 0 2rem black) 
							brightness(${position.brightness})`
          }
        })
      );
    });
    return theImgs;
  }
  ;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.contentRect.width > 2560) {
            setIsWide(true);
          } else {
            setIsWide(false);
          }
        }
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  const displayImgs = theImages();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: 'maes-collage',
    ref: containerRef,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: 'maes-collage-background',
      style: {
        backgroundImage: `linear-gradient(to left, transparent , #2E0F08), 
						radial-gradient(transparent 75%, #2E0F08), 
						url(${background.url})`
      }
    }), displayImgs]
  });
}

/***/ },

/***/ "./src/components/maes-image-grid.tsx"
/*!********************************************!*\
  !*** ./src/components/maes-image-grid.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAESImageGrid: () => (/* binding */ MAESImageGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MAESImageGrid({
  images
}) {
  const display = images.map(image => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      className: 'maes-image-grid-small',
      src: image.url
    });
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: images.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: 'maes-image-grid-container',
      children: display
    }) : ''
  });
}

/***/ },

/***/ "./src/types/collage_banner_types.ts"
/*!*******************************************!*\
  !*** ./src/types/collage_banner_types.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollageBannerSchema: () => (/* binding */ CollageBannerSchema),
/* harmony export */   CollageImageSchema: () => (/* binding */ CollageImageSchema),
/* harmony export */   CollageImageTransformSchema: () => (/* binding */ CollageImageTransformSchema),
/* harmony export */   SidePrefRestSchema: () => (/* binding */ SidePrefRestSchema),
/* harmony export */   SidePrefSchema: () => (/* binding */ SidePrefSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");

const SidePrefSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  top: zod__WEBPACK_IMPORTED_MODULE_0__.boolean(),
  bottom: zod__WEBPACK_IMPORTED_MODULE_0__.boolean(),
  left: zod__WEBPACK_IMPORTED_MODULE_0__.boolean(),
  right: zod__WEBPACK_IMPORTED_MODULE_0__.boolean()
});
const SidePrefRestSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  side_pref: SidePrefSchema
});
const CollageImageSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  id: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  url: zod__WEBPACK_IMPORTED_MODULE_0__.string().url(),
  isVertical: zod__WEBPACK_IMPORTED_MODULE_0__.boolean(),
  sidePref: SidePrefSchema.nullish()
});
const CollageImageTransformSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  rotation: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  top: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  left: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  zIndex: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  blur: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  brightness: zod__WEBPACK_IMPORTED_MODULE_0__.number()
});
const CollageBannerSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  background: zod__WEBPACK_IMPORTED_MODULE_0__.array(CollageImageSchema),
  imgs: zod__WEBPACK_IMPORTED_MODULE_0__.array(CollageImageSchema)
});

/***/ },

/***/ "./src/types/settings_types.ts"
/*!*************************************!*\
  !*** ./src/types/settings_types.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsSchema: () => (/* binding */ SettingsSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");

const SettingsSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  site_title: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  site_url: zod__WEBPACK_IMPORTED_MODULE_0__.string().url(),
  slogan: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  logo: zod__WEBPACK_IMPORTED_MODULE_0__.string().url()
});

/***/ },

/***/ "./src/blocks/maes_collage_banner/editor.scss"
/*!****************************************************!*\
  !*** ./src/blocks/maes_collage_banner/editor.scss ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/maes_collage_banner/style.scss"
/*!***************************************************!*\
  !*** ./src/blocks/maes_collage_banner/style.scss ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/zod/v4/classic/errors.js"
/*!***********************************************!*\
  !*** ./node_modules/zod/v4/classic/errors.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZodError: () => (/* binding */ ZodError),
/* harmony export */   ZodRealError: () => (/* binding */ ZodRealError)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/errors.js");
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/util.js */ "./node_modules/zod/v4/core/util.js");



/* Prototypes that already carry the lazy helper methods. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */
const _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
/* Helper methods live as non-enumerable lazy getters on the shared
 * prototype instead of own properties on every instance. On first
 * access the getter allocates the per-instance closure and caches it
 * as a non-enumerable own property, so detached usage still works and
 * the allocation only happens for methods actually touched. */
function _lazyMethod(proto, key, make) {
    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: false,
        get() {
            const value = make(this);
            Object.defineProperty(this, key, { value, configurable: true, writable: true });
            return value;
        },
        set(value) {
            Object.defineProperty(this, key, { value, configurable: true, writable: true });
        },
    });
}
const initializer = (inst, issues) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodError.init(inst, issues);
    inst.name = "ZodError";
    const proto = Object.getPrototypeOf(inst);
    if (_installedErrorProtos.has(proto))
        return;
    _installedErrorProtos.add(proto);
    _lazyMethod(proto, "format", (self) => (mapper) => _core_index_js__WEBPACK_IMPORTED_MODULE_1__.formatError(self, mapper));
    _lazyMethod(proto, "flatten", (self) => (mapper) => _core_index_js__WEBPACK_IMPORTED_MODULE_1__.flattenError(self, mapper));
    _lazyMethod(proto, "addIssue", (self) => (issue) => {
        self.issues.push(issue);
        self.message = JSON.stringify(self.issues, _core_util_js__WEBPACK_IMPORTED_MODULE_2__.jsonStringifyReplacer, 2);
    });
    _lazyMethod(proto, "addIssues", (self) => (issues) => {
        self.issues.push(...issues);
        self.message = JSON.stringify(self.issues, _core_util_js__WEBPACK_IMPORTED_MODULE_2__.jsonStringifyReplacer, 2);
    });
    Object.defineProperty(proto, "isEmpty", {
        configurable: true,
        enumerable: false,
        get() {
            return this.issues.length === 0;
        },
    });
};
const ZodError = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodError", initializer);
const ZodRealError = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodError", initializer, undefined, {
    Parent: Error,
});
// /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
// export type ErrorMapCtx = core.$ZodErrorMapCtx;


/***/ },

/***/ "./node_modules/zod/v4/classic/parse.js"
/*!**********************************************!*\
  !*** ./node_modules/zod/v4/classic/parse.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   decodeAsync: () => (/* binding */ decodeAsync),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   encodeAsync: () => (/* binding */ encodeAsync),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseAsync: () => (/* binding */ parseAsync),
/* harmony export */   safeDecode: () => (/* binding */ safeDecode),
/* harmony export */   safeDecodeAsync: () => (/* binding */ safeDecodeAsync),
/* harmony export */   safeEncode: () => (/* binding */ safeEncode),
/* harmony export */   safeEncodeAsync: () => (/* binding */ safeEncodeAsync),
/* harmony export */   safeParse: () => (/* binding */ safeParse),
/* harmony export */   safeParseAsync: () => (/* binding */ safeParseAsync),
/* harmony export */   validate: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.validate),
/* harmony export */   validateAsync: () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.validateAsync)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/parse.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/zod/v4/classic/errors.js");


const parse = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._parse(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const parseAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._parseAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeParse = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeParse(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeParseAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeParseAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);

// Codec functions
const encode = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._encode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const decode = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._decode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const encodeAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._encodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const decodeAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._decodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeEncode = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeEncode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeDecode = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeDecode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeEncodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__._safeDecodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.ZodRealError);


/***/ },

/***/ "./node_modules/zod/v4/classic/schemas.js"
/*!************************************************!*\
  !*** ./node_modules/zod/v4/classic/schemas.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZodAny: () => (/* binding */ ZodAny),
/* harmony export */   ZodArray: () => (/* binding */ ZodArray),
/* harmony export */   ZodBase64: () => (/* binding */ ZodBase64),
/* harmony export */   ZodBase64URL: () => (/* binding */ ZodBase64URL),
/* harmony export */   ZodBigInt: () => (/* binding */ ZodBigInt),
/* harmony export */   ZodBigIntFormat: () => (/* binding */ ZodBigIntFormat),
/* harmony export */   ZodBoolean: () => (/* binding */ ZodBoolean),
/* harmony export */   ZodCIDRv4: () => (/* binding */ ZodCIDRv4),
/* harmony export */   ZodCIDRv6: () => (/* binding */ ZodCIDRv6),
/* harmony export */   ZodCUID: () => (/* binding */ ZodCUID),
/* harmony export */   ZodCUID2: () => (/* binding */ ZodCUID2),
/* harmony export */   ZodCatch: () => (/* binding */ ZodCatch),
/* harmony export */   ZodCodec: () => (/* binding */ ZodCodec),
/* harmony export */   ZodCreditCard: () => (/* binding */ ZodCreditCard),
/* harmony export */   ZodCustom: () => (/* binding */ ZodCustom),
/* harmony export */   ZodCustomStringFormat: () => (/* binding */ ZodCustomStringFormat),
/* harmony export */   ZodDate: () => (/* binding */ ZodDate),
/* harmony export */   ZodDefault: () => (/* binding */ ZodDefault),
/* harmony export */   ZodDiscriminatedUnion: () => (/* binding */ ZodDiscriminatedUnion),
/* harmony export */   ZodE164: () => (/* binding */ ZodE164),
/* harmony export */   ZodEmail: () => (/* binding */ ZodEmail),
/* harmony export */   ZodEmoji: () => (/* binding */ ZodEmoji),
/* harmony export */   ZodEnum: () => (/* binding */ ZodEnum),
/* harmony export */   ZodExactOptional: () => (/* binding */ ZodExactOptional),
/* harmony export */   ZodFile: () => (/* binding */ ZodFile),
/* harmony export */   ZodFunction: () => (/* binding */ ZodFunction),
/* harmony export */   ZodGUID: () => (/* binding */ ZodGUID),
/* harmony export */   ZodIPv4: () => (/* binding */ ZodIPv4),
/* harmony export */   ZodIPv6: () => (/* binding */ ZodIPv6),
/* harmony export */   ZodISODate: () => (/* binding */ ZodISODate),
/* harmony export */   ZodISODateTime: () => (/* binding */ ZodISODateTime),
/* harmony export */   ZodISODuration: () => (/* binding */ ZodISODuration),
/* harmony export */   ZodISOTime: () => (/* binding */ ZodISOTime),
/* harmony export */   ZodIntersection: () => (/* binding */ ZodIntersection),
/* harmony export */   ZodJWT: () => (/* binding */ ZodJWT),
/* harmony export */   ZodKSUID: () => (/* binding */ ZodKSUID),
/* harmony export */   ZodLazy: () => (/* binding */ ZodLazy),
/* harmony export */   ZodLiteral: () => (/* binding */ ZodLiteral),
/* harmony export */   ZodMAC: () => (/* binding */ ZodMAC),
/* harmony export */   ZodMap: () => (/* binding */ ZodMap),
/* harmony export */   ZodNaN: () => (/* binding */ ZodNaN),
/* harmony export */   ZodNanoID: () => (/* binding */ ZodNanoID),
/* harmony export */   ZodNever: () => (/* binding */ ZodNever),
/* harmony export */   ZodNonOptional: () => (/* binding */ ZodNonOptional),
/* harmony export */   ZodNull: () => (/* binding */ ZodNull),
/* harmony export */   ZodNullable: () => (/* binding */ ZodNullable),
/* harmony export */   ZodNumber: () => (/* binding */ ZodNumber),
/* harmony export */   ZodNumberFormat: () => (/* binding */ ZodNumberFormat),
/* harmony export */   ZodObject: () => (/* binding */ ZodObject),
/* harmony export */   ZodOptional: () => (/* binding */ ZodOptional),
/* harmony export */   ZodPipe: () => (/* binding */ ZodPipe),
/* harmony export */   ZodPrefault: () => (/* binding */ ZodPrefault),
/* harmony export */   ZodPreprocess: () => (/* binding */ ZodPreprocess),
/* harmony export */   ZodPromise: () => (/* binding */ ZodPromise),
/* harmony export */   ZodReadonly: () => (/* binding */ ZodReadonly),
/* harmony export */   ZodRecord: () => (/* binding */ ZodRecord),
/* harmony export */   ZodSet: () => (/* binding */ ZodSet),
/* harmony export */   ZodString: () => (/* binding */ ZodString),
/* harmony export */   ZodStringFormat: () => (/* binding */ ZodStringFormat),
/* harmony export */   ZodSuccess: () => (/* binding */ ZodSuccess),
/* harmony export */   ZodSymbol: () => (/* binding */ ZodSymbol),
/* harmony export */   ZodTemplateLiteral: () => (/* binding */ ZodTemplateLiteral),
/* harmony export */   ZodTransform: () => (/* binding */ ZodTransform),
/* harmony export */   ZodTuple: () => (/* binding */ ZodTuple),
/* harmony export */   ZodType: () => (/* binding */ ZodType),
/* harmony export */   ZodULID: () => (/* binding */ ZodULID),
/* harmony export */   ZodURL: () => (/* binding */ ZodURL),
/* harmony export */   ZodUUID: () => (/* binding */ ZodUUID),
/* harmony export */   ZodUndefined: () => (/* binding */ ZodUndefined),
/* harmony export */   ZodUnion: () => (/* binding */ ZodUnion),
/* harmony export */   ZodUnknown: () => (/* binding */ ZodUnknown),
/* harmony export */   ZodVoid: () => (/* binding */ ZodVoid),
/* harmony export */   ZodXID: () => (/* binding */ ZodXID),
/* harmony export */   ZodXor: () => (/* binding */ ZodXor),
/* harmony export */   _ZodString: () => (/* binding */ _ZodString),
/* harmony export */   _default: () => (/* binding */ _default),
/* harmony export */   _function: () => (/* binding */ _function),
/* harmony export */   any: () => (/* binding */ any),
/* harmony export */   array: () => (/* binding */ array),
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64url: () => (/* binding */ base64url),
/* harmony export */   bigint: () => (/* binding */ bigint),
/* harmony export */   boolean: () => (/* binding */ boolean),
/* harmony export */   "catch": () => (/* binding */ _catch),
/* harmony export */   check: () => (/* binding */ check),
/* harmony export */   cidrv4: () => (/* binding */ cidrv4),
/* harmony export */   cidrv6: () => (/* binding */ cidrv6),
/* harmony export */   codec: () => (/* binding */ codec),
/* harmony export */   creditCard: () => (/* binding */ creditCard),
/* harmony export */   cuid: () => (/* binding */ cuid),
/* harmony export */   cuid2: () => (/* binding */ cuid2),
/* harmony export */   custom: () => (/* binding */ custom),
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   describe: () => (/* binding */ describe),
/* harmony export */   discriminatedUnion: () => (/* binding */ discriminatedUnion),
/* harmony export */   e164: () => (/* binding */ e164),
/* harmony export */   email: () => (/* binding */ email),
/* harmony export */   emoji: () => (/* binding */ emoji),
/* harmony export */   "enum": () => (/* binding */ _enum),
/* harmony export */   exactOptional: () => (/* binding */ exactOptional),
/* harmony export */   file: () => (/* binding */ file),
/* harmony export */   float32: () => (/* binding */ float32),
/* harmony export */   float64: () => (/* binding */ float64),
/* harmony export */   "function": () => (/* binding */ _function),
/* harmony export */   guid: () => (/* binding */ guid),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   hostname: () => (/* binding */ hostname),
/* harmony export */   httpUrl: () => (/* binding */ httpUrl),
/* harmony export */   "instanceof": () => (/* binding */ _instanceof),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   int32: () => (/* binding */ int32),
/* harmony export */   int64: () => (/* binding */ int64),
/* harmony export */   intersection: () => (/* binding */ intersection),
/* harmony export */   invertCodec: () => (/* binding */ invertCodec),
/* harmony export */   ipv4: () => (/* binding */ ipv4),
/* harmony export */   ipv6: () => (/* binding */ ipv6),
/* harmony export */   json: () => (/* binding */ json),
/* harmony export */   jwt: () => (/* binding */ jwt),
/* harmony export */   keyof: () => (/* binding */ keyof),
/* harmony export */   ksuid: () => (/* binding */ ksuid),
/* harmony export */   lazy: () => (/* binding */ lazy),
/* harmony export */   literal: () => (/* binding */ literal),
/* harmony export */   looseObject: () => (/* binding */ looseObject),
/* harmony export */   looseRecord: () => (/* binding */ looseRecord),
/* harmony export */   mac: () => (/* binding */ mac),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   meta: () => (/* binding */ meta),
/* harmony export */   nan: () => (/* binding */ nan),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   nativeEnum: () => (/* binding */ nativeEnum),
/* harmony export */   never: () => (/* binding */ never),
/* harmony export */   nonoptional: () => (/* binding */ nonoptional),
/* harmony export */   "null": () => (/* binding */ _null),
/* harmony export */   nullable: () => (/* binding */ nullable),
/* harmony export */   nullish: () => (/* binding */ nullish),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   object: () => (/* binding */ object),
/* harmony export */   optional: () => (/* binding */ optional),
/* harmony export */   partialRecord: () => (/* binding */ partialRecord),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   prefault: () => (/* binding */ prefault),
/* harmony export */   preprocess: () => (/* binding */ preprocess),
/* harmony export */   promise: () => (/* binding */ promise),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   record: () => (/* binding */ record),
/* harmony export */   refine: () => (/* binding */ refine),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   strictObject: () => (/* binding */ strictObject),
/* harmony export */   string: () => (/* binding */ string),
/* harmony export */   stringFormat: () => (/* binding */ stringFormat),
/* harmony export */   stringbool: () => (/* binding */ stringbool),
/* harmony export */   success: () => (/* binding */ success),
/* harmony export */   superRefine: () => (/* binding */ superRefine),
/* harmony export */   symbol: () => (/* binding */ symbol),
/* harmony export */   templateLiteral: () => (/* binding */ templateLiteral),
/* harmony export */   transform: () => (/* binding */ transform),
/* harmony export */   tuple: () => (/* binding */ tuple),
/* harmony export */   uint32: () => (/* binding */ uint32),
/* harmony export */   uint64: () => (/* binding */ uint64),
/* harmony export */   ulid: () => (/* binding */ ulid),
/* harmony export */   undefined: () => (/* binding */ _undefined),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   unknown: () => (/* binding */ unknown),
/* harmony export */   url: () => (/* binding */ url),
/* harmony export */   uuid: () => (/* binding */ uuid),
/* harmony export */   uuidv4: () => (/* binding */ uuidv4),
/* harmony export */   uuidv6: () => (/* binding */ uuidv6),
/* harmony export */   uuidv7: () => (/* binding */ uuidv7),
/* harmony export */   "void": () => (/* binding */ _void),
/* harmony export */   xid: () => (/* binding */ xid),
/* harmony export */   xor: () => (/* binding */ xor)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/schemas.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/memoizer.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/checks.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/util.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/regexes.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/zod/v4/core/registries.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checks.js */ "./node_modules/zod/v4/core/api.js");
/* harmony import */ var _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/json-schema-processors.js */ "./node_modules/zod/v4/core/json-schema-processors.js");
/* harmony import */ var _core_to_json_schema_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/to-json-schema.js */ "./node_modules/zod/v4/core/to-json-schema.js");
/* harmony import */ var _locales_en_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locales/en.js */ "./node_modules/zod/v4/locales/en.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parse.js */ "./node_modules/zod/v4/classic/parse.js");







// Register English as the default locale on first ZodType construction. Hooked into the `ZodType` `$constructor` (rather than a top-level `config(en())` in `external.ts`) so bundlers honoring `sideEffects: false` can't tree-shake it out — see #5953, #5725. An explicit `z.config(z.locales.xx())` call wins regardless of order, since this only sets the default when none is present.
function _ensureDefaultLocale() {
    if (!_core_index_js__WEBPACK_IMPORTED_MODULE_0__.globalConfig.localeError)
        _core_index_js__WEBPACK_IMPORTED_MODULE_0__.config((0,_locales_en_js__WEBPACK_IMPORTED_MODULE_10__["default"])());
}
// the default memoizer is read by the core container init, which runs before `ZodType.init`, so each container calls this first
function _ensureDefaultMemoizer() {
    if (!_core_index_js__WEBPACK_IMPORTED_MODULE_0__.globalConfig.memoizer)
        _core_index_js__WEBPACK_IMPORTED_MODULE_0__.config({ memoizer: _core_index_js__WEBPACK_IMPORTED_MODULE_2__.memoizer() });
}
const ZodType = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodType", (inst, def) => {
    _ensureDefaultLocale();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodType.init(inst, def);
    inst.def = def;
    inst.type = def.type;
    return inst;
}, {
    check(...chks) {
        const def = this.def;
        return this.clone(_core_index_js__WEBPACK_IMPORTED_MODULE_4__.mergeDefs(def, {
            checks: [
                ...(def.checks ?? []),
                ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch),
            ],
        }), { parent: true });
    },
    with(...chks) {
        return this.check(...chks);
    },
    clone(def, params) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.clone(this, def, params);
    },
    brand() {
        return this;
    },
    register(reg, meta) {
        reg.add(this, meta);
        return this;
    },
    refine(check, params) {
        return this.check(refine(check, params));
    },
    superRefine(refinement, params) {
        return this.check(superRefine(refinement, params));
    },
    overwrite(fn) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._overwrite(fn));
    },
    optional() {
        return optional(this);
    },
    exactOptional() {
        return exactOptional(this);
    },
    nullable() {
        return nullable(this);
    },
    nullish() {
        return optional(nullable(this));
    },
    nonoptional(params) {
        return nonoptional(this, params);
    },
    array() {
        return array(this);
    },
    or(arg) {
        return union([this, arg]);
    },
    and(arg) {
        return intersection(this, arg);
    },
    transform(tx) {
        return pipe(this, transform(tx));
    },
    default(d) {
        return _default(this, d);
    },
    prefault(d) {
        return prefault(this, d);
    },
    catch(params) {
        return _catch(this, params);
    },
    pipe(target) {
        return pipe(this, target);
    },
    readonly() {
        return readonly(this);
    },
    describe(description) {
        const cl = this.clone();
        _core_index_js__WEBPACK_IMPORTED_MODULE_6__.globalRegistry.add(cl, { description });
        return cl;
    },
    meta(...args) {
        // overloaded: meta() returns the registered metadata, meta(data) returns a clone with `data` registered. The mapped type picks up the second overload, so we accept variadic any-args and return `any` to satisfy both at runtime.
        if (args.length === 0)
            return _core_index_js__WEBPACK_IMPORTED_MODULE_6__.globalRegistry.get(this);
        const cl = this.clone();
        _core_index_js__WEBPACK_IMPORTED_MODULE_6__.globalRegistry.add(cl, args[0]);
        return cl;
    },
    isOptional() {
        return this.safeParse(undefined).success;
    },
    isNullable() {
        return this.safeParse(null).success;
    },
    apply(fn, ...args) {
        return args.length === 0 ? fn(this) : fn(this, ...args);
    },
    // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
    get "~standard"() {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.hide(this, "~standard", {
            ..._core_index_js__WEBPACK_IMPORTED_MODULE_1__.standardProps(this),
            jsonSchema: {
                input: (0,_core_to_json_schema_js__WEBPACK_IMPORTED_MODULE_9__.createStandardJSONSchemaMethod)(this, "input"),
                output: (0,_core_to_json_schema_js__WEBPACK_IMPORTED_MODULE_9__.createStandardJSONSchemaMethod)(this, "output"),
            },
        });
    },
    set "~standard"(value) {
        _core_index_js__WEBPACK_IMPORTED_MODULE_4__.own(this, "~standard", value);
    },
    parse: function _parse(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.parse(this, data, params, { callee: _parse });
    },
    parseAsync: async function _parseAsync(data, params) {
        return await _parse_js__WEBPACK_IMPORTED_MODULE_11__.parseAsync(this, data, params, { callee: _parseAsync });
    },
    safeParse(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeParse(this, data, params);
    },
    async safeParseAsync(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeParseAsync(this, data, params);
    },
    // `spa` is an alias: same function object as `safeParseAsync`, as before.
    get spa() {
        return this?.safeParseAsync;
    },
    set spa(value) {
        _core_index_js__WEBPACK_IMPORTED_MODULE_4__.own(this, "spa", value);
    },
    encode: function _encode(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.encode(this, data, params, { callee: _encode });
    },
    decode: function _decode(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.decode(this, data, params, { callee: _decode });
    },
    encodeAsync: async function _encodeAsync(data, params) {
        return await _parse_js__WEBPACK_IMPORTED_MODULE_11__.encodeAsync(this, data, params, { callee: _encodeAsync });
    },
    decodeAsync: async function _decodeAsync(data, params) {
        return await _parse_js__WEBPACK_IMPORTED_MODULE_11__.decodeAsync(this, data, params, { callee: _decodeAsync });
    },
    safeEncode(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeEncode(this, data, params);
    },
    safeDecode(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeDecode(this, data, params);
    },
    async safeEncodeAsync(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeEncodeAsync(this, data, params);
    },
    async safeDecodeAsync(data, params) {
        return _parse_js__WEBPACK_IMPORTED_MODULE_11__.safeDecodeAsync(this, data, params);
    },
    toJSONSchema(params) {
        return (0,_core_to_json_schema_js__WEBPACK_IMPORTED_MODULE_9__.createToJSONSchemaMethod)(this, {})(params);
    },
    // Reads through to the registry on every access, so it must not cache.
    get description() {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_6__.globalRegistry.get(this)?.description;
    },
    // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
    get _def() {
        return this._zod.def;
    },
});
/** @internal */
const _ZodString = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("_ZodString", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.stringProcessor(inst, ctx, json, params);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
}, {
    regex(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._regex(...args));
    },
    includes(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._includes(...args));
    },
    startsWith(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._startsWith(...args));
    },
    endsWith(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._endsWith(...args));
    },
    min(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minLength(...args));
    },
    max(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._maxLength(...args));
    },
    length(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._length(...args));
    },
    nonempty(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minLength(1, ...args));
    },
    lowercase(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lowercase(params));
    },
    uppercase(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._uppercase(params));
    },
    trim() {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._trim());
    },
    normalize(...args) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._normalize(...args));
    },
    toLowerCase() {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._toLowerCase());
    },
    toUpperCase() {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._toUpperCase());
    },
    slugify() {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._slugify());
    },
});
const ZodString = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodString", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodString.init(inst, def);
    _ZodString.init(inst, def);
}, {
    email(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._email(ZodEmail, params));
    },
    url(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._url(ZodURL, params));
    },
    jwt(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._jwt(ZodJWT, params));
    },
    emoji(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._emoji(ZodEmoji, params));
    },
    guid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._guid(ZodGUID, params));
    },
    uuid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuid(ZodUUID, params));
    },
    uuidv4(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv4(ZodUUID, params));
    },
    uuidv6(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv6(ZodUUID, params));
    },
    uuidv7(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv7(ZodUUID, params));
    },
    nanoid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._nanoid(ZodNanoID, params));
    },
    cuid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._cuid(ZodCUID, params));
    },
    cuid2(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._cuid2(ZodCUID2, params));
    },
    ulid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._ulid(ZodULID, params));
    },
    base64(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._base64(ZodBase64, params));
    },
    base64url(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._base64url(ZodBase64URL, params));
    },
    xid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._xid(ZodXID, params));
    },
    ksuid(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._ksuid(ZodKSUID, params));
    },
    ipv4(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._ipv4(ZodIPv4, params));
    },
    ipv6(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._ipv6(ZodIPv6, params));
    },
    cidrv4(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._cidrv4(ZodCIDRv4, params));
    },
    cidrv6(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._cidrv6(ZodCIDRv6, params));
    },
    e164(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._e164(ZodE164, params));
    },
    datetime(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._isoDateTime(ZodISODateTime, params));
    },
    date(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._isoDate(ZodISODate, params));
    },
    time(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._isoTime(ZodISOTime, params));
    },
    duration(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._isoDuration(ZodISODuration, params));
    },
});
function string(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._string(ZodString, params);
}
const ZodStringFormat = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodStringFormat", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
});
const ZodISODateTime = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodISODateTime", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISODate = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodISODate", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISOTime = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodISOTime", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodISODuration = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodISODuration", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
});
const ZodEmail = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodEmail", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function email(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._email(ZodEmail, params);
}
const ZodGUID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodGUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function guid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._guid(ZodGUID, params);
}
const ZodUUID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodUUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function uuid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuid(ZodUUID, params);
}
function uuidv4(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv4(ZodUUID, params);
}
// ZodUUIDv6
function uuidv6(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv6(ZodUUID, params);
}
// ZodUUIDv7
function uuidv7(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uuidv7(ZodUUID, params);
}
const ZodURL = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodURL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function url(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._url(ZodURL, params);
}
function httpUrl(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._url(ZodURL, {
        protocol: _core_index_js__WEBPACK_IMPORTED_MODULE_5__.httpProtocol,
        hostname: _core_index_js__WEBPACK_IMPORTED_MODULE_5__.domain,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodEmoji = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodEmoji", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function emoji(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._emoji(ZodEmoji, params);
}
const ZodNanoID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNanoID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function nanoid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._nanoid(ZodNanoID, params);
}
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link ZodCUID2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const ZodCUID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
/**
 * Validates a CUID v1 string.
 *
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link cuid2 | `z.cuid2()`} instead.
 * See https://github.com/paralleldrive/cuid.
 */
function cuid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._cuid(ZodCUID, params);
}
const ZodCUID2 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCUID2", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cuid2(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._cuid2(ZodCUID2, params);
}
const ZodULID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodULID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ulid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._ulid(ZodULID, params);
}
const ZodXID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodXID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function xid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._xid(ZodXID, params);
}
const ZodKSUID = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodKSUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ksuid(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._ksuid(ZodKSUID, params);
}
const ZodIPv4 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodIPv4", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv4(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._ipv4(ZodIPv4, params);
}
const ZodMAC = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodMAC", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodMAC.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function mac(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._mac(ZodMAC, params);
}
const ZodIPv6 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodIPv6", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv6(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._ipv6(ZodIPv6, params);
}
const ZodCIDRv4 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCIDRv4", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._cidrv4(ZodCIDRv4, params);
}
const ZodCIDRv6 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCIDRv6", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._cidrv6(ZodCIDRv6, params);
}
const ZodBase64 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodBase64", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._base64(ZodBase64, params);
}
const ZodBase64URL = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodBase64URL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64url(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._base64url(ZodBase64URL, params);
}
const ZodE164 = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodE164", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function e164(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._e164(ZodE164, params);
}
const ZodCreditCard = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCreditCard", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCreditCard.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function creditCard(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._creditCard(ZodCreditCard, params);
}
const ZodJWT = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodJWT", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._jwt(ZodJWT, params);
}
const ZodCustomStringFormat = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCustomStringFormat", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname(_params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._stringFormat(ZodCustomStringFormat, "hostname", _core_index_js__WEBPACK_IMPORTED_MODULE_5__.hostname, _params);
}
function hex(_params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._stringFormat(ZodCustomStringFormat, "hex", _core_index_js__WEBPACK_IMPORTED_MODULE_5__.hex, _params);
}
function hash(alg, params) {
    const enc = params?.enc ?? "hex";
    const format = `${alg}_${enc}`;
    const regex = _core_index_js__WEBPACK_IMPORTED_MODULE_5__[format];
    if (!regex)
        throw new Error(`Unrecognized hash format: ${format}`);
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._stringFormat(ZodCustomStringFormat, format, regex, params);
}
const ZodNumber = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNumber", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.numberProcessor(inst, ctx, json, params);
    const bag = inst._zod.bag;
    inst.minValue =
        Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue =
        Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
}, {
    gt(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gt(value, params));
    },
    gte(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(value, params));
    },
    min(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(value, params));
    },
    lt(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lt(value, params));
    },
    lte(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(value, params));
    },
    max(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(value, params));
    },
    int(params) {
        return this.check(int(params));
    },
    safe(params) {
        return this.check(int(params));
    },
    positive(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gt(0, params));
    },
    nonnegative(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(0, params));
    },
    negative(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lt(0, params));
    },
    nonpositive(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(0, params));
    },
    multipleOf(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._multipleOf(value, params));
    },
    step(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._multipleOf(value, params));
    },
    finite() {
        return this;
    },
});
function number(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._number(ZodNumber, params);
}
const ZodNumberFormat = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNumberFormat", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
});
function int(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._int(ZodNumberFormat, params);
}
function float32(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._float32(ZodNumberFormat, params);
}
function float64(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._float64(ZodNumberFormat, params);
}
function int32(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._int32(ZodNumberFormat, params);
}
function uint32(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uint32(ZodNumberFormat, params);
}
const ZodBoolean = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodBoolean", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._boolean(ZodBoolean, params);
}
const ZodBigInt = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodBigInt", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodBigInt.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.bigintProcessor(inst, ctx, json, params);
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
}, {
    gte(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(value, params));
    },
    min(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(value, params));
    },
    gt(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gt(value, params));
    },
    lt(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lt(value, params));
    },
    lte(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(value, params));
    },
    max(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(value, params));
    },
    positive(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gt(BigInt(0), params));
    },
    negative(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lt(BigInt(0), params));
    },
    nonpositive(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(BigInt(0), params));
    },
    nonnegative(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(BigInt(0), params));
    },
    multipleOf(value, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._multipleOf(value, params));
    },
});
function bigint(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._bigint(ZodBigInt, params);
}
const ZodBigIntFormat = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodBigIntFormat", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
});
function int64(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._int64(ZodBigIntFormat, params);
}
function uint64(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._uint64(ZodBigIntFormat, params);
}
const ZodSymbol = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodSymbol", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodSymbol.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.symbolProcessor(inst, ctx, json, params);
});
function symbol(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._symbol(ZodSymbol, params);
}
const ZodUndefined = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodUndefined", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.undefinedProcessor(inst, ctx, json, params);
});
function _undefined(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._undefined(ZodUndefined, params);
}

const ZodNull = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNull", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNull.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.nullProcessor(inst, ctx, json, params);
});
function _null(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._null(ZodNull, params);
}

const ZodAny = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodAny", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodAny.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.anyProcessor(inst, ctx, json, params);
});
function any() {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._any(ZodAny);
}
const ZodUnknown = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodUnknown", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.unknownProcessor(inst, ctx, json, params);
});
function unknown() {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._unknown(ZodUnknown);
}
const ZodNever = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNever", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNever.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.neverProcessor(inst, ctx, json, params);
});
function never(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._never(ZodNever, params);
}
const ZodVoid = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodVoid", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodVoid.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.voidProcessor(inst, ctx, json, params);
});
function _void(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._void(ZodVoid, params);
}

const ZodDate = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodDate", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodDate.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.dateProcessor(inst, ctx, json, params);
    inst.min = (value, params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._gte(value, params));
    inst.max = (value, params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._date(ZodDate, params);
}
const ZodArray = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodArray", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.arrayProcessor(inst, ctx, json, params);
    inst.element = def.element;
}, {
    min(n, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minLength(n, params));
    },
    nonempty(params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minLength(1, params));
    },
    max(n, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._maxLength(n, params));
    },
    length(n, params) {
        return this.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._length(n, params));
    },
    unwrap() {
        return this.element;
    },
});
function array(element, params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._array(ZodArray, element, params);
}
// .keyof
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return _enum(Object.keys(shape));
}
const ZodObject = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodObject", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodObjectJIT.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.objectProcessor(inst, ctx, json, params);
    _core_index_js__WEBPACK_IMPORTED_MODULE_4__.installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
    keyof() {
        return _enum(Object.keys(this._zod.def.shape));
    },
    catchall(catchall) {
        return this.clone({ ...this._zod.def, catchall: catchall });
    },
    passthrough() {
        return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    loose() {
        return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    strict() {
        return this.clone({ ...this._zod.def, catchall: never() });
    },
    strip() {
        return this.clone({ ...this._zod.def, catchall: undefined });
    },
    extend(incoming) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.extend(this, incoming);
    },
    safeExtend(incoming) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.safeExtend(this, incoming);
    },
    merge(other) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.merge(this, other);
    },
    pick(mask) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.pick(this, mask);
    },
    omit(mask) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.omit(this, mask);
    },
    partial(...args) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.partial(ZodOptional, this, args[0]);
    },
    exactPartial(...args) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.partial(ZodExactOptional, this, args[0], "exactPartial");
    },
    required(...args) {
        return _core_index_js__WEBPACK_IMPORTED_MODULE_4__.required(ZodNonOptional, this, args[0]);
    },
});
function object(shape, params) {
    const def = {
        type: "object",
        shape: shape ?? {},
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    };
    return new ZodObject(def);
}
// strictObject
function strictObject(shape, params) {
    return new ZodObject({
        type: "object",
        shape,
        catchall: never(),
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
// looseObject
function looseObject(shape, params) {
    return new ZodObject({
        type: "object",
        shape,
        catchall: unknown(),
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodUnion = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodUnion", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.unionProcessor(inst, ctx, json, params);
    inst.options = def.options;
});
function union(options, params) {
    return new ZodUnion({
        type: "union",
        options: options,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodXor = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodXor", (inst, def) => {
    ZodUnion.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodXor.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.unionProcessor(inst, ctx, json, params);
    inst.options = def.options;
});
/** Creates an exclusive union (XOR) where exactly one option must match.
 * Unlike regular unions that succeed when any option matches, xor fails if
 * zero or more than one option matches the input. */
function xor(options, params) {
    return new ZodXor({
        type: "union",
        options: options,
        inclusive: false,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodDiscriminatedUnion = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodDiscriminatedUnion", (inst, def) => {
    ZodUnion.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new ZodDiscriminatedUnion({
        type: "union",
        options: options,
        discriminator,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodIntersection = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodIntersection", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
const ZodTuple = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodTuple", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodTuple.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.tupleProcessor(inst, ctx, json, params);
}, {
    rest(rest) {
        return this.clone({
            ...this._zod.def,
            rest: rest,
        });
    },
    partial() {
        const def = this._zod.def;
        // a refinement was authored against the full arity; partialing would run it on a shorter array
        if (def.checks?.length)
            throw new Error(".partial() cannot be used on tuple schemas containing refinements");
        return this.clone({
            ...def,
            items: def.items.map((item) => new ZodOptional({ type: "optional", innerType: item })),
        });
    },
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodRecord = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodRecord", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRecord.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.recordProcessor(inst, ctx, json, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
    // v3-compat: z.record(valueType, params?) — defaults keyType to z.string()
    if (!valueType || !valueType._zod) {
        return new ZodRecord({
            type: "record",
            keyType: string(),
            valueType: keyType,
            ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(valueType),
        });
    }
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
// type alksjf = core.output<core.$ZodRecordKey>;
function partialRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
        partial: true,
    });
}
function looseRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        mode: "loose",
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodMap = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodMap", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodMap.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.mapProcessor(inst, ctx, json, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
    inst.min = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minSize(...args));
    inst.nonempty = (params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minSize(1, params));
    inst.max = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._maxSize(...args));
    inst.size = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._size(...args));
});
function map(keyType, valueType, params) {
    return new ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodSet = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodSet", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodSet.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.setProcessor(inst, ctx, json, params);
    inst.min = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minSize(...args));
    inst.nonempty = (params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minSize(1, params));
    inst.max = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._maxSize(...args));
    inst.size = (...args) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._size(...args));
});
function set(valueType, params) {
    return new ZodSet({
        type: "set",
        valueType: valueType,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodEnum = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodEnum", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.enumProcessor(inst, ctx, json, params);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
        const newEntries = {};
        for (const value of values) {
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
            entries: newEntries,
        });
    };
    inst.exclude = (values, params) => {
        const newEntries = { ...def.entries };
        for (const value of values) {
            if (keys.has(value)) {
                delete newEntries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
            entries: newEntries,
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodEnum({
        type: "enum",
        entries,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}

/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function nativeEnum(entries, params) {
    return new ZodEnum({
        type: "enum",
        entries,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodLiteral = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodLiteral", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.literalProcessor(inst, ctx, json, params);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get() {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        },
    });
});
function literal(value, params) {
    return new ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodFile = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodFile", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodFile.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.fileProcessor(inst, ctx, json, params);
    inst.min = (size, params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._minSize(size, params));
    inst.max = (size, params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._maxSize(size, params));
    inst.mime = (types, params) => inst.check(_core_index_js__WEBPACK_IMPORTED_MODULE_7__._mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._file(ZodFile, params);
}
const ZodTransform = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodTransform", (inst, def) => {
    _ensureDefaultMemoizer();
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.transformProcessor(inst, ctx, json, params);
    inst._zod.parse = (payload, _ctx) => {
        if (_ctx.direction === "backward") {
            throw new _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$ZodEncodeError(inst.constructor.name);
        }
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(_core_index_js__WEBPACK_IMPORTED_MODULE_4__.issue(issue, payload.value, def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                if (!("input" in _issue))
                    _issue.input = payload.value;
                _issue.inst ?? (_issue.inst = inst);
                // _issue.continue ??= true;
                payload.issues.push(_core_index_js__WEBPACK_IMPORTED_MODULE_4__.issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn,
    });
}
const ZodOptional = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodOptional", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType: innerType,
    });
}
const ZodExactOptional = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodExactOptional", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodExactOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
    return new ZodExactOptional({
        type: "optional",
        innerType: innerType,
    });
}
const ZodNullable = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNullable", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.nullableProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
function nullish(innerType) {
    return optional(nullable(innerType));
}
const ZodDefault = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodDefault", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.defaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : _core_index_js__WEBPACK_IMPORTED_MODULE_4__.shallowClone(defaultValue);
        },
    });
}
const ZodPrefault = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodPrefault", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.prefaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : _core_index_js__WEBPACK_IMPORTED_MODULE_4__.shallowClone(defaultValue);
        },
    });
}
const ZodNonOptional = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNonOptional", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.nonoptionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodSuccess = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodSuccess", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodSuccess.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.successProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
    return new ZodSuccess({
        type: "success",
        innerType: innerType,
    });
}
const ZodCatch = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCatch", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.catchProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : _core_index_js__WEBPACK_IMPORTED_MODULE_4__.constantCatch(catchValue)),
    });
}

const ZodNaN = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodNaN", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodNaN.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.nanProcessor(inst, ctx, json, params);
});
function nan(params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._nan(ZodNaN, params);
}
const ZodPipe = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodPipe", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.pipeProcessor(inst, ctx, json, params);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out: out,
        // ...util.normalizeParams(params),
    });
}
const ZodCodec = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCodec", (inst, def) => {
    ZodPipe.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
    return new ZodCodec({
        type: "pipe",
        in: in_,
        out: out,
        transform: params.decode,
        reverseTransform: params.encode,
    });
}
function invertCodec(codec) {
    const def = codec._zod.def;
    return new ZodCodec({
        type: "pipe",
        in: def.out,
        out: def.in,
        transform: def.reverseTransform,
        reverseTransform: def.transform,
    });
}
const ZodPreprocess = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodPreprocess", (inst, def) => {
    ZodPipe.init(inst, def);
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodPreprocess.init(inst, def);
});
const ZodReadonly = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodReadonly", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.readonlyProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
const ZodTemplateLiteral = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodTemplateLiteral", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.templateLiteralProcessor(inst, ctx, json, params);
});
function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
}
const ZodLazy = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodLazy", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodLazy.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.lazyProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
    return new ZodLazy({
        type: "lazy",
        getter: getter,
    });
}
const ZodPromise = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodPromise", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodPromise.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.promiseProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
    return new ZodPromise({
        type: "promise",
        innerType: innerType,
    });
}
const ZodFunction = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodFunction", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodFunction.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.functionProcessor(inst, ctx, json, params);
});
function _function(params) {
    return new ZodFunction({
        type: "function",
        input: Array.isArray(params?.input) ? tuple(params?.input) : (params?.input ?? array(unknown())),
        output: params?.output ?? unknown(),
    });
}

const ZodCustom = /*@__PURE__*/ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("ZodCustom", (inst, def) => {
    _core_index_js__WEBPACK_IMPORTED_MODULE_1__.$ZodCustom.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => _core_json_schema_processors_js__WEBPACK_IMPORTED_MODULE_8__.customProcessor(inst, ctx, json, params);
});
// custom checks
function check(fn) {
    const ch = new _core_index_js__WEBPACK_IMPORTED_MODULE_3__.$ZodCheck({
        check: "custom",
        // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._refine(ZodCustom, fn, _params);
}
// superRefine
function superRefine(fn, params) {
    return _core_index_js__WEBPACK_IMPORTED_MODULE_7__._superRefine(fn, params);
}
// Re-export describe and meta from core
const describe = _core_index_js__WEBPACK_IMPORTED_MODULE_7__.describe;
const meta = _core_index_js__WEBPACK_IMPORTED_MODULE_7__.meta;
function _instanceof(cls, params = {}) {
    const inst = new ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data) => data instanceof cls,
        abort: true,
        ..._core_index_js__WEBPACK_IMPORTED_MODULE_4__.normalizeParams(params),
    });
    inst._zod.bag.Class = cls;
    // Override check to emit invalid_type instead of custom
    inst._zod.check = (payload) => {
        if (!(payload.value instanceof cls)) {
            payload.issues.push({
                code: "invalid_type",
                expected: cls.name,
                input: payload.value,
                inst,
                path: [...(inst._zod.def.path ?? [])],
            });
        }
    };
    return inst;
}

// stringbool
const stringbool = (...args) => _core_index_js__WEBPACK_IMPORTED_MODULE_7__._stringbool({
    Codec: ZodCodec,
    Boolean: ZodBoolean,
    String: ZodString,
}, ...args);
function json(params) {
    const jsonSchema = lazy(() => {
        return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
    });
    return jsonSchema;
}
// preprocess
function preprocess(fn, schema) {
    return new ZodPreprocess({
        type: "pipe",
        in: transform(fn),
        out: schema,
    });
}


/***/ },

/***/ "./node_modules/zod/v4/core/api.js"
/*!*****************************************!*\
  !*** ./node_modules/zod/v4/core/api.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimePrecision: () => (/* binding */ TimePrecision),
/* harmony export */   _any: () => (/* binding */ _any),
/* harmony export */   _array: () => (/* binding */ _array),
/* harmony export */   _base64: () => (/* binding */ _base64),
/* harmony export */   _base64url: () => (/* binding */ _base64url),
/* harmony export */   _bigint: () => (/* binding */ _bigint),
/* harmony export */   _boolean: () => (/* binding */ _boolean),
/* harmony export */   _catch: () => (/* binding */ _catch),
/* harmony export */   _check: () => (/* binding */ _check),
/* harmony export */   _cidrv4: () => (/* binding */ _cidrv4),
/* harmony export */   _cidrv6: () => (/* binding */ _cidrv6),
/* harmony export */   _coercedBigint: () => (/* binding */ _coercedBigint),
/* harmony export */   _coercedBoolean: () => (/* binding */ _coercedBoolean),
/* harmony export */   _coercedDate: () => (/* binding */ _coercedDate),
/* harmony export */   _coercedNumber: () => (/* binding */ _coercedNumber),
/* harmony export */   _coercedString: () => (/* binding */ _coercedString),
/* harmony export */   _creditCard: () => (/* binding */ _creditCard),
/* harmony export */   _cuid: () => (/* binding */ _cuid),
/* harmony export */   _cuid2: () => (/* binding */ _cuid2),
/* harmony export */   _custom: () => (/* binding */ _custom),
/* harmony export */   _date: () => (/* binding */ _date),
/* harmony export */   _default: () => (/* binding */ _default),
/* harmony export */   _discriminatedUnion: () => (/* binding */ _discriminatedUnion),
/* harmony export */   _e164: () => (/* binding */ _e164),
/* harmony export */   _email: () => (/* binding */ _email),
/* harmony export */   _emoji: () => (/* binding */ _emoji),
/* harmony export */   _endsWith: () => (/* binding */ _endsWith),
/* harmony export */   _enum: () => (/* binding */ _enum),
/* harmony export */   _file: () => (/* binding */ _file),
/* harmony export */   _float32: () => (/* binding */ _float32),
/* harmony export */   _float64: () => (/* binding */ _float64),
/* harmony export */   _gt: () => (/* binding */ _gt),
/* harmony export */   _gte: () => (/* binding */ _gte),
/* harmony export */   _guid: () => (/* binding */ _guid),
/* harmony export */   _includes: () => (/* binding */ _includes),
/* harmony export */   _int: () => (/* binding */ _int),
/* harmony export */   _int32: () => (/* binding */ _int32),
/* harmony export */   _int64: () => (/* binding */ _int64),
/* harmony export */   _intersection: () => (/* binding */ _intersection),
/* harmony export */   _ipv4: () => (/* binding */ _ipv4),
/* harmony export */   _ipv6: () => (/* binding */ _ipv6),
/* harmony export */   _isoDate: () => (/* binding */ _isoDate),
/* harmony export */   _isoDateTime: () => (/* binding */ _isoDateTime),
/* harmony export */   _isoDuration: () => (/* binding */ _isoDuration),
/* harmony export */   _isoTime: () => (/* binding */ _isoTime),
/* harmony export */   _jwt: () => (/* binding */ _jwt),
/* harmony export */   _ksuid: () => (/* binding */ _ksuid),
/* harmony export */   _lazy: () => (/* binding */ _lazy),
/* harmony export */   _length: () => (/* binding */ _length),
/* harmony export */   _literal: () => (/* binding */ _literal),
/* harmony export */   _lowercase: () => (/* binding */ _lowercase),
/* harmony export */   _lt: () => (/* binding */ _lt),
/* harmony export */   _lte: () => (/* binding */ _lte),
/* harmony export */   _mac: () => (/* binding */ _mac),
/* harmony export */   _map: () => (/* binding */ _map),
/* harmony export */   _max: () => (/* binding */ _lte),
/* harmony export */   _maxLength: () => (/* binding */ _maxLength),
/* harmony export */   _maxSize: () => (/* binding */ _maxSize),
/* harmony export */   _mime: () => (/* binding */ _mime),
/* harmony export */   _min: () => (/* binding */ _gte),
/* harmony export */   _minLength: () => (/* binding */ _minLength),
/* harmony export */   _minSize: () => (/* binding */ _minSize),
/* harmony export */   _multipleOf: () => (/* binding */ _multipleOf),
/* harmony export */   _nan: () => (/* binding */ _nan),
/* harmony export */   _nanoid: () => (/* binding */ _nanoid),
/* harmony export */   _nativeEnum: () => (/* binding */ _nativeEnum),
/* harmony export */   _negative: () => (/* binding */ _negative),
/* harmony export */   _never: () => (/* binding */ _never),
/* harmony export */   _nonnegative: () => (/* binding */ _nonnegative),
/* harmony export */   _nonoptional: () => (/* binding */ _nonoptional),
/* harmony export */   _nonpositive: () => (/* binding */ _nonpositive),
/* harmony export */   _normalize: () => (/* binding */ _normalize),
/* harmony export */   _null: () => (/* binding */ _null),
/* harmony export */   _nullable: () => (/* binding */ _nullable),
/* harmony export */   _number: () => (/* binding */ _number),
/* harmony export */   _optional: () => (/* binding */ _optional),
/* harmony export */   _overwrite: () => (/* binding */ _overwrite),
/* harmony export */   _pipe: () => (/* binding */ _pipe),
/* harmony export */   _positive: () => (/* binding */ _positive),
/* harmony export */   _promise: () => (/* binding */ _promise),
/* harmony export */   _properties: () => (/* binding */ _properties),
/* harmony export */   _property: () => (/* binding */ _property),
/* harmony export */   _readonly: () => (/* binding */ _readonly),
/* harmony export */   _record: () => (/* binding */ _record),
/* harmony export */   _refine: () => (/* binding */ _refine),
/* harmony export */   _regex: () => (/* binding */ _regex),
/* harmony export */   _set: () => (/* binding */ _set),
/* harmony export */   _size: () => (/* binding */ _size),
/* harmony export */   _slugify: () => (/* binding */ _slugify),
/* harmony export */   _startsWith: () => (/* binding */ _startsWith),
/* harmony export */   _string: () => (/* binding */ _string),
/* harmony export */   _stringFormat: () => (/* binding */ _stringFormat),
/* harmony export */   _stringbool: () => (/* binding */ _stringbool),
/* harmony export */   _success: () => (/* binding */ _success),
/* harmony export */   _superRefine: () => (/* binding */ _superRefine),
/* harmony export */   _symbol: () => (/* binding */ _symbol),
/* harmony export */   _templateLiteral: () => (/* binding */ _templateLiteral),
/* harmony export */   _toLowerCase: () => (/* binding */ _toLowerCase),
/* harmony export */   _toUpperCase: () => (/* binding */ _toUpperCase),
/* harmony export */   _transform: () => (/* binding */ _transform),
/* harmony export */   _trim: () => (/* binding */ _trim),
/* harmony export */   _tuple: () => (/* binding */ _tuple),
/* harmony export */   _uint32: () => (/* binding */ _uint32),
/* harmony export */   _uint64: () => (/* binding */ _uint64),
/* harmony export */   _ulid: () => (/* binding */ _ulid),
/* harmony export */   _undefined: () => (/* binding */ _undefined),
/* harmony export */   _union: () => (/* binding */ _union),
/* harmony export */   _unknown: () => (/* binding */ _unknown),
/* harmony export */   _uppercase: () => (/* binding */ _uppercase),
/* harmony export */   _url: () => (/* binding */ _url),
/* harmony export */   _uuid: () => (/* binding */ _uuid),
/* harmony export */   _uuidv4: () => (/* binding */ _uuidv4),
/* harmony export */   _uuidv6: () => (/* binding */ _uuidv6),
/* harmony export */   _uuidv7: () => (/* binding */ _uuidv7),
/* harmony export */   _void: () => (/* binding */ _void),
/* harmony export */   _xid: () => (/* binding */ _xid),
/* harmony export */   _xor: () => (/* binding */ _xor),
/* harmony export */   describe: () => (/* binding */ describe),
/* harmony export */   meta: () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var _checks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks.js */ "./node_modules/zod/v4/core/checks.js");
/* harmony import */ var _registries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registries.js */ "./node_modules/zod/v4/core/registries.js");
/* harmony import */ var _schemas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schemas.js */ "./node_modules/zod/v4/core/schemas.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");




// @__NO_SIDE_EFFECTS__
function _string(Class, params) {
    return new Class({
        type: "string",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link _cuid2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
// @__NO_SIDE_EFFECTS__
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class, params) {
    return new Class({
        type: "string",
        format: "mac",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _creditCard(Class, params) {
    return new Class({
        type: "string",
        format: "credit_card",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
const TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6,
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _null(Class, params) {
    return new Class({
        type: "null",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _any(Class) {
    return new Class({
        type: "any",
    });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class) {
    return new Class({
        type: "unknown",
    });
}
// @__NO_SIDE_EFFECTS__
function _never(Class, params) {
    return new Class({
        type: "never",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _void(Class, params) {
    return new Class({
        type: "void",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _date(Class, params) {
    return new Class({
        type: "date",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckLessThan({
        check: "less_than",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        value,
        inclusive: false,
    });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckLessThan({
        check: "less_than",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        value,
        inclusive: true,
    });
}

// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckGreaterThan({
        check: "greater_than",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        value,
        inclusive: false,
    });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckGreaterThan({
        check: "greater_than",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        value,
        inclusive: true,
    });
}

// @__NO_SIDE_EFFECTS__
function _positive(params) {
    return _gt(0, params);
}
// negative
// @__NO_SIDE_EFFECTS__
function _negative(params) {
    return _lt(0, params);
}
// nonpositive
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
    return _lte(0, params);
}
// nonnegative
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
    return _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMultipleOf({
        check: "multiple_of",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        value,
    });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMaxSize({
        check: "max_size",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        maximum,
    });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMinSize({
        check: "min_size",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        minimum,
    });
}
// @__NO_SIDE_EFFECTS__
function _size(size, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckSizeEquals({
        check: "size_equals",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        size,
    });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
    const ch = new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMaxLength({
        check: "max_length",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        maximum,
    });
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMinLength({
        check: "min_length",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        minimum,
    });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckLengthEquals({
        check: "length_equals",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        length,
    });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        pattern,
    });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        includes,
    });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        prefix,
    });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
        suffix,
    });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _properties(shape) {
    return Object.entries(shape).map(([property, schema]) => new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckProperty({ check: "property", property, schema }));
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
    return new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckOverwrite({
        check: "overwrite",
        tx,
    });
}
// normalize
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
}
// trim
// @__NO_SIDE_EFFECTS__
function _trim() {
    return _overwrite((input) => input.trim());
}
// toLowerCase
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
}
// slugify
// @__NO_SIDE_EFFECTS__
function _slugify() {
    return _overwrite((input) => _util_js__WEBPACK_IMPORTED_MODULE_3__.slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
function _xor(Class, options, params) {
    return new Class({
        type: "union",
        options,
        inclusive: false,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options: options,
        discriminator,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right,
    });
}
// export function _tuple(
//   Class: util.SchemaClass<schemas.$ZodTuple>,
//   items: [],
//   params?: string | $ZodTupleParams
// ): schemas.$ZodTuple<[], null>;
// @__NO_SIDE_EFFECTS__
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof _schemas_js__WEBPACK_IMPORTED_MODULE_2__.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _file(Class, params) {
    return new Class({
        type: "file",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn,
    });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : _util_js__WEBPACK_IMPORTED_MODULE_3__.shallowClone(defaultValue);
        },
    });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : _util_js__WEBPACK_IMPORTED_MODULE_3__.constantCatch(catchValue)),
    });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out,
    });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter,
    });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType,
    });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class, fn, _params) {
    const norm = _util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(_params);
    norm.abort ?? (norm.abort = true); // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm,
    });
    return schema;
}
// same as _custom but defaults to abort:false
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(_params),
    });
    return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
    const ch = _check((payload) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(_util_js__WEBPACK_IMPORTED_MODULE_3__.issue(issue, payload.value, ch._zod.def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                if (!("input" in _issue))
                    _issue.input = payload.value;
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort); // abort is always undefined, so this is always true...
                payload.issues.push(_util_js__WEBPACK_IMPORTED_MODULE_3__.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    }, params);
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
    const ch = new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheck({
        check: "custom",
        ..._util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
    const ch = new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheck({ check: "describe" });
    ch._zod.onattach = [
        (inst) => {
            const existing = _registries_js__WEBPACK_IMPORTED_MODULE_1__.globalRegistry.get(inst) ?? {};
            _registries_js__WEBPACK_IMPORTED_MODULE_1__.globalRegistry.add(inst, { ...existing, description });
        },
    ];
    ch._zod.check = () => { }; // no-op check
    return ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
    const ch = new _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheck({ check: "meta" });
    ch._zod.onattach = [
        (inst) => {
            const existing = _registries_js__WEBPACK_IMPORTED_MODULE_1__.globalRegistry.get(inst) ?? {};
            _registries_js__WEBPACK_IMPORTED_MODULE_1__.globalRegistry.add(inst, { ...existing, ...metadata });
        },
    ];
    ch._zod.check = () => { }; // no-op check
    return ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
    const params = _util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(_params);
    let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
    let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
        falsyArray = falsyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    const _Codec = Classes.Codec ?? _schemas_js__WEBPACK_IMPORTED_MODULE_2__.$ZodCodec;
    const _Boolean = Classes.Boolean ?? _schemas_js__WEBPACK_IMPORTED_MODULE_2__.$ZodBoolean;
    const _String = Classes.String ?? _schemas_js__WEBPACK_IMPORTED_MODULE_2__.$ZodString;
    const stringSchema = new _String({ type: "string", error: params.error });
    const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
    const codec = new _Codec({
        type: "pipe",
        in: stringSchema,
        out: booleanSchema,
        transform: ((input, payload) => {
            let data = input;
            if (params.case !== "sensitive")
                data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            }
            else if (falsySet.has(data)) {
                return false;
            }
            else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...truthySet, ...falsySet],
                    input: payload.value,
                    inst: codec,
                    continue: false,
                });
                return {};
            }
        }),
        reverseTransform: ((input, _payload) => {
            if (input === true) {
                return truthyArray[0] || "true";
            }
            else {
                return falsyArray[0] || "false";
            }
        }),
        error: params.error,
    });
    codec._zod.bag.truthy = truthyArray;
    codec._zod.bag.falsy = falsyArray;
    codec._zod.bag.case = params.case ?? "insensitive";
    return codec;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class, format, fnOrRegex, _params = {}) {
    const params = _util_js__WEBPACK_IMPORTED_MODULE_3__.normalizeParams(_params);
    const def = {
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
        ...params,
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}


/***/ },

/***/ "./node_modules/zod/v4/core/checks.js"
/*!********************************************!*\
  !*** ./node_modules/zod/v4/core/checks.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodCheck: () => (/* binding */ $ZodCheck),
/* harmony export */   $ZodCheckBigIntFormat: () => (/* binding */ $ZodCheckBigIntFormat),
/* harmony export */   $ZodCheckEndsWith: () => (/* binding */ $ZodCheckEndsWith),
/* harmony export */   $ZodCheckGreaterThan: () => (/* binding */ $ZodCheckGreaterThan),
/* harmony export */   $ZodCheckIncludes: () => (/* binding */ $ZodCheckIncludes),
/* harmony export */   $ZodCheckLengthEquals: () => (/* binding */ $ZodCheckLengthEquals),
/* harmony export */   $ZodCheckLessThan: () => (/* binding */ $ZodCheckLessThan),
/* harmony export */   $ZodCheckLowerCase: () => (/* binding */ $ZodCheckLowerCase),
/* harmony export */   $ZodCheckMaxLength: () => (/* binding */ $ZodCheckMaxLength),
/* harmony export */   $ZodCheckMaxSize: () => (/* binding */ $ZodCheckMaxSize),
/* harmony export */   $ZodCheckMimeType: () => (/* binding */ $ZodCheckMimeType),
/* harmony export */   $ZodCheckMinLength: () => (/* binding */ $ZodCheckMinLength),
/* harmony export */   $ZodCheckMinSize: () => (/* binding */ $ZodCheckMinSize),
/* harmony export */   $ZodCheckMultipleOf: () => (/* binding */ $ZodCheckMultipleOf),
/* harmony export */   $ZodCheckNumberFormat: () => (/* binding */ $ZodCheckNumberFormat),
/* harmony export */   $ZodCheckOverwrite: () => (/* binding */ $ZodCheckOverwrite),
/* harmony export */   $ZodCheckProperty: () => (/* binding */ $ZodCheckProperty),
/* harmony export */   $ZodCheckRegex: () => (/* binding */ $ZodCheckRegex),
/* harmony export */   $ZodCheckSizeEquals: () => (/* binding */ $ZodCheckSizeEquals),
/* harmony export */   $ZodCheckStartsWith: () => (/* binding */ $ZodCheckStartsWith),
/* harmony export */   $ZodCheckStringFormat: () => (/* binding */ $ZodCheckStringFormat),
/* harmony export */   $ZodCheckUpperCase: () => (/* binding */ $ZodCheckUpperCase)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _regexes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexes.js */ "./node_modules/zod/v4/core/regexes.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");
// import { $ZodType } from "./schemas.js";



const $ZodCheck = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheck", (inst, def) => {
    var _a;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a = inst._zod).onattach ?? (_a.onattach = []);
});
/** Default `when` for size-based checks: run only on non-nullish values with a `size`. */
const _whenHasSize = (payload) => {
    const val = payload.value;
    return !_util_js__WEBPACK_IMPORTED_MODULE_2__.nullish(val) && val.size !== undefined;
};
/** Default `when` for length-based checks: run only on non-nullish values with a `length`. */
const _whenHasLength = (payload) => {
    const val = payload.value;
    return !_util_js__WEBPACK_IMPORTED_MODULE_2__.nullish(val) && val.length !== undefined;
};
const numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date",
};
const $ZodCheckLessThan = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckLessThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (def.value < curr) {
            if (def.inclusive)
                bag.maximum = def.value;
            else
                bag.exclusiveMaximum = def.value;
        }
    });
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin: numericOriginMap[typeof payload.value] ?? origin,
            code: "too_big",
            maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckGreaterThan = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckGreaterThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
            if (def.inclusive)
                bag.minimum = def.value;
            else
                bag.exclusiveMinimum = def.value;
        }
    });
    inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin: numericOriginMap[typeof payload.value] ?? origin,
            code: "too_small",
            minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMultipleOf = 
/*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst) => {
        var _a;
        (_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
    });
    inst._zod.check = (payload) => {
        if (typeof payload.value !== typeof def.value)
            throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint"
            ? // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
                def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
            : _util_js__WEBPACK_IMPORTED_MODULE_2__.floatSafeRemainder(payload.value, def.value) === 0;
        if (isMultiple)
            return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckNumberFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckNumberFormat", (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = _util_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt)
            bag.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_1__.integer;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                // invalid_format issue
                // payload.issues.push({
                //   expected: def.format,
                //   format: def.format,
                //   code: "invalid_format",
                //   input,
                //   inst,
                // });
                // invalid_type issue
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    continue: false,
                    input,
                    inst,
                });
                return;
                // not_multiple_of issue
                // payload.issues.push({
                //   code: "not_multiple_of",
                //   origin: "number",
                //   input,
                //   inst,
                //   divisor: 1,
                // });
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    // too_big
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        inclusive: true,
                        continue: !def.abort,
                    });
                }
                else {
                    // too_small
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        inclusive: true,
                        continue: !def.abort,
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodCheckBigIntFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckBigIntFormat", (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks
    const [minimum, maximum] = _util_js__WEBPACK_IMPORTED_MODULE_2__.BIGINT_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        if (input < minimum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_small",
                minimum: minimum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_big",
                maximum,
                inclusive: true,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodCheckMaxSize = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMaxSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY);
        if (def.maximum < curr)
            inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum)
            return;
        payload.issues.push({
            origin: _util_js__WEBPACK_IMPORTED_MODULE_2__.getSizableOrigin(input),
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMinSize = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMinSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY);
        if (def.minimum > curr)
            inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum)
            return;
        payload.issues.push({
            origin: _util_js__WEBPACK_IMPORTED_MODULE_2__.getSizableOrigin(input),
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckSizeEquals = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckSizeEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasSize);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size === def.size)
            return;
        const tooBig = size > def.size;
        payload.issues.push({
            origin: _util_js__WEBPACK_IMPORTED_MODULE_2__.getSizableOrigin(input),
            ...(tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMaxLength = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY);
        if (def.maximum < curr)
            inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // Strings are measured in Unicode code points, not UTF-16 units. A code point is at most two units, so a string that already fits in units fits in code points; only an overflow has to be counted.
        const length = typeof input === "string" && units > def.maximum ? _util_js__WEBPACK_IMPORTED_MODULE_2__.codePointLength(input) : units;
        if (length <= def.maximum)
            return;
        const origin = _util_js__WEBPACK_IMPORTED_MODULE_2__.getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckMinLength = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMinLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.onattach.push((inst) => {
        const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY);
        if (def.minimum > curr)
            inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // A code point is one or two UTF-16 units, so fewer units than the floor can never reach it and twice the floor always clears it. Only in between is the exact count in doubt.
        const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2
            ? _util_js__WEBPACK_IMPORTED_MODULE_2__.codePointLength(input)
            : units;
        if (length >= def.minimum)
            return;
        const origin = _util_js__WEBPACK_IMPORTED_MODULE_2__.getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckLengthEquals = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload) => {
        const input = payload.value;
        const units = input.length;
        // A code point is one or two UTF-16 units, so outside `[length, length * 2]` units the target is missed either way — and missed in the same direction in both measures.
        const length = typeof input === "string" && units >= def.length && units <= def.length * 2
            ? _util_js__WEBPACK_IMPORTED_MODULE_2__.codePointLength(input)
            : units;
        if (length === def.length)
            return;
        const origin = _util_js__WEBPACK_IMPORTED_MODULE_2__.getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...(tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length }),
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckStringFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
            bag.patterns ?? (bag.patterns = new Set());
            bag.patterns.add(def.pattern);
        }
    });
    if (def.pattern)
        (_a = inst._zod).check ?? (_a.check = (payload) => {
            def.pattern.lastIndex = 0;
            if (def.pattern.test(payload.value))
                return;
            payload.issues.push({
                origin: "string",
                code: "invalid_format",
                format: def.format,
                input: payload.value,
                ...(def.pattern ? { pattern: def.pattern.toString() } : {}),
                inst,
                continue: !def.abort,
            });
        });
    else
        (_b = inst._zod).check ?? (_b.check = () => { });
});
const $ZodCheckRegex = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckLowerCase = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_1__.lowercase);
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_1__.uppercase);
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = _util_js__WEBPACK_IMPORTED_MODULE_2__.escapeRegex(def.includes);
    // `String.prototype.includes(sub, position)` matches `sub` at `position`
    // OR LATER, so the pattern must allow at least `position` leading chars
    // (`{N,}`), not exactly `position` chars (`{N}`).
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.includes(def.includes, def.position))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckStartsWith = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${_util_js__WEBPACK_IMPORTED_MODULE_2__.escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.startsWith(def.prefix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckEndsWith = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${_util_js__WEBPACK_IMPORTED_MODULE_2__.escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst) => {
        const bag = inst._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
        if (payload.value.endsWith(def.suffix))
            return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
        payload.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_2__.prefixIssues(property, result.issues));
    }
}
const $ZodCheckProperty = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckProperty", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        const result = def.schema._zod.run({
            value: payload.value[def.property],
            issues: [],
        }, {});
        if (result instanceof Promise) {
            return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
    };
});
const $ZodCheckMimeType = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckMimeType", (inst, def) => {
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst) => {
        inst._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload) => {
        if (mimeSet.has(payload.value.type))
            return;
        payload.issues.push({
            code: "invalid_value",
            values: def.mime,
            input: payload.value.type,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCheckOverwrite = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
        payload.value = def.tx(payload.value);
    };
});


/***/ },

/***/ "./node_modules/zod/v4/core/core.js"
/*!******************************************!*\
  !*** ./node_modules/zod/v4/core/core.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodAsyncError: () => (/* binding */ $ZodAsyncError),
/* harmony export */   $ZodEncodeError: () => (/* binding */ $ZodEncodeError),
/* harmony export */   $brand: () => (/* binding */ $brand),
/* harmony export */   $constructor: () => (/* binding */ $constructor),
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   globalConfig: () => (/* binding */ globalConfig)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");
var _a;

/** A special constant with type `never` */
const NEVER = /*@__PURE__*/ Object.freeze({
    status: "aborted",
});
/* Shared descriptor for installing `_zod`; defineProperty reads it
 * synchronously, so reusing one object avoids a per-instance allocation. */
const _zodDesc = { value: undefined, enumerable: false };
// null where suppressing the capture would be unrecoverable: `parse()` puts the frames back with `captureStackTrace`, so without it the throw would lose its stack. also latched to null once `stackTraceLimit` proves unassignable, which a realm can do at any point by hardening Error
let _E = "captureStackTrace" in Error ? Error : null;
// v8 captures a stack trace inside the Error constructor, which dominates a failed parse; costs only the frames, and parse() restores those. the constructor must RUN: Object.create is cheaper and passes instanceof, but Error.isError and util.types.isNativeError check an internal slot
function newError(Definition) {
    const E = _E;
    if (E) {
        const saved = E.stackTraceLimit;
        if (typeof saved === "number") {
            try {
                E.stackTraceLimit = 0;
            }
            catch {
                _E = null;
                return new Definition();
            }
            try {
                return new Definition();
            }
            finally {
                E.stackTraceLimit = saved;
            }
        }
    }
    return new Definition();
}
function $constructor(name, initializer, 
/** This trait's members, installed once on every prototype that composes it. They cannot be declared in the initializer above: that runs per instance, and the prototype is shared. */
proto, params) {
    // Prototype for this constructor's `_zod` internals. Lazily-derived fields (`values`, `pattern`, `optin`, …) install here once rather than as an accessor on every instance.
    const zodProto = {};
    // Assigning the fields in the constructor body is what gives instances in-object slots; building the object literally and reparenting it costs a second allocation and a generic property copy.
    function Internals(def) {
        this.def = def;
        this.constr = _;
        this.traits = new Set();
    }
    Internals.prototype = zodProto;
    const protoMembers = proto;
    // One trait's members land on every prototype whose chain composes it, so the answer is per prototype rather than per trait.
    const initialized = protoMembers && new WeakSet();
    function init(inst, def) {
        if (!inst._zod) {
            _zodDesc.value = new Internals(def);
            try {
                Object.defineProperty(inst, "_zod", _zodDesc);
            }
            finally {
                // Cleared even on throw, so the shared descriptor never leaks one instance's internals into the next.
                _zodDesc.value = undefined;
            }
        }
        if (inst._zod.traits.has(name)) {
            return;
        }
        inst._zod.traits.add(name);
        initializer(inst, def);
        if (initialized) {
            // `super(def)` from a user subclass gives `this` a prototype the subclass owns, and installing there would overwrite whatever the subclass declared. `constr` built the instance, so its prototype is the one below the subclass's that should carry the members. A receiver whose chain never reaches that prototype installs on its own, which for a plain object handed straight to `init` means `Object.prototype` — unchanged from before.
            const own = Object.getPrototypeOf(inst);
            const ctorProto = inst._zod.constr.prototype;
            let up = own;
            while (up && up !== ctorProto)
                up = Object.getPrototypeOf(up);
            const target = up ?? own;
            if (!initialized.has(target)) {
                initialized.add(target);
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.members)(target, protoMembers);
            }
        }
        // support prototype modifications; for-in avoids the array allocation of Object.keys on the (usually empty) prototype
        const proto = _.prototype;
        for (const k in proto) {
            if (!Object.prototype.hasOwnProperty.call(proto, k))
                continue;
            if (!(k in inst)) {
                inst[k] = proto[k].bind(inst);
            }
        }
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
        const inst = params?.Parent ? newError(Definition) : this;
        init(inst, def);
        const deferred = inst._zod.deferred;
        if (deferred) {
            for (const fn of deferred) {
                fn();
            }
            // Released: initializers run once, and the list would otherwise be retained for the schema's lifetime.
            inst._zod.deferred = undefined;
        }
        // Global post-processor hook. Internal: installed by `import "zod/compile"` to enable AOT compilation for every constructed schema. Runs last, once the instance is fully built, because it hands the instance to compile(). The post-processor is expected to be reentrancy-guarded by its own implementation.
        const pp = globalThis.__zod_globalConfig?.postProcessor;
        if (pp)
            pp(inst);
        return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst) => {
            if (params?.Parent && inst instanceof params.Parent)
                return true;
            return inst?._zod?.traits?.has(name);
        },
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
}
//////////////////////////////   UTILITIES   ///////////////////////////////////////
const $brand = /*@__PURE__*/ Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
class $ZodEncodeError extends Error {
    constructor(name) {
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
    }
}
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
    if (newConfig)
        Object.assign(globalConfig, newConfig);
    return globalConfig;
}


/***/ },

/***/ "./node_modules/zod/v4/core/doc.js"
/*!*****************************************!*\
  !*** ./node_modules/zod/v4/core/doc.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Doc: () => (/* binding */ Doc)
/* harmony export */ });
class Doc {
    constructor(args = [], closed = {}) {
        this.content = [];
        this.indent = 0;
        this.args = args;
        this.closed = closed;
    }
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, { execution: "sync" });
            arg(this, { execution: "async" });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x) => x);
        const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
        const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
        for (const line of dedented) {
            this.content.push(line);
        }
    }
    compile() {
        const F = Function;
        const content = this?.content ?? [``];
        const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${content.join("\n")}\n};`);
        return factory(...Object.values(this.closed));
    }
}


/***/ },

/***/ "./node_modules/zod/v4/core/errors.js"
/*!********************************************!*\
  !*** ./node_modules/zod/v4/core/errors.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodError: () => (/* binding */ $ZodError),
/* harmony export */   $ZodRealError: () => (/* binding */ $ZodRealError),
/* harmony export */   flattenError: () => (/* binding */ flattenError),
/* harmony export */   formatError: () => (/* binding */ formatError),
/* harmony export */   prettifyError: () => (/* binding */ prettifyError),
/* harmony export */   toDotPath: () => (/* binding */ toDotPath),
/* harmony export */   treeifyError: () => (/* binding */ treeifyError)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");


/* Computing the message eagerly is expensive (pretty-printed JSON of all
 * issues), so defer it until first read. The accessor functions and
 * descriptors are shared across instances to keep error construction
 * cheap; the computed message is cached on the internals object. The
 * setter preserves plain assignment semantics for consumers that
 * overwrite `message`. */
function _getMessage() {
    const internals = this._zod;
    internals.message ?? (internals.message = JSON.stringify(internals.def, _util_js__WEBPACK_IMPORTED_MODULE_1__.jsonStringifyReplacer, 2));
    return internals.message;
}
function _setMessage(value) {
    this._zod.message = value;
}
const _messageDesc = {
    get: _getMessage,
    set: _setMessage,
    enumerable: true,
    configurable: true,
};
const _zodDesc = { value: undefined, enumerable: false };
const _issuesDesc = { value: undefined, enumerable: false };
/* Prototypes that already carry the lazy `toString`. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */
const _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
const initializer = (inst, def) => {
    inst.name = "$ZodError";
    _zodDesc.value = inst._zod;
    Object.defineProperty(inst, "_zod", _zodDesc);
    _issuesDesc.value = def;
    Object.defineProperty(inst, "issues", _issuesDesc);
    // Clear the shared slots; a retained `value` pins the last error's issues.
    _zodDesc.value = undefined;
    _issuesDesc.value = undefined;
    Object.defineProperty(inst, "message", _messageDesc);
    /* `toString` lives as a non-enumerable lazy getter on the shared
     * prototype; on first access it caches a per-instance closure so
     * detached usage still works. */
    const proto = Object.getPrototypeOf(inst);
    if (!_installedToString.has(proto)) {
        _installedToString.add(proto);
        Object.defineProperty(proto, "toString", {
            configurable: true,
            enumerable: false,
            get() {
                const value = () => this.message;
                Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
                return value;
            },
            set(value) {
                Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
            },
        });
    }
};
const $ZodError = (0,_core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor)("$ZodError", initializer);
const $ZodRealError = (0,_core_js__WEBPACK_IMPORTED_MODULE_0__.$constructor)("$ZodError", initializer, undefined, {
    Parent: Error,
});
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
 * ("toString", "constructor") would otherwise read through to the prototype, and assigning
 * "__proto__" would hit the setter instead of creating a key. */
function node(obj, key, make) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === "__proto__") {
            Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
        }
        else {
            obj[key] = make();
        }
    }
    return obj[key];
}
function flattenError(error, mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues) {
        if (sub.path.length > 0) {
            node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
        }
        else {
            formErrors.push(mapper(sub));
        }
    }
    return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue) => issue.message) {
    const fieldErrors = { _errors: [] };
    const processError = (error, path = []) => {
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else {
                const fullpath = [...path, ...issue.path];
                if (fullpath.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < fullpath.length) {
                        const el = fullpath[i];
                        const terminal = i === fullpath.length - 1;
                        // `_errors` is reserved by this legacy format, so merge a matching path segment into the current node instead of treating its array as a child.
                        if (el === "_errors") {
                            if (terminal)
                                curr._errors.push(mapper(issue));
                            i++;
                            continue;
                        }
                        // A path element may collide with an inherited property name such as
                        // "__proto__" or "constructor". Truthiness checks read the prototype
                        // (so no node is created, then ._errors.push throws), and bracket
                        // assignment of "__proto__" hits the setter instead of creating an
                        // own key. Guard the read with hasOwnProperty and create the node
                        // with defineProperty so any path element becomes a real own key.
                        if (!Object.prototype.hasOwnProperty.call(curr, el)) {
                            Object.defineProperty(curr, el, {
                                value: { _errors: [] },
                                enumerable: true,
                                writable: true,
                                configurable: true,
                            });
                        }
                        const node = curr[el];
                        if (terminal) {
                            node._errors.push(mapper(issue));
                        }
                        curr = node;
                        i++;
                    }
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, mapper = (issue) => issue.message) {
    const result = { errors: [] };
    const processError = (error, path = []) => {
        var _a;
        for (const issue of error.issues) {
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
            }
            else if (issue.code === "invalid_key") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else if (issue.code === "invalid_element") {
                processError({ issues: issue.issues }, [...path, ...issue.path]);
            }
            else {
                const fullpath = [...path, ...issue.path];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while (i < fullpath.length) {
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        curr.properties ?? (curr.properties = {});
                        // el may collide with an inherited property name ("__proto__",
                        // "constructor", ...); ??= reads the prototype so the node is never
                        // created and curr.errors.push throws. Guard with hasOwnProperty and
                        // create the node with defineProperty so "__proto__" becomes a real
                        // own key rather than invoking the prototype setter.
                        if (!Object.prototype.hasOwnProperty.call(curr.properties, el)) {
                            Object.defineProperty(curr.properties, el, {
                                value: { errors: [] },
                                enumerable: true,
                                writable: true,
                                configurable: true,
                            });
                        }
                        curr = curr.properties[el];
                    }
                    else {
                        curr.items ?? (curr.items = []);
                        (_a = curr.items)[el] ?? (_a[el] = { errors: [] });
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
/** Format a ZodError as a human-readable string in the following form.
 *
 * From
 *
 * ```ts
 * ZodError {
 *   issues: [
 *     {
 *       expected: 'string',
 *       code: 'invalid_type',
 *       path: [ 'username' ],
 *       message: 'Invalid input: expected string'
 *     },
 *     {
 *       expected: 'number',
 *       code: 'invalid_type',
 *       path: [ 'favoriteNumbers', 1 ],
 *       message: 'Invalid input: expected number'
 *     }
 *   ];
 * }
 * ```
 *
 * to
 *
 * ```
 * username
 *   ✖ Expected number, received string at "username
 * favoriteNumbers[0]
 *   ✖ Invalid input: expected number
 * ```
 */
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg) => (typeof seg === "object" ? seg.key : seg));
    for (const seg of path) {
        if (typeof seg === "number")
            segs.push(`[${seg}]`);
        else if (typeof seg === "symbol")
            segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg))
            segs.push(`[${JSON.stringify(seg)}]`);
        else {
            if (segs.length)
                segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
    // Process each issue
    for (const issue of issues) {
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length)
            lines.push(`  → at ${toDotPath(issue.path)}`);
    }
    // Convert Map to formatted string
    return lines.join("\n");
}


/***/ },

/***/ "./node_modules/zod/v4/core/json-schema-processors.js"
/*!************************************************************!*\
  !*** ./node_modules/zod/v4/core/json-schema-processors.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProcessors: () => (/* binding */ allProcessors),
/* harmony export */   anyProcessor: () => (/* binding */ anyProcessor),
/* harmony export */   arrayProcessor: () => (/* binding */ arrayProcessor),
/* harmony export */   bigintProcessor: () => (/* binding */ bigintProcessor),
/* harmony export */   booleanProcessor: () => (/* binding */ booleanProcessor),
/* harmony export */   catchProcessor: () => (/* binding */ catchProcessor),
/* harmony export */   customProcessor: () => (/* binding */ customProcessor),
/* harmony export */   dateProcessor: () => (/* binding */ dateProcessor),
/* harmony export */   defaultProcessor: () => (/* binding */ defaultProcessor),
/* harmony export */   enumProcessor: () => (/* binding */ enumProcessor),
/* harmony export */   fileProcessor: () => (/* binding */ fileProcessor),
/* harmony export */   functionProcessor: () => (/* binding */ functionProcessor),
/* harmony export */   intersectionProcessor: () => (/* binding */ intersectionProcessor),
/* harmony export */   lazyProcessor: () => (/* binding */ lazyProcessor),
/* harmony export */   literalProcessor: () => (/* binding */ literalProcessor),
/* harmony export */   mapProcessor: () => (/* binding */ mapProcessor),
/* harmony export */   nanProcessor: () => (/* binding */ nanProcessor),
/* harmony export */   neverProcessor: () => (/* binding */ neverProcessor),
/* harmony export */   nonoptionalProcessor: () => (/* binding */ nonoptionalProcessor),
/* harmony export */   nullProcessor: () => (/* binding */ nullProcessor),
/* harmony export */   nullableProcessor: () => (/* binding */ nullableProcessor),
/* harmony export */   numberProcessor: () => (/* binding */ numberProcessor),
/* harmony export */   objectProcessor: () => (/* binding */ objectProcessor),
/* harmony export */   optionalProcessor: () => (/* binding */ optionalProcessor),
/* harmony export */   pipeProcessor: () => (/* binding */ pipeProcessor),
/* harmony export */   prefaultProcessor: () => (/* binding */ prefaultProcessor),
/* harmony export */   promiseProcessor: () => (/* binding */ promiseProcessor),
/* harmony export */   readonlyProcessor: () => (/* binding */ readonlyProcessor),
/* harmony export */   recordProcessor: () => (/* binding */ recordProcessor),
/* harmony export */   setProcessor: () => (/* binding */ setProcessor),
/* harmony export */   stringProcessor: () => (/* binding */ stringProcessor),
/* harmony export */   successProcessor: () => (/* binding */ successProcessor),
/* harmony export */   symbolProcessor: () => (/* binding */ symbolProcessor),
/* harmony export */   templateLiteralProcessor: () => (/* binding */ templateLiteralProcessor),
/* harmony export */   toJSONSchema: () => (/* binding */ toJSONSchema),
/* harmony export */   transformProcessor: () => (/* binding */ transformProcessor),
/* harmony export */   tupleProcessor: () => (/* binding */ tupleProcessor),
/* harmony export */   undefinedProcessor: () => (/* binding */ undefinedProcessor),
/* harmony export */   unionProcessor: () => (/* binding */ unionProcessor),
/* harmony export */   unknownProcessor: () => (/* binding */ unknownProcessor),
/* harmony export */   voidProcessor: () => (/* binding */ voidProcessor)
/* harmony export */ });
/* harmony import */ var _regexes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regexes.js */ "./node_modules/zod/v4/core/regexes.js");
/* harmony import */ var _to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-json-schema.js */ "./node_modules/zod/v4/core/to-json-schema.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");



const formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "", // do not set
};
// ==================== SIMPLE TYPE PROCESSORS ====================
const stringProcessor = (schema, ctx, _json, _params) => {
    const json = _json;
    json.type = "string";
    const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = schema._zod
        .bag;
    if (typeof minimum === "number")
        json.minLength = minimum;
    if (typeof maximum === "number")
        json.maxLength = maximum;
    // custom pattern overrides format
    if (format) {
        json.format = formatMap[format] ?? format;
        if (json.format === "")
            delete json.format; // empty format is not valid
        // `z.iso.time()` is never full-time, and `laxFormat` carries the datetime shapes that also accept what their keyword forbids
        if (format === "time" || laxFormat) {
            delete json.format;
        }
    }
    if (contentEncoding)
        json.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
        const patternList = [...patterns];
        if (patternList.length === 1)
            json.pattern = patternList[0].source;
        else if (patternList.length > 1) {
            json.allOf = [
                ...patternList.map((regex) => ({
                    ...(ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0"
                        ? { type: "string" }
                        : {}),
                    pattern: regex.source,
                })),
            ];
        }
    }
};
const numberProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
    if (typeof format === "string" && format.includes("int"))
        json.type = "integer";
    else
        json.type = "number";
    // when both minimum and exclusiveMinimum exist, pick the more restrictive one
    const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
    const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
    const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
    if (exMin) {
        if (legacy) {
            json.minimum = exclusiveMinimum;
            json.exclusiveMinimum = true;
        }
        else {
            json.exclusiveMinimum = exclusiveMinimum;
        }
    }
    else if (typeof minimum === "number") {
        json.minimum = minimum;
    }
    if (exMax) {
        if (legacy) {
            json.maximum = exclusiveMaximum;
            json.exclusiveMaximum = true;
        }
        else {
            json.exclusiveMaximum = exclusiveMaximum;
        }
    }
    else if (typeof maximum === "number") {
        json.maximum = maximum;
    }
    if (typeof multipleOf === "number") {
        // JSON Schema requires a divisor strictly greater than zero, and a non-finite one does not survive JSON at all. A negative divisor accepts exactly what its absolute value accepts, so it still maps; zero, NaN and Infinity have no keyword form.
        if (Number.isFinite(multipleOf) && multipleOf !== 0)
            json.multipleOf = Math.abs(multipleOf);
        else
            (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, `A multipleOf divisor of ${multipleOf} cannot be represented in JSON Schema`);
    }
};
const booleanProcessor = (_schema, _ctx, json, _params) => {
    json.type = "boolean";
};
const bigintProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
const symbolProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
};
const nullProcessor = (_schema, ctx, json, _params) => {
    if (ctx.target === "openapi-3.0") {
        json.type = "string";
        json.nullable = true;
        json.enum = [null];
    }
    else {
        json.type = "null";
    }
};
const undefinedProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
};
const voidProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
};
const neverProcessor = (_schema, _ctx, json, _params) => {
    json.not = {};
};
const anyProcessor = (_schema, _ctx, _json, _params) => {
    // empty schema accepts anything
};
const unknownProcessor = (_schema, _ctx, _json, _params) => {
    // empty schema accepts anything
};
const dateProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
const enumProcessor = (schema, _ctx, json, _params) => {
    const def = schema._zod.def;
    const values = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getEnumValues)(def.entries);
    // an empty enum accepts nothing, same as z.never()
    if (values.length === 0) {
        json.not = {};
        return;
    }
    // Number enums can have both string and number values
    if (values.every((v) => typeof v === "number"))
        json.type = "number";
    if (values.every((v) => typeof v === "string"))
        json.type = "string";
    json.enum = values;
};
const literalProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    // a literal with no values accepts nothing, same as z.never()
    if (def.values.length === 0) {
        json.not = {};
        return;
    }
    const vals = [];
    for (const val of def.values) {
        if (val === undefined) {
            // a custom schema replaces the whole literal, so there is nothing left to accumulate
            if ((0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
                return;
            // otherwise do not add to vals
        }
        else if (typeof val === "bigint") {
            if ((0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
                return;
            vals.push(Number(val));
        }
        else {
            vals.push(val);
        }
    }
    if (vals.length === 0) {
        // do nothing (an undefined literal was stripped)
    }
    else if (vals.length === 1) {
        const val = vals[0];
        json.type = val === null ? "null" : typeof val;
        if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
            json.enum = [val];
        }
        else {
            json.const = val;
        }
    }
    else {
        if (vals.every((v) => typeof v === "number"))
            json.type = "number";
        if (vals.every((v) => typeof v === "string"))
            json.type = "string";
        if (vals.every((v) => typeof v === "boolean"))
            json.type = "boolean";
        if (vals.every((v) => v === null))
            json.type = "null";
        json.enum = vals;
    }
};
const nanProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
};
const templateLiteralProcessor = (schema, _ctx, json, _params) => {
    const _json = json;
    const pattern = schema._zod.pattern;
    if (!pattern)
        throw new Error("Pattern not found in template literal");
    _json.type = "string";
    _json.pattern = pattern.source;
};
const fileProcessor = (schema, _ctx, json, _params) => {
    const _json = json;
    const file = {
        type: "string",
        format: "binary",
        contentEncoding: "binary",
    };
    const { minimum, maximum, mime } = schema._zod.bag;
    if (minimum !== undefined)
        file.minLength = minimum;
    if (maximum !== undefined)
        file.maxLength = maximum;
    if (mime) {
        if (mime.length === 1) {
            file.contentMediaType = mime[0];
            Object.assign(_json, file);
        }
        else {
            Object.assign(_json, file); // shared props at root
            _json.anyOf = mime.map((m) => ({ contentMediaType: m })); // only contentMediaType differs
        }
    }
    else {
        Object.assign(_json, file);
    }
};
const successProcessor = (_schema, _ctx, json, _params) => {
    json.type = "boolean";
};
const customProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const functionProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const mapProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
};
const setProcessor = (schema, ctx, json, params) => {
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
};
// ==================== COMPOSITE TYPE PROCESSORS ====================
const arrayProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number")
        json.minItems = minimum;
    if (typeof maximum === "number")
        json.maxItems = maximum;
    json.type = "array";
    json.items = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.element, ctx, {
        ...params,
        path: [...params.path, "items"],
    });
};
// Transform and catch set `optin = "optional"` at runtime so the parser lets them observe an
// absent key, but their declared input type stays required. An input JSON Schema describes the
// declared type, so resolve past them to the schema that actually carries the optionality.
// Used by both `objectProcessor` (for `required`) and `tupleProcessor` (for `minItems`); see
// wiki/optionality.md, "The JSON Schema emitter reads the *static* value".
function inputOptin(schema) {
    const def = schema._zod.def;
    if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
        return inputOptin(def.out);
    }
    if (def.type === "catch") {
        return inputOptin(def.innerType);
    }
    return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    const shape = def.shape;
    // dropping it while still emitting `additionalProperties: false` would emit a schema that rejects data this one requires
    const symbolKeys = Object.getOwnPropertySymbols(shape);
    if (symbolKeys.length &&
        (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
        return;
    }
    json.type = "object";
    json.properties = {};
    for (const key in shape) {
        // assignProp so a __proto__ key becomes an own property instead of hitting the inherited setter on the plain {} we build into
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.assignProp)(json.properties, key, (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(shape[key], ctx, {
            ...params,
            path: [...params.path, "properties", key],
        }));
    }
    // required keys
    const allKeys = new Set(Object.keys(shape));
    const requiredKeys = new Set([...allKeys].filter((key) => {
        const field = def.shape[key];
        if (ctx.io === "input") {
            return inputOptin(field) === undefined;
        }
        else {
            return field._zod.optout === undefined;
        }
    }));
    if (requiredKeys.size > 0) {
        json.required = Array.from(requiredKeys);
    }
    // catchall
    if (def.catchall?._zod.def.type === "never") {
        // strict
        json.additionalProperties = false;
    }
    else if (!def.catchall) {
        // regular
        if (ctx.io === "output")
            json.additionalProperties = false;
    }
    else if (def.catchall) {
        json.additionalProperties = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.catchall, ctx, {
            ...params,
            path: [...params.path, "additionalProperties"],
        });
    }
};
const unionProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    // Exclusive unions (inclusive === false) use oneOf (exactly one match) instead of anyOf (one or more matches). This includes both z.xor() and discriminated unions
    const isExclusive = def.inclusive === false;
    const options = def.options.map((x, i) => (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(x, ctx, {
        ...params,
        path: [...params.path, isExclusive ? "oneOf" : "anyOf", i],
    }));
    if (isExclusive) {
        json.oneOf = options;
    }
    else {
        json.anyOf = options;
    }
};
const intersectionProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    const a = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.left, ctx, {
        ...params,
        path: [...params.path, "allOf", 0],
    });
    const b = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.right, ctx, {
        ...params,
        path: [...params.path, "allOf", 1],
    });
    const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
    const allOf = [
        ...(isSimpleIntersection(a) ? a.allOf : [a]),
        ...(isSimpleIntersection(b) ? b.allOf : [b]),
    ];
    json.allOf = allOf;
    // Recorded innermost first, so a nested intersection has already folded by the time this one is considered. The array is the handle rather than the schema, because a wrapper that inherits this schema shares the same array; `finalize` folds every object holding it. See `foldIntersection`.
    ctx.intersections.push(allOf);
};
const tupleProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    json.type = "array";
    const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
    const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
    const prefixItems = def.items.map((x, i) => (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(x, ctx, {
        ...params,
        path: [...params.path, prefixPath, i],
    }));
    const rest = def.rest
        ? (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.rest, ctx, {
            ...params,
            path: [...params.path, restPath, ...(ctx.target === "openapi-3.0" ? [def.items.length] : [])],
        })
        : null;
    let minItems = def.items.length;
    while (minItems > 0) {
        const item = def.items[minItems - 1];
        const optional = ctx.io === "input" ? inputOptin(item) !== undefined : item._zod.optout === "optional";
        if (!optional)
            break;
        minItems--;
    }
    const maxItems = def.items.length;
    const isClosed = !def.rest;
    if (ctx.target === "draft-2020-12") {
        json.prefixItems = prefixItems;
        if (isClosed) {
            json.items = false;
        }
        else if (rest) {
            json.items = rest;
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    else if (ctx.target === "openapi-3.0") {
        json.items = {
            anyOf: prefixItems,
        };
        if (rest) {
            json.items.anyOf.push(rest);
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    else {
        json.items = prefixItems;
        if (isClosed) {
            json.additionalItems = false;
        }
        else if (rest) {
            json.additionalItems = rest;
        }
        if (minItems > 0)
            json.minItems = minItems;
        if (isClosed)
            json.maxItems = maxItems;
    }
    // explicit user-defined length checks take precedence
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number")
        json.minItems = minimum;
    if (typeof maximum === "number")
        json.maxItems = maximum;
};
/** JSON object keys are always strings, so a numeric record key schema is re-expressed over the
 * numeric-string form the record parser matches. Deferred to `finalize`, after the flatten: a key
 * behind a wrapper only carries its own `type` before then, and a union key only has its branches.
 *
 * A numeric bound cannot apply to a property name, so `minimum` and its siblings are dropped rather
 * than carried over: keeping them beside `type: "string"` reproduces the match-nothing schema this
 * exists to fix. A key that carries one therefore emits wider than the record parses — `z.record(z.number().min(5), V)`
 * accepts `"3"` — which is the deliberate trade, since throwing on it would reject an ordinary schema
 * outright. */
function stringifyKeyNames(bySchema, json, visited) {
    // an extracted key that rewrites cannot go on sharing its definition — the string form a key position needs is not the number form every other reference wants — so it inlines. One that does not rewrite keeps the `$ref`.
    if (json.$ref) {
        // a recursive key holds its own reference inside its definition, so a node already on the path is left alone rather than resolved again
        if (visited.has(json))
            return json;
        visited.add(json);
        const def = bySchema.get(json)?.def;
        if (!def)
            return json;
        const inlined = stringifyKeyNames(bySchema, def, visited);
        return inlined === def ? json : inlined;
    }
    for (const keyword of ["anyOf", "oneOf"]) {
        const branches = json[keyword];
        if (!Array.isArray(branches))
            continue;
        const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
        // rebuilding regardless would detach a key that had nothing to re-express, dropping its `$ref` and leaking the internal `id`
        if (mapped.some((branch, i) => branch !== branches[i]))
            json = { ...json, [keyword]: mapped };
    }
    // a member that already admits a string leaves the key unconstrained, so the node's own type re-expresses only when every member is numeric
    const types = Array.isArray(json.type) ? json.type : [json.type];
    const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
    // a heterogeneous key carries no type at all, so its numeric members are caught here instead
    const values = json.enum ?? (json.const !== undefined ? [json.const] : undefined);
    if (!numericType && !values?.some((v) => typeof v === "number"))
        return json;
    const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
    if (rest.enum)
        rest.enum = rest.enum.map((v) => (typeof v === "number" ? String(v) : v));
    else if (typeof rest.const === "number")
        rest.const = String(rest.const);
    // a heterogeneous key keeps its absent type: the stringified members already say what a key may be
    if (!numericType)
        return rest;
    rest.type = "string";
    if (!values)
        rest.pattern = (types.includes("number") ? _regexes_js__WEBPACK_IMPORTED_MODULE_0__.number : _regexes_js__WEBPACK_IMPORTED_MODULE_0__.integer).source;
    return rest;
}
/** Every record of one conversion, so the carriers are found in a single pass rather than once per record. */
const pendingRecords = new WeakMap();
function rewriteKeyNames(ctx) {
    // an extracted key is resolved by the object `extractToDef` left in its place, so the map is built once rather than searched per reference. `_zod.toJSONSchema` can hand the same object to two schemas, so the first entry carrying a body wins, as a search would have found it.
    const bySchema = new Map();
    for (const entry of ctx.seen.values()) {
        if (entry.def && !bySchema.has(entry.schema))
            bySchema.set(entry.schema, entry);
    }
    const rewrites = new Map();
    for (const record of pendingRecords.get(ctx) ?? []) {
        const seen = ctx.seen.get(record);
        const names = (seen?.def ?? seen?.schema)?.propertyNames;
        if (!names || names === true || rewrites.has(names))
            continue;
        const rewritten = stringifyKeyNames(bySchema, names, new Set());
        if (rewritten !== names)
            rewrites.set(names, rewritten);
    }
    if (!rewrites.size)
        return;
    // the flatten has already copied each record's own properties onto every wrapper by reference, and an extracted body is another such copy, so every carrier holding a rewritten key is updated together
    for (const entry of ctx.seen.values()) {
        for (const carrier of [entry.schema, entry.def]) {
            const rewritten = carrier && rewrites.get(carrier.propertyNames);
            if (rewritten)
                carrier.propertyNames = rewritten;
        }
    }
}
const recordProcessor = (schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    json.type = "object";
    // For looseRecord with regex patterns, use patternProperties. This correctly represents "only validate keys matching the pattern" semantics and composes well with allOf (intersections)
    const keyType = def.keyType;
    const keyBag = keyType._zod.bag;
    const patterns = keyBag?.patterns;
    if (def.mode === "loose" && patterns && patterns.size > 0) {
        // Use patternProperties for looseRecord with regex patterns
        const valueSchema = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.valueType, ctx, {
            ...params,
            path: [...params.path, "patternProperties", "*"],
        });
        json.patternProperties = {};
        for (const pattern of patterns) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.assignProp)(json.patternProperties, pattern.source, valueSchema);
        }
    }
    else {
        // Default behavior: use propertyNames + additionalProperties
        if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
            json.propertyNames = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.keyType, ctx, {
                ...params,
                path: [...params.path, "propertyNames"],
            });
            let pending = pendingRecords.get(ctx);
            if (!pending) {
                pending = [];
                pendingRecords.set(ctx, pending);
                ctx.deferred.push(() => rewriteKeyNames(ctx));
            }
            pending.push(schema);
        }
        json.additionalProperties = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.valueType, ctx, {
            ...params,
            path: [...params.path, "additionalProperties"],
        });
    }
    // Add required for keys with discrete values (enum, literal, etc.)
    const keyValues = keyType._zod.values;
    // Every key shares one value schema, so an optional-in value makes the whole key set omittable on input. Output keeps them: the exhaustive branch assigns every key, even one whose value came back undefined.
    const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== undefined;
    if (keyValues && !def.partial && !omittableOnInput) {
        const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
        if (validKeyValues.length > 0) {
            json.required = validKeyValues.map(String);
        }
    }
};
const nullableProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    const inner = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    if (ctx.target === "openapi-3.0") {
        seen.ref = def.innerType;
        json.nullable = true;
    }
    else {
        json.anyOf = [inner, { type: "null" }];
    }
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
/** Round-trips a default value through JSON so the emitted schema is guaranteed to be valid JSON.
 * A BigInt has no reliable encoding, so it goes through `unrepresentable` like any other
 * unrepresentable value. Returns a sentinel when the caller must not write a default of its own. */
const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
    let unrepresentable = false;
    const serialized = JSON.stringify(value, (_, val) => {
        if (typeof val !== "bigint")
            return val;
        unrepresentable = true;
        return null;
    });
    if (!unrepresentable)
        return JSON.parse(serialized);
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
    return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT)
        json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    if (ctx.io !== "input")
        return;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT)
        json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    let catchValue;
    try {
        catchValue = def.catchValue(undefined);
    }
    catch {
        ;(0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.handleUnrepresentable)(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
        return;
    }
    json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    const inIsTransform = def.in._zod.traits.has("$ZodTransform");
    const innerType = ctx.io === "input" ? (inIsTransform ? def.out : def.in) : def.out;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json.readOnly = true;
};
const promiseProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const optionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const lazyProcessor = (schema, ctx, _json, params) => {
    const innerType = schema._zod.innerType;
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
// ==================== ALL PROCESSORS ====================
const allProcessors = {
    string: stringProcessor,
    number: numberProcessor,
    boolean: booleanProcessor,
    bigint: bigintProcessor,
    symbol: symbolProcessor,
    null: nullProcessor,
    undefined: undefinedProcessor,
    void: voidProcessor,
    never: neverProcessor,
    any: anyProcessor,
    unknown: unknownProcessor,
    date: dateProcessor,
    enum: enumProcessor,
    literal: literalProcessor,
    nan: nanProcessor,
    template_literal: templateLiteralProcessor,
    file: fileProcessor,
    success: successProcessor,
    custom: customProcessor,
    function: functionProcessor,
    transform: transformProcessor,
    map: mapProcessor,
    set: setProcessor,
    array: arrayProcessor,
    object: objectProcessor,
    union: unionProcessor,
    intersection: intersectionProcessor,
    tuple: tupleProcessor,
    record: recordProcessor,
    nullable: nullableProcessor,
    nonoptional: nonoptionalProcessor,
    default: defaultProcessor,
    prefault: prefaultProcessor,
    catch: catchProcessor,
    pipe: pipeProcessor,
    readonly: readonlyProcessor,
    promise: promiseProcessor,
    optional: optionalProcessor,
    lazy: lazyProcessor,
};
function toJSONSchema(input, params) {
    if ("_idmap" in input) {
        // Registry case
        const registry = input;
        const ctx = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.initializeContext)({ ...params, processors: allProcessors });
        const defs = {};
        // First pass: process all schemas to build the seen map
        for (const entry of registry._idmap.entries()) {
            const [_, schema] = entry;
            (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(schema, ctx);
        }
        const schemas = {};
        const external = {
            registry,
            uri: params?.uri,
            defs,
        };
        // Update the context with external configuration
        ctx.external = external;
        // Second pass: emit each schema
        for (const entry of registry._idmap.entries()) {
            const [key, schema] = entry;
            (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.extractDefs)(ctx, schema);
            (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.assignProp)(schemas, key, (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.finalize)(ctx, schema));
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs,
            };
        }
        return { schemas };
    }
    // Single schema case
    const ctx = (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.initializeContext)({ ...params, processors: allProcessors });
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.process)(input, ctx);
    (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.extractDefs)(ctx, input);
    return (0,_to_json_schema_js__WEBPACK_IMPORTED_MODULE_1__.finalize)(ctx, input);
}


/***/ },

/***/ "./node_modules/zod/v4/core/memoizer.js"
/*!**********************************************!*\
  !*** ./node_modules/zod/v4/core/memoizer.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodCyclicError: () => (/* binding */ $ZodCyclicError),
/* harmony export */   isBackEdge: () => (/* binding */ isBackEdge),
/* harmony export */   isRecursiveSchema: () => (/* binding */ isRecursiveSchema),
/* harmony export */   memoizer: () => (/* binding */ memoizer)
/* harmony export */ });
class $ZodCyclicError extends Error {
    constructor() {
        super(`Cannot parse a reference cycle that closes through a transform`);
        this.name = "ZodCyclicError";
    }
}
/** Keyed off the context object every schema in one parse call already shares. */
const STATE = "~memo";
const NO_ISSUES = [];
// Receivers prefix paths in place, so the cache and every hand-out need their own copies.
function cloneIssues(issues) {
    return issues.map((iss) => (iss.path ? { ...iss, path: iss.path.slice() } : { ...iss }));
}
const recursive = /*@__PURE__*/ new WeakMap();
/** Whether this schema's subtree contains a cycle, so one parse can re-enter it. */
function isRecursive(inst, stack) {
    const cached = recursive.get(inst);
    if (cached !== undefined)
        return cached;
    // Relative to the walk in progress, so not cached.
    if (stack.has(inst))
        return true;
    stack.add(inst);
    let result = false;
    const check = (child) => {
        if (!result && child?._zod && isRecursive(child, stack))
            result = true;
    };
    const def = inst._zod.def;
    const kind = def.type;
    switch (kind) {
        case "object": {
            // `Reflect.ownKeys` rather than `Object.keys`, so a cycle through a declared symbol key is still seen
            for (const key of Reflect.ownKeys(def.shape))
                check(def.shape[key]);
            check(def.catchall);
            break;
        }
        case "array":
            check(def.element);
            break;
        case "tuple":
            for (const el of def.items)
                check(el);
            check(def.rest);
            break;
        case "record":
        case "map":
            check(def.keyType);
            check(def.valueType);
            break;
        case "set":
            check(def.valueType);
            break;
        case "union":
            for (const el of def.options)
                check(el);
            break;
        case "intersection":
            check(def.left);
            check(def.right);
            break;
        case "optional":
        case "nullable":
        case "default":
        case "prefault":
        case "catch":
        case "readonly":
        case "nonoptional":
        case "promise":
        case "success":
            check(def.innerType);
            break;
        case "pipe":
            check(def.in);
            check(def.out);
            break;
        case "function":
            check(def.input);
            check(def.output);
            break;
        // reading `_zod.innerType` resolves the getter once and caches it
        case "lazy":
            check(inst._zod.innerType);
            break;
        // a leaf by choice: `parts` are regex fragments, not data positions
        case "template_literal":
        // leaves
        case "string":
        case "number":
        case "int":
        case "boolean":
        case "bigint":
        case "symbol":
        case "undefined":
        case "null":
        case "void":
        case "never":
        case "any":
        case "unknown":
        case "date":
        case "nan":
        case "enum":
        case "literal":
        case "file":
        case "transform":
        case "custom":
            break;
        default: {
            // a new built-in kind becomes a compile error here
            kind;
            // a user-defined kind can still hold children, and only its author knows where, so fall back to scanning the def — skipping accessors, since reading one can run user code
            for (const key in def) {
                const desc = Object.getOwnPropertyDescriptor(def, key);
                if (!desc || desc.get)
                    continue;
                const value = desc.value;
                if (!value || typeof value !== "object")
                    continue;
                if (value._zod)
                    check(value);
                else if (Array.isArray(value))
                    for (const el of value)
                        check(el);
            }
        }
    }
    stack.delete(inst);
    recursive.set(inst, result);
    return result;
}
/**
 * Whether one parse can re-enter this schema, i.e. its subtree contains a cycle.
 * Exported for `z.compile`, which refuses to compile such a schema: cycle
 * breaking is driven from here off state keyed on the parse context, and a
 * generated fast path has no context to key on.
 */
function isRecursiveSchema(inst) {
    return isRecursive(inst, new Set());
}
function bucketFor(state, inst) {
    let bucket = state.buckets.get(inst);
    if (!bucket) {
        bucket = new Map();
        state.buckets.set(inst, bucket);
    }
    return bucket;
}
// Set immediately before delegating to core and cleared immediately after, so `alloc` registers only for a visit this module is driving.
let handoff;
// Allocated but unfinished entries. `alloc` and the matching pop both happen in the synchronous part of a parse, so they nest even when children are async, and one stack serves every schema.
const open = [];
const memo = {
    alloc(_inst, payload, empty) {
        const bucket = handoff;
        if (!bucket)
            return empty;
        handoff = undefined;
        const entry = { value: empty, issues: null };
        bucket.set(payload.value, entry);
        open.push(entry);
        return empty;
    },
    guard(inst) {
        var _a;
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred.push(() => {
            const base = inst._zod.parse;
            const wrapped = (payload, ctx) => {
                // The value is a placeholder a back-edge is still waiting on, so the cycle closes through this transform. Its output can't exist in time to bind.
                if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
                    throw new $ZodCyclicError();
                return base(payload, ctx);
            };
            inst._zod.parse = wrapped;
            if (inst._zod.run === base)
                inst._zod.run = wrapped;
        });
    },
    attach(inst) {
        var _a;
        let isRecursiveInst;
        // `bucket` memoized for one parse; a recursive schema is re-entered many times and its bucket never changes
        let lastCtx;
        let lastBucket;
        // Wraps `parse` in a deferred so it sees the container's final parse. Core's own deferred copies `parse` into `run` when there are no checks, and it ran first, so `run` is patched to match; with checks, `run` reads `parse` dynamically.
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred.push(() => {
            const base = inst._zod.parse;
            const wrapped = (payload, ctx) => {
                if (isRecursiveInst === undefined) {
                    isRecursiveInst = isRecursive(inst, new Set());
                    if (!isRecursiveInst) {
                        // Nothing here can ever fire, so take it back out.
                        inst._zod.parse = base;
                        if (inst._zod.run === wrapped)
                            inst._zod.run = base;
                        return base(payload, ctx);
                    }
                }
                const input = payload.value;
                if (input === null || typeof input !== "object")
                    return base(payload, ctx);
                let state = ctx[STATE];
                if (!state) {
                    state = { buckets: new Map(), backEdges: undefined };
                    ctx[STATE] = state;
                }
                let bucket;
                if (lastCtx === ctx) {
                    bucket = lastBucket;
                }
                else {
                    bucket = bucketFor(state, inst);
                    lastCtx = ctx;
                    lastBucket = bucket;
                }
                const hit = bucket.get(input);
                if (hit) {
                    payload.value = hit.value;
                    if (hit.issues) {
                        if (hit.issues.length)
                            payload.issues.push(...cloneIssues(hit.issues));
                    }
                    else {
                        // Still being parsed: its own checks cover it, so skip them here.
                        payload.memo = true;
                        state.backEdges ?? (state.backEdges = new Set());
                        state.backEdges.add(hit.value);
                    }
                    return payload;
                }
                handoff = bucket;
                const depth = open.length;
                const result = base(payload, ctx);
                handoff = undefined;
                // A container that rejected its input outright allocated nothing.
                const entry = open.length > depth ? open.pop() : undefined;
                // Both paths written out so the sync one allocates no closure. It runs once per node, and capturing here cost more than everything else combined.
                if (result instanceof Promise) {
                    return result.then((r) => {
                        if (entry)
                            entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
                        return r;
                    });
                }
                if (entry)
                    entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
                return result;
            };
            inst._zod.parse = wrapped;
            if (inst._zod.run === base)
                inst._zod.run = wrapped;
        });
    },
};
/** The memoizer that gives containers cycle support. `zod` installs it by default; `zod/mini` opts in with `config({ memoizer: memoizer() })`. */
function memoizer() {
    return memo;
}
/** Whether this value is a node a back-edge resolved to before it finished. */
function isBackEdge(ctx, value) {
    const backEdges = ctx[STATE]?.backEdges;
    return backEdges !== undefined && value !== null && typeof value === "object" && backEdges.has(value);
}


/***/ },

/***/ "./node_modules/zod/v4/core/parse.js"
/*!*******************************************!*\
  !*** ./node_modules/zod/v4/core/parse.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _decode: () => (/* binding */ _decode),
/* harmony export */   _decodeAsync: () => (/* binding */ _decodeAsync),
/* harmony export */   _encode: () => (/* binding */ _encode),
/* harmony export */   _encodeAsync: () => (/* binding */ _encodeAsync),
/* harmony export */   _parse: () => (/* binding */ _parse),
/* harmony export */   _parseAsync: () => (/* binding */ _parseAsync),
/* harmony export */   _safeDecode: () => (/* binding */ _safeDecode),
/* harmony export */   _safeDecodeAsync: () => (/* binding */ _safeDecodeAsync),
/* harmony export */   _safeEncode: () => (/* binding */ _safeEncode),
/* harmony export */   _safeEncodeAsync: () => (/* binding */ _safeEncodeAsync),
/* harmony export */   _safeParse: () => (/* binding */ _safeParse),
/* harmony export */   _safeParseAsync: () => (/* binding */ _safeParseAsync),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   decodeAsync: () => (/* binding */ decodeAsync),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   encodeAsync: () => (/* binding */ encodeAsync),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseAsync: () => (/* binding */ parseAsync),
/* harmony export */   safeDecode: () => (/* binding */ safeDecode),
/* harmony export */   safeDecodeAsync: () => (/* binding */ safeDecodeAsync),
/* harmony export */   safeEncode: () => (/* binding */ safeEncode),
/* harmony export */   safeEncodeAsync: () => (/* binding */ safeEncodeAsync),
/* harmony export */   safeParse: () => (/* binding */ safeParse),
/* harmony export */   safeParseAsync: () => (/* binding */ safeParseAsync),
/* harmony export */   validate: () => (/* binding */ validate),
/* harmony export */   validateAsync: () => (/* binding */ validateAsync)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/zod/v4/core/errors.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");



// Always both keys, so the `_params` read site in `_parse` sees one object shape rather than two.
function finalizeParams(callee, params) {
    return { callee: params?.callee ?? callee, Err: params?.Err };
}
const _parse = (_Err) => {
    const fn = (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
        const result = schema._zod.run({ value, issues: [] }, ctx);
        if (result instanceof Promise) {
            throw new _core_js__WEBPACK_IMPORTED_MODULE_0__.$ZodAsyncError();
        }
        if (result.issues.length) {
            const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_2__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_0__.config())));
            _util_js__WEBPACK_IMPORTED_MODULE_2__.captureStackTrace(e, _params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parse = /* @__PURE__*/ _parse(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _parseAsync = (_Err) => {
    const fn = async (schema, value, _ctx, params) => {
        const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
        let result = schema._zod.run({ value, issues: [] }, ctx);
        if (result instanceof Promise)
            result = await result;
        if (result.issues.length) {
            const e = new (params?.Err ?? _Err)(result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_2__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_0__.config())));
            _util_js__WEBPACK_IMPORTED_MODULE_2__.captureStackTrace(e, params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parseAsync = /* @__PURE__*/ _parseAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new _core_js__WEBPACK_IMPORTED_MODULE_0__.$ZodAsyncError();
    }
    return result.issues.length
        ? {
            success: false,
            error: new (_Err ?? _errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodError)(result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_2__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_0__.config()))),
        }
        : { success: true, data: result.value };
};
const safeParse = /* @__PURE__*/ _safeParse(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length
        ? {
            success: false,
            error: new _Err(result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_2__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_0__.config()))),
        }
        : { success: true, data: result.value };
};
const safeParseAsync = /* @__PURE__*/ _safeParseAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
// registry mirrors of the compiler's sentinels, so this module never imports the compiler
const COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
const COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
// Deliberately tiny, because v8 will not inline a body carrying the fallback's object literals and throw. Everything that is not the compiled happy path lives in validateFallback, and that split is worth ~35% on a compiled schema.
const validate = ((schema, value, _ctx) => {
    const validator = schema._zod.bag.validator;
    if (validator !== undefined && validator(value) !== COMPILE_INVALID)
        return true;
    return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const fallbackRun = schema._zod.bag.fallbackRun;
    let result;
    if (fallbackRun) {
        // skip nested fast paths on the fallback, so user callbacks keep the at-most-twice bound
        ctx[COMPILE_FALLBACK] = true;
        result = fallbackRun({ value, issues: [] }, ctx);
    }
    else {
        result = schema._zod.run({ value, issues: [] }, ctx);
    }
    if (result instanceof Promise) {
        throw new _core_js__WEBPACK_IMPORTED_MODULE_0__.$ZodAsyncError();
    }
    return result.issues.length === 0;
}
// no fast path: the compiler keeps async parses on the runtime, because a promise-returning callback that is not declared async compiles to a throw
const validateAsync = async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length === 0;
};
const _encode = (_Err) => {
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
        return parse(schema, value, ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const encode = /* @__PURE__*/ _encode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _decode = (_Err) => {
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params) => {
        return parse(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decode = /* @__PURE__*/ _decode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _encodeAsync = (_Err) => {
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params) => {
        const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
        return (await parseAsync(schema, value, ctx, finalizeParams(fn, _params)));
    };
    return fn;
};
const encodeAsync = /* @__PURE__*/ _encodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _decodeAsync = (_Err) => {
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params) => {
        return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decodeAsync = /* @__PURE__*/ _decodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeEncode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParse(_Err)(schema, value, ctx);
};
const safeEncode = /* @__PURE__*/ _safeEncode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeDecode = (_Err) => (schema, value, _ctx) => {
    return _safeParse(_Err)(schema, value, _ctx);
};
const safeDecode = /* @__PURE__*/ _safeDecode(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParseAsync(_Err)(schema, value, ctx);
};
const safeEncodeAsync = /* @__PURE__*/ _safeEncodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
    return _safeParseAsync(_Err)(schema, value, _ctx);
};
const safeDecodeAsync = /* @__PURE__*/ _safeDecodeAsync(_errors_js__WEBPACK_IMPORTED_MODULE_1__.$ZodRealError);


/***/ },

/***/ "./node_modules/zod/v4/core/regexes.js"
/*!*********************************************!*\
  !*** ./node_modules/zod/v4/core/regexes.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64url: () => (/* binding */ base64url),
/* harmony export */   bigint: () => (/* binding */ bigint),
/* harmony export */   boolean: () => (/* binding */ boolean),
/* harmony export */   browserEmail: () => (/* binding */ browserEmail),
/* harmony export */   cidrv4: () => (/* binding */ cidrv4),
/* harmony export */   cidrv6: () => (/* binding */ cidrv6),
/* harmony export */   creditCard: () => (/* binding */ creditCard),
/* harmony export */   cuid: () => (/* binding */ cuid),
/* harmony export */   cuid2: () => (/* binding */ cuid2),
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   datetime: () => (/* binding */ datetime),
/* harmony export */   domain: () => (/* binding */ domain),
/* harmony export */   duration: () => (/* binding */ duration),
/* harmony export */   e164: () => (/* binding */ e164),
/* harmony export */   email: () => (/* binding */ email),
/* harmony export */   emoji: () => (/* binding */ emoji),
/* harmony export */   extendedDuration: () => (/* binding */ extendedDuration),
/* harmony export */   guid: () => (/* binding */ guid),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   hostname: () => (/* binding */ hostname),
/* harmony export */   html5Email: () => (/* binding */ html5Email),
/* harmony export */   httpProtocol: () => (/* binding */ httpProtocol),
/* harmony export */   idnEmail: () => (/* binding */ idnEmail),
/* harmony export */   integer: () => (/* binding */ integer),
/* harmony export */   ipv4: () => (/* binding */ ipv4),
/* harmony export */   ipv6: () => (/* binding */ ipv6),
/* harmony export */   ksuid: () => (/* binding */ ksuid),
/* harmony export */   lowercase: () => (/* binding */ lowercase),
/* harmony export */   mac: () => (/* binding */ mac),
/* harmony export */   md5_base64: () => (/* binding */ md5_base64),
/* harmony export */   md5_base64url: () => (/* binding */ md5_base64url),
/* harmony export */   md5_hex: () => (/* binding */ md5_hex),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   nanoidOfLength: () => (/* binding */ nanoidOfLength),
/* harmony export */   "null": () => (/* binding */ _null),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   rfc5322Email: () => (/* binding */ rfc5322Email),
/* harmony export */   sha1_base64: () => (/* binding */ sha1_base64),
/* harmony export */   sha1_base64url: () => (/* binding */ sha1_base64url),
/* harmony export */   sha1_hex: () => (/* binding */ sha1_hex),
/* harmony export */   sha256_base64: () => (/* binding */ sha256_base64),
/* harmony export */   sha256_base64url: () => (/* binding */ sha256_base64url),
/* harmony export */   sha256_hex: () => (/* binding */ sha256_hex),
/* harmony export */   sha384_base64: () => (/* binding */ sha384_base64),
/* harmony export */   sha384_base64url: () => (/* binding */ sha384_base64url),
/* harmony export */   sha384_hex: () => (/* binding */ sha384_hex),
/* harmony export */   sha512_base64: () => (/* binding */ sha512_base64),
/* harmony export */   sha512_base64url: () => (/* binding */ sha512_base64url),
/* harmony export */   sha512_hex: () => (/* binding */ sha512_hex),
/* harmony export */   string: () => (/* binding */ string),
/* harmony export */   time: () => (/* binding */ time),
/* harmony export */   ulid: () => (/* binding */ ulid),
/* harmony export */   undefined: () => (/* binding */ _undefined),
/* harmony export */   unicodeEmail: () => (/* binding */ unicodeEmail),
/* harmony export */   uppercase: () => (/* binding */ uppercase),
/* harmony export */   uuid: () => (/* binding */ uuid),
/* harmony export */   uuid4: () => (/* binding */ uuid4),
/* harmony export */   uuid6: () => (/* binding */ uuid6),
/* harmony export */   uuid7: () => (/* binding */ uuid7),
/* harmony export */   xid: () => (/* binding */ xid)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");

/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link cuid2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const cuid = /^[cC][0-9a-z]{6,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
    return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
 *
 * @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
const uuid = (version) => {
    if (!version)
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const uuid4 = /*@__PURE__*/ uuid(4);
const uuid6 = /*@__PURE__*/ uuid(6);
const uuid7 = /*@__PURE__*/ uuid(7);
/** Practical email validation */
const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const idnEmail = unicodeEmail;
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
// Single character class, not an alternation: the two properties overlap (U+1F9B0-U+1F9B3), so `(A|B)+` backtracks exponentially on a failed match.
const _emoji = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
    return new RegExp(_emoji, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const mac = (delimiter) => {
    const escapedDelim = _util_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegex(delimiter ?? ":");
    return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^[A-Za-z0-9_-]*$/;
// based on https://stackoverflow.com/questions/106179/regular-expression-to-match-dns-hostname-or-ip-address
// export const hostname: RegExp = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
const hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
const domain = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
const httpProtocol = /^https?$/;
// https://blog.stevenlevithan.com/archives/validate-phone-number#r4-3 (regex sans spaces) E.164: leading digit must be 1-9; total digits (excluding '+') between 7-15
const e164 = /^\+[1-9]\d{6,14}$/;
// Credit card shape: 12–19 digits, optionally separated by single spaces or single hyphens. ISO/IEC 7812 caps the PAN at 19 digits; 12 is the shortest issued length (Maestro).
const creditCard = /^\d(?:[ -]?\d){11,18}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
/** Anchors a pattern source. The interpolation lives here rather than at the call site because
 * esbuild will not drop a `@__PURE__` call whose own argument interpolates a variable, but it
 * will drop `anchor(dateSource)`. Keeping it inline pinned `date` into every bundle. */
function anchor(source) {
    return new RegExp(`^${source}$`);
}
const date = /*@__PURE__*/ anchor(dateSource);
function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number"
        ? args.precision === -1
            ? `${hhmm}`
            : args.precision === 0
                ? `${hhmm}:[0-5]\\d`
                : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}`
        : args.seconds
            ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?`
            : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
}
function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetime(args) {
    const opts = ["Z"];
    // if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    if (args.offset)
        opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
    // RFC 3339 mandates seconds wherever the time carries a `Z` or an offset, so only the unqualified form `local` adds may omit them
    const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
    const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const string = (params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
};
const bigint = /^-?\d+n?$/;
const integer = /^-?\d+$/;
const number = /^-?\d+(?:\.\d+)?$/;
const boolean = /^(?:true|false)$/i;
const _null = /^null$/i;

const _undefined = /^undefined$/i;

// regex for string with no uppercase letters
const lowercase = /^[^A-Z]*$/;
// regex for string with no lowercase letters
const uppercase = /^[^a-z]*$/;
// regex for hexadecimal strings (any length)
const hex = /^[0-9a-fA-F]*$/;
// Hash regexes for different algorithms and encodings
// Helper function to create base64 regex with exact length and padding
function fixedBase64(bodyLength, padding) {
    return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
// Helper function to create base64url regex with exact length (no padding)
function fixedBase64url(length) {
    return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
// MD5 (16 bytes): base64 = 24 chars total (22 + "==")
const md5_hex = /^[0-9a-fA-F]{32}$/;
const md5_base64 = /*@__PURE__*/ fixedBase64(22, "==");
const md5_base64url = /*@__PURE__*/ fixedBase64url(22);
// SHA1 (20 bytes): base64 = 28 chars total (27 + "=")
const sha1_hex = /^[0-9a-fA-F]{40}$/;
const sha1_base64 = /*@__PURE__*/ fixedBase64(27, "=");
const sha1_base64url = /*@__PURE__*/ fixedBase64url(27);
// SHA256 (32 bytes): base64 = 44 chars total (43 + "=")
const sha256_hex = /^[0-9a-fA-F]{64}$/;
const sha256_base64 = /*@__PURE__*/ fixedBase64(43, "=");
const sha256_base64url = /*@__PURE__*/ fixedBase64url(43);
// SHA384 (48 bytes): base64 = 64 chars total (no padding)
const sha384_hex = /^[0-9a-fA-F]{96}$/;
const sha384_base64 = /*@__PURE__*/ fixedBase64(64, "");
const sha384_base64url = /*@__PURE__*/ fixedBase64url(64);
// SHA512 (64 bytes): base64 = 88 chars total (86 + "==")
const sha512_hex = /^[0-9a-fA-F]{128}$/;
const sha512_base64 = /*@__PURE__*/ fixedBase64(86, "==");
const sha512_base64url = /*@__PURE__*/ fixedBase64url(86);


/***/ },

/***/ "./node_modules/zod/v4/core/registries.js"
/*!************************************************!*\
  !*** ./node_modules/zod/v4/core/registries.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodRegistry: () => (/* binding */ $ZodRegistry),
/* harmony export */   $input: () => (/* binding */ $input),
/* harmony export */   $output: () => (/* binding */ $output),
/* harmony export */   globalRegistry: () => (/* binding */ globalRegistry),
/* harmony export */   registry: () => (/* binding */ registry)
/* harmony export */ });
var _a;
const $output = /*@__PURE__*/ Symbol("ZodOutput");
const $input = /*@__PURE__*/ Symbol("ZodInput");
class $ZodRegistry {
    constructor() {
        this._map = new WeakMap();
        this._idmap = new Map();
    }
    add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new WeakMap();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            const pm = { ...(this.get(p) ?? {}) };
            delete pm.id; // do not inherit id
            const f = { ...pm, ...this._map.get(schema) };
            return Object.keys(f).length ? f : undefined;
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
}
// registries
function registry() {
    return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;


/***/ },

/***/ "./node_modules/zod/v4/core/schemas.js"
/*!*********************************************!*\
  !*** ./node_modules/zod/v4/core/schemas.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $ZodAny: () => (/* binding */ $ZodAny),
/* harmony export */   $ZodArray: () => (/* binding */ $ZodArray),
/* harmony export */   $ZodBase64: () => (/* binding */ $ZodBase64),
/* harmony export */   $ZodBase64URL: () => (/* binding */ $ZodBase64URL),
/* harmony export */   $ZodBigInt: () => (/* binding */ $ZodBigInt),
/* harmony export */   $ZodBigIntFormat: () => (/* binding */ $ZodBigIntFormat),
/* harmony export */   $ZodBoolean: () => (/* binding */ $ZodBoolean),
/* harmony export */   $ZodCIDRv4: () => (/* binding */ $ZodCIDRv4),
/* harmony export */   $ZodCIDRv6: () => (/* binding */ $ZodCIDRv6),
/* harmony export */   $ZodCUID: () => (/* binding */ $ZodCUID),
/* harmony export */   $ZodCUID2: () => (/* binding */ $ZodCUID2),
/* harmony export */   $ZodCatch: () => (/* binding */ $ZodCatch),
/* harmony export */   $ZodCodec: () => (/* binding */ $ZodCodec),
/* harmony export */   $ZodCreditCard: () => (/* binding */ $ZodCreditCard),
/* harmony export */   $ZodCustom: () => (/* binding */ $ZodCustom),
/* harmony export */   $ZodCustomStringFormat: () => (/* binding */ $ZodCustomStringFormat),
/* harmony export */   $ZodDate: () => (/* binding */ $ZodDate),
/* harmony export */   $ZodDefault: () => (/* binding */ $ZodDefault),
/* harmony export */   $ZodDiscriminatedUnion: () => (/* binding */ $ZodDiscriminatedUnion),
/* harmony export */   $ZodE164: () => (/* binding */ $ZodE164),
/* harmony export */   $ZodEmail: () => (/* binding */ $ZodEmail),
/* harmony export */   $ZodEmoji: () => (/* binding */ $ZodEmoji),
/* harmony export */   $ZodEnum: () => (/* binding */ $ZodEnum),
/* harmony export */   $ZodExactOptional: () => (/* binding */ $ZodExactOptional),
/* harmony export */   $ZodFile: () => (/* binding */ $ZodFile),
/* harmony export */   $ZodFunction: () => (/* binding */ $ZodFunction),
/* harmony export */   $ZodGUID: () => (/* binding */ $ZodGUID),
/* harmony export */   $ZodIPv4: () => (/* binding */ $ZodIPv4),
/* harmony export */   $ZodIPv6: () => (/* binding */ $ZodIPv6),
/* harmony export */   $ZodISODate: () => (/* binding */ $ZodISODate),
/* harmony export */   $ZodISODateTime: () => (/* binding */ $ZodISODateTime),
/* harmony export */   $ZodISODuration: () => (/* binding */ $ZodISODuration),
/* harmony export */   $ZodISOTime: () => (/* binding */ $ZodISOTime),
/* harmony export */   $ZodIntersection: () => (/* binding */ $ZodIntersection),
/* harmony export */   $ZodJWT: () => (/* binding */ $ZodJWT),
/* harmony export */   $ZodKSUID: () => (/* binding */ $ZodKSUID),
/* harmony export */   $ZodLazy: () => (/* binding */ $ZodLazy),
/* harmony export */   $ZodLiteral: () => (/* binding */ $ZodLiteral),
/* harmony export */   $ZodMAC: () => (/* binding */ $ZodMAC),
/* harmony export */   $ZodMap: () => (/* binding */ $ZodMap),
/* harmony export */   $ZodNaN: () => (/* binding */ $ZodNaN),
/* harmony export */   $ZodNanoID: () => (/* binding */ $ZodNanoID),
/* harmony export */   $ZodNever: () => (/* binding */ $ZodNever),
/* harmony export */   $ZodNonOptional: () => (/* binding */ $ZodNonOptional),
/* harmony export */   $ZodNull: () => (/* binding */ $ZodNull),
/* harmony export */   $ZodNullable: () => (/* binding */ $ZodNullable),
/* harmony export */   $ZodNumber: () => (/* binding */ $ZodNumber),
/* harmony export */   $ZodNumberFormat: () => (/* binding */ $ZodNumberFormat),
/* harmony export */   $ZodObject: () => (/* binding */ $ZodObject),
/* harmony export */   $ZodObjectJIT: () => (/* binding */ $ZodObjectJIT),
/* harmony export */   $ZodOptional: () => (/* binding */ $ZodOptional),
/* harmony export */   $ZodPipe: () => (/* binding */ $ZodPipe),
/* harmony export */   $ZodPrefault: () => (/* binding */ $ZodPrefault),
/* harmony export */   $ZodPreprocess: () => (/* binding */ $ZodPreprocess),
/* harmony export */   $ZodPromise: () => (/* binding */ $ZodPromise),
/* harmony export */   $ZodReadonly: () => (/* binding */ $ZodReadonly),
/* harmony export */   $ZodRecord: () => (/* binding */ $ZodRecord),
/* harmony export */   $ZodSet: () => (/* binding */ $ZodSet),
/* harmony export */   $ZodString: () => (/* binding */ $ZodString),
/* harmony export */   $ZodStringFormat: () => (/* binding */ $ZodStringFormat),
/* harmony export */   $ZodSuccess: () => (/* binding */ $ZodSuccess),
/* harmony export */   $ZodSymbol: () => (/* binding */ $ZodSymbol),
/* harmony export */   $ZodTemplateLiteral: () => (/* binding */ $ZodTemplateLiteral),
/* harmony export */   $ZodTransform: () => (/* binding */ $ZodTransform),
/* harmony export */   $ZodTuple: () => (/* binding */ $ZodTuple),
/* harmony export */   $ZodType: () => (/* binding */ $ZodType),
/* harmony export */   $ZodULID: () => (/* binding */ $ZodULID),
/* harmony export */   $ZodURL: () => (/* binding */ $ZodURL),
/* harmony export */   $ZodUUID: () => (/* binding */ $ZodUUID),
/* harmony export */   $ZodUndefined: () => (/* binding */ $ZodUndefined),
/* harmony export */   $ZodUnion: () => (/* binding */ $ZodUnion),
/* harmony export */   $ZodUnknown: () => (/* binding */ $ZodUnknown),
/* harmony export */   $ZodVoid: () => (/* binding */ $ZodVoid),
/* harmony export */   $ZodXID: () => (/* binding */ $ZodXID),
/* harmony export */   $ZodXor: () => (/* binding */ $ZodXor),
/* harmony export */   URL_BAD_FORMAT: () => (/* binding */ URL_BAD_FORMAT),
/* harmony export */   URL_UNPARSEABLE: () => (/* binding */ URL_UNPARSEABLE),
/* harmony export */   clone: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.clone),
/* harmony export */   getDiscriminatedOption: () => (/* binding */ getDiscriminatedOption),
/* harmony export */   isValidBase64: () => (/* binding */ isValidBase64),
/* harmony export */   isValidBase64URL: () => (/* binding */ isValidBase64URL),
/* harmony export */   isValidCIDRv6: () => (/* binding */ isValidCIDRv6),
/* harmony export */   isValidCreditCard: () => (/* binding */ isValidCreditCard),
/* harmony export */   isValidIPv6: () => (/* binding */ isValidIPv6),
/* harmony export */   isValidJWT: () => (/* binding */ isValidJWT),
/* harmony export */   mergeValues: () => (/* binding */ mergeValues),
/* harmony export */   parseURLObject: () => (/* binding */ parseURLObject),
/* harmony export */   standardProps: () => (/* binding */ standardProps),
/* harmony export */   stripTabAndNewline: () => (/* binding */ stripTabAndNewline),
/* harmony export */   urlHostnameOk: () => (/* binding */ urlHostnameOk),
/* harmony export */   urlProtocolOk: () => (/* binding */ urlProtocolOk)
/* harmony export */ });
/* harmony import */ var _checks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks.js */ "./node_modules/zod/v4/core/checks.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/zod/v4/core/core.js");
/* harmony import */ var _doc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc.js */ "./node_modules/zod/v4/core/doc.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse.js */ "./node_modules/zod/v4/core/parse.js");
/* harmony import */ var _regexes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regexes.js */ "./node_modules/zod/v4/core/regexes.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");
/* harmony import */ var _versions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./versions.js */ "./node_modules/zod/v4/core/versions.js");







const $ZodType = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodType", (inst, def) => {
    var _a;
    inst ?? (inst = {});
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = _versions_js__WEBPACK_IMPORTED_MODULE_6__.version;
    const defChecks = inst._zod.def.checks;
    // if inst is itself a checks.$ZodCheck, run it as a check
    const checks = inst._zod.traits.has("$ZodCheck")
        ? [inst, ...(defChecks ?? [])]
        : defChecks?.length
            ? [...defChecks]
            : [];
    for (const ch of checks) {
        for (const fn of ch._zod.onattach) {
            fn(inst);
        }
    }
    if (checks.length === 0) {
        // deferred initializer inst._zod.parse is not yet defined
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred?.push(() => {
            inst._zod.run = inst._zod.parse;
        });
    }
    else {
        const runChecks = (payload, checks, ctx) => {
            if (payload.memo)
                return payload;
            let isAborted = _util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(payload);
            let asyncResult;
            for (const ch of checks) {
                if (ch._zod.def.when) {
                    if (_util_js__WEBPACK_IMPORTED_MODULE_5__.explicitlyAborted(payload))
                        continue;
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun)
                        continue;
                }
                else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && ctx?.async === false) {
                    throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodAsyncError();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen)
                            return;
                        _util_js__WEBPACK_IMPORTED_MODULE_5__.attachSchema(payload.issues, currLen, inst);
                        if (!isAborted)
                            isAborted = _util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(payload, currLen);
                    });
                }
                else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen)
                        continue;
                    _util_js__WEBPACK_IMPORTED_MODULE_5__.attachSchema(payload.issues, currLen, inst);
                    if (!isAborted)
                        isAborted = _util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(() => {
                    return payload;
                });
            }
            return payload;
        };
        const handleCanaryResult = (canary, payload, ctx) => {
            // abort if the canary is aborted
            if (_util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(canary)) {
                canary.aborted = true;
                return canary;
            }
            // run checks first, then
            const checkResult = runChecks(payload, checks, ctx);
            if (checkResult instanceof Promise) {
                if (ctx.async === false)
                    throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodAsyncError();
                return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
            }
            return inst._zod.parse(checkResult, ctx);
        };
        inst._zod.run = (payload, ctx) => {
            if (ctx.skipChecks) {
                return inst._zod.parse(payload, ctx);
            }
            if (ctx.direction === "backward") {
                // run canary initial pass (no checks)
                const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
                if (canary instanceof Promise) {
                    return canary.then((canary) => {
                        return handleCanaryResult(canary, payload, ctx);
                    });
                }
                return handleCanaryResult(canary, payload, ctx);
            }
            // forward
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false)
                    throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodAsyncError();
                return result.then((result) => runChecks(result, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
}, {
    // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
    get "~standard"() {
        return _util_js__WEBPACK_IMPORTED_MODULE_5__.hide(this, "~standard", standardProps(this));
    },
    set "~standard"(value) {
        _util_js__WEBPACK_IMPORTED_MODULE_5__.own(this, "~standard", value);
    },
});
/** The Standard Schema surface for `inst`. Shared so wrappers can extend it without forcing it. */
const toStandardResult = (r) => r.success ? { value: r.data } : { issues: r.error?.issues };
function standardProps(inst) {
    return {
        validate: (value) => {
            try {
                return toStandardResult((0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.safeParse)(inst, value));
            }
            catch (_) {
                return (0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.safeParseAsync)(inst, value).then(toStandardResult);
            }
        },
        vendor: "zod",
        version: 1,
    };
}

const $ZodString = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = [...(inst?._zod.bag?.patterns ?? [])].pop() ?? _regexes_js__WEBPACK_IMPORTED_MODULE_4__.string(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
        if (def.coerce)
            try {
                payload.value = String(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "string")
            return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodStringFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodStringFormat", (inst, def) => {
    // check initialization must come first
    _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
});
const $ZodGUID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.guid);
    $ZodStringFormat.init(inst, def);
});
const $ZodUUID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8,
        };
        const v = versionMap[def.version];
        if (v === undefined)
            throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.uuid(v));
    }
    else
        def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.uuid());
    $ZodStringFormat.init(inst, def);
});
const $ZodEmail = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.email);
    $ZodStringFormat.init(inst, def);
});
/** The `://` guard rejected the input before the URL constructor saw it. */
const URL_BAD_FORMAT = 1;
/** The URL constructor rejected the input. */
const URL_UNPARSEABLE = 2;
/** Parses a URL for `$ZodURL`, applying the one guard the URL constructor cannot express. Returns the parsed URL, or a code naming the stage that rejected it — the runtime needs that distinction to pick an issue note, and compiled code only needs to know it is not a URL. */
function parseURLObject(trimmed, def) {
    // When normalize is off, require :// for http/https URLs. This prevents strings like "http:example.com" or "https:/path" from being silently accepted
    if (!def.normalize && def.protocol?.source === _regexes_js__WEBPACK_IMPORTED_MODULE_4__.httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
        return URL_BAD_FORMAT;
    }
    try {
        // @ts-ignore
        return new URL(trimmed);
    }
    catch {
        return URL_UNPARSEABLE;
    }
}
const asciiTabOrNewline = /[\t\n\r]/g;
/** The URL parser deletes every ASCII tab, LF and CR from its input before it parses, so `new URL("https://exa\nmple.com")` reports on `example.com`. Applying the same deletion to the returned value closes the half of that divergence which can move the host; the parser's other rewrite, stripping C0 controls at the edges, cannot. */
function stripTabAndNewline(value) {
    return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
    hostname.lastIndex = 0;
    return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
    protocol.lastIndex = 0;
    return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
const $ZodURL = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        try {
            // Trim whitespace from input
            const trimmed = payload.value.trim();
            const url = parseURLObject(trimmed, def);
            if (url === URL_BAD_FORMAT) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
                return;
            }
            if (url === URL_UNPARSEABLE) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
                return;
            }
            if (def.hostname && !urlHostnameOk(url, def.hostname)) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: def.hostname.source,
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
            }
            if (def.protocol && !urlProtocolOk(url, def.protocol)) {
                payload.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: def.protocol.source,
                    input: payload.value,
                    inst,
                    continue: !def.abort,
                });
            }
            // Set the output value based on normalize flag
            payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
            return;
        }
        catch (_) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodEmoji = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.emoji());
    $ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNanoID", (inst, def) => {
    if (def.length !== undefined && (!Number.isInteger(def.length) || def.length < 1))
        throw new Error(`Invalid nanoid length: ${def.length}`);
    def.pattern ?? (def.pattern = def.length === undefined ? _regexes_js__WEBPACK_IMPORTED_MODULE_4__.nanoid : _regexes_js__WEBPACK_IMPORTED_MODULE_4__.nanoidOfLength(def.length));
    $ZodStringFormat.init(inst, def);
});
/**
 * @deprecated CUID v1 is deprecated by its authors due to information leakage
 * (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
 * See https://github.com/paralleldrive/cuid.
 */
const $ZodCUID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.cuid);
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.cuid2);
    $ZodStringFormat.init(inst, def);
});
const $ZodULID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.ulid);
    $ZodStringFormat.init(inst, def);
});
const $ZodXID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.xid);
    $ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.ksuid);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.datetime(def));
    $ZodStringFormat.init(inst, def);
    // these two drop the offset or seconds `date-time` requires — on the bag not the def, since `z.string().check(...)` lands the format on a different schema
    if (def.local || def.precision === -1) {
        inst._zod.bag.laxFormat = true;
        inst._zod.onattach.push((s) => {
            s._zod.bag.laxFormat = true;
        });
    }
});
const $ZodISODate = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.date);
    $ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.time(def));
    $ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.duration);
    $ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv4`;
});
/** An IPv6 address is written with hex digits, colons and dots, and nothing else. The guard is what makes the check below an IPv6 check: `new URL("http://[...]")` parses an authority, not an address, so `@` and `\` re-delimit it and `"::@1\\"` validates against the host `0.0.0.1`. The URL parser also deletes ASCII tab, LF and CR rather than failing, which is how `"::1\n"` validated as `::1`. */
const ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
    if (!ipv6Alphabet.test(value))
        return false;
    try {
        // @ts-ignore
        new URL(`http://[${value}]`);
        return true;
    }
    catch {
        return false;
    }
}
const $ZodIPv6 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv6`;
    inst._zod.check = (payload) => {
        if (!isValidIPv6(payload.value)) {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
const $ZodMAC = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodMAC", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.mac(def.delimiter));
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `mac`;
});
const $ZodCIDRv4 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.cidrv4);
    $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
    const parts = value.split("/");
    if (parts.length !== 2)
        return false;
    const [address, prefix] = parts;
    if (!prefix)
        return false;
    const prefixNum = Number(prefix);
    if (`${prefixNum}` !== prefix)
        return false;
    if (prefixNum < 0 || prefixNum > 128)
        return false;
    return isValidIPv6(address);
}
const $ZodCIDRv6 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.cidrv6); // not used for validation
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (!isValidCIDRv6(payload.value)) {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort,
            });
        }
    };
});
//////////////////////////////   ZodBase64   //////////////////////////////
function isValidBase64(data) {
    if (data === "")
        return true;
    // atob ignores whitespace, so reject it up front.
    if (/\s/.test(data))
        return false;
    if (data.length % 4 !== 0)
        return false;
    try {
        // @ts-ignore
        atob(data);
        return true;
    }
    catch {
        return false;
    }
}
const $ZodBase64 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64";
    inst._zod.check = (payload) => {
        if (isValidBase64(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
//////////////////////////////   ZodBase64   //////////////////////////////
function isValidBase64URL(data) {
    if (!_regexes_js__WEBPACK_IMPORTED_MODULE_4__.base64url.test(data))
        return false;
    const base64 = data.replace(/[-_]/g, (c) => (c === "-" ? "+" : "/"));
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return isValidBase64(padded);
}
const $ZodBase64URL = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64url";
    inst._zod.check = (payload) => {
        if (isValidBase64URL(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodE164 = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.e164);
    $ZodStringFormat.init(inst, def);
});
//////////////////////////////   ZodCreditCard   //////////////////////////////
const CC_SANITIZE = /[- ]/g;
/** Luhn checksum on a digit-only string. Adapted from valibot (MIT). */
function isLuhnAlgo(digits) {
    let length = digits.length;
    let bit = 1;
    let sum = 0;
    while (length) {
        const value = +digits[--length];
        bit ^= 1;
        sum += bit ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][value] : value;
    }
    return sum % 10 === 0;
}
function isValidCreditCard(input) {
    if (!_regexes_js__WEBPACK_IMPORTED_MODULE_4__.creditCard.test(input))
        return false;
    return isLuhnAlgo(input.replace(CC_SANITIZE, ""));
}
const $ZodCreditCard = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCreditCard", (inst, def) => {
    // Shape only — the Luhn check below is not expressible as a pattern, so consumers of `pattern` (JSON Schema, template literals) get the length and separator rules alone.
    def.pattern ?? (def.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.creditCard);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidCreditCard(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "credit_card",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
//////////////////////////////   ZodJWT   //////////////////////////////
function isValidJWT(token, algorithm = null) {
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3)
            return false;
        const [header] = tokensParts;
        if (!header)
            return false;
        // @ts-ignore
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
            return false;
        if (!parsedHeader.alg)
            return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
            return false;
        return true;
    }
    catch {
        return false;
    }
}
const $ZodJWT = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (isValidJWT(payload.value, def.alg))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodCustomStringFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCustomStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
        if (def.fn(payload.value))
            return;
        payload.issues.push({
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            inst,
            continue: !def.abort,
        });
    };
});
const $ZodNumber = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNumber", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? _regexes_js__WEBPACK_IMPORTED_MODULE_4__.number;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Number(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number"
            ? Number.isNaN(input)
                ? "NaN"
                : !Number.isFinite(input)
                    ? String(input)
                    : undefined
            : undefined;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...(received ? { received } : {}),
        });
        return payload;
    };
});
const $ZodNumberFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNumberFormat", (inst, def) => {
    _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def); // no format checks
});
const $ZodBoolean = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodBoolean", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.boolean;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = Boolean(payload.value);
            }
            catch (_) { }
        const input = payload.value;
        if (typeof input === "boolean")
            return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodBigInt = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodBigInt", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.bigint;
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
            try {
                payload.value = BigInt(payload.value);
            }
            catch (_) { }
        if (typeof payload.value === "bigint")
            return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodBigIntFormat = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodBigIntFormat", (inst, def) => {
    _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheckBigIntFormat.init(inst, def);
    $ZodBigInt.init(inst, def); // no format checks
});
const $ZodSymbol = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodSymbol", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "symbol")
            return payload;
        payload.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodUndefined = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodUndefined", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__.undefined;
    inst._zod.values = new Set([undefined]);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodNull = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNull", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _regexes_js__WEBPACK_IMPORTED_MODULE_4__["null"];
    inst._zod.values = new Set([null]);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input === null)
            return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodAny = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodAny", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
});
const $ZodUnknown = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
});
const $ZodNever = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst,
        });
        return payload;
    };
});
const $ZodVoid = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodVoid", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
            return payload;
        payload.issues.push({
            expected: "void",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodDate = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodDate", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            }
            catch (_err) { }
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate)
            return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...(isDate ? { received: "Invalid Date" } : {}),
            inst,
        });
        return payload;
    };
});
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodArray = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
        const proms = [];
        for (let i = 0; i < input.length; i++) {
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleArrayResult(result, payload, i)));
            }
            else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload; //handleArrayResultsAsync(parseResults, final);
    };
});
function handlePropertyResult(result, final, key, input, optin, optout) {
    const isPresent = key in input;
    const isOptionalOut = optout === "optional";
    // The middle rung means "absence permitted, nothing supplied in its place", so an absent key contributes nothing — whatever the schema made of `undefined` is invented, not substituted. Only `optional` reaches this with a value: `defaulted` substitutes, and a schema that isn't optional-out has to keep the key.
    if (!isPresent && isOptionalOut && optin === "optional") {
        return;
    }
    if (result.issues.length) {
        // For optional-in/out schemas, ignore errors on absent keys.
        if (optin !== undefined && isOptionalOut && !isPresent) {
            return;
        }
        final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, result.issues));
    }
    if (!isPresent && optin === undefined) {
        if (!result.issues.length) {
            final.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: undefined,
                path: [key],
            });
        }
        return;
    }
    if (result.value === undefined) {
        if (isPresent) {
            final.value[key] = undefined;
        }
    }
    else {
        final.value[key] = result.value;
    }
}
// one shared instance; a fresh [] per schema cost 56 bytes retained
const NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
    const keys = Object.keys(def.shape);
    const ownSymbols = Object.getOwnPropertySymbols(def.shape);
    const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
    // aliases `keys` when there are no symbols, so a string-only shape keeps one array
    const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
    for (const k of allKeys) {
        if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
            throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
        }
    }
    const okeys = _util_js__WEBPACK_IMPORTED_MODULE_5__.optionalKeys(def.shape);
    return {
        ...def,
        allKeys,
        symbolKeys,
        // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
        keySet: new Set(keys),
        numKeys: keys.length,
        optionalKeys: new Set(okeys),
    };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
    const unrecognized = [];
    const keySet = def.keySet;
    const _catchall = def.catchall._zod;
    const t = _catchall.def.type;
    const optin = _catchall.optin;
    const optout = _catchall.optout;
    for (const key in input) {
        // Must precede the __proto__ branch: a declared key is not unrecognized, even though the shape loop deliberately strips __proto__ from the parsed output.
        if (keySet.has(key))
            continue;
        // Don't copy an undeclared __proto__ into the result; assignment to a plain {} would replace the result prototype. But in strict mode it is still an unknown key, so report it before skipping.
        if (key === "__proto__") {
            if (t === "never")
                unrecognized.push(key);
            continue;
        }
        if (t === "never") {
            unrecognized.push(key);
            continue;
        }
        const r = _catchall.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
            proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
        }
        else {
            handlePropertyResult(r, payload, key, input, optin, optout);
        }
    }
    if (unrecognized.length) {
        payload.issues.push({
            code: "unrecognized_keys",
            keys: unrecognized,
            input,
            inst,
            // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
            continue: true,
        });
    }
    if (!proms.length)
        return payload;
    return Promise.all(proms).then(() => {
        return payload;
    });
}
// Whichever object a def's `shape` currently answers from: the one the caller passed until the first read, the frozen copy after it. Keyed by def, so a def rebuilt by a builder is simply absent rather than inheriting the source's. Read its keys with `Object.keys`, which does not invoke them — that is what lets a discriminated union check its discriminator without resolving an option whose getters reference the union being constructed.
const propShapes = new WeakMap();
const $ZodObject = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodObject", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    $ZodType.init(inst, def);
    // const sh = def.shape;
    const desc = Object.getOwnPropertyDescriptor(def, "shape");
    if (!desc?.get) {
        const sh = def.shape;
        propShapes.set(def, sh);
        Object.defineProperty(def, "shape", {
            get: () => {
                const newSh = { ...sh };
                Object.defineProperty(def, "shape", {
                    value: newSh,
                });
                propShapes.set(def, newSh);
                return newSh;
            },
        });
    }
    const _normalized = _util_js__WEBPACK_IMPORTED_MODULE_5__.cached(() => normalizeDef(def));
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => {
        const shape = zod.def.shape;
        const propValues = {};
        for (const key in shape) {
            const field = shape[key]._zod;
            if (field.values) {
                if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
                    _util_js__WEBPACK_IMPORTED_MODULE_5__.assignProp(propValues, key, new Set());
                }
                for (const v of field.values)
                    propValues[key].add(v);
                // An omittable slot reads back as undefined at a discriminator lookup, so it has to claim undefined: two options that can both omit the key are not discriminable on it.
                if (field.optin !== undefined)
                    propValues[key].add(undefined);
            }
        }
        return propValues;
    });
    const isObject = _util_js__WEBPACK_IMPORTED_MODULE_5__.isObject;
    const catchall = def.catchall;
    let value;
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
        const proms = [];
        const shape = value.shape;
        for (const key of value.allKeys) {
            if (key === "__proto__")
                continue;
            const el = shape[key];
            const optin = el._zod.optin;
            const optout = el._zod.optout;
            const r = el._zod.run({ value: input[key], issues: [] }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
            }
            else {
                handlePropertyResult(r, payload, key, input, optin, optout);
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(() => payload) : payload;
        }
        return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
});
const $ZodObjectJIT = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodObjectJIT", (inst, def) => {
    // requires cast because technically $ZodObject doesn't extend
    $ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = _util_js__WEBPACK_IMPORTED_MODULE_5__.cached(() => normalizeDef(def));
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    const generateFastpass = (shape) => {
        const normalized = _normalized.value;
        const syms = normalized.symbolKeys;
        // a symbol has no source literal, so it is read as `syms[i]` off the closed-over scope
        const doc = new _doc_js__WEBPACK_IMPORTED_MODULE_2__.Doc(["payload", "ctx"], { shape, inst, memo, syms });
        const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        // Prefixes in place, like util.prefixIssues does for every interpreted path.
        const prefixStr = (id, k) => `
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
          }`;
        doc.write(`const input = payload.value;`);
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.allKeys) {
            ids[key] = `key_${counter++}`;
        }
        // A: preserve key order {
        doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
        for (const key of normalized.allKeys) {
            if (key === "__proto__")
                continue;
            const id = ids[key];
            const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : _util_js__WEBPACK_IMPORTED_MODULE_5__.esc(key);
            const isPresent = `${k} in input`;
            const schema = shape[key];
            const optin = schema?._zod?.optin;
            const isOptionalIn = optin !== undefined;
            const isOptionalOut = schema?._zod?.optout === "optional";
            doc.write(`const ${id} = ${parseStr(k)};`);
            if (isOptionalIn && isOptionalOut) {
                // For optional-in/out schemas, ignore errors on absent keys — and, like the interpreted path, drop the value produced alongside them. The middle rung goes further: it permits absence without supplying anything in its place, so an absent key contributes nothing at all.
                const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
                doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
            }
            else if (!isOptionalIn) {
                doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
            }
            else {
                doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        
        if (${id}.value === undefined) {
          if (${isPresent}) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }

      `);
            }
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        // closing `shape` in is what pays: turbofan specializes the parser against that one shape object, so every `shape[k]._zod.run` folds to a known callee. as a parameter it stays a generic load and measures 13% slower even with the forwarding frame gone
        return doc.compile();
    };
    let fastpass;
    const isObject = _util_js__WEBPACK_IMPORTED_MODULE_5__.isObject;
    const jit = !_core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.jitless;
    const allowsEval = _util_js__WEBPACK_IMPORTED_MODULE_5__.allowsEval;
    const fastEnabled = jit && allowsEval.value; // && !def.catchall;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
            // always synchronous
            if (!fastpass)
                fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
            if (!catchall)
                return payload;
            return handleCatchall([], input, payload, ctx, value, inst);
        }
        return superParse(payload, ctx);
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    const nonaborted = results.filter((r) => !_util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(r));
    if (nonaborted.length === 1) {
        final.value = nonaborted[0].value;
        return nonaborted[0];
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result) => result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config()))),
    });
    return final;
}
const $ZodUnion = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted")
        ? "defaulted"
        : zod.def.options.some((o) => o._zod.optin !== undefined)
            ? "optional"
            : undefined);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => {
        if (zod.def.options.every((o) => o._zod.values)) {
            return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
        }
        return undefined;
    });
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "pattern", (zod) => {
        if (zod.def.options.every((o) => o._zod.pattern)) {
            const patterns = zod.def.options.map((o) => o._zod.pattern);
            return new RegExp(`^(${patterns.map((p) => _util_js__WEBPACK_IMPORTED_MODULE_5__.cleanRegex(p.source)).join("|")})$`);
        }
        return undefined;
    });
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
        if (first) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
            const result = option._zod.run({
                value: payload.value,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            }
            else {
                if (result.issues.length === 0)
                    return result;
                results.push(result);
            }
        }
        if (!async)
            return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results) => {
            return handleUnionResults(results, payload, inst, ctx);
        });
    };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
    const matches = [];
    for (let i = 0; i < results.length; i++) {
        if (results[i].issues.length === 0)
            matches.push(i);
    }
    if (matches.length === 1) {
        final.value = results[matches[0]].value;
        return final;
    }
    if (matches.length === 0) {
        // No matches - same as regular union
        final.issues.push({
            code: "invalid_union",
            input: final.value,
            inst,
            errors: results.map((result) => result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config()))),
        });
    }
    else {
        // Multiple matches - exclusive union failure
        final.issues.push({
            code: "invalid_union",
            input: final.value,
            inst,
            errors: [],
            inclusive: false,
            matches,
        });
    }
    return final;
}
const $ZodXor = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodXor", (inst, def) => {
    $ZodUnion.init(inst, def);
    def.inclusive = false;
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
        if (first) {
            return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
            const result = option._zod.run({
                value: payload.value,
                issues: [],
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            }
            else {
                results.push(result);
            }
        }
        if (!async)
            return handleExclusiveUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results) => {
            return handleExclusiveUnionResults(results, payload, inst, ctx);
        });
    };
});
/** Returns the option of `union` whose discriminator claims `value`. */
function getDiscriminatedOption(union, value) {
    const internals = union._zod;
    let map = internals.bag.optionsMap;
    if (!map) {
        map = new Map();
        const { options, discriminator } = internals.def;
        for (const option of options) {
            // First declaration wins, matching the order the parse path resolves a duplicate in.
            for (const v of option._zod.propValues?.[discriminator] ?? [])
                if (!map.has(v))
                    map.set(v, option);
        }
        internals.bag.optionsMap = map;
    }
    return map.get(value);
}
const $ZodDiscriminatedUnion = 
/*@__PURE__*/
_core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodDiscriminatedUnion", (inst, def) => {
    def.inclusive = false;
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => {
        const propValues = {};
        for (const option of zod.def.options) {
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0)
                throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
            for (const [k, v] of Object.entries(pv)) {
                if (!Object.prototype.hasOwnProperty.call(propValues, k)) {
                    _util_js__WEBPACK_IMPORTED_MODULE_5__.assignProp(propValues, k, new Set());
                }
                for (const val of v) {
                    propValues[k].add(val);
                }
            }
        }
        return propValues;
    });
    // Checked now rather than in the lookup map below, so an option that lacks the discriminator fails at the `discriminatedUnion` call instead of on the first object parsed. Options whose shape cannot be enumerated without resolving it — pipes, lazies, and objects rebuilt by a builder such as `.extend()` — are left to the map.
    def.options.forEach((option, i) => {
        const propShape = propShapes.get(option._zod.def);
        if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) {
            throw new Error(`Invalid discriminated union option at index "${i}"`);
        }
    });
    const disc = _util_js__WEBPACK_IMPORTED_MODULE_5__.cached(() => {
        const opts = def.options;
        const map = new Map();
        for (const o of opts) {
            const values = o._zod.propValues?.[def.discriminator];
            if (!values || values.size === 0)
                throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
            for (const v of values) {
                if (map.has(v)) {
                    throw new Error(`Duplicate discriminator value "${String(v)}"`);
                }
                map.set(v, o);
            }
        }
        return map;
    });
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!_util_js__WEBPACK_IMPORTED_MODULE_5__.isObject(input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst,
            });
            return payload;
        }
        const opt = disc.value.get(input?.[def.discriminator]);
        if (opt) {
            return opt._zod.run(payload, ctx);
        }
        // Fall back to union matching when the fast discriminator path fails:
        // - explicitly enabled via unionFallback, or
        // - during backward direction (encode), since codec-based discriminators have different values in forward vs backward directions
        if (def.unionFallback || ctx.direction === "backward") {
            return _super(payload, ctx);
        }
        // no matching discriminator
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: def.discriminator,
            options: Array.from(disc.value.keys()),
            input,
            path: [def.discriminator],
            inst,
        });
        return payload;
    };
});
const $ZodIntersection = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        const left = def.left._zod.run({ value: input, issues: [] }, ctx);
        const right = def.right._zod.run({ value: input, issues: [] }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([left, right]).then(([left, right]) => {
                return handleIntersectionResults(payload, left, right);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    // const aType = parse.t(a);
    // const bType = parse.t(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return { valid: true, data: a };
    }
    if (_util_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject(a) && _util_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject(b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
            delete newObj.__proto__;
        for (const key of sharedKeys) {
            if (key === "__proto__")
                continue;
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [key, ...sharedValue.mergeErrorPath],
                };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return { valid: false, mergeErrorPath: [] };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [index, ...sharedValue.mergeErrorPath],
                };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
    // Track which side(s) reject each key. A key rejection is reported only when BOTH sides reject it, so a key owned by one branch survives the other's key schema. strictObject reports these as unrecognized_keys; a record with an open key schema reports one invalid_key per key.
    const unrecKeys = new Map();
    let unrecIssue;
    const keyIssues = new Map();
    const collect = (iss, side) => {
        let keys;
        if (iss.code === "unrecognized_keys" && !iss.path?.length) {
            unrecIssue ?? (unrecIssue = iss);
            keys = iss.keys;
        }
        else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
            const k = String(iss.path[0]);
            if (!keyIssues.has(k))
                keyIssues.set(k, iss);
            keys = [k];
        }
        else {
            return false;
        }
        for (const k of keys) {
            if (!unrecKeys.has(k))
                unrecKeys.set(k, {});
            unrecKeys.get(k)[side] = true;
        }
        return true;
    };
    for (const iss of left.issues) {
        if (!collect(iss, "l"))
            result.issues.push(iss);
    }
    for (const iss of right.issues) {
        if (!collect(iss, "r"))
            result.issues.push(iss);
    }
    // Report only keys rejected by BOTH sides
    const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
    if (bothKeys.length) {
        const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
        if (aggregated.length)
            result.issues.push({ ...unrecIssue, keys: aggregated });
        for (const k of bothKeys) {
            if (!aggregated.includes(k) && keyIssues.has(k))
                result.issues.push(keyIssues.get(k));
        }
    }
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        if (_util_js__WEBPACK_IMPORTED_MODULE_5__.aborted(result))
            return result;
        throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
}
const $ZodTuple = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodTuple", (inst, def) => {
    $ZodType.init(inst, def);
    const items = def.items;
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                input,
                inst,
                expected: "tuple",
                code: "invalid_type",
            });
            return payload;
        }
        payload.value = memo ? memo.alloc(inst, payload, [], ctx) : [];
        const proms = [];
        const optinStart = getTupleOptStart(items, "optin");
        const optoutStart = getTupleOptStart(items, "optout");
        if (!def.rest) {
            if (input.length < optinStart) {
                payload.issues.push({
                    code: "too_small",
                    minimum: optinStart,
                    inclusive: true,
                    input,
                    inst,
                    origin: "array",
                });
                return payload;
            }
            if (input.length > items.length) {
                payload.issues.push({
                    code: "too_big",
                    maximum: items.length,
                    inclusive: true,
                    input,
                    inst,
                    origin: "array",
                });
            }
        }
        // Run every item in parallel, collecting results into an indexed array. The post-processing in `handleTupleResults` walks them in order so it can decide whether an absent optional-output error can truncate the tail or must be reported to preserve required output.
        const itemResults = new Array(items.length);
        for (let i = 0; i < items.length; i++) {
            const r = items[i]._zod.run({ value: input[i], issues: [] }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((rr) => {
                    itemResults[i] = rr;
                }));
            }
            else {
                itemResults[i] = r;
            }
        }
        if (def.rest) {
            let i = items.length - 1;
            const rest = input.slice(items.length);
            for (const el of rest) {
                i++;
                const result = def.rest._zod.run({ value: el, issues: [] }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((r) => handleTupleResult(r, payload, i)));
                }
                else {
                    handleTupleResult(result, payload, i);
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
        }
        return handleTupleResults(itemResults, payload, items, input, optoutStart);
    };
});
function getTupleOptStart(items, key) {
    for (let i = items.length - 1; i >= 0; i--) {
        // optin is a three-rung ladder so any rung above `undefined` permits an absent slot; optout stays two-valued.
        const omittable = key === "optin" ? items[i]._zod.optin !== undefined : items[i]._zod.optout === "optional";
        if (!omittable)
            return i + 1;
    }
    return 0;
}
function handleTupleResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
    // Walk results in order. Mirror $ZodObject's swallow-on-absent-optional rule, but only after `optoutStart`: the first index where the output tuple tail can be absent.
    for (let i = 0; i < items.length; i++) {
        const r = itemResults[i];
        const isPresent = i < input.length;
        // The array analog of `handlePropertyResult`'s absent-key early return: the middle rung permits absence without supplying anything in its place, so the tail truncates here instead of materializing whatever the item made of `undefined`.
        if (!isPresent && i >= optoutStart && items[i]._zod.optin === "optional") {
            final.value.length = i;
            break;
        }
        if (r.issues.length) {
            if (!isPresent && i >= optoutStart) {
                final.value.length = i;
                break;
            }
            final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(i, r.issues));
        }
        final.value[i] = r.value;
    }
    // Drop trailing slots that produced `undefined` for absent input
    // (the array analog of an absent optional key on an object). The
    // `i >= input.length` floor is critical: an explicit `undefined`
    // *inside* the input must be preserved even when the schema is
    // optional-out (e.g. `z.string().or(z.undefined())` accepting an
    // explicit undefined value).
    for (let i = final.value.length - 1; i >= input.length; i--) {
        if (items[i]._zod.optout === "optional" && final.value[i] === undefined) {
            final.value.length = i;
        }
        else {
            break;
        }
    }
    return final;
}
const $ZodRecord = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodRecord", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!_util_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject(input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        const proms = [];
        const values = def.keyType._zod.values;
        if (values && !def.partial) {
            payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
            const recordKeys = new Set();
            for (const key of values) {
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    recordKeys.add(typeof key === "number" ? key.toString() : key);
                    // A declared __proto__ is stripped but is not an unrecognized key.
                    if (key === "__proto__")
                        continue;
                    const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
                    if (keyResult instanceof Promise) {
                        throw new Error("Async schemas not supported in object keys currently");
                    }
                    if (keyResult.issues.length) {
                        payload.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: keyResult.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config())),
                            input: key,
                            path: [key],
                            inst,
                        });
                        continue;
                    }
                    const outKey = keyResult.value;
                    if (outKey === "__proto__")
                        continue;
                    const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result) => {
                            if (result.issues.length) {
                                payload.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, result.issues));
                            }
                            payload.value[outKey] = result.value;
                        }));
                    }
                    else {
                        if (result.issues.length) {
                            payload.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, result.issues));
                        }
                        payload.value[outKey] = result.value;
                    }
                }
            }
            let unrecognized;
            for (const key in input) {
                if (!recordKeys.has(key)) {
                    if (def.mode === "loose") {
                        // skip __proto__ so it can't replace the result prototype via the assignment setter on the plain {} we build into
                        if (key === "__proto__")
                            continue;
                        payload.value[key] = input[key];
                    }
                    else {
                        unrecognized = unrecognized ?? [];
                        unrecognized.push(key);
                    }
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized,
                    continue: true,
                });
            }
        }
        else {
            payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
            // An enumerable key schema declares which keys the record owns, so a key outside the set is unrecognized. A non-enumerable one (regex, refine) is a constraint every key must satisfy, so a failing key is invalid. Only the former is reconcilable against the other side of an intersection.
            let unrecognized;
            // Reflect.ownKeys for Symbol-key support; filter non-enumerable to match z.object()
            for (const key of Reflect.ownKeys(input)) {
                if (key === "__proto__")
                    continue;
                if (!Object.prototype.propertyIsEnumerable.call(input, key))
                    continue;
                let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                // Numeric string fallback: if key is a numeric string and failed, retry with Number(key). This handles z.number(), z.literal([1, 2, 3]), and unions containing numeric literals
                const checkNumericKey = typeof key === "string" && _regexes_js__WEBPACK_IMPORTED_MODULE_4__.number.test(key) && keyResult.issues.length;
                if (checkNumericKey) {
                    const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
                    if (retryResult instanceof Promise) {
                        throw new Error("Async schemas not supported in object keys currently");
                    }
                    if (retryResult.issues.length === 0) {
                        keyResult = retryResult;
                    }
                }
                if (keyResult.issues.length) {
                    if (def.mode === "loose") {
                        // Pass through unchanged
                        payload.value[key] = input[key];
                    }
                    else if (values) {
                        unrecognized = unrecognized ?? [];
                        unrecognized.push(key);
                    }
                    else {
                        // Default "strict" behavior: error on invalid key
                        payload.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: keyResult.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config())),
                            input: key,
                            path: [key],
                            inst,
                        });
                    }
                    continue;
                }
                // the guard above tests the raw input key, but the key schema can normalize an ordinary key into __proto__; re-check the key we actually write under
                const outKey = keyResult.value;
                if (outKey === "__proto__")
                    continue;
                const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result) => {
                        if (result.issues.length) {
                            payload.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, result.issues));
                        }
                        payload.value[outKey] = result.value;
                    }));
                }
                else {
                    if (result.issues.length) {
                        payload.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, result.issues));
                    }
                    payload.value[outKey] = result.value;
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized,
                    continue: true,
                });
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(() => payload);
        }
        return payload;
    };
});
const $ZodMap = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodMap", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Map)) {
            payload.issues.push({
                expected: "map",
                code: "invalid_type",
                input,
                inst,
            });
            return payload;
        }
        const proms = [];
        payload.value = memo ? memo.alloc(inst, payload, new Map(), ctx) : new Map();
        for (const [key, value] of input) {
            const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            const valueResult = def.valueType._zod.run({ value: value, issues: [] }, ctx);
            if (keyResult instanceof Promise || valueResult instanceof Promise) {
                proms.push(Promise.all([keyResult, valueResult]).then(([keyResult, valueResult]) => {
                    handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
                }));
            }
            else {
                handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
            }
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
        if (_util_js__WEBPACK_IMPORTED_MODULE_5__.propertyKeyTypes.has(typeof key)) {
            final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, keyResult.issues));
        }
        else {
            final.issues.push({
                code: "invalid_key",
                origin: "map",
                input,
                inst,
                issues: keyResult.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config())),
            });
        }
    }
    if (valueResult.issues.length) {
        if (_util_js__WEBPACK_IMPORTED_MODULE_5__.propertyKeyTypes.has(typeof key)) {
            final.issues.push(..._util_js__WEBPACK_IMPORTED_MODULE_5__.prefixIssues(key, valueResult.issues));
        }
        else {
            final.issues.push({
                origin: "map",
                code: "invalid_element",
                input,
                inst,
                key: key,
                issues: valueResult.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config())),
            });
        }
    }
    final.value.set(keyResult.value, valueResult.value);
}
const $ZodSet = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodSet", (inst, def) => {
    $ZodType.init(inst, def);
    const memo = _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer;
    memo?.attach(inst);
    inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Set)) {
            payload.issues.push({
                input,
                inst,
                expected: "set",
                code: "invalid_type",
            });
            return payload;
        }
        const proms = [];
        payload.value = memo ? memo.alloc(inst, payload, new Set(), ctx) : new Set();
        for (const item of input) {
            const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result) => handleSetResult(result, payload)));
            }
            else
                handleSetResult(result, payload);
        }
        if (proms.length)
            return Promise.all(proms).then(() => payload);
        return payload;
    };
});
function handleSetResult(result, final) {
    if (result.issues.length) {
        final.issues.push(...result.issues);
    }
    final.value.add(result.value);
}
const $ZodEnum = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = _util_js__WEBPACK_IMPORTED_MODULE_5__.getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    const patternValues = values.filter((k) => _util_js__WEBPACK_IMPORTED_MODULE_5__.propertyKeyTypes.has(typeof k));
    // unmatchable fallback, RE2-safe: an empty alternation would compile to /^()$/, which matches ""
    inst._zod.pattern = new RegExp(patternValues.length ? `^(${patternValues.map((o) => _util_js__WEBPACK_IMPORTED_MODULE_5__.escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (valuesSet.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst,
        });
        return payload;
    };
});
const $ZodLiteral = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const values = new Set(def.values);
    inst._zod.values = values;
    // unmatchable fallback, RE2-safe: an empty alternation would compile to /^()$/, which matches ""
    inst._zod.pattern = new RegExp(def.values.length
        ? `^(${def.values
            .map((o) => (typeof o === "string" ? _util_js__WEBPACK_IMPORTED_MODULE_5__.escapeRegex(o) : o ? _util_js__WEBPACK_IMPORTED_MODULE_5__.escapeRegex(o.toString()) : String(o)))
            .join("|")})$`
        : "^[^\\s\\S]$");
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst,
        });
        return payload;
    };
});
const $ZodFile = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodFile", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        // @ts-ignore
        if (input instanceof File)
            return payload;
        payload.issues.push({
            expected: "file",
            code: "invalid_type",
            input,
            inst,
        });
        return payload;
    };
});
const $ZodTransform = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    _core_js__WEBPACK_IMPORTED_MODULE_1__.globalConfig.memoizer?.guard(inst);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodEncodeError(inst.constructor.name);
        }
        const _out = def.transform(payload.value, payload);
        if (ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodAsyncError();
        }
        payload.value = _out;
        return payload;
    };
});
function handleOptionalResult(payload, result) {
    // A substituting schema that still failed has no usable answer; yield undefined. Its issues are simply dropped: it ran on a payload of its own, so there is no shared array to truncate and nothing of the caller's to lose with it.
    payload.value = result.issues.length ? undefined : result.value;
    return payload;
}
const $ZodOptional = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    // .optional() propagates absence rather than substituting for it, so a defaulted inner keeps its rung.
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
    inst._zod.optout = "optional";
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => {
        const values = zod.def.innerType._zod.values;
        return values ? new Set([...values, undefined]) : undefined;
    });
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "pattern", (zod) => {
        const pattern = zod.def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${_util_js__WEBPACK_IMPORTED_MODULE_5__.cleanRegex(pattern.source)})?$`) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        if (payload.value === undefined) {
            // Only the top rung substitutes a value for absence; everything else leaves it intact, which is what .optional() means.
            if (def.innerType._zod.optin !== "defaulted")
                return payload;
            // Its own payload, for the same reason $ZodCatch gets one: a pipe forwards an unrecognized key through the caller's issues array, and this must not read that as the substituting schema failing and drop it.
            const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
            if (result instanceof Promise)
                return result.then((result) => handleOptionalResult(payload, result));
            return handleOptionalResult(payload, result);
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodExactOptional = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodExactOptional", (inst, def) => {
    // Call parent init - inherits optin/optout = "optional"
    $ZodOptional.init(inst, def);
    // Override values/pattern to NOT add undefined
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
    // Override parse to just delegate (no undefined handling)
    inst._zod.parse = (payload, ctx) => {
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNullable = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "pattern", (zod) => {
        const pattern = zod.def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${_util_js__WEBPACK_IMPORTED_MODULE_5__.cleanRegex(pattern.source)}|null)$`) : undefined;
    });
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => {
        return zod.def.innerType._zod.values ? new Set([...zod.def.innerType._zod.values, null]) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        // Forward direction (decode): allow null to pass through
        if (payload.value === null)
            return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodDefault = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    // inst._zod.qin = "true";
    inst._zod.optin = "defaulted";
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply defaults for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
            /**
             * $ZodDefault returns the default value immediately in forward direction.
             * It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
            return payload;
        }
        // Forward direction: continue with default handling
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleDefaultResult(result, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === undefined) {
        payload.value = def.defaultValue;
    }
    return payload;
}
const $ZodPrefault = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "defaulted";
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply prefault for undefined input
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNonOptional = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => {
        const v = zod.def.innerType._zod.values;
        return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleNonOptionalResult(result, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === undefined) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst,
        });
    }
    return payload;
}
const $ZodSuccess = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodSuccess", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            throw new _core_js__WEBPACK_IMPORTED_MODULE_1__.$ZodEncodeError("ZodSuccess");
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result) => {
                payload.value = result.issues.length === 0;
                return payload;
            });
        }
        payload.value = result.issues.length === 0;
        return payload;
    };
});
function handleCatchResult(payload, result, def, ctx) {
    if (!result.issues.length) {
        payload.value = result.value;
        // The value carries up, so the flag describing it has to carry with it: a back-edge into a node still being parsed must not be frozen by an enclosing readonly, and its checks belong to the node itself. Guarded so the ordinary case adds no own property.
        if (result.memo)
            payload.memo = true;
        return payload;
    }
    // Spread the inner's own payload, not ours: `value` has to stay the input the catch was handed, and the inner ran on a payload of its own so its issues are already private to this call.
    payload.value = def.catchValue({
        ...result,
        value: payload.value,
        error: {
            issues: result.issues.map((iss) => _util_js__WEBPACK_IMPORTED_MODULE_5__.finalizeIssue(iss, ctx, _core_js__WEBPACK_IMPORTED_MODULE_1__.config())),
        },
        input: payload.value,
    });
    return payload;
}
const $ZodCatch = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        // Forward direction (decode): apply catch logic
        const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
        if (result instanceof Promise) {
            return result.then((result) => handleCatchResult(payload, result, def, ctx));
        }
        return handleCatchResult(payload, result, def, ctx);
    };
});
const $ZodNaN = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodNaN", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "nan",
                code: "invalid_type",
            });
            return payload;
        }
        return payload;
    };
});
const $ZodPipe = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handlePipeResult(right, def.in, ctx));
            }
            return handlePipeResult(right, def.in, ctx);
        }
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left) => handlePipeResult(left, def.out, ctx));
        }
        return handlePipeResult(left, def.out, ctx);
    };
});
function handlePipeResult(left, next, ctx) {
    // Any issue stops the pipe, so a failing refinement never feeds its transform. An unrecognized key is the exception: it describes the input's extra properties, not the value being piped, and an enclosing intersection may yet reconcile it.
    if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
        // prevent further checks
        left.aborted = true;
        return left;
    }
    return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
const $ZodCodec = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCodec", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
        const direction = ctx.direction || "forward";
        if (direction === "forward") {
            const left = def.in._zod.run(payload, ctx);
            if (left instanceof Promise) {
                return left.then((left) => handleCodecAResult(left, def, ctx));
            }
            return handleCodecAResult(left, def, ctx);
        }
        else {
            const right = def.out._zod.run(payload, ctx);
            if (right instanceof Promise) {
                return right.then((right) => handleCodecAResult(right, def, ctx));
            }
            return handleCodecAResult(right, def, ctx);
        }
    };
});
function handleCodecAResult(result, def, ctx) {
    if (result.issues.length) {
        // prevent further checks
        result.aborted = true;
        return result;
    }
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
        const transformed = def.transform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
        }
        return handleCodecTxResult(result, transformed, def.out, ctx);
    }
    else {
        const transformed = def.reverseTransform(result.value, result);
        if (transformed instanceof Promise) {
            return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
        }
        return handleCodecTxResult(result, transformed, def.in, ctx);
    }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
    // Check if transform added any issues
    if (left.issues.length) {
        left.aborted = true;
        return left;
    }
    return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
const $ZodPreprocess = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodPreprocess", (inst, def) => {
    $ZodPipe.init(inst, def);
});
const $ZodReadonly = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
    inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
            return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    // A repeat visit hands back a node that is still being built; freezing it here would make the rest of its keys fail to assign.
    if (!payload.memo)
        payload.value = Object.freeze(payload.value);
    return payload;
}
const $ZodTemplateLiteral = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodTemplateLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts) {
        if (typeof part === "object" && part !== null) {
            // is Zod schema
            if (!part._zod.pattern) {
                // if (!source)
                throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
            }
            const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
            if (!source)
                throw new Error(`Invalid template literal part: ${part._zod.traits}`);
            const start = source.startsWith("^") ? 1 : 0;
            const end = source.endsWith("$") ? source.length - 1 : source.length;
            regexParts.push(source.slice(start, end));
        }
        else if (part === null || _util_js__WEBPACK_IMPORTED_MODULE_5__.primitiveTypes.has(typeof part)) {
            regexParts.push(_util_js__WEBPACK_IMPORTED_MODULE_5__.escapeRegex(`${part}`));
        }
        else {
            throw new Error(`Invalid template literal part: ${part}`);
        }
    }
    inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "string") {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "string",
                code: "invalid_type",
            });
            return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                code: "invalid_format",
                format: def.format ?? "template_literal",
                pattern: inst._zod.pattern.source,
            });
            return payload;
        }
        return payload;
    };
});
const $ZodFunction = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodFunction", (inst, def) => {
    $ZodType.init(inst, def);
    // Defined, not assigned: the classic prototype exposes `_def` as a getter with no setter.
    Object.defineProperty(inst, "_def", { value: def });
    inst._zod.def = def;
    inst.implement = (func) => {
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        // Defined inline so the closure stays anonymous: binding it to a `const` first names it, which costs 256 bytes per implemented function.
        return Object.defineProperty(function (...args) {
            const parsedArgs = inst._def.input ? (0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.parse)(inst._def.input, args) : args;
            const result = Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return (0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.parse)(inst._def.output, result);
            }
            return result;
        }, "_zod", { value: inst._zod, enumerable: false });
    };
    inst.implementAsync = (func) => {
        if (typeof func !== "function") {
            throw new Error("implementAsync() must be called with a function");
        }
        return Object.defineProperty(async function (...args) {
            const parsedArgs = inst._def.input ? await (0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.parseAsync)(inst._def.input, args) : args;
            const result = await Reflect.apply(func, this, parsedArgs);
            if (inst._def.output) {
                return await (0,_parse_js__WEBPACK_IMPORTED_MODULE_3__.parseAsync)(inst._def.output, result);
            }
            return result;
        }, "_zod", { value: inst._zod, enumerable: false });
    };
    inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "function") {
            payload.issues.push({
                code: "invalid_type",
                expected: "function",
                input: payload.value,
                inst,
            });
            return payload;
        }
        // Check if output is a promise type to determine if we should use async implementation
        const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
        if (hasPromiseOutput) {
            payload.value = inst.implementAsync(payload.value);
        }
        else {
            payload.value = inst.implement(payload.value);
        }
        return payload;
    };
    inst.input = (...args) => {
        const F = inst.constructor;
        if (Array.isArray(args[0])) {
            return new F({
                type: "function",
                input: new $ZodTuple({
                    type: "tuple",
                    items: args[0],
                    rest: args[1],
                }),
                output: inst._def.output,
            });
        }
        return new F({
            type: "function",
            input: args[0],
            output: inst._def.output,
        });
    };
    inst.output = (output) => {
        const F = inst.constructor;
        return new F({
            type: "function",
            input: inst._def.input,
            output,
        });
    };
    return inst;
});
const $ZodPromise = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodPromise", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
        return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
    };
});
const $ZodLazy = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodLazy", (inst, def) => {
    $ZodType.init(inst, def);
    // Cache the resolved inner type on the shared `def` so all clones of this lazy (e.g. via `.describe()`/`.meta()`) share the same inner instance, preserving identity for cycle detection on recursive schemas.
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazy(inst._zod, "innerType", () => {
        const d = def;
        if (!d._cachedInner)
            d._cachedInner = def.getter();
        return d._cachedInner;
    });
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "pattern", (zod) => zod.innerType?._zod?.pattern);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "propValues", (zod) => zod.innerType?._zod?.propValues);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optin", (zod) => zod.innerType?._zod?.optin ?? undefined);
    _util_js__WEBPACK_IMPORTED_MODULE_5__.defineLazyInternal(inst, "optout", (zod) => zod.innerType?._zod?.optout ?? undefined);
    inst._zod.parse = (payload, ctx) => {
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
    };
});
const $ZodCustom = /*@__PURE__*/ _core_js__WEBPACK_IMPORTED_MODULE_1__.$constructor("$ZodCustom", (inst, def) => {
    _checks_js__WEBPACK_IMPORTED_MODULE_0__.$ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
        return payload;
    };
    inst._zod.check = (payload) => {
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r) => handleRefineResult(r, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        const _iss = {
            code: "custom",
            input,
            inst, // incorporates params.error into issue reporting
            path: [...(inst._zod.def.path ?? [])], // incorporates params.error into issue reporting
            continue: !inst._zod.def.abort,
            // params: inst._zod.def.params,
        };
        if (inst._zod.def.params)
            _iss.params = inst._zod.def.params;
        payload.issues.push(_util_js__WEBPACK_IMPORTED_MODULE_5__.issue(_iss));
    }
}


/***/ },

/***/ "./node_modules/zod/v4/core/to-json-schema.js"
/*!****************************************************!*\
  !*** ./node_modules/zod/v4/core/to-json-schema.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStandardJSONSchemaMethod: () => (/* binding */ createStandardJSONSchemaMethod),
/* harmony export */   createToJSONSchemaMethod: () => (/* binding */ createToJSONSchemaMethod),
/* harmony export */   extractDefs: () => (/* binding */ extractDefs),
/* harmony export */   finalize: () => (/* binding */ finalize),
/* harmony export */   handleUnrepresentable: () => (/* binding */ handleUnrepresentable),
/* harmony export */   initializeContext: () => (/* binding */ initializeContext),
/* harmony export */   process: () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _registries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registries.js */ "./node_modules/zod/v4/core/registries.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/zod/v4/core/util.js");


function assignProps(target, ...sources) {
    for (const source of sources) {
        for (const key of Reflect.ownKeys(source)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) {
                (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.assignProp)(target, key, source[key]);
            }
        }
    }
    return target;
}
// function initializeContext<T extends schemas.$ZodType>(inputs: JSONSchemaGeneratorParams<T>): ToJSONSchemaContext<T> {
//   return {
//     processor: inputs.processor,
//     metadataRegistry: inputs.metadata ?? globalRegistry,
//     target: inputs.target ?? "draft-2020-12",
//     unrepresentable: inputs.unrepresentable ?? "throw",
//   };
// }
function initializeContext(params) {
    // Normalize target: convert old non-hyphenated versions to hyphenated versions
    let target = params?.target ?? "draft-2020-12";
    if (target === "draft-4")
        target = "draft-04";
    if (target === "draft-7")
        target = "draft-07";
    return {
        processors: params.processors ?? {},
        metadataRegistry: params?.metadata ?? _registries_js__WEBPACK_IMPORTED_MODULE_0__.globalRegistry,
        target,
        unrepresentable: params?.unrepresentable ?? "throw",
        override: params?.override ?? (() => { }),
        io: params?.io ?? "output",
        counter: 0,
        seen: new Map(),
        sharedDefsExtractedFor: undefined,
        sharedEmitDoneFor: undefined,
        cycles: params?.cycles ?? "ref",
        reused: params?.reused ?? "inline",
        intersections: [],
        deferred: [],
        external: params?.external ?? undefined,
    };
}
/**
 * Applies the `unrepresentable` setting at a site that has no JSON Schema equivalent. Throws
 * `message` unless the setting (or the handler's return value) says otherwise. Returns `true` if a
 * custom JSON Schema was written into `json`, in which case the caller must not write its own.
 */
function handleUnrepresentable(schema, ctx, json, params, message) {
    const result = typeof ctx.unrepresentable === "function"
        ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message })
        : ctx.unrepresentable;
    if (result === "any")
        return false;
    if (result === undefined || result === "throw")
        throw new Error(message);
    Object.assign(json, result);
    return true;
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
    var _a;
    const def = schema._zod.def;
    // check for schema in seens
    const seen = ctx.seen.get(schema);
    if (seen) {
        seen.count++;
        // check if cycle
        const isCycle = _params.schemaPath.includes(schema);
        if (isCycle) {
            seen.cycle = _params.path;
        }
        return seen.schema;
    }
    // initialize
    const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
    ctx.seen.set(schema, result);
    ctx.sharedDefsExtractedFor = undefined;
    ctx.sharedEmitDoneFor = undefined;
    // custom method overrides default behavior
    const overrideSchema = schema._zod.toJSONSchema?.();
    if (overrideSchema) {
        result.schema = overrideSchema;
    }
    else {
        const params = {
            ..._params,
            schemaPath: [..._params.schemaPath, schema],
            path: _params.path,
        };
        if (schema._zod.processJSONSchema) {
            schema._zod.processJSONSchema(ctx, result.schema, params);
        }
        else {
            const _json = result.schema;
            const processor = ctx.processors[def.type];
            if (!processor) {
                throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
            }
            processor(schema, ctx, _json, params);
        }
        const parent = schema._zod.parent;
        if (parent) {
            // Also set ref if processor didn't (for inheritance)
            if (!result.ref)
                result.ref = parent;
            process(parent, ctx, params);
            ctx.seen.get(parent).isParent = true;
        }
    }
    // metadata
    const meta = ctx.metadataRegistry.get(schema);
    if (meta)
        assignProps(result.schema, meta);
    if (ctx.io === "input" && isTransforming(schema)) {
        // examples/defaults only apply to output type of pipe
        delete result.schema.examples;
        delete result.schema.default;
    }
    // set prefault as default
    if (ctx.io === "input" && "_prefault" in result.schema)
        (_a = result.schema).default ?? (_a.default = result.schema._prefault);
    delete result.schema._prefault;
    // pulling fresh from ctx.seen in case it was overwritten
    const _result = ctx.seen.get(schema);
    return _result.schema;
}
// Escape a reference token for use in a JSON Pointer fragment (RFC 6901): `~` becomes `~0` and `/` becomes `~1`. The `~` replacement must run first.
function encodeJSONPointerSegment(segment) {
    return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema
// params: EmitParams
) {
    // iterate over seen map;
    const root = ctx.seen.get(schema);
    if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    // With `external` set, every registered schema resolves through the external branch of `makeURI`, so the root branch below produces the same ref the external branch would — this pass is identical whichever schema it is called with, and only needs to run once.
    if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
        return;
    // Track ids to detect duplicates across different schemas
    const idToSchema = new Map();
    for (const entry of ctx.seen.entries()) {
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            const existing = idToSchema.get(id);
            if (existing && existing !== entry[0]) {
                throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
            }
            idToSchema.set(id, entry[0]);
        }
    }
    // returns a ref to the schema defId will be empty if the ref points to an external schema (or #)
    const makeURI = (entry) => {
        // comparing the seen objects because sometimes multiple schemas map to the same seen object. e.g. lazy
        // external is configured
        const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
        if (ctx.external) {
            const externalId = ctx.external.registry.get(entry[0])?.id; // ?? "__shared";// `__schema${ctx.counter++}`;
            // check if schema is in the external registry
            const uriGenerator = ctx.external.uri ?? ((id) => id);
            if (externalId) {
                return { ref: uriGenerator(externalId) };
            }
            // otherwise, add to __shared
            const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
            entry[1].defId = id; // set defId so it will be reused if needed
            return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
        }
        const uriPrefix = `#`;
        const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
        // an id-less root has nowhere to be extracted to, so it stays inline and self-references as `#`
        if (entry[1] === root && !entry[1].schema.id) {
            return { ref: uriPrefix };
        }
        // self-contained schema
        const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
        return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
    };
    // stored cached version in `def` property remove all properties, set $ref
    const extractToDef = (entry) => {
        // if the schema is already a reference, do not extract it
        if (entry[1].schema.$ref) {
            return;
        }
        const seen = entry[1];
        const { ref, defId } = makeURI(entry);
        seen.def = { ...seen.schema };
        // defId won't be set if the schema is a reference to an external schema or if the schema is the root schema
        if (defId)
            seen.defId = defId;
        // wipe away all properties except $ref
        const schema = seen.schema;
        for (const key in schema) {
            delete schema[key];
        }
        schema.$ref = ref;
    };
    // throw on cycles
    // break cycles
    if (ctx.cycles === "throw") {
        for (const entry of ctx.seen.entries()) {
            const seen = entry[1];
            if (seen.cycle) {
                throw new Error("Cycle detected: " +
                    `#/${seen.cycle?.join("/")}/<root>` +
                    '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
            }
        }
    }
    // extract schemas into $defs
    for (const entry of ctx.seen.entries()) {
        const seen = entry[1];
        // convert root schema to # $ref
        if (schema === entry[0]) {
            extractToDef(entry); // this has special handling for the root schema
            continue;
        }
        // extract schemas that are in the external registry
        if (ctx.external) {
            const ext = ctx.external.registry.get(entry[0])?.id;
            if (schema !== entry[0] && ext) {
                extractToDef(entry);
                continue;
            }
        }
        // extract schemas with `id` meta
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            extractToDef(entry);
            continue;
        }
        // break cycles
        if (seen.cycle) {
            // any
            extractToDef(entry);
            continue;
        }
        // extract reused schemas
        if (seen.count > 1) {
            if (ctx.reused === "ref") {
                extractToDef(entry);
                // biome-ignore lint:
                continue;
            }
        }
    }
    if (ctx.external)
        ctx.sharedDefsExtractedFor = ctx.external;
}
/** Rewrites `anyOf: [{type: "a"}, {type: "b"}]` to `type: ["a", "b"]`, which every JSON Schema draft treats as equivalent and most consumers render far better for the nullable case. Only branches that are a bare type assertion qualify — anything carrying a constraint, `$ref`, `const` or metadata is left alone. Runs after `flattenRef`, so a branch an override decorated or `$defs` extraction turned into a `$ref` is no longer bare and correctly stays in `anyOf`. `oneOf` is excluded: `integer` and `number` overlap, so "exactly one" and "at least one" are not the same there. OpenAPI 3.0 is excluded: its `type` must be a single string. */
function compactTypeUnion(schema) {
    const options = schema.anyOf;
    if (!Array.isArray(options) || options.length === 0 || schema.type !== undefined)
        return;
    const types = [];
    for (const option of options) {
        if (!option || typeof option !== "object")
            return;
        // A branch that is itself a compactible union folds into this one — nested `anyOf` and a flat `type` array say the same thing. Compacting it first also makes the result independent of the order this pass walks the seen map in.
        compactTypeUnion(option);
        const keys = Object.keys(option);
        if (keys.length !== 1 || keys[0] !== "type")
            return;
        const type = option.type;
        for (const member of Array.isArray(type) ? type : [type]) {
            if (typeof member !== "string")
                return;
            if (!types.includes(member))
                types.push(member);
        }
    }
    delete schema.anyOf;
    // A `type` array must be non-empty and unique (metaschema); a single member is spelled as a bare string.
    schema.type = types.length === 1 ? types[0] : types;
}
/** Keywords `foldIntersection` knows how to combine. Anything else — `$ref`, `patternProperties`,
 * an annotation like `description` — makes a member unfoldable, so a constraint this does not
 * understand leaves the `allOf` alone instead of being silently dropped or misattributed. */
const FOLDABLE_KEYS = new Set(["type", "properties", "required", "additionalProperties"]);
const UNION_KEYS = ["oneOf", "anyOf"];
/** A member's constraint on a key it does not declare itself. A `catchall` states one; `false`, an absent `additionalProperties`, and the empty schema a loose object emits state nothing. */
function undeclaredConstraint(member) {
    const extra = member.additionalProperties;
    if (extra === undefined || extra === false || typeof extra !== "object" || extra === null)
        return null;
    return Object.keys(extra).length ? extra : null;
}
/** Combines object members into the single object they describe together, or returns `null` if any of them carries a keyword outside {@link FOLDABLE_KEYS}. */
function foldObjects(members) {
    const objects = [];
    for (const member of members) {
        // A boolean subschema is legal JSON Schema and carries no keywords to fold.
        if (typeof member !== "object" || member.type !== "object")
            return null;
        for (const key in member) {
            if (!FOLDABLE_KEYS.has(key))
                return null;
        }
        objects.push(member);
    }
    const properties = {};
    const required = new Set();
    for (const object of objects) {
        for (const key in object.properties) {
            // `in` would report a `__proto__` key as already present via the prototype chain and skip it.
            if (Object.prototype.hasOwnProperty.call(properties, key))
                continue;
            // Every member constrains this key: the ones that declare it say how, and a `catchall` member constrains it too even though it does not name it. The key has to satisfy all of them, which is the same intersection one level down.
            const parts = [];
            for (const other of objects) {
                const part = other.properties?.[key] ?? undeclaredConstraint(other);
                if (part === null || part === undefined)
                    continue;
                if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
                    parts.push(part);
            }
            const merged = parts.length === 1
                ? parts[0]
                : (foldObjects(parts) ?? { allOf: parts });
            (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.assignProp)(properties, key, merged);
        }
        for (const key of object.required ?? [])
            required.add(key);
    }
    const folded = { type: "object", properties };
    if (required.size)
        folded.required = [...required];
    // A key no member declares is rejected only when every member rejects it, so the fold is closed only when every member is. Otherwise it carries whatever the `catchall` members demand of such a key.
    if (objects.every((object) => object.additionalProperties === false)) {
        folded.additionalProperties = false;
    }
    else {
        const constraints = [];
        for (const object of objects) {
            const constraint = undeclaredConstraint(object);
            if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
                constraints.push(constraint);
        }
        if (constraints.length === 1)
            folded.additionalProperties = constraints[0];
        else if (constraints.length > 1)
            folded.additionalProperties = { allOf: constraints };
    }
    return folded;
}
/** `additionalProperties` in an `allOf` member sees only that member's own `properties`, so two
 * closed object members reject each other's keys and the schema validates nothing. Zod's parser
 * pools the key sets instead — `handleIntersectionResults` reports a key as unrecognized only when
 * *every* side rejects it — so the emitted schema has to pool them too, and folding the members
 * into one object is the encoding that says so on every target.
 *
 * This runs from `finalize`, after `extractDefs`, which is what keeps it clear of the `$ref`
 * machinery: a member extracted into `$defs` is already a `$ref` by now and declines to fold, so it
 * keeps its reference and its own closedness rather than being inlined as a stale copy. */
function foldIntersection(json) {
    const allOf = json.allOf;
    if (!Array.isArray(allOf) || allOf.length < 2)
        return;
    // An `override` runs before this pass and may have written object keywords onto the intersection itself. Those are deliberate, so decline rather than overwrite them.
    for (const key of FOLDABLE_KEYS)
        if (key in json)
            return;
    // An intersection distributes over a union: `A & (X | Y)` is `(A & X) | (A & Y)`. Only the first union is distributed over; a second one stays among the members every branch folds against, where it fails the object check and declines the whole intersection rather than multiplying out.
    const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
    let folded = null;
    if (!unions.length) {
        folded = foldObjects(allOf);
    }
    else {
        const union = unions[0];
        const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
        if (Object.keys(union).length !== 1)
            return;
        const rest = allOf.filter((m) => m !== union);
        const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
        if (branches.some((b) => !b))
            return;
        folded = { [keyword]: branches };
    }
    if (!folded)
        return;
    delete json.allOf;
    assignProps(json, folded);
}
function finalize(ctx, schema) {
    const root = ctx.seen.get(schema);
    if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    // flatten refs - inherit properties from parent schemas
    const flattenRef = (zodSchema) => {
        const seen = ctx.seen.get(zodSchema);
        // already processed
        if (seen.ref === null)
            return;
        const schema = seen.def ?? seen.schema;
        const _cached = { ...schema };
        const ref = seen.ref;
        seen.ref = null; // prevent infinite recursion
        if (ref) {
            flattenRef(ref);
            const refSeen = ctx.seen.get(ref);
            const refSchema = refSeen.schema;
            // merge referenced schema into current
            if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
                // older drafts can't combine $ref with other properties
                schema.allOf = schema.allOf ?? [];
                schema.allOf.push(refSchema);
            }
            else {
                assignProps(schema, refSchema);
            }
            // restore child's own properties (child wins)
            assignProps(schema, _cached);
            const isParentRef = zodSchema._zod.parent === ref;
            // For parent chain, child is a refinement - remove parent-only properties
            if (isParentRef) {
                for (const key in schema) {
                    if (key === "$ref" || key === "allOf")
                        continue;
                    if (!(key in _cached)) {
                        delete schema[key];
                    }
                }
            }
            // When ref was extracted to $defs, remove properties that match the definition
            if (refSchema.$ref && refSeen.def) {
                for (const key in schema) {
                    if (key === "$ref" || key === "allOf")
                        continue;
                    if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) {
                        delete schema[key];
                    }
                }
            }
        }
        // If parent was extracted (has $ref), propagate $ref to this schema. This handles cases like: readonly().meta({id}).describe() where processor sets ref to innerType but parent should be referenced
        const parent = zodSchema._zod.parent;
        if (parent && parent !== ref) {
            // Ensure parent is processed first so its def has inherited properties
            flattenRef(parent);
            const parentSeen = ctx.seen.get(parent);
            if (parentSeen?.schema.$ref) {
                schema.$ref = parentSeen.schema.$ref;
                // De-duplicate with parent's definition
                if (parentSeen.def) {
                    for (const key in schema) {
                        if (key === "$ref" || key === "allOf")
                            continue;
                        if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) {
                            delete schema[key];
                        }
                    }
                }
            }
        }
        // execute overrides
        ctx.override({
            zodSchema: zodSchema,
            jsonSchema: schema,
            path: seen.path ?? [],
        });
    };
    // Flattening walks the whole map and clears each `ref` as it goes, so a second call over the same map is a no-op scan. Skip it outright once it has run for a registry conversion.
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of [...ctx.seen.entries()].reverse()) {
            flattenRef(entry[0]);
        }
        if (ctx.target !== "openapi-3.0") {
            for (const entry of ctx.seen.entries()) {
                compactTypeUnion(entry[1].def ?? entry[1].schema);
            }
        }
        for (const rewrite of ctx.deferred)
            rewrite();
        // After flattening, every member that was extracted is a `$ref`, so the fold sees the final shape. A schema that inherits an intersection — through `z.lazy`, or any `ref` chain — holds the same `allOf` array, so fold by array identity to catch every copy.
        if (ctx.intersections.length) {
            const carriers = new Map();
            for (const seen of ctx.seen.values()) {
                for (const json of [seen.schema, seen.def]) {
                    const allOf = json?.allOf;
                    if (!Array.isArray(allOf))
                        continue;
                    const existing = carriers.get(allOf);
                    if (existing)
                        existing.push(json);
                    else
                        carriers.set(allOf, [json]);
                }
            }
            for (const allOf of ctx.intersections) {
                for (const json of carriers.get(allOf) ?? [])
                    foldIntersection(json);
            }
        }
    }
    const result = {};
    if (ctx.target === "draft-2020-12") {
        result.$schema = "https://json-schema.org/draft/2020-12/schema";
    }
    else if (ctx.target === "draft-07") {
        result.$schema = "http://json-schema.org/draft-07/schema#";
    }
    else if (ctx.target === "draft-04") {
        result.$schema = "http://json-schema.org/draft-04/schema#";
    }
    else if (ctx.target === "openapi-3.0") {
        // OpenAPI 3.0 schema objects should not include a $schema property
    }
    else {
        // Arbitrary string values are allowed but won't have a $schema property set
    }
    if (ctx.external?.uri) {
        const id = ctx.external.registry.get(schema)?.id;
        if (!id)
            throw new Error("Schema is missing an `id` property");
        result.$id = ctx.external.uri(id);
    }
    // when the root was extracted into $defs, `root.schema` is the `$ref` wrapper and `root.def` is the body that now lives under $defs
    assignProps(result, root.defId ? root.schema : (root.def ?? root.schema));
    // The `id` in `.meta()` is a Zod-specific registration tag used to extract schemas into $defs — it is not user-facing JSON Schema metadata. Strip it from the output body where it would otherwise leak. The id is preserved implicitly via the $defs key (and via $ref paths).
    const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
    if (rootMetaId !== undefined && result.id === rootMetaId)
        delete result.id;
    // build defs object. With `external`, `defs` is the shared object every schema writes into, so the same entries are reassigned on every call. Without it, `defs` is fresh per call and must be rebuilt.
    const defs = ctx.external?.defs ?? {};
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of ctx.seen.entries()) {
            const seen = entry[1];
            if (seen.def && seen.defId) {
                if (seen.def.id === seen.defId)
                    delete seen.def.id;
                (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.assignProp)(defs, seen.defId, seen.def);
            }
        }
    }
    if (ctx.external)
        ctx.sharedEmitDoneFor = ctx.external;
    // set definitions in result
    if (ctx.external) {
    }
    else {
        if (Object.keys(defs).length > 0) {
            if (ctx.target === "draft-2020-12") {
                result.$defs = defs;
            }
            else {
                result.definitions = defs;
            }
        }
    }
    try {
        // this "finalizes" this schema and ensures all cycles are removed each call to finalize() is functionally independent though the seen map is shared
        const finalized = JSON.parse(JSON.stringify(result));
        Object.defineProperty(finalized, "~standard", {
            value: {
                ...schema["~standard"],
                jsonSchema: {
                    input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
                    output: createStandardJSONSchemaMethod(schema, "output", ctx.processors),
                },
            },
            enumerable: false,
            writable: false,
        });
        return finalized;
    }
    catch (_err) {
        throw new Error("Error converting schema to JSON.");
    }
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: new Set() };
    if (ctx.seen.has(_schema))
        return false;
    ctx.seen.add(_schema);
    const def = _schema._zod.def;
    if (def.type === "transform")
        return true;
    if (def.type === "array")
        return isTransforming(def.element, ctx);
    if (def.type === "set")
        return isTransforming(def.valueType, ctx);
    if (def.type === "lazy")
        return isTransforming(def.getter(), ctx);
    if (def.type === "promise" ||
        def.type === "optional" ||
        def.type === "nonoptional" ||
        def.type === "nullable" ||
        def.type === "readonly" ||
        def.type === "default" ||
        def.type === "prefault" ||
        def.type === "catch") {
        return isTransforming(def.innerType, ctx);
    }
    if (def.type === "intersection") {
        return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
    }
    if (def.type === "record" || def.type === "map") {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    if (def.type === "pipe") {
        if (_schema._zod.traits.has("$ZodCodec"))
            return true;
        return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
    }
    if (def.type === "object") {
        for (const key in def.shape) {
            if (isTransforming(def.shape[key], ctx))
                return true;
        }
        return false;
    }
    if (def.type === "union") {
        for (const option of def.options) {
            if (isTransforming(option, ctx))
                return true;
        }
        return false;
    }
    if (def.type === "tuple") {
        for (const item of def.items) {
            if (isTransforming(item, ctx))
                return true;
        }
        if (def.rest && isTransforming(def.rest, ctx))
            return true;
        return false;
    }
    return false;
}
/**
 * Creates a toJSONSchema method for a schema instance.
 * This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
 */
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
    const ctx = initializeContext({ ...params, processors });
    process(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
    const { libraryOptions, target } = params ?? {};
    const ctx = initializeContext({ ...(libraryOptions ?? {}), target, io, processors });
    process(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
};


/***/ },

/***/ "./node_modules/zod/v4/core/util.js"
/*!******************************************!*\
  !*** ./node_modules/zod/v4/core/util.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BIGINT_FORMAT_RANGES: () => (/* binding */ BIGINT_FORMAT_RANGES),
/* harmony export */   CONSTANT_CATCH: () => (/* binding */ CONSTANT_CATCH),
/* harmony export */   Class: () => (/* binding */ Class),
/* harmony export */   NUMBER_FORMAT_RANGES: () => (/* binding */ NUMBER_FORMAT_RANGES),
/* harmony export */   aborted: () => (/* binding */ aborted),
/* harmony export */   allowsEval: () => (/* binding */ allowsEval),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   assertEqual: () => (/* binding */ assertEqual),
/* harmony export */   assertIs: () => (/* binding */ assertIs),
/* harmony export */   assertNever: () => (/* binding */ assertNever),
/* harmony export */   assertNotEqual: () => (/* binding */ assertNotEqual),
/* harmony export */   assignProp: () => (/* binding */ assignProp),
/* harmony export */   attachSchema: () => (/* binding */ attachSchema),
/* harmony export */   base64ToUint8Array: () => (/* binding */ base64ToUint8Array),
/* harmony export */   base64urlToUint8Array: () => (/* binding */ base64urlToUint8Array),
/* harmony export */   cached: () => (/* binding */ cached),
/* harmony export */   captureStackTrace: () => (/* binding */ captureStackTrace),
/* harmony export */   cleanEnum: () => (/* binding */ cleanEnum),
/* harmony export */   cleanRegex: () => (/* binding */ cleanRegex),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   cloneDef: () => (/* binding */ cloneDef),
/* harmony export */   codePointLength: () => (/* binding */ codePointLength),
/* harmony export */   constantCatch: () => (/* binding */ constantCatch),
/* harmony export */   createTransparentProxy: () => (/* binding */ createTransparentProxy),
/* harmony export */   defineLazy: () => (/* binding */ defineLazy),
/* harmony export */   defineLazyInternal: () => (/* binding */ defineLazyInternal),
/* harmony export */   esc: () => (/* binding */ esc),
/* harmony export */   escapeRegex: () => (/* binding */ escapeRegex),
/* harmony export */   explicitlyAborted: () => (/* binding */ explicitlyAborted),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   finalizeIssue: () => (/* binding */ finalizeIssue),
/* harmony export */   floatSafeRemainder: () => (/* binding */ floatSafeRemainder),
/* harmony export */   getElementAtPath: () => (/* binding */ getElementAtPath),
/* harmony export */   getEnumValues: () => (/* binding */ getEnumValues),
/* harmony export */   getLengthableOrigin: () => (/* binding */ getLengthableOrigin),
/* harmony export */   getParsedType: () => (/* binding */ getParsedType),
/* harmony export */   getSizableOrigin: () => (/* binding */ getSizableOrigin),
/* harmony export */   hexToUint8Array: () => (/* binding */ hexToUint8Array),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   installLazyProp: () => (/* binding */ installLazyProp),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   issue: () => (/* binding */ issue),
/* harmony export */   joinValues: () => (/* binding */ joinValues),
/* harmony export */   jsonStringifyReplacer: () => (/* binding */ jsonStringifyReplacer),
/* harmony export */   members: () => (/* binding */ members),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   mergeDefs: () => (/* binding */ mergeDefs),
/* harmony export */   normalizeParams: () => (/* binding */ normalizeParams),
/* harmony export */   nullish: () => (/* binding */ nullish),
/* harmony export */   numKeys: () => (/* binding */ numKeys),
/* harmony export */   objectClone: () => (/* binding */ objectClone),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   optionalKeys: () => (/* binding */ optionalKeys),
/* harmony export */   own: () => (/* binding */ own),
/* harmony export */   parsedType: () => (/* binding */ parsedType),
/* harmony export */   partial: () => (/* binding */ partial),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   prefixIssues: () => (/* binding */ prefixIssues),
/* harmony export */   primitiveTypes: () => (/* binding */ primitiveTypes),
/* harmony export */   promiseAllObject: () => (/* binding */ promiseAllObject),
/* harmony export */   propertyKeyTypes: () => (/* binding */ propertyKeyTypes),
/* harmony export */   randomString: () => (/* binding */ randomString),
/* harmony export */   required: () => (/* binding */ required),
/* harmony export */   safeExtend: () => (/* binding */ safeExtend),
/* harmony export */   shallowClone: () => (/* binding */ shallowClone),
/* harmony export */   slugify: () => (/* binding */ slugify),
/* harmony export */   stringifyPrimitive: () => (/* binding */ stringifyPrimitive),
/* harmony export */   toZod: () => (/* binding */ toZod),
/* harmony export */   uint8ArrayToBase64: () => (/* binding */ uint8ArrayToBase64),
/* harmony export */   uint8ArrayToBase64url: () => (/* binding */ uint8ArrayToBase64url),
/* harmony export */   uint8ArrayToHex: () => (/* binding */ uint8ArrayToHex),
/* harmony export */   unwrapMessage: () => (/* binding */ unwrapMessage)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/zod/v4/core/core.js");

// functions
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function toZod() {
    return (schema) => schema;
}
function assertIs(_arg) { }
function assertNever(_x) {
    throw new Error("Unexpected value in exhaustive check");
}
function assert(_) { }
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries)
        .filter(([k, _]) => numericValues.indexOf(+k) === -1)
        .map(([_, v]) => v);
    return values;
}
function joinValues(array, separator = "|") {
    return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint")
        return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value() {
            if (!set) {
                const value = getter();
                Object.defineProperty(this, "value", { value });
                return value;
            }
            throw new Error("cached value already set");
        },
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const ratio = val / step;
    const roundedRatio = Math.round(ratio);
    // `val` and `step` each round to a double before the division rounds again, so a true decimal multiple's quotient can sit up to 1.5 of these scaled epsilons from the integer. A 1x tolerance therefore rejected 2.03 as a multiple of 0.07; 4x covers the worst case with margin.
    const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
    if (Math.abs(ratio - roundedRatio) < tolerance)
        return 0;
    return ratio - roundedRatio;
}
const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get() {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set(v) {
            Object.defineProperty(object, key, {
                value: v,
                // configurable: true,
            });
            // object[key] = v;
        },
        configurable: true,
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
    });
}
function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs) {
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path)
        return obj;
    return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
        const resolvedObj = {};
        for (let i = 0; i < keys.length; i++) {
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
function slugify(input) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
const captureStackTrace = ("captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => { });
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = /* @__PURE__*/ cached(() => {
    // Skip the probe under `jitless`: strict CSPs report the caught `new Function` as a `securitypolicyviolation` even though the throw is swallowed.
    if (_core_js__WEBPACK_IMPORTED_MODULE_0__.globalConfig.jitless) {
        return false;
    }
    // @ts-ignore
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    }
    catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false)
        return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined)
        return true;
    if (typeof ctor !== "function")
        return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false)
        return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o))
        return { ...o };
    if (Array.isArray(o))
        return [...o];
    if (o instanceof Map)
        return new Map(o);
    if (o instanceof Set)
        return new Set(o);
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
const propertyKeyTypes = /* @__PURE__*/ new Set(["string", "number", "symbol"]);
const primitiveTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// zod-specific utils
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent)
        cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params)
        return {};
    if (typeof params === "string")
        return { error: () => params };
    if (params?.message !== undefined) {
        if (params?.error !== undefined)
            throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
        return { ...params, error: () => params.error };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get(_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set(_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has(_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty(_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys(_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty(_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        },
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint")
        return value.toString() + "n";
    if (typeof value === "string")
        return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k) => {
        return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
    });
}
// Wrapped in a `@__PURE__` IIFE: esbuild never tree-shakes a top-level initializer that contains a member access on `Number`, so the bare object literal survived into every bundle.
const NUMBER_FORMAT_RANGES = /*@__PURE__*/ (() => ({
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-3.4028234663852886e38, 3.4028234663852886e38],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
}))();
const BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")],
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".pick() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const newShape = {};
            // `for...in` skips symbols, so a symbol in the mask would select nothing
            for (const key of Reflect.ownKeys(mask)) {
                if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
                    throw new Error(`Unrecognized key: "${String(key)}"`);
                }
                if (!mask[key])
                    continue;
                assignProp(newShape, key, currDef.shape[key]);
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".omit() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const newShape = { ...schema._zod.def.shape };
            for (const key of Reflect.ownKeys(mask)) {
                if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
                    throw new Error(`Unrecognized key: "${String(key)}"`);
                }
                if (!mask[key])
                    continue;
                delete newShape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        // Only throw if new shape overlaps with existing shape. Use getOwnPropertyDescriptor to check key existence without accessing values
        const existingShape = schema._zod.def.shape;
        for (const key of Reflect.ownKeys(shape)) {
            if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
                throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            }
        }
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const _shape = { ...schema._zod.def.shape, ...shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
    });
    return clone(schema, def);
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const _shape = { ...schema._zod.def.shape, ...shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
    });
    return clone(schema, def);
}
function merge(a, b) {
    if (!b?._zod?.def) {
        throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    }
    if (a._zod.def.checks?.length) {
        throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    const def = mergeDefs(a._zod.def, {
        get shape() {
            const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        get catchall() {
            return b._zod.def.catchall;
        },
        checks: b._zod.def.checks ?? [],
    });
    return clone(a, def);
}
function partial(Class, schema, mask, name = "partial") {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
    }
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const oldShape = schema._zod.def.shape;
            const shape = { ...oldShape };
            if (mask) {
                for (const key of Reflect.ownKeys(mask)) {
                    if (!Object.prototype.hasOwnProperty.call(oldShape, key)) {
                        throw new Error(`Unrecognized key: "${String(key)}"`);
                    }
                    if (!mask[key])
                        continue;
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class
                        ? new Class({
                            type: "optional",
                            innerType: oldShape[key],
                        })
                        : oldShape[key];
                }
            }
            else {
                // the spread copies symbol keys; `for...in` would not reach them
                for (const key of Reflect.ownKeys(oldShape)) {
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class
                        ? new Class({
                            type: "optional",
                            innerType: oldShape[key],
                        })
                        : oldShape[key];
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: [],
    });
    return clone(schema, def);
}
function required(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape() {
            const oldShape = schema._zod.def.shape;
            const shape = { ...oldShape };
            if (mask) {
                for (const key of Reflect.ownKeys(mask)) {
                    if (!Object.prototype.hasOwnProperty.call(shape, key)) {
                        throw new Error(`Unrecognized key: "${String(key)}"`);
                    }
                    if (!mask[key])
                        continue;
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key],
                    });
                }
            }
            else {
                for (const key of Reflect.ownKeys(oldShape)) {
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key],
                    });
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
    });
    return clone(schema, def);
}
// invalid_type | too_big | too_small | invalid_format | not_multiple_of | unrecognized_keys | invalid_union | invalid_key | invalid_element | invalid_value | custom
function aborted(x, startIndex = 0) {
    if (x.aborted === true)
        return true;
    for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue !== true) {
            return true;
        }
    }
    return false;
}
// Checks for explicit abort (continue === false), as opposed to implicit abort (continue === undefined). Used to respect `abort: true` in .refine() even for checks that have a `when` function.
function explicitlyAborted(x, startIndex = 0) {
    if (x.aborted === true)
        return true;
    for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue === false) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss) => {
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
/* A check holds no link back to the schema it is attached to — the same check instance is shared by every clone of that schema — so the owner is stamped onto the issues a check just raised, at the only point where both are in scope. Runs on the failure path only; `start` is the issue count from before the check ran. */
function attachSchema(issues, start, inst) {
    var _a;
    for (let i = start; i < issues.length; i++) {
        (_a = issues[i]).schema ?? (_a.schema = inst);
    }
}
function finalizeIssue(iss, ctx, config) {
    var _a;
    // A schema that raised an issue itself owns it outright, and outranks any stamp an enclosing check left in `attachSchema`. String formats and z.custom() are schema and check at once, so when they act as a check they defer to that stamp instead.
    const traits = iss.inst?._zod?.traits;
    if (traits?.has("$ZodType")) {
        if (traits.has("$ZodCheck"))
            (_a = iss).schema ?? (_a.schema = iss.inst);
        else
            iss.schema = iss.inst;
    }
    // Decreasing specificity, first map to return a message wins. `inst` is whatever raised the issue, so a check's own map outranks the owning schema's.
    const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
    const message = iss.message
        ? iss.message
        : (unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ??
            unwrapMessage(schemaError?.(iss)) ??
            unwrapMessage(ctx?.error?.(iss)) ??
            unwrapMessage(config.customError?.(iss)) ??
            unwrapMessage(config.localeError?.(iss)) ??
            "Invalid input");
    const { inst: _inst, schema: _schema, continue: _continue, input: _input, ...rest } = iss;
    rest.path ?? (rest.path = []);
    rest.message = message;
    if (ctx?.reportInput) {
        rest.input = _input;
    }
    return rest;
}
function getSizableOrigin(input) {
    if (input instanceof Set)
        return "set";
    if (input instanceof Map)
        return "map";
    // @ts-ignore
    if (input instanceof File)
        return "file";
    return "unknown";
}
const highSurrogate = /[\uD800-\uDBFF]/;
// Code points in `str`: a surrogate pair counts once, a lone surrogate as itself. Hand-rolled because the string iterator allocates and runs ~250x slower on this path; the regex probe exits ~50x quicker for a string with no astral characters.
function codePointLength(str) {
    const units = str.length;
    if (!highSurrogate.test(str))
        return units;
    let count = units;
    for (let i = 0; i < units - 1; i++) {
        if ((str.charCodeAt(i) & 0xfc00) === 0xd800 && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            count--;
            i++;
        }
    }
    return count;
}
function getLengthableOrigin(input) {
    if (Array.isArray(input))
        return "array";
    if (typeof input === "string")
        return "string";
    return "unknown";
}
function parsedType(data) {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "nan" : "number";
        }
        case "object": {
            if (data === null) {
                return "null";
            }
            if (Array.isArray(data)) {
                return "array";
            }
            const obj = data;
            if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
                return obj.constructor.name;
            }
        }
    }
    return t;
}
function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst,
        };
    }
    return { ...iss };
}
function cleanEnum(obj) {
    return Object.entries(obj)
        .filter(([k, _]) => {
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    })
        .map((el) => el[1]);
}
// Codec utility functions
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for (let i = 0; i < bytes.length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (base64.length % 4)) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
// instanceof
class Class {
    constructor(..._args) { }
}
//////////    PROTOTYPE INSTALLERS     //////////
//
// Members live on the prototype and materialize per instance on first read, which keeps own-property count under the step where V8 stops using inline slots. Changing anything here means re-measuring runtime, memory and bundle size together — see "The three axes" in AGENTS.md.
/**
 * Installs a trait's members on its prototype. Each value builds that member for the instance on first read; the built value shadows the accessor as an own property, so a detached `const { parse } = schema` keeps working.
 *
 * Call this from a `proto` initializer, which runs once per prototype — never per instance.
 */
function members(proto, table) {
    for (const key in table) {
        const desc = Object.getOwnPropertyDescriptor(table, key);
        // a getter installs as written, so it stays live: `description` reads through to the registry on every access. not enumerable: an object literal's is, and a prototype member never was
        if (desc.get)
            Object.defineProperty(proto, key, { ...desc, enumerable: false });
        // a method materializes bound on first read, which is what keeps a detached member working: `const opt = schema.optional; opt()`
        else
            defineBound(proto, key, desc.value);
    }
}
/** Shadows a prototype member with an own value, so a getter that builds from the instance runs once. */
function own(inst, key, value, enumerable = true) {
    Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
    return value;
}
/** Like {@link own}, for a member that was never an own data property and has to stay out of `Object.keys`. */
function hide(inst, key, value) {
    return own(inst, key, value, false);
}
function defineBound(proto, key, fn) {
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // vitest's spyOn calls a prototype getter bare to find the function it wraps, so a nullish receiver answers the raw method
            return this == null ? fn : own(this, key, fn.bind(this));
        },
        set(value) {
            own(this, key, value);
        },
    });
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */
function claim(inst, sentinel) {
    const proto = Object.getPrototypeOf(inst);
    // Runs on every construction, so `in` rather than the costlier `hasOwnProperty.call`. Sentinels are keys the group itself defines.
    return sentinel in proto ? undefined : proto;
}
// The internals whose init chain is installing. A second call for the same one is a derived constructor overriding its base, so it must not construct another schema in between or the override is dropped.
let installing;
// Set while a getter is running, so a value that resolved through a recursion break is not memoized. One shared descriptor shadows the key for the duration, which costs no per-key allocation.
let broke = false;
const breaker = {
    configurable: true,
    get() {
        broke = true;
        return undefined;
    },
};
/**
 * Installs a lazily-derived internal on the `_zod` prototype of `inst`'s
 * constructor, computed from the internals object itself and cached there on
 * first read. One accessor per constructor rather than one per instance.
 */
function defineLazyInternal(inst, key, compute) {
    const proto = Object.getPrototypeOf(inst._zod);
    if (key in proto && installing !== inst._zod) {
        // A repeat construction: everything is installed already. Cleared here so the reference is not held past the first construction of every type.
        installing = undefined;
        return;
    }
    installing = inst._zod;
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // Shadowed before computing so a re-entrant read from a recursive schema resolves to undefined instead of running the getter again.
            Object.defineProperty(this, key, breaker);
            const outer = broke;
            broke = false;
            try {
                const value = compute(this);
                // A result that resolved through a recursion break is recomputed once the graph is complete; everything else memoizes, undefined included.
                if (broke)
                    delete this[key];
                else
                    Object.defineProperty(this, key, { configurable: true, writable: true, value });
                broke = broke || outer;
                return value;
            }
            catch (err) {
                // A compute that threw memoizes nothing, so a later read runs it again and fails the same way. The shadow goes with it, since leaving it installed would answer undefined for every later read.
                delete this[key];
                broke = broke || outer;
                throw err;
            }
        },
        set(value) {
            Object.defineProperty(this, key, { configurable: true, writable: true, value });
        },
    });
}
/**
 * Installs `key` on `inst`'s prototype, computed by `make` on first read and cached there as an own
 * data property. One accessor per constructor rather than one per instance, because an own accessor
 * puts every instance after the first into v8 dictionary mode. The key doubles as the sentinel.
 */
function installLazyProp(inst, key, make, enumerable) {
    const proto = claim(inst, key);
    if (!proto)
        return;
    Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            // Shadowed before computing, so a re-entrant read from a self-referential shape resolves to undefined instead of running the getter again. A data property rather than an accessor: an own accessor is the dictionary-mode transition this exists to avoid.
            const desc = { configurable: true, writable: true, enumerable, value: undefined };
            Object.defineProperty(this, key, desc);
            // a compute that throws leaves the shadow behind, so later reads answer undefined instead of re-throwing; `defineLazy` did the same, and `defineLazyInternal`'s delete-on-catch would cost bytes in every bundle for a case only a throwing user getter reaches
            desc.value = make(this);
            Object.defineProperty(this, key, desc);
            return desc.value;
        },
        set(value) {
            Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
        },
    });
}
/** Marks the thunk `_catch` synthesises for a constant catch value. `Function.length` cannot tell that thunk from a user callback — rest and defaulted parameters both report arity 0 — and a user callback reads `ctx.error`, whose issues only finalize correctly against the caller's per-parse error map. Provenance can say what arity cannot. A plain string key rather than `Symbol.for`, whose call at module scope no bundler can prove pure — the same shape that anchored `urlCanParse` into every build. */
const CONSTANT_CATCH = "~constantCatch";
/** Wraps a constant catch value in a thunk tagged with {@link CONSTANT_CATCH}. */
function constantCatch(value) {
    const fn = () => value;
    fn[CONSTANT_CATCH] = true;
    return fn;
}


/***/ },

/***/ "./node_modules/zod/v4/core/versions.js"
/*!**********************************************!*\
  !*** ./node_modules/zod/v4/core/versions.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
const version = {
    major: 4,
    minor: 5,
    patch: 4,
};


/***/ },

/***/ "./node_modules/zod/v4/locales/en.js"
/*!*******************************************!*\
  !*** ./node_modules/zod/v4/locales/en.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);
/* harmony import */ var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/util.js */ "./node_modules/zod/v4/core/util.js");

const error = () => {
    const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        mac: "MAC address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        credit_card: "credit card number",
        jwt: "JWT",
        template_literal: "input",
    };
    // type names: missing keys = do not translate (use raw value via ?? fallback)
    const TypeDictionary = {
        // Compatibility: "nan" -> "NaN" for display
        nan: "NaN",
        // All other type names omitted - they fall back to raw values via ?? operator
    };
    function getTypeName(type, input) {
        if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
            return String(input);
        }
        return TypeDictionary[type] ?? type;
    }
    return (issue) => {
        switch (issue.code) {
            case "invalid_type": {
                const expected = getTypeName(issue.expected);
                const receivedType = _core_util_js__WEBPACK_IMPORTED_MODULE_0__.parsedType(issue.input);
                const received = getTypeName(receivedType, issue.input);
                return `Invalid input: expected ${expected}, received ${received}`;
            }
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${_core_util_js__WEBPACK_IMPORTED_MODULE_0__.stringifyPrimitive(issue.values[0])}`;
                return `Invalid option: expected one of ${_core_util_js__WEBPACK_IMPORTED_MODULE_0__.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.exact ? "exactly " : issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.exact ? "exactly " : issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Invalid string: must start with "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Invalid string: must end with "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Invalid string: must include "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Invalid string: must match pattern ${_issue.pattern}`;
                return `Invalid ${FormatDictionary[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${issue.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${_core_util_js__WEBPACK_IMPORTED_MODULE_0__.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${issue.origin}`;
            case "invalid_union":
                if (issue.options && Array.isArray(issue.options) && issue.options.length > 0) {
                    const opts = issue.options.map((o) => `'${o}'`).join(" | ");
                    return `Invalid discriminator value. Expected ${opts}`;
                }
                if (issue.inclusive === false) {
                    return "Invalid input: more than one option matched";
                }
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${issue.origin}`;
            default:
                return `Invalid input`;
        }
    };
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return {
        localeError: error(),
    };
}


/***/ },

/***/ "./src/blocks/maes_collage_banner/block.json"
/*!***************************************************!*\
  !*** ./src/blocks/maes_collage_banner/block.json ***!
  \***************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maes/collage-banner","version":"0.1.0","title":"Collage Banner","category":"widgets","description":"A pile of stuff banner","attributes":{"imgs":{"type":"array","default":[]},"background":{"type":"array","default":[]}},"example":{},"supports":{"html":false},"textdomain":"maes-domain","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority ||= 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (((priority & 1) === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	// set .name for anonymous default exports per ES spec
/******/ 	// skipped when the property is non-configurable (pre-ES2015 engines),
/******/ 	// where Object.defineProperty would throw
/******/ 	__webpack_require__.dn = (x) => {
/******/ 		var descriptor = Object.getOwnPropertyDescriptor(x, "name");
/******/ 		if (!descriptor || (!descriptor.writable && descriptor.configurable)) Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/maes_collage_banner/index": 0,
/******/ 			"blocks/maes_collage_banner/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkmuseum_aesthetics"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/maes_collage_banner/style-index"], () => (__webpack_require__("./src/blocks/maes_collage_banner/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map