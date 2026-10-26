/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/maes_container/edit.tsx"
/*!********************************************!*\
  !*** ./src/blocks/maes_container/edit.tsx ***!
  \********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/maes_container/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/root.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/legend.mjs");
/* harmony import */ var _components_sidebar_maes_border_style_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/sidebar/maes-border-style-control */ "./src/components/sidebar/maes-border-style-control.tsx");
/* harmony import */ var _components_maes_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/maes-container */ "./src/components/maes-container.tsx");
/* harmony import */ var _components_sidebar_maes_fade_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/sidebar/maes-fade-control */ "./src/components/sidebar/maes-fade-control.tsx");
/* harmony import */ var _components_sidebar_maes_drop_shadow_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/sidebar/maes-drop-shadow-control */ "./src/components/sidebar/maes-drop-shadow-control.tsx");
/* harmony import */ var _components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/sidebar/maes-offset-control */ "./src/components/sidebar/maes-offset-control.tsx");

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
  // could be refactored to work with multiple palettes
  const colorPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSettings)('color.palette.theme')[0];
  const gradientPalette = colorPalette.map(color => {
    return {
      name: color.name,
      slug: color.slug + '-gradient',
      gradient: `linear-gradient(0deg, ${color.color} 0%, transparent 100%)`
    };
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'maes-domain'),
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full width', 'maes-domain'),
          checked: attributes.fullWidth,
          onChange: value => {
            setAttributes({
              fullWidth: value
            });
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_5__.FieldsetRoot, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_6__.FieldsetLegend, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset', 'maes-domain')
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              style: {
                marginRight: '3px'
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
                attributes: attributes,
                setAttributes: setAttributes,
                direction: 'top'
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
              attributes: attributes,
              setAttributes: setAttributes,
              direction: 'bottom'
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              style: {
                marginRight: '3px'
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
                attributes: attributes,
                setAttributes: setAttributes,
                direction: 'left'
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
              attributes: attributes,
              setAttributes: setAttributes,
              direction: 'right'
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.AnglePickerControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rotation', 'maes-domain'),
          value: attributes.rotation,
          onChange: value => setAttributes({
            rotation: value
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Opacity', 'maes-domain'),
          value: attributes.opacity,
          onChange: value => {
            setAttributes({
              opacity: value
            });
          },
          initialPosition: 100
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_5__.FieldsetRoot, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_6__.FieldsetLegend, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'maes-domain')
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_fade_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'horizontal'
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_fade_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'vertical'
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_5__.FieldsetRoot, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_6__.FieldsetLegend, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'maes-domain')
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient background'),
            checked: attributes.gradientBackground,
            onChange: value => {
              setAttributes({
                gradientBackground: value
              });
            }
          }), !attributes.gradientBackground && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
            colors: colorPalette,
            value: attributes.background,
            onChange: value => {
              setAttributes({
                background: value
              });
            }
          }), attributes.gradientBackground && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.GradientPicker, {
            value: attributes.background,
            onChange: value => {
              setAttributes({
                background: value
              });
            },
            gradients: gradientPalette
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_5__.FieldsetRoot, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_6__.FieldsetLegend, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'maes-domain')
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_border_style_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'top',
            colors: colorPalette
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_border_style_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'bottom',
            colors: colorPalette
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_border_style_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'left',
            colors: colorPalette
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_border_style_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            direction: 'right',
            colors: colorPalette
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_drop_shadow_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
          attributes: attributes,
          setAttributes: setAttributes,
          colors: colorPalette
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_maes_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attributes: attributes,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {})
      })
    }))]
  });
}

/***/ },

/***/ "./src/blocks/maes_container/index.tsx"
/*!*********************************************!*\
  !*** ./src/blocks/maes_container/index.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/maes_container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/maes_container/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/maes_container/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/maes_container/block.json");
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
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/maes_container/save.tsx"
/*!********************************************!*\
  !*** ./src/blocks/maes_container/save.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {});
}

/***/ },

/***/ "./src/components/maes-container.tsx"
/*!*******************************************!*\
  !*** ./src/components/maes-container.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MAESContainer({
  attributes,
  children
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  const border = attributes.border;
  const offset = attributes.offset;
  const fade = attributes.fade;
  const shadow = attributes.shadow;
  //got some trigonometry in this 0___0
  const width = attributes.rotation >= 90 && attributes.rotation <= 270 ? `calc((100vw / cos(${attributes.rotation - 360}*(3.14/180)))* -1)` // fix for when it is upside down
  : `calc(100vw / cos(${attributes.rotation}*(3.14/180)))`;
  const widthStyle = attributes.fullWidth ? {
    width: width
  } : {
    left: offset.left ? offset.left : 0,
    right: offset.right ? offset.right : 0,
    borderLeftWidth: (_a = border.left) === null || _a === void 0 ? void 0 : _a.width,
    borderLeftColor: (_b = border.left) === null || _b === void 0 ? void 0 : _b.color,
    borderLeftStyle: (_c = border.left) === null || _c === void 0 ? void 0 : _c.style,
    borderRightWidth: (_d = border.right) === null || _d === void 0 ? void 0 : _d.width,
    borderRightColor: (_e = border.right) === null || _e === void 0 ? void 0 : _e.color,
    borderRightStyle: (_f = border.right) === null || _f === void 0 ? void 0 : _f.style
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: 'maes-container__container',
    children: [children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: 'maes-container__background-wrap',
      style: shadow.toggle ? {
        filter: `drop-shadow(${shadow.horizontal} ${shadow.vertical} ${shadow.size} ${shadow.color})`
      } : {},
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: `maes-container__background ${attributes.fullWidth && `maes-container__fullwidth`}`,
        style: Object.assign(Object.assign({
          background: attributes.background,
          opacity: attributes.opacity / 100,
          top: offset.top ? offset.top : 0,
          bottom: offset.bottom ? offset.bottom : 0,
          transform: `rotate(${attributes.rotation}deg) ${attributes.fullWidth ? `translate(-50%)` : ``}`,
          transformOrigin: 'left',
          borderTopWidth: (_g = border.top) === null || _g === void 0 ? void 0 : _g.width,
          borderTopColor: (_h = border.top) === null || _h === void 0 ? void 0 : _h.color,
          borderTopStyle: (_j = border.top) === null || _j === void 0 ? void 0 : _j.style,
          borderBottomWidth: (_k = border.bottom) === null || _k === void 0 ? void 0 : _k.width,
          borderBottomColor: (_l = border.bottom) === null || _l === void 0 ? void 0 : _l.color,
          borderBottomStyle: (_m = border.bottom) === null || _m === void 0 ? void 0 : _m.style
        }, widthStyle), {
          maskImage: `${fade.horizontal.toggle ? `linear-gradient(
								90deg,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 1) ${fade.horizontal.width / 2}%,
								rgba(0, 0, 0, 1) ${100 - fade.horizontal.width / 2}%,
								rgba(0, 0, 0, 0) 100%
							)` : ``}${fade.horizontal.toggle && fade.vertical.toggle ? ',' : ''} ${fade.vertical.toggle ? `linear-gradient(
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 1) ${fade.vertical.width / 2}%,
								rgba(0, 0, 0, 1) ${100 - fade.vertical.width / 2}%,
								rgba(0, 0, 0, 0) 100%
							)` : ``}`,
          maskComposite: 'intersect'
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MAESContainer);

/***/ },

/***/ "./src/components/sidebar/maes-border-style-control.tsx"
/*!**************************************************************!*\
  !*** ./src/components/sidebar/maes-border-style-control.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function BorderStyleControl({
  attributes,
  setAttributes,
  direction,
  colors
}) {
  const attribute = attributes.border[direction];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: attributes.fullWidth && (direction === 'left' || direction === 'right') ? 'maes-disabled' : '',
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BorderControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(direction.charAt(0).toUpperCase() + direction.slice(1), 'maes-domain'),
      value: attribute,
      enableAlpha: true,
      enableStyle: true,
      onChange: value => setAttributes({
        border: Object.assign(Object.assign({}, attributes.border), {
          [direction]: value
        })
      }),
      colors: colors
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderStyleControl);

/***/ },

/***/ "./src/components/sidebar/maes-drop-shadow-control.tsx"
/*!*************************************************************!*\
  !*** ./src/components/sidebar/maes-drop-shadow-control.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/root.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/legend.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);




function DropShadowControl({
  attributes,
  setAttributes,
  colors
}) {
  const shadow = attributes.shadow;
  // first unit control inside a div to remove programicaly added margin bottom, bit of a hack but works
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_2__.FieldsetRoot, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_3__.FieldsetLegend, {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Drop Shadow', 'maes-domain')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Use drop shadow', 'maes-domain'),
      checked: shadow.toggle,
      onChange: value => setAttributes({
        shadow: Object.assign(Object.assign({}, shadow), {
          toggle: value
        })
      })
    }), shadow.toggle && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Horizontal', 'maes-domain'),
            value: shadow.horizontal,
            onChange: value => setAttributes({
              shadow: Object.assign(Object.assign({}, shadow), {
                horizontal: value
              })
            }),
            style: {
              marginRight: '3px'
            }
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Vertical', 'maes-domain'),
          value: shadow.vertical,
          onChange: value => setAttributes({
            shadow: Object.assign(Object.assign({}, shadow), {
              vertical: value
            })
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Blur', 'maes-domain'),
        value: shadow.size,
        onChange: value => setAttributes({
          shadow: Object.assign(Object.assign({}, shadow), {
            size: value
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        colors: colors,
        value: shadow.color,
        onChange: value => setAttributes({
          shadow: Object.assign(Object.assign({}, shadow), {
            color: value
          })
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropShadowControl);

/***/ },

/***/ "./src/components/sidebar/maes-fade-control.tsx"
/*!******************************************************!*\
  !*** ./src/components/sidebar/maes-fade-control.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function FadeControl({
  attributes,
  setAttributes,
  direction
}) {
  const attribute = direction === 'horizontal' ? attributes.fade.horizontal : attributes.fade.vertical;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(direction.charAt(0).toUpperCase() + direction.slice(1), 'maes-domain'),
      checked: attribute.toggle ? attribute.toggle : false,
      onChange: value => {
        setAttributes({
          fade: Object.assign(Object.assign({}, attributes.fade), {
            [direction]: Object.assign(Object.assign({}, attribute), {
              toggle: value
            })
          })
        });
      }
    }), attribute.toggle && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fade size', 'maes-domain'),
      withInputField: false,
      value: attribute.width,
      onChange: value => {
        setAttributes({
          fade: Object.assign(Object.assign({}, attributes.fade), {
            [direction]: Object.assign(Object.assign({}, attribute), {
              width: value
            })
          })
        });
      }
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeControl);

/***/ },

/***/ "./src/components/sidebar/maes-offset-control.tsx"
/*!********************************************************!*\
  !*** ./src/components/sidebar/maes-offset-control.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function OffsetControl({
  attributes,
  setAttributes,
  direction
}) {
  const attribute = attributes.offset[direction];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(direction.charAt(0).toUpperCase() + direction.slice(1), 'maes-domain'),
      value: attribute,
      onChange: value => setAttributes({
        offset: Object.assign(Object.assign({}, attributes.offset), {
          [direction]: value
        })
      }),
      className: attributes.fullWidth && (direction === 'left' || direction === 'right') ? 'maes-disabled' : ''
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffsetControl);

/***/ },

/***/ "./src/blocks/maes_container/editor.scss"
/*!***********************************************!*\
  !*** ./src/blocks/maes_container/editor.scss ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/maes_container/style.scss"
/*!**********************************************!*\
  !*** ./src/blocks/maes_container/style.scss ***!
  \**********************************************/
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

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/@base-ui/react/fieldset/legend/FieldsetLegend.mjs"
/*!************************************************************************!*\
  !*** ./node_modules/@base-ui/react/fieldset/legend/FieldsetLegend.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetLegend: () => (/* binding */ FieldsetLegend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");
/* harmony import */ var _root_FieldsetRootContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../root/FieldsetRootContext.mjs */ "./node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs");
/* harmony import */ var _utils_useRegisteredLabelId_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useRegisteredLabelId.mjs */ "./node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs");
'use client';






/**
 * An accessible label that is automatically associated with the fieldset.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
 */
const FieldsetLegend = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FieldsetLegend(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    disabled,
    setLegendId
  } = (0,_root_FieldsetRootContext_mjs__WEBPACK_IMPORTED_MODULE_2__.useFieldsetRootContext)();
  const id = (0,_utils_useRegisteredLabelId_mjs__WEBPACK_IMPORTED_MODULE_3__.useRegisteredLabelId)(idProp, setLegendId);
  const state = {
    disabled
  };
  const element = (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_1__.useRenderElement)('div', componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) FieldsetLegend.displayName = "FieldsetLegend";

/***/ },

/***/ "./node_modules/@base-ui/react/fieldset/root/FieldsetRoot.mjs"
/*!********************************************************************!*\
  !*** ./node_modules/@base-ui/react/fieldset/root/FieldsetRoot.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetRoot: () => (/* binding */ FieldsetRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _FieldsetRootContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldsetRootContext.mjs */ "./node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs");
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





/**
 * Groups a shared legend with related controls.
 * Renders a `<fieldset>` element.
 *
 * Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
 */

const FieldsetRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FieldsetRoot(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    disabled: disabledProp = false,
    ...elementProps
  } = componentProps;
  const [legendId, setLegendId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
  const parentDisabled = (0,_FieldsetRootContext_mjs__WEBPACK_IMPORTED_MODULE_1__.useFieldsetRootContext)(true)?.disabled;
  const disabled = parentDisabled || disabledProp;
  const state = {
    disabled
  };
  const element = (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_2__.useRenderElement)('fieldset', componentProps, {
    ref: forwardedRef,
    state,
    props: [{
      'aria-labelledby': legendId,
      disabled
    }, elementProps]
  });
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    legendId,
    setLegendId,
    disabled
  }), [legendId, setLegendId, disabled]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FieldsetRootContext_mjs__WEBPACK_IMPORTED_MODULE_1__.FieldsetRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) FieldsetRoot.displayName = "FieldsetRoot";

/***/ },

/***/ "./node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetRootContext: () => (/* binding */ FieldsetRootContext),
/* harmony export */   useFieldsetRootContext: () => (/* binding */ useFieldsetRootContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';



const FieldsetRootContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (true) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FieldsetRootContext);
  if (!context && !optional) {
    throw new Error( true ? 'Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.' : 0);
  }
  return context;
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/getStateAttributesProps.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/getStateAttributesProps.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStateAttributesProps: () => (/* binding */ getStateAttributesProps)
/* harmony export */ });
function getStateAttributesProps(state, customMapping) {
  const props = {};

  /* eslint-disable-next-line guard-for-in */
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = '';
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/useBaseUiId.mjs"
/*!***************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useBaseUiId.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBaseUiId: () => (/* binding */ useBaseUiId)
/* harmony export */ });
/* harmony import */ var _base_ui_utils_useId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/utils/useId */ "./node_modules/@base-ui/utils/useId.mjs");
'use client';



/**
 * Wraps `useId` and prefixes generated `id`s with `base-ui-`
 * @param {string | undefined} idOverride overrides the generated id when provided
 * @returns {string | undefined}
 */
function useBaseUiId(idOverride) {
  return (0,_base_ui_utils_useId__WEBPACK_IMPORTED_MODULE_0__.useId)(idOverride, 'base-ui');
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/useRenderElement.mjs"
/*!********************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useRenderElement.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unwrapLazyRenderProp: () => (/* binding */ unwrapLazyRenderProp),
/* harmony export */   useRenderElement: () => (/* binding */ useRenderElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useMergedRefs */ "./node_modules/@base-ui/utils/useMergedRefs.mjs");
/* harmony import */ var _base_ui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/getReactElementRef */ "./node_modules/@base-ui/utils/getReactElementRef.mjs");
/* harmony import */ var _base_ui_utils_mergeObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base-ui/utils/mergeObjects */ "./node_modules/@base-ui/utils/mergeObjects.mjs");
/* harmony import */ var _base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base-ui/utils/warn */ "./node_modules/@base-ui/utils/warn.mjs");
/* harmony import */ var _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base-ui/utils/empty */ "./node_modules/@base-ui/utils/empty.mjs");
/* harmony import */ var _getStateAttributesProps_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getStateAttributesProps.mjs */ "./node_modules/@base-ui/react/internals/getStateAttributesProps.mjs");
/* harmony import */ var _utils_resolveClassName_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/resolveClassName.mjs */ "./node_modules/@base-ui/react/utils/resolveClassName.mjs");
/* harmony import */ var _utils_resolveStyle_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/resolveStyle.mjs */ "./node_modules/@base-ui/react/utils/resolveStyle.mjs");
/* harmony import */ var _merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../merge-props/index.mjs */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");











/**
 * Renders a Base UI element.
 *
 * @param element The default HTML element to render. Can be overridden by the `render` prop.
 * @param componentProps An object containing the `render` and `className` props to be used for element customization. Other props are ignored.
 * @param params Additional parameters for rendering the element.
 */
function useRenderElement(element, componentProps, params = {}) {
  let renderProp = componentProps.render;
  if (params.enabled !== false) {
    // A pending lazy element suspends when unwrapped, so leave it wrapped while disabled.
    renderProp = unwrapLazyRenderProp(renderProp);
  }
  const outProps = useRenderElementProps(componentProps, params, renderProp);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}

/**
 * Computes render element final props.
 */
function useRenderElementProps(componentProps, params, renderProp) {
  const {
    className: classNameProp,
    style: styleProp
  } = componentProps;
  const {
    state = _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping,
    enabled = true
  } = params;
  const className = enabled ? (0,_utils_resolveClassName_mjs__WEBPACK_IMPORTED_MODULE_7__.resolveClassName)(classNameProp, state) : undefined;
  const style = enabled ? (0,_utils_resolveStyle_mjs__WEBPACK_IMPORTED_MODULE_8__.resolveStyle)(styleProp, state) : undefined;
  const stateProps = enabled ? (0,_getStateAttributesProps_mjs__WEBPACK_IMPORTED_MODULE_6__.getStateAttributesProps)(state, stateAttributesMapping) : _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : undefined;

  // Ensure outProps is always a new mutable object when enabled, never EMPTY_OBJECT.
  // This prevents potential TypeError when setting ref, className, or style properties,
  // since EMPTY_OBJECT is frozen and mutations would fail in strict mode.
  const outProps = enabled ? (0,_base_ui_utils_mergeObjects__WEBPACK_IMPORTED_MODULE_3__.mergeObjects)(stateProps, resolvedProps) ?? {} : _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT;

  // SAFETY: The `useMergedRefs` functions use a single hook to store the same value,
  // switching between them at runtime is safe. If this assertion fails, React will
  // throw at runtime anyway.
  // This also skips the `useMergedRefs` call on the server, which is fine because
  // refs are not used on the server side.
  /* eslint-disable react-hooks/rules-of-hooks */
  if (typeof document !== 'undefined') {
    if (!enabled) {
      // Called only to keep the hook order stable when disabled; the merged ref is unused.
      void (0,_base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__.useMergedRefs)(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = (0,_base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__.useMergedRefsN)([outProps.ref, (0,_base_ui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_2__.getReactElementRef)(renderProp), ...ref]);
    } else {
      outProps.ref = (0,_base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__.useMergedRefs)(outProps.ref, (0,_base_ui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_2__.getReactElementRef)(renderProp), ref);
    }
  }
  if (!enabled) {
    return _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT;
  }
  if (className !== undefined) {
    outProps.className = (0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_9__.mergeClassNames)(outProps.className, className);
  }
  if (style !== undefined) {
    outProps.style = (0,_base_ui_utils_mergeObjects__WEBPACK_IMPORTED_MODULE_3__.mergeObjects)(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return (0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_9__.mergePropsN)(props);
  }
  return (0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_9__.mergeProps)(undefined, props);
}

// The symbol React uses internally for lazy components
// https://github.com/react/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/shared/ReactSymbols.js#L31
//
// TODO delete once https://github.com/react/react/issues/32392 is fixed
const REACT_LAZY_TYPE = Symbol.for('react.lazy');
const COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
const LOWERCASE_CHARACTER_PATTERN = /[a-z]/;

// Workaround for https://github.com/react/react/issues/32392
// The Flight client hands over a lazy wrapper in place of a render element created in a
// Server Component. The wrapper exposes no `.props` or `.ref`, so it must be unwrapped
// before those are read. This works because the toArray() logic unwraps the lazy
// element type in
// https://github.com/react/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
function unwrapLazyRenderProp(render) {
  // `$$typeof` is a React internal, absent from the public element types.
  if (render?.$$typeof !== REACT_LAZY_TYPE) {
    return render;
  }
  // Keep the wrapper unless it unwraps to an element, so an invalid render prop is still
  // reported as one instead of silently falling back to the default element.
  const unwrapped = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(render)[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(unwrapped) ? unwrapped : render;
}
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === 'function') {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = (0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_9__.mergeProps)(props, render.props);
    mergedProps.ref = props.ref;

    // There is a high number of indirections, the error message thrown by React.cloneElement() is
    // hard to use for developers, this logic provides a better context.
    //
    // Our general guideline is to never change the control flow depending on the environment.
    // However, React.cloneElement() throws if React.isValidElement() is false,
    // so we can throw before with custom message.
    if (true) {
      if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(render)) {
        // TODO: fix mui/no-guarded-throw
        // eslint-disable-next-line mui/no-guarded-throw
        throw new Error(['Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.', 'A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.', 'https://base-ui.com/r/invalid-render-prop'].join('\n'));
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, mergedProps);
  }
  // `element` is always provided when there is no `render` prop.
  return renderTag(element, props);
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  ;(0,_base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_4__.warn)(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, 'This usually means a React component was passed directly as `render={Component}`.', 'Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.', 'If this is an intentional render callback, rename it to start with a lowercase letter.', 'Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.', 'https://base-ui.com/r/invalid-render-prop');
}
function renderTag(Tag, props) {
  if (Tag === 'button') {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === 'img') {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, props);
}

/***/ },

/***/ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs"
/*!****************************************************************!*\
  !*** ./node_modules/@base-ui/react/merge-props/mergeProps.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeEventPreventable: () => (/* binding */ makeEventPreventable),
/* harmony export */   mergeClassNames: () => (/* binding */ mergeClassNames),
/* harmony export */   mergeProps: () => (/* binding */ mergeProps),
/* harmony export */   mergePropsN: () => (/* binding */ mergePropsN)
/* harmony export */ });
/* harmony import */ var _base_ui_utils_mergeObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/utils/mergeObjects */ "./node_modules/@base-ui/utils/mergeObjects.mjs");

const EMPTY_PROPS = {};

/* eslint-disable id-denylist */
/**
 * Merges multiple sets of React props. It follows the Object.assign pattern where the rightmost object's fields overwrite
 * the conflicting ones from others. This doesn't apply to event handlers, `className` and `style` props.
 *
 * Event handlers are merged and called in right-to-left order (rightmost handler executes first, leftmost last).
 * For React synthetic events, the rightmost handler can prevent prior (left-positioned) handlers from executing
 * by calling `event.preventBaseUIHandler()`. For non-synthetic events (custom events with primitive/object values),
 * all handlers always execute without prevention capability.
 *
 * The `className` prop is merged by concatenating classes in right-to-left order (rightmost class appears first in the string).
 * The `style` prop is merged with rightmost styles overwriting the prior ones.
 *
 * Props can either be provided as objects or as functions that take the previous props as an argument.
 * The function will receive the merged props up to that point (going from left to right):
 * so in the case of `(obj1, obj2, fn, obj3)`, `fn` will receive the merged props of `obj1` and `obj2`.
 * The function is responsible for chaining event handlers if needed (that is, we don't run the merge logic).
 *
 * Event handlers returned by the functions are not automatically prevented when `preventBaseUIHandler` is called.
 * They must check `event.baseUIHandlerPrevented` themselves and bail out if it's true.
 *
 * @important **`ref` is not merged.**
 * @param a Props object to merge.
 * @param b Props object to merge. The function will overwrite conflicting props from `a`.
 * @param c Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param d Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param e Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @returns The merged props.
 * @public
 */

function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }

  // We need to mutably own `merged`.
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
/* eslint-enable id-denylist */

/**
 * Merges an arbitrary number of React props using the same logic as {@link mergeProps}.
 * This function accepts an array of props instead of individual arguments.
 *
 * This has slightly lower performance than {@link mergeProps} due to accepting an array
 * instead of a fixed number of arguments. Prefer {@link mergeProps} when merging 5 or
 * fewer prop sets for better performance.
 *
 * @param props Array of props to merge.
 * @returns The merged props.
 * @see mergeProps
 * @public
 */
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }

  // We need to mutably own `merged`.
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    // Getter-returned handlers intentionally keep their existing semantics.
    return {
      ...inputProps(EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };

  // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
  // eslint-disable-next-line guard-for-in
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}

/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }

  // eslint-disable-next-line guard-for-in
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case 'style':
        {
          mergedProps[propName] = (0,_base_ui_utils_mergeObjects__WEBPACK_IMPORTED_MODULE_0__.mergeObjects)(mergedProps.style, externalPropValue);
          break;
        }
      case 'className':
        {
          mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
          break;
        }
      default:
        {
          if (isEventHandler(propName, externalPropValue)) {
            mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
          } else {
            mergedProps[propName] = externalPropValue;
          }
        }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  // This approach is more efficient than using a regex.
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 /* o */ && code1 === 110 /* n */ && code2 >= 65 /* A */ && code2 <= 90 /* Z */ && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
  return typeof inputProps === 'function';
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      // eslint-disable-next-line prefer-template
      return theirClassName + ' ' + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === 'object' && 'nativeEvent' in event;
}

/***/ },

/***/ "./node_modules/@base-ui/react/use-render/useRender.mjs"
/*!**************************************************************!*\
  !*** ./node_modules/@base-ui/react/use-render/useRender.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRender: () => (/* binding */ useRender)
/* harmony export */ });
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");

/**
 * Renders a Base UI element.
 *
 * @public
 */
function useRender(params) {
  return (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_0__.useRenderElement)(params.defaultTagName ?? 'div', params, params);
}

/***/ },

/***/ "./node_modules/@base-ui/react/utils/resolveClassName.mjs"
/*!****************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/resolveClassName.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveClassName: () => (/* binding */ resolveClassName)
/* harmony export */ });
/**
 * If the provided className is a string, it will be returned as is.
 * Otherwise, the function will call the className function with the state as the first argument.
 *
 * @param className
 * @param state
 */
function resolveClassName(className, state) {
  return typeof className === 'function' ? className(state) : className;
}

/***/ },

/***/ "./node_modules/@base-ui/react/utils/resolveStyle.mjs"
/*!************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/resolveStyle.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveStyle: () => (/* binding */ resolveStyle)
/* harmony export */ });
/**
 * If the provided style is an object, it will be returned as is.
 * Otherwise, the function will call the style function with the state as the first argument.
 *
 * @param style
 * @param state
 */
function resolveStyle(style, state) {
  return typeof style === 'function' ? style(state) : style;
}

/***/ },

/***/ "./node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs"
/*!********************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRegisteredLabelId: () => (/* binding */ useRegisteredLabelId)
/* harmony export */ });
/* harmony import */ var _base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/utils/useIsoLayoutEffect */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _internals_useBaseUiId_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internals/useBaseUiId.mjs */ "./node_modules/@base-ui/react/internals/useBaseUiId.mjs");
'use client';



function useRegisteredLabelId(idProp, setLabelId) {
  const id = (0,_internals_useBaseUiId_mjs__WEBPACK_IMPORTED_MODULE_1__.useBaseUiId)(idProp);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_0__.useIsoLayoutEffect)(() => {
    setLabelId(id);
    return () => {
      setLabelId(currentId => currentId === id ? undefined : currentId);
    };
  }, [id, setLabelId]);
  return id;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/createLogOnce.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/@base-ui/utils/createLogOnce.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLogOnce: () => (/* binding */ createLogOnce),
/* harmony export */   reset: () => (/* binding */ reset)
/* harmony export */ });
let loggedMessages;
if (true) {
  loggedMessages = new Set();
}

/** Creates a dev-only logger that writes each unique message to `console[severity]` once. */
function createLogOnce(severity, prefix) {
  return function logOnce(...messages) {
    if (true) {
      const message = messages.join(' ');
      const output = prefix ? `${prefix}: ${message}` : message;
      const key = `${severity}:${output}`;
      if (!loggedMessages.has(key)) {
        loggedMessages.add(key);
        if (severity === 'warn') {
          console.warn(output);
        } else {
          console.error(output);
        }
      }
    }
  };
}
function reset() {
  loggedMessages?.clear();
}

/***/ },

/***/ "./node_modules/@base-ui/utils/empty.mjs"
/*!***********************************************!*\
  !*** ./node_modules/@base-ui/utils/empty.mjs ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_ARRAY: () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   EMPTY_OBJECT: () => (/* binding */ EMPTY_OBJECT),
/* harmony export */   NOOP: () => (/* binding */ NOOP)
/* harmony export */ });
function NOOP() {}

// Typed as mutable `never[]` so it is assignable to any `T[]` fallback (for example
// `defaultValue ?? EMPTY_ARRAY` in `useControlled` callers) without widening `T`.
// Frozen so a write through a widened alias throws instead of mutating the shared singleton.
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

/***/ },

/***/ "./node_modules/@base-ui/utils/getReactElementRef.mjs"
/*!************************************************************!*\
  !*** ./node_modules/@base-ui/utils/getReactElementRef.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getReactElementRef: () => (/* binding */ getReactElementRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _reactVersion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactVersion.mjs */ "./node_modules/@base-ui/utils/reactVersion.mjs");



/**
 * Extracts the `ref` from a React element, handling different React versions.
 */
function getReactElementRef(element) {
  if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return ((0,_reactVersion_mjs__WEBPACK_IMPORTED_MODULE_1__.isReactVersionAtLeast)(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/mergeObjects.mjs"
/*!******************************************************!*\
  !*** ./node_modules/@base-ui/utils/mergeObjects.mjs ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeObjects: () => (/* binding */ mergeObjects)
/* harmony export */ });
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return undefined;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/reactVersion.mjs"
/*!******************************************************!*\
  !*** ./node_modules/@base-ui/utils/reactVersion.mjs ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReactVersionAtLeast: () => (/* binding */ isReactVersionAtLeast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const majorVersion = parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/safeReact.mjs"
/*!***************************************************!*\
  !*** ./node_modules/@base-ui/utils/safeReact.mjs ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

let react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeReact: () => (/* binding */ SafeReact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * A clone of the React namespace for reading APIs that may be missing in older
 * supported React versions. Bundlers can rewrite direct `React.someNewApi`
 * reads into named imports, which breaks React 17. Reading from this cloned
 * object keeps those lookups optional.
 *
 * @see https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
 */
const SafeReact = {
  .../*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))
};

/***/ },

/***/ "./node_modules/@base-ui/utils/useForcedRerendering.mjs"
/*!**************************************************************!*\
  !*** ./node_modules/@base-ui/utils/useForcedRerendering.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForcedRerendering: () => (/* binding */ useForcedRerendering)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';



/**
 * Returns a function that forces a rerender.
 */
function useForcedRerendering() {
  const [, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    setState({});
  }, []);
}

/***/ },

/***/ "./node_modules/@base-ui/utils/useId.mjs"
/*!***********************************************!*\
  !*** ./node_modules/@base-ui/utils/useId.mjs ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _safeReact_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeReact.mjs */ "./node_modules/@base-ui/utils/safeReact.mjs");
/* harmony import */ var _useForcedRerendering_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForcedRerendering.mjs */ "./node_modules/@base-ui/utils/useForcedRerendering.mjs");
'use client';




let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
  const defaultId = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
  const forceRerender = (0,_useForcedRerendering_mjs__WEBPACK_IMPORTED_MODULE_2__.useForcedRerendering)();
  const id = idOverride ?? defaultId.current;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId.current == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      defaultId.current = `${prefix}-${globalId}`;
      // Generate the fallback even while `idOverride` is set.
      // Removing the override then swaps in the existing id within the same commit.
      // Deferring generation would leave one commit with no id, breaking `htmlFor` and `aria-labelledby` links.
      // Only rerender when the fallback is the value being rendered.
      if (idOverride == null) {
        forceRerender();
      }
    }
  }, [idOverride, prefix, forceRerender]);
  return id;
}
const maybeReactUseId = _safeReact_mjs__WEBPACK_IMPORTED_MODULE_1__.SafeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param {string | undefined} idOverride overrides the generated id when provided
 * @param {string | undefined} prefix prefixes the generated id when provided
 * @returns {string | undefined}
 */
function useId(idOverride, prefix) {
  // React.useId() is only available from React 18.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride, prefix);
}

/***/ },

/***/ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs"
/*!************************************************************!*\
  !*** ./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoLayoutEffect: () => (/* binding */ useIsoLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const noop = () => {};
const useIsoLayoutEffect = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : noop;

/***/ },

/***/ "./node_modules/@base-ui/utils/useMergedRefs.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/@base-ui/utils/useMergedRefs.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergedRefs: () => (/* binding */ useMergedRefs),
/* harmony export */   useMergedRefsN: () => (/* binding */ useMergedRefsN)
/* harmony export */ });
/* harmony import */ var _useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRefWithInit.mjs */ "./node_modules/@base-ui/utils/useRefWithInit.mjs");


/**
 * Merges refs into a single memoized callback ref or `null`.
 * This makes sure multiple refs are updated together and have the same value.
 *
 * This function accepts up to four refs. If you need to merge more, or have an unspecified number of refs to merge,
 * use `useMergedRefsN` instead.
 */

function useMergedRefs(a, b, c, d) {
  const forkRef = (0,_useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_0__.useRefWithInit)(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 *
 * If you need to merge a fixed number (up to four) of refs, use `useMergedRefs` instead for better performance.
 */
function useMergedRefsN(refs) {
  const forkRef = (0,_useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_0__.useRefWithInit)(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  // prettier-ignore
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every(ref => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = instance => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case 'function':
            {
              const refCleanup = ref(instance);
              if (typeof refCleanup === 'function') {
                cleanupCallbacks[i] = refCleanup;
              }
              break;
            }
          case 'object':
            {
              ref.current = instance;
              break;
            }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case 'function':
              {
                const cleanupCallback = cleanupCallbacks[i];
                if (typeof cleanupCallback === 'function') {
                  cleanupCallback();
                } else {
                  // Legacy ref with no attach-time cleanup: detach by calling it with `null`.
                  // It returns nothing; React 19 cleanups are handled in the branch above.
                  void ref(null);
                }
                break;
              }
            case 'object':
              {
                ref.current = null;
                break;
              }
            default:
          }
        }
      };
    }
  };
}

/***/ },

/***/ "./node_modules/@base-ui/utils/useRefWithInit.mjs"
/*!********************************************************!*\
  !*** ./node_modules/@base-ui/utils/useRefWithInit.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRefWithInit: () => (/* binding */ useRefWithInit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useRefWithInit(sortColumns, columns)
 */

function useRefWithInit(init, initArg) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/warn.mjs"
/*!**********************************************!*\
  !*** ./node_modules/@base-ui/utils/warn.mjs ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/* harmony import */ var _createLogOnce_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLogOnce.mjs */ "./node_modules/@base-ui/utils/createLogOnce.mjs");

const warn = (0,_createLogOnce_mjs__WEBPACK_IMPORTED_MODULE_0__.createLogOnce)('warn', 'Base UI');


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/context.mjs"
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/context.mjs ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetContext: () => (/* binding */ FieldsetContext),
/* harmony export */   useFieldsetContext: () => (/* binding */ useFieldsetContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/form/primitives/fieldset/context.tsx

var fallbackContext = {
  registerDescriptionId: () => {
  },
  unregisterDescriptionId: () => {
  }
};
var FieldsetContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  null
);
var useFieldsetContext = (componentName) => {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FieldsetContext);
  if ( true && !context) {
    throw new Error(
      `${componentName}: Missing parent <Fieldset.Root>. Render <${componentName}> inside <Fieldset.Root>.`
    );
  }
  return context ?? fallbackContext;
};

//# sourceMappingURL=context.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/legend.mjs"
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/legend.mjs ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetLegend: () => (/* binding */ FieldsetLegend)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _base_ui_react_fieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react/fieldset */ "./node_modules/@base-ui/react/fieldset/legend/FieldsetLegend.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _visually_hidden_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visually-hidden/index.mjs */ "./node_modules/@wordpress/ui/build-module/visually-hidden/visually-hidden.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/form/primitives/fieldset/legend.tsx




// packages/style-runtime/src/index.ts
var STYLE_HASH_ATTRIBUTE = "data-wp-hash";
function getRuntime() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
  const runtime = getRuntime();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle(hash, css) {
  const runtime = getRuntime();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle(targetDocument, hash, css);
  }
}

// packages/ui/src/utils/css/field.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("df33c48b2d", '@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._2d5ad850b2f90964__label{--wp-ui-field-label-line-height:var(--wpds-typography-line-height-xs,16px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:var(--wp-ui-field-label-line-height);text-transform:uppercase;&._17c4214649230bea__is-plain{font-size:var(--wpds-typography-font-size-md,13px);font-weight:var(--wpds-typography-font-weight-default,400);text-transform:none}}._08a3750500e0233f__description{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);--_gcd-p-margin:0;text-wrap:pretty;color:var(--wpds-color-foreground-content-neutral-weak,#707070);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}}');
}
var field_default = { "label": "_2d5ad850b2f90964__label", "is-plain": "_17c4214649230bea__is-plain", "description": "_08a3750500e0233f__description" };

// packages/ui/src/form/primitives/fieldset/legend.tsx


var FieldsetLegend = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  function FieldsetLegend2({ className, hideFromVision, ...restProps }, ref) {
    const legend = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
      _base_ui_react_fieldset__WEBPACK_IMPORTED_MODULE_1__.FieldsetLegend,
      {
        ref,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(field_default.label, className),
        ...restProps
      }
    );
    if (hideFromVision) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_visually_hidden_index_mjs__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, { render: legend });
    }
    return legend;
  }
);

//# sourceMappingURL=legend.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/root.mjs"
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/root.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetRoot: () => (/* binding */ FieldsetRoot)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _base_ui_react_fieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react/fieldset */ "./node_modules/@base-ui/react/fieldset/root/FieldsetRoot.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.mjs */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/context.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/form/primitives/fieldset/root.tsx




// packages/style-runtime/src/index.ts
var STYLE_HASH_ATTRIBUTE = "data-wp-hash";
function getRuntime() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
  const runtime = getRuntime();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle(hash, css) {
  const runtime = getRuntime();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle(targetDocument, hash, css);
  }
}

// packages/ui/src/form/primitives/fieldset/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("7bcfc530da", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.a946d12d3d763c87__root{border:0;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-sm,8px);margin:0;padding:0}}}");
}
var style_default = { "root": "a946d12d3d763c87__root" };

// packages/ui/src/form/primitives/fieldset/root.tsx


var FieldsetRoot = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function FieldsetRoot2({ className, children, ...restProps }, ref) {
  const [descriptionId, setDescriptionId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const contextValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => ({
      registerDescriptionId: (id) => setDescriptionId(id),
      unregisterDescriptionId: () => setDescriptionId(void 0)
    }),
    []
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_context_mjs__WEBPACK_IMPORTED_MODULE_3__.FieldsetContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
    _base_ui_react_fieldset__WEBPACK_IMPORTED_MODULE_1__.FieldsetRoot,
    {
      ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(style_default.root, className),
      "aria-describedby": descriptionId,
      ...restProps,
      children
    }
  ) });
});

//# sourceMappingURL=root.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/visually-hidden/visually-hidden.mjs"
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/visually-hidden/visually-hidden.mjs ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisuallyHidden: () => (/* binding */ VisuallyHidden)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/visually-hidden/visually-hidden.tsx



// packages/style-runtime/src/index.ts
var STYLE_HASH_ATTRIBUTE = "data-wp-hash";
function getRuntime() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
  const runtime = getRuntime();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle(hash, css) {
  const runtime = getRuntime();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle(targetDocument, hash, css);
  }
}

// packages/ui/src/visually-hidden/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("fa606a57ae", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f37b9e2e191ebd66__visually-hidden{word-wrap:normal;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-break:normal}}}");
}
var style_default = { "visually-hidden": "f37b9e2e191ebd66__visually-hidden" };

// packages/ui/src/visually-hidden/visually-hidden.tsx
var VisuallyHidden = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  function VisuallyHidden2({ render, ...restProps }, ref) {
    const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
      render,
      ref,
      props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(
        { className: style_default["visually-hidden"] },
        restProps,
        {
          // @ts-expect-error Arbitrary data-* attributes aren't indexable on the typed div props. Kept hardcoded so consumers can't change or remove it.
          "data-visually-hidden": ""
        }
      )
    });
    return element;
  }
);

//# sourceMappingURL=visually-hidden.mjs.map


/***/ },

/***/ "./node_modules/clsx/dist/clsx.mjs"
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ },

/***/ "./src/blocks/maes_container/block.json"
/*!**********************************************!*\
  !*** ./src/blocks/maes_container/block.json ***!
  \**********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maes/container","version":"0.1.0","title":"Styled container","category":"design","icon":"tablet","description":"A styled and animated container","attributes":{"border":{"type":"object","properties":{"top":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"bottom":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"left":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"right":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}}},"default":{"top":{"width":null,"color":null,"style":null},"bottom":{"width":null,"color":null,"style":null},"left":{"width":null,"color":null,"style":null},"right":{"width":null,"color":null,"style":null}}},"offset":{"type":"object","properties":{"top":{"type":"string"},"bottom":{"type":"string"},"left":{"type":"string"},"right":{"type":"string"}},"default":{"top":null,"bottom":null,"left":null,"right":null}},"fade":{"type":"object","properties":{"horizontal":{"type":"object","properties":{"toggle":{"type":"boolean","default":false},"width":{"type":"number"}}},"vertical":{"type":"object","properties":{"toggle":{"type":"boolean","default":false},"width":{"type":"number"}}}},"default":{"horizontal":{"toggle":false,"width":15},"vertical":{"toggle":false,"width":15}}},"shadow":{"type":"object","properties":{"toggle":{"type":"boolean"},"horizontal":{"type":"string"},"vertical":{"type":"string"},"size":{"type":"string"},"color":{"type":"string"}},"default":{"toggle":false,"horizontal":"0px","vertical":"0px","size":"0px","color":"#000"}},"fullWidth":{"type":"boolean","default":false},"rotation":{"type":"number","default":0},"opacity":{"type":"number","default":100},"gradientBackground":{"type":"boolean","default":false},"background":{"type":"string","default":""}},"example":{},"supports":{"html":false},"textdomain":"maes-domain","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		const getProto = Object.getPrototypeOf;
/******/ 		let leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			const ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			const def = {};
/******/ 			leafPrototypes ||= [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/maes_container/index": 0,
/******/ 			"blocks/maes_container/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/maes_container/style-index"], () => (__webpack_require__("./src/blocks/maes_container/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map