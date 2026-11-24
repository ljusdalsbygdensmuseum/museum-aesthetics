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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/create.mjs");
/* harmony import */ var _components_sidebar_maes_container_background_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sidebar/maes-container-background-control */ "./src/components/sidebar/maes-container-background-control.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/maes_container/editor.scss");







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
  const setBackground = (item, index) => {
    setAttributes(oldAttributes => {
      const newAttributes = structuredClone(oldAttributes);
      newAttributes.backgrounds[index] = Object.assign(Object.assign({}, newAttributes.backgrounds[index]), item);
      return newAttributes;
    });
  };
  const removeBackground = index => {
    setAttributes(oldAttributes => {
      const newAttributes = structuredClone(oldAttributes);
      newAttributes.backgrounds.splice(index, 1);
      return newAttributes;
    });
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'maes-domain'),
        children: [attributes.backgrounds.map((item, index) => {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_container_background_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
            attributes: attributes,
            setAttributes: setAttributes,
            setBackground: setBackground,
            removeBackground: removeBackground,
            index: index,
            colorPalette: colorPalette,
            gradientPalette: gradientPalette
          });
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
          variant: 'tertiary',
          onClick: () => {
            setAttributes(oldAttributes => {
              const newAttributes = structuredClone(oldAttributes);
              newAttributes.backgrounds.push({
                border: {
                  top: {
                    width: undefined,
                    color: undefined,
                    style: undefined
                  },
                  bottom: {
                    width: undefined,
                    color: undefined,
                    style: undefined
                  },
                  left: {
                    width: undefined,
                    color: undefined,
                    style: undefined
                  },
                  right: {
                    width: undefined,
                    color: undefined,
                    style: undefined
                  }
                },
                offset: {
                  top: undefined,
                  bottom: undefined,
                  left: undefined,
                  right: undefined
                },
                fade: {
                  horizontal: {
                    toggle: false,
                    width: 15
                  },
                  vertical: {
                    toggle: false,
                    width: 15
                  }
                },
                shadow: {
                  toggle: false,
                  horizontal: '0px',
                  vertical: '0px',
                  size: '0px',
                  color: '#000'
                },
                fullWidth: false,
                opacity: 100,
                rotation: 0,
                gradientBackground: false,
                background: ''
              });
              return newAttributes;
            });
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add More', 'maes-domain')
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()))]
  });
  /*
  <MAESContainer attributes={attributes}>
                  <InnerBlocks />
              </MAESContainer>
    */
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

/***/ "./src/components/sidebar/maes-container-background-control.tsx"
/*!**********************************************************************!*\
  !*** ./src/components/sidebar/maes-container-background-control.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/stack/stack.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/card/title.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/root.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/form/primitives/fieldset/legend.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/collapsible-card/root.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/collapsible-card/header.mjs");
/* harmony import */ var _wordpress_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/ui */ "./node_modules/@wordpress/ui/build-module/collapsible-card/content.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/sidebar/maes-offset-control */ "./src/components/sidebar/maes-offset-control.tsx");






function ContainerBackgroundControl({
  attributes,
  setAttributes,
  setBackground,
  removeBackground,
  index,
  colorPalette,
  gradientPalette
}) {
  const attribute = attributes.backgrounds[index];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_5__.Root, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_6__.Header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_2__.Title, {
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Background', 'maes-domain'), " ", index + 1]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_7__.Content, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Full width', 'maes-domain'),
        checked: attribute.fullWidth,
        onChange: value => {
          setBackground(Object.assign(Object.assign({}, attribute), {
            fullWidth: value
          }), index);
          //setAttributes({ fullWidth: value })
        }
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_3__.FieldsetRoot, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_4__.FieldsetLegend, {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Offset', 'maes-domain')
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          gap: 'sm',
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
            attribute: attribute,
            setBackground: setBackground,
            index: index,
            direction: 'top'
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
            attribute: attribute,
            setBackground: setBackground,
            index: index,
            direction: 'bottom'
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          gap: 'sm',
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
            attribute: attribute,
            setBackground: setBackground,
            index: index,
            direction: 'left'
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_maes_offset_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
            attribute: attribute,
            setBackground: setBackground,
            index: index,
            direction: 'right'
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
        __next40pxDefaultSize: true,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
        isDestructive: true,
        onClick: () => {
          removeBackground(index);
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Delete', 'maes-domain')
      })]
    })]
  });
  /*
  
              <AnglePickerControl
                  label={__('Rotation', 'maes-domain')}
                  value={attribute.rotation}
                  onChange={(value) => setAttributes({ rotation: value })}
              />
              <hr />
              <RangeControl
                  label={__('Opacity', 'maes-domain')}
                  value={attribute.opacity}
                  onChange={(value) => {
                      setAttributes({ opacity: value })
                  }}
                  initialPosition={100}
              />
              <hr />
              <Fieldset.Root>
                  <Fieldset.Legend>{__('Fade', 'maes-domain')}</Fieldset.Legend>
                  <FadeControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='horizontal'
                  />
                  <FadeControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='vertical'
                  />
              </Fieldset.Root>
              <hr />
              <Fieldset.Root>
                  <Fieldset.Legend>{__('Background', 'maes-domain')}</Fieldset.Legend>
                  <ToggleControl
                      label={__('Gradient background')}
                      checked={attribute.gradientBackground}
                      onChange={(value) => {
                          setAttributes({ gradientBackground: value })
                      }}
                  />
                  {!attribute.gradientBackground && (
                      <ColorPalette
                          colors={colorPalette}
                          value={attribute.background}
                          enableAlpha
                          onChange={(value) => {
                              setAttributes({ background: value })
                          }}
                      />
                  )}
                  {attribute.gradientBackground && (
                      <GradientPicker
                          value={attribute.background}
                          onChange={(value) => {
                              setAttributes({ background: value })
                          }}
                          gradients={gradientPalette}
                      />
                  )}
              </Fieldset.Root>
              <hr />
              <Fieldset.Root>
                  <Fieldset.Legend>{__('Border', 'maes-domain')}</Fieldset.Legend>
                  <BorderStyleControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='top'
                      colors={colorPalette}
                  />
                  <BorderStyleControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='bottom'
                      colors={colorPalette}
                  />
                  <BorderStyleControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='left'
                      colors={colorPalette}
                  />
                  <BorderStyleControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                      direction='right'
                      colors={colorPalette}
                  />
              </Fieldset.Root>
              <hr />
              <DropShadowControl
                  attributes={attributes}
                  setAttributes={setAttributes}
                  colors={colorPalette}
              />
              <hr />
  */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerBackgroundControl);

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
  attribute,
  setBackground,
  index,
  direction
}) {
  const offset = attribute.offset[direction];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(direction.charAt(0).toUpperCase() + direction.slice(1), 'maes-domain'),
      value: offset,
      onChange: value => setBackground(Object.assign(Object.assign({}, attribute), {
        offset: Object.assign(Object.assign({}, attribute.offset), {
          [direction]: value
        })
      }), index),
      className: attribute.fullWidth && (direction === 'left' || direction === 'right') ? 'maes-disabled' : ''
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

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

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

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs"
/*!****************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsiblePanel: () => (/* binding */ CollapsiblePanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useIsoLayoutEffect */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/warn */ "./node_modules/@base-ui/utils/warn.mjs");
/* harmony import */ var _utils_resolveStyle_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolveStyle.mjs */ "./node_modules/@base-ui/react/utils/resolveStyle.mjs");
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");
/* harmony import */ var _root_CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../root/CollapsibleRootContext.mjs */ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs");
/* harmony import */ var _root_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../root/stateAttributesMapping.mjs */ "./node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs");
/* harmony import */ var _useCollapsiblePanel_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useCollapsiblePanel.mjs */ "./node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs");
/* harmony import */ var _CollapsiblePanelCssVars_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollapsiblePanelCssVars.mjs */ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs");
'use client';










/**
 * A panel with the collapsible contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
const CollapsiblePanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CollapsiblePanel(componentProps, forwardedRef) {
  const {
    className,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    render,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;

  /* istanbul ignore else -- `process.env.NODE_ENV` is a build-time constant under test */
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        (0,_base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_2__.warn)('The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.');
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }
  const {
    defaultPanelId,
    mounted,
    onOpenChange,
    open,
    setMounted,
    setPanelIdState,
    setOpen,
    state,
    transitionStatus
  } = (0,_root_CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_5__.useCollapsibleRootContext)();
  const hiddenUntilFound = hiddenUntilFoundProp ?? false;
  const keepMounted = keepMountedProp ?? false;
  const registeredId = idProp || undefined;
  const id = registeredId ?? defaultPanelId;
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useIsoLayoutEffect)(() => {
    setPanelIdState(currentId => registeredId ?? (currentId === null ? undefined : currentId));
    return () => {
      setPanelIdState(currentId => currentId === registeredId ? null : currentId);
    };
  }, [registeredId, setPanelIdState]);
  const {
    height,
    props,
    ref,
    shouldPreventOpenAnimation,
    shouldRender,
    transitionStatus: panelTransitionStatus,
    width
  } = (0,_useCollapsiblePanel_mjs__WEBPACK_IMPORTED_MODULE_7__.useCollapsiblePanel)({
    externalRef: forwardedRef,
    hiddenUntilFound,
    id,
    keepMounted,
    mounted,
    onOpenChange,
    open,
    setMounted,
    setOpen,
    transitionStatus
  });
  const panelState = {
    ...state,
    transitionStatus: panelTransitionStatus
  };
  const resolvedStyle = (0,_utils_resolveStyle_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveStyle)(style, panelState);
  const element = (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_4__.useRenderElement)('div', {
    ...componentProps,
    style: undefined
  }, {
    state: panelState,
    ref,
    props: [props, {
      style: {
        [_CollapsiblePanelCssVars_mjs__WEBPACK_IMPORTED_MODULE_8__.CollapsiblePanelCssVars.collapsiblePanelHeight]: height === undefined ? 'auto' : `${height}px`,
        [_CollapsiblePanelCssVars_mjs__WEBPACK_IMPORTED_MODULE_8__.CollapsiblePanelCssVars.collapsiblePanelWidth]: width === undefined ? 'auto' : `${width}px`
      }
    }, elementProps, resolvedStyle ? {
      style: resolvedStyle
    } : undefined,
    // Resolve the public `style` prop so temporary `animationName: 'none'`
    // can still win after user's inline styles have been merged.
    shouldPreventOpenAnimation ? {
      style: {
        animationName: 'none'
      }
    } : undefined],
    stateAttributesMapping: _root_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_6__.collapsibleStateAttributesMapping
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) CollapsiblePanel.displayName = "CollapsiblePanel";

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs"
/*!***********************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsiblePanelCssVars: () => (/* binding */ CollapsiblePanelCssVars)
/* harmony export */ });
let CollapsiblePanelCssVars = /*#__PURE__*/function (CollapsiblePanelCssVars) {
  /**
   * The collapsible panel's height.
   * @type {number}
   */
  CollapsiblePanelCssVars["collapsiblePanelHeight"] = "--collapsible-panel-height";
  /**
   * The collapsible panel's width.
   * @type {number}
   */
  CollapsiblePanelCssVars["collapsiblePanelWidth"] = "--collapsible-panel-width";
  return CollapsiblePanelCssVars;
}({});

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs"
/*!******************************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs ***!
  \******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsiblePanelDataAttributes: () => (/* binding */ CollapsiblePanelDataAttributes)
/* harmony export */ });
/* harmony import */ var _internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internals/stateAttributesMapping.mjs */ "./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs");

let CollapsiblePanelDataAttributes = function (CollapsiblePanelDataAttributes) {
  /**
   * Present when the collapsible panel is open.
   */
  CollapsiblePanelDataAttributes["open"] = "data-open";
  /**
   * Present when the collapsible panel is closed.
   */
  CollapsiblePanelDataAttributes["closed"] = "data-closed";
  /**
   * Present when the panel begins animating in.
   */
  CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["startingStyle"] = _internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_0__.TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  /**
   * Present when the panel is animating out.
   */
  CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["endingStyle"] = _internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_0__.TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  return CollapsiblePanelDataAttributes;
}({});

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs"
/*!*******************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCollapsiblePanel: () => (/* binding */ useCollapsiblePanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/addEventListener */ "./node_modules/@base-ui/utils/addEventListener.mjs");
/* harmony import */ var _base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/useIsoLayoutEffect */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base-ui/utils/useMergedRefs */ "./node_modules/@base-ui/utils/useMergedRefs.mjs");
/* harmony import */ var _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base-ui/utils/useAnimationFrame */ "./node_modules/@base-ui/utils/useAnimationFrame.mjs");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _base_ui_utils_useValueAsRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base-ui/utils/useValueAsRef */ "./node_modules/@base-ui/utils/useValueAsRef.mjs");
/* harmony import */ var _base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base-ui/utils/warn */ "./node_modules/@base-ui/utils/warn.mjs");
/* harmony import */ var _base_ui_utils_owner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base-ui/utils/owner */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var _internals_createBaseUIEventDetails_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internals/createBaseUIEventDetails.mjs */ "./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs");
/* harmony import */ var _internals_reasons_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internals/reasons.mjs */ "./node_modules/@base-ui/react/internals/reason-parts.mjs");
/* harmony import */ var _internals_useOpenChangeComplete_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../internals/useOpenChangeComplete.mjs */ "./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs");
/* harmony import */ var _internals_useAnimationsFinished_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internals/useAnimationsFinished.mjs */ "./node_modules/@base-ui/react/internals/useAnimationsFinished.mjs");
/* harmony import */ var _CollapsiblePanelDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CollapsiblePanelDataAttributes.mjs */ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs");
'use client';















const EMPTY_DIMENSIONS = {
  height: undefined,
  width: undefined
};
function useCollapsiblePanel(parameters) {
  const {
    externalRef,
    hiddenUntilFound,
    id: idParam,
    keepMounted,
    mounted,
    onOpenChange,
    open,
    setMounted,
    setOpen,
    transitionStatus
  } = parameters;
  const panelRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const animationTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [dimensions, setDimensionsUnwrapped] = react__WEBPACK_IMPORTED_MODULE_0__.useState(EMPTY_DIMENSIONS);
  const lastMeasuredDimensionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(EMPTY_DIMENSIONS);
  // `beforematch` should reveal the matched content immediately, so the next
  // open cycle skips author-defined motion once and then returns to normal.
  const shouldSkipNextOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  // Keyframe mount animations on initially open panels cause a visible layout
  // shift during the server-rendered first paint, so suppress that first open
  // lifecycle until the panel has been closed once.
  const shouldPreventMountAnimationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(open);
  // React.Activity tears down Effects while preserving state, so revealing an
  // already-open panel would otherwise replay its CSS keyframe open animation.
  const shouldPreventActivityResumeAnimationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  // Some open paths intentionally bypass motion, but the shared root transition
  // status still advances asynchronously. Override the panel to idle so its data
  // attributes and dimension cleanup reflect the immediate open state.
  const [forcePanelIdle, setForcePanelIdle] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const pendingTemporaryStyleRestoreRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const mergedPanelRef = (0,_base_ui_utils_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__.useMergedRefs)(externalRef, panelRef);
  const latestOpenRef = (0,_base_ui_utils_useValueAsRef__WEBPACK_IMPORTED_MODULE_6__.useValueAsRef)(open);
  // Only used to handle panel close
  const runOnceCloseAnimationsFinish = (0,_internals_useAnimationsFinished_mjs__WEBPACK_IMPORTED_MODULE_12__.useAnimationsFinished)(panelRef);
  const hidden = !open && !mounted;
  const panelTransitionStatus = forcePanelIdle ? 'idle' : transitionStatus;
  const shouldPreventOpenAnimation = open && (
  // These 2 refs are safe to read in render, they are only written from committed
  // layout/effect paths and gate one-shot motion suppression for the next open
  // lifecycle. They intentionally expose the last committed motion snapshot.
  shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
  const renderedDimensions = !open && mounted &&
  // These 2 refs are also safe to read in render, both hold the last committed
  // animation mode and measurement. This fallback only restores a previously
  // measured pixel size after the live dimensions state has been reset back to `auto`.
  animationTypeRef.current === 'css-animation' && dimensions.height === undefined && dimensions.width === undefined ? lastMeasuredDimensionsRef.current : dimensions;
  const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== 'css-animation';

  // Most measured dimensions are reused later when CSS keyframe closes need a
  // pixel size after the rendered dimensions have been reset back to `auto`.
  // Passing `false` is only for clearing the current dimensions state.
  const setDimensions = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_5__.useStableCallback)((nextDimensions, shouldCacheMeasurement = true) => {
    if (shouldCacheMeasurement) {
      lastMeasuredDimensionsRef.current = nextDimensions;
    }
    setDimensionsUnwrapped(nextDimensions);
  });
  const restorePendingTemporaryStyle = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_5__.useStableCallback)(() => {
    pendingTemporaryStyleRestoreRef.current?.();
    pendingTemporaryStyleRestoreRef.current = null;
  });
  const setPendingTemporaryStyleRestore = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_5__.useStableCallback)(restore => {
    restorePendingTemporaryStyle();
    pendingTemporaryStyleRestoreRef.current = () => {
      pendingTemporaryStyleRestoreRef.current = null;
      restore();
    };
  });

  // React.Activity unmounts Effects while preserving component state. If that
  // teardown happens while an already-open keyframe panel is visible, remember
  // to suppress the replayed open animation on the next committed reveal.
  const markActivityResumeAnimationSuppressed = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_5__.useStableCallback)(() => {
    if (open && mounted && animationTypeRef.current === 'css-animation') {
      shouldPreventActivityResumeAnimationRef.current = true;
    }
  });
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useIsoLayoutEffect)(() => {
    // `forcePanelIdle` is only a temporary override for open paths that skip
    // motion. Keep it active while the shared root still reports `starting`,
    // then drop it once the root transition state catches up.
    if (!forcePanelIdle || transitionStatus === 'starting') {
      return;
    }
    setForcePanelIdle(false);
  }, [forcePanelIdle, transitionStatus]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      markActivityResumeAnimationSuppressed();
      restorePendingTemporaryStyle();
    };
  }, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useIsoLayoutEffect)(() => {
    const panel = panelRef.current;
    if (!panel) {
      return undefined;
    }

    // `beforematch` can temporarily force a `0s` motion duration so the matched
    // content reveals immediately. Restore the authored duration before detecting
    // the next close animation type, otherwise that first close is misread as
    // "no motion" and the close transition or keyframe gets skipped.
    if (!open && pendingTemporaryStyleRestoreRef.current) {
      restorePendingTemporaryStyle();
    }
    const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
    animationTypeRef.current = animationType;

    // Initially open keyframe panels skip their first paint animation to avoid
    // layout shift, but we still need to cache the expanded size so the first
    // close animation can start from pixels instead of `auto`.
    if (open && transitionStatus === 'idle' && shouldPreventMountAnimationRef.current && animationType === 'css-animation') {
      lastMeasuredDimensionsRef.current = getDimensions(panel);
      return undefined;
    }

    // Handle the opening pass: measure the expanded size and, when necessary,
    // neutralize author-defined motion so the panel can open immediately.
    if (open && transitionStatus === 'starting') {
      // `beforematch` opens should reveal the panel immediately so find-in-page
      // does not wait for the author-defined transition or animation to finish.
      const skipNextOpen = shouldSkipNextOpenRef.current;
      shouldSkipNextOpenRef.current = false;
      if (animationType === 'none') {
        setDimensions(getDimensions(panel));
        setForcePanelIdle(true);
        return undefined;
      }
      if (animationType === 'css-transition') {
        const restoreLayoutStyles = resetLayoutStyles(panel);
        setDimensions(getDimensions(panel));
        if (!skipNextOpen) {
          return restoreLayoutStyles;
        }
        const restoreTransitionDuration = setTemporaryStyle(panel, 'transition-duration', '0s');
        setPendingTemporaryStyleRestore(restoreTransitionDuration);
        setForcePanelIdle(true);
        return restoreLayoutStyles;
      }
      setDimensions(getDimensions(panel));
      const restoreAnimationName = setTemporaryStyle(panel, 'animation-name', 'none');
      if (!skipNextOpen) {
        restoreAnimationName();
        return undefined;
      }
      const restoreAnimationDuration = setTemporaryStyle(panel, 'animation-duration', '0s');
      restoreAnimationName();
      setPendingTemporaryStyleRestore(restoreAnimationDuration);
      setForcePanelIdle(true);
      return undefined;
    }

    // Capture the current size as soon as close is requested, before the
    // deferred ending phase applies closed styles. This keeps close transitions
    // starting from a measured pixel value, including interrupted opens.
    if (!open && mounted && (transitionStatus === 'idle' || transitionStatus === 'starting')) {
      shouldPreventMountAnimationRef.current = false;
      shouldPreventActivityResumeAnimationRef.current = false;
      if (animationType === 'none') {
        setDimensions(EMPTY_DIMENSIONS, false);
        setMounted(false);
        return undefined;
      }
      setDimensions(getDimensions(panel));
      return undefined;
    }
    if (transitionStatus !== 'ending') {
      return undefined;
    }

    // Reachable when `transitionStatus` already flipped to `ending` before this effect ran, so
    // the close branch above was skipped. Without motion there is nothing to wait for, so unmount
    // here instead of deferring to the animation-finished path below.
    if (animationType === 'none') {
      setMounted(false);
      return undefined;
    }
    const nextDimensions = getDimensions(panel);
    const hasMeasuredSize = nextDimensions.height > 0 || nextDimensions.width > 0;
    if (!hasMeasuredSize) {
      setMounted(false);
      return undefined;
    }
    setDimensions(nextDimensions);
    if (animationType === 'css-animation') {
      const restoreAnimationName = setTemporaryStyle(panel, 'animation-name', 'none');
      restoreAnimationName();
    }
    return undefined;
  }, [mounted, open, restorePendingTemporaryStyle, setDimensions, setMounted, setPendingTemporaryStyleRestore, shouldPreventOpenAnimation, transitionStatus]);
  (0,_internals_useOpenChangeComplete_mjs__WEBPACK_IMPORTED_MODULE_11__.useOpenChangeComplete)({
    enabled: open && mounted && panelTransitionStatus === 'idle',
    open: true,
    ref: panelRef,
    onComplete() {
      // `useOpenChangeComplete` only aborts from its effect cleanup, which React runs in the
      // post-paint passive flush. An animation's `finished` microtask can resolve after the render
      // that set `open` to `false` but before that cleanup, so re-check the latest value here.
      // Clearing the measured size in that window would make the close transition start from
      // `height: 0` instead of the expanded pixel height.
      if (!open) {
        return;
      }
      setDimensions(EMPTY_DIMENSIONS, false);
    }
  });

  // Closing panels need extra sequencing beyond `useOpenChangeComplete`.
  // This passive effect runs after the `ending` render has committed, so
  // `[data-ending-style]` is already present. Chrome can still register the
  // exit transition one frame later when an Accordion closes one item while
  // opening another, so wait one frame before watching animations.
  // See https://github.com/mui/base-ui/issues/3099
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (open || !mounted || panelTransitionStatus !== 'ending') {
      return undefined;
    }
    const panel = panelRef.current;
    if (!panel) {
      return undefined;
    }
    const abortController = new AbortController();
    let endingStyleFrame = -1;
    function handleComplete() {
      // Same post-paint race as the `useOpenChangeComplete` callback above, except `open` is
      // captured by this effect's closure and always `false` here, so read the latest value from
      // a ref. Unmounting a panel that has already reopened would drop it from the DOM.
      if (latestOpenRef.current) {
        return;
      }
      setMounted(false);
      setDimensions(EMPTY_DIMENSIONS, false);
    }
    endingStyleFrame = _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_4__.AnimationFrame.request(() => {
      runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
    });
    return () => {
      _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_4__.AnimationFrame.cancel(endingStyleFrame);
      abortController.abort();
    };
  }, [latestOpenRef, mounted, open, panelTransitionStatus, runOnceCloseAnimationsFinish, setDimensions, setMounted]);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useIsoLayoutEffect)(() => {
    const panel = panelRef.current;
    if (!panel || !hiddenUntilFound || !hidden) {
      return;
    }

    // React only supports a boolean for the `hidden` attribute and forces
    // legit string values to booleans so we have to force it back in the DOM
    // when necessary: https://github.com/react/react/issues/24740
    panel.setAttribute('hidden', 'until-found');
  }, [hidden, hiddenUntilFound]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function registerBeforeMatchListener() {
    const panel = panelRef.current;
    if (!panel) {
      return undefined;
    }
    function handleBeforeMatch(event) {
      const eventDetails = (0,_internals_createBaseUIEventDetails_mjs__WEBPACK_IMPORTED_MODULE_9__.createChangeEventDetails)(_internals_reasons_mjs__WEBPACK_IMPORTED_MODULE_10__.none, event);
      onOpenChange(true, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      shouldSkipNextOpenRef.current = true;
      setOpen(true);
    }
    return (0,_base_ui_utils_addEventListener__WEBPACK_IMPORTED_MODULE_1__.addEventListener)(panel, 'beforematch', handleBeforeMatch);
  }, [onOpenChange, setOpen]);
  const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
  return {
    height: renderedDimensions.height,
    props: {
      ...(shouldPersistHiddenTransitionStyles ? {
        [_CollapsiblePanelDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_13__.CollapsiblePanelDataAttributes.startingStyle]: ''
      } : undefined),
      hidden,
      id: idParam
    },
    ref: mergedPanelRef,
    shouldPreventOpenAnimation,
    shouldRender,
    transitionStatus: panelTransitionStatus,
    width: renderedDimensions.width
  };
}
function getDimensions(element) {
  return {
    height: element.scrollHeight,
    width: element.scrollWidth
  };
}
function getAnimationType(element, hasSuppressedMountAnimation) {
  const panelStyles = (0,_base_ui_utils_owner__WEBPACK_IMPORTED_MODULE_8__.getWindow)(element).getComputedStyle(element);
  const hasAnimation = (panelStyles.animationName.split(',').map(name => name.trim()).some(name => name !== '' && name !== 'none') || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
  const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
  if (hasAnimation && hasTransition) {
    /* istanbul ignore else -- `process.env.NODE_ENV` is a build-time constant under test */
    if (true) {
      (0,_base_ui_utils_warn__WEBPACK_IMPORTED_MODULE_7__.warn)('CSS transitions and CSS animations both detected on Collapsible or Accordion panel.', 'Only one of either animation type should be used.');
    }
    return 'css-transition';
  }
  if (hasTransition) {
    return 'css-transition';
  }
  if (hasAnimation) {
    return 'css-animation';
  }
  return 'none';
}
function hasNonZeroDuration(value) {
  return value.split(',').map(part => part.trim()).some(part => part !== '' && Number.parseFloat(part) > 0);
}

/**
 * Temporarily overrides an inline style property and returns a cleanup that
 * restores the previous inline value and priority.
 * @param element - The element whose inline style should be updated.
 * @param property - The CSS property name to override.
 * @param value - The temporary value to assign.
 * @returns A cleanup function that restores the original inline style state.
 */
function setTemporaryStyle(element, property, value) {
  const previousValue = element.style.getPropertyValue(property);
  const previousPriority = element.style.getPropertyPriority(property);
  element.style.setProperty(property, value);
  return () => {
    if (previousValue === '') {
      element.style.removeProperty(property);
      return;
    }
    element.style.setProperty(property, previousValue, previousPriority);
  };
}

/**
 * Temporarily resets inline alignment styles that can distort scroll-based
 * size measurements, then restores them on the next animation frame.
 * @param element - The panel element being measured.
 * @returns A cleanup function that cancels the scheduled restore and reapplies
 * the original inline layout styles immediately.
 */
function resetLayoutStyles(element) {
  const originalLayoutStyles = {
    'justify-content': element.style.justifyContent,
    'align-items': element.style.alignItems,
    'align-content': element.style.alignContent,
    'justify-items': element.style.justifyItems
  };
  Object.keys(originalLayoutStyles).forEach(key => {
    element.style.setProperty(key, 'initial', 'important');
  });
  function restoreLayoutStyles() {
    Object.entries(originalLayoutStyles).forEach(([key, value]) => {
      if (value === '') {
        element.style.removeProperty(key);
        return;
      }
      element.style.setProperty(key, value);
    });
  }
  const frame = _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_4__.AnimationFrame.request(restoreLayoutStyles);
  return () => {
    _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_4__.AnimationFrame.cancel(frame);
    restoreLayoutStyles();
  };
}

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs"
/*!**************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleRoot: () => (/* binding */ CollapsibleRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");
/* harmony import */ var _useCollapsibleRoot_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCollapsibleRoot.mjs */ "./node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs");
/* harmony import */ var _CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollapsibleRootContext.mjs */ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs");
/* harmony import */ var _stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateAttributesMapping.mjs */ "./node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';








/**
 * Groups all parts of the collapsible.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
const CollapsibleRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CollapsibleRoot(componentProps, forwardedRef) {
  const {
    render,
    className,
    defaultOpen = false,
    disabled = false,
    onOpenChange: onOpenChangeProp,
    open,
    style,
    ...elementProps
  } = componentProps;
  const onOpenChange = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_1__.useStableCallback)(onOpenChangeProp);
  const collapsible = (0,_useCollapsibleRoot_mjs__WEBPACK_IMPORTED_MODULE_3__.useCollapsibleRoot)({
    open,
    defaultOpen,
    onOpenChange,
    disabled
  });
  const state = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    open: collapsible.open,
    disabled: collapsible.disabled,
    transitionStatus: collapsible.transitionStatus
  }), [collapsible.open, collapsible.disabled, collapsible.transitionStatus]);
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...collapsible,
    onOpenChange,
    state
  }), [collapsible, onOpenChange, state]);
  const element = (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_2__.useRenderElement)('div', componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: _stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_5__.collapsibleStateAttributesMapping
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_4__.CollapsibleRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) CollapsibleRoot.displayName = "CollapsibleRoot";

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs"
/*!*********************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleRootContext: () => (/* binding */ CollapsibleRootContext),
/* harmony export */   useCollapsibleRootContext: () => (/* binding */ useCollapsibleRootContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';



const CollapsibleRootContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (true) CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CollapsibleRootContext);
  if (context === undefined) {
    throw new Error( true ? 'Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>.' : 0);
  }
  return context;
}

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs"
/*!*********************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapsibleStateAttributesMapping: () => (/* binding */ collapsibleStateAttributesMapping)
/* harmony export */ });
/* harmony import */ var _utils_collapsibleOpenStateMapping_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/collapsibleOpenStateMapping.mjs */ "./node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs");
/* harmony import */ var _internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internals/stateAttributesMapping.mjs */ "./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs");


const collapsibleStateAttributesMapping = {
  ..._utils_collapsibleOpenStateMapping_mjs__WEBPACK_IMPORTED_MODULE_0__.collapsibleOpenStateMapping,
  ..._internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_1__.transitionStatusMapping
};

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs"
/*!*****************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCollapsibleRoot: () => (/* binding */ useCollapsibleRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useControlled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useControlled */ "./node_modules/@base-ui/utils/useControlled.mjs");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _internals_useBaseUiId_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internals/useBaseUiId.mjs */ "./node_modules/@base-ui/react/internals/useBaseUiId.mjs");
/* harmony import */ var _internals_createBaseUIEventDetails_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internals/createBaseUIEventDetails.mjs */ "./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs");
/* harmony import */ var _internals_reasons_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internals/reasons.mjs */ "./node_modules/@base-ui/react/internals/reason-parts.mjs");
/* harmony import */ var _internals_useTransitionStatus_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internals/useTransitionStatus.mjs */ "./node_modules/@base-ui/react/internals/useTransitionStatus.mjs");
'use client';








function useCollapsibleRoot(parameters) {
  const {
    open: openParam,
    defaultOpen,
    onOpenChange,
    disabled
  } = parameters;
  const [open, setOpen] = (0,_base_ui_utils_useControlled__WEBPACK_IMPORTED_MODULE_1__.useControlled)({
    controlled: openParam,
    default: defaultOpen,
    name: 'Collapsible',
    state: 'open'
  });
  const {
    mounted,
    setMounted,
    transitionStatus
  } = (0,_internals_useTransitionStatus_mjs__WEBPACK_IMPORTED_MODULE_6__.useTransitionStatus)(open, true, true);
  const defaultPanelId = (0,_internals_useBaseUiId_mjs__WEBPACK_IMPORTED_MODULE_3__.useBaseUiId)();
  // `undefined` uses the initial generated fallback; `null` means the panel unmounted.
  const [registeredPanelId, setPanelIdState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const panelId = registeredPanelId === null ? undefined : registeredPanelId ?? defaultPanelId;
  const handleTrigger = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__.useStableCallback)(event => {
    const nextOpen = !open;
    const eventDetails = (0,_internals_createBaseUIEventDetails_mjs__WEBPACK_IMPORTED_MODULE_4__.createChangeEventDetails)(_internals_reasons_mjs__WEBPACK_IMPORTED_MODULE_5__.triggerPress, event.nativeEvent);
    onOpenChange(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setOpen(nextOpen);
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    defaultPanelId,
    disabled,
    handleTrigger,
    mounted,
    open,
    panelId,
    setMounted,
    setOpen,
    setPanelIdState,
    transitionStatus
  }), [defaultPanelId, disabled, handleTrigger, mounted, open, panelId, setMounted, setOpen, setPanelIdState, transitionStatus]);
}

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs"
/*!********************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleTrigger: () => (/* binding */ CollapsibleTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_collapsibleOpenStateMapping_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/collapsibleOpenStateMapping.mjs */ "./node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs");
/* harmony import */ var _internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/stateAttributesMapping.mjs */ "./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs");
/* harmony import */ var _internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internals/useRenderElement.mjs */ "./node_modules/@base-ui/react/internals/useRenderElement.mjs");
/* harmony import */ var _internals_use_button_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internals/use-button/index.mjs */ "./node_modules/@base-ui/react/internals/use-button/useButton.mjs");
/* harmony import */ var _root_CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../root/CollapsibleRootContext.mjs */ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs");
'use client';







const stateAttributesMapping = {
  ..._utils_collapsibleOpenStateMapping_mjs__WEBPACK_IMPORTED_MODULE_1__.triggerOpenStateMapping,
  ..._internals_stateAttributesMapping_mjs__WEBPACK_IMPORTED_MODULE_2__.transitionStatusMapping
};

/**
 * A button that opens and closes the collapsible panel.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
const CollapsibleTrigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CollapsibleTrigger(componentProps, forwardedRef) {
  const {
    panelId,
    open,
    handleTrigger,
    state,
    disabled: contextDisabled
  } = (0,_root_CollapsibleRootContext_mjs__WEBPACK_IMPORTED_MODULE_5__.useCollapsibleRootContext)();
  const {
    className,
    disabled = contextDisabled,
    render,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = (0,_internals_use_button_index_mjs__WEBPACK_IMPORTED_MODULE_4__.useButton)({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton
  });
  const element = (0,_internals_useRenderElement_mjs__WEBPACK_IMPORTED_MODULE_3__.useRenderElement)('button', componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [{
      'aria-controls': open ? panelId : undefined,
      'aria-expanded': open,
      onClick: handleTrigger
    }, elementProps, getButtonProps],
    stateAttributesMapping
  });
  return element;
});
if (true) CollapsibleTrigger.displayName = "CollapsibleTrigger";

/***/ },

/***/ "./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs"
/*!**********************************************************************************************!*\
  !*** ./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs ***!
  \**********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleTriggerDataAttributes: () => (/* binding */ CollapsibleTriggerDataAttributes)
/* harmony export */ });
let CollapsibleTriggerDataAttributes = /*#__PURE__*/function (CollapsibleTriggerDataAttributes) {
  /**
   * Present when the collapsible panel is open.
   */
  CollapsibleTriggerDataAttributes["panelOpen"] = "data-panel-open";
  return CollapsibleTriggerDataAttributes;
}({});

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

/***/ "./node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs"
/*!***************************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs ***!
  \***************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeRootContext: () => (/* binding */ CompositeRootContext),
/* harmony export */   useCompositeRootContext: () => (/* binding */ useCompositeRootContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';



const CompositeRootContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CompositeRootContext);
  if (context === undefined && !optional) {
    throw new Error( true ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : 0);
  }
  return context;
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs"
/*!****************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChangeEventDetails: () => (/* binding */ createChangeEventDetails),
/* harmony export */   createGenericEventDetails: () => (/* binding */ createGenericEventDetails)
/* harmony export */ });
/* harmony import */ var _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/utils/empty */ "./node_modules/@base-ui/utils/empty.mjs");



/**
 * Maps a change `reason` string to the corresponding native event type.
 */

/**
 * Details of custom change events emitted by Base UI components.
 */

/**
 * Details of custom generic events emitted by Base UI components.
 */

/**
 * Creates a Base UI event details object with the given reason and utilities
 * for preventing Base UI's internal event handling.
 */
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event('base-ui'),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = customProperties ?? _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event('base-ui'),
    ...custom
  };
  return details;
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

/***/ "./node_modules/@base-ui/react/internals/reason-parts.mjs"
/*!****************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/reason-parts.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelOpen: () => (/* binding */ cancelOpen),
/* harmony export */   chipRemovePress: () => (/* binding */ chipRemovePress),
/* harmony export */   clearPress: () => (/* binding */ clearPress),
/* harmony export */   closePress: () => (/* binding */ closePress),
/* harmony export */   closeWatcher: () => (/* binding */ closeWatcher),
/* harmony export */   decrementPress: () => (/* binding */ decrementPress),
/* harmony export */   disabled: () => (/* binding */ disabled),
/* harmony export */   drag: () => (/* binding */ drag),
/* harmony export */   escapeKey: () => (/* binding */ escapeKey),
/* harmony export */   focusOut: () => (/* binding */ focusOut),
/* harmony export */   imperativeAction: () => (/* binding */ imperativeAction),
/* harmony export */   incrementPress: () => (/* binding */ incrementPress),
/* harmony export */   initial: () => (/* binding */ initial),
/* harmony export */   inputBlur: () => (/* binding */ inputBlur),
/* harmony export */   inputChange: () => (/* binding */ inputChange),
/* harmony export */   inputClear: () => (/* binding */ inputClear),
/* harmony export */   inputPaste: () => (/* binding */ inputPaste),
/* harmony export */   inputPress: () => (/* binding */ inputPress),
/* harmony export */   itemPress: () => (/* binding */ itemPress),
/* harmony export */   keyboard: () => (/* binding */ keyboard),
/* harmony export */   linkPress: () => (/* binding */ linkPress),
/* harmony export */   listNavigation: () => (/* binding */ listNavigation),
/* harmony export */   missing: () => (/* binding */ missing),
/* harmony export */   none: () => (/* binding */ none),
/* harmony export */   outsidePress: () => (/* binding */ outsidePress),
/* harmony export */   pointer: () => (/* binding */ pointer),
/* harmony export */   scrub: () => (/* binding */ scrub),
/* harmony export */   siblingOpen: () => (/* binding */ siblingOpen),
/* harmony export */   swipe: () => (/* binding */ swipe),
/* harmony export */   trackPress: () => (/* binding */ trackPress),
/* harmony export */   triggerFocus: () => (/* binding */ triggerFocus),
/* harmony export */   triggerHover: () => (/* binding */ triggerHover),
/* harmony export */   triggerPress: () => (/* binding */ triggerPress),
/* harmony export */   wheel: () => (/* binding */ wheel),
/* harmony export */   windowResize: () => (/* binding */ windowResize)
/* harmony export */ });
const none = 'none';
const triggerPress = 'trigger-press';
const triggerHover = 'trigger-hover';
const triggerFocus = 'trigger-focus';
const outsidePress = 'outside-press';
const itemPress = 'item-press';
const closePress = 'close-press';
const linkPress = 'link-press';
const clearPress = 'clear-press';
const chipRemovePress = 'chip-remove-press';
const trackPress = 'track-press';
const incrementPress = 'increment-press';
const decrementPress = 'decrement-press';
const inputChange = 'input-change';
const inputClear = 'input-clear';
const inputBlur = 'input-blur';
const inputPaste = 'input-paste';
const inputPress = 'input-press';
const focusOut = 'focus-out';
const escapeKey = 'escape-key';
const closeWatcher = 'close-watcher';
const listNavigation = 'list-navigation';
const keyboard = 'keyboard';
const pointer = 'pointer';
const drag = 'drag';
const wheel = 'wheel';
const scrub = 'scrub';
const cancelOpen = 'cancel-open';
const siblingOpen = 'sibling-open';
const disabled = 'disabled';
const missing = 'missing';
const initial = 'initial';
const imperativeAction = 'imperative-action';
const swipe = 'swipe';
const windowResize = 'window-resize';

/***/ },

/***/ "./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs"
/*!**************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/stateAttributesMapping.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionStatusDataAttributes: () => (/* binding */ TransitionStatusDataAttributes),
/* harmony export */   transitionStatusMapping: () => (/* binding */ transitionStatusMapping)
/* harmony export */ });
let TransitionStatusDataAttributes = /*#__PURE__*/function (TransitionStatusDataAttributes) {
  /**
   * Present when the component begins animating in.
   */
  TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
  /**
   * Present when the component is animating out.
   */
  TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes;
}({});
const STARTING_HOOK = {
  'data-starting-style': ''
};
const ENDING_HOOK = {
  'data-ending-style': ''
};
const transitionStatusMapping = {
  transitionStatus(value) {
    if (value === 'starting') {
      return STARTING_HOOK;
    }
    if (value === 'ending') {
      return ENDING_HOOK;
    }
    return null;
  }
};

/***/ },

/***/ "./node_modules/@base-ui/react/internals/use-button/useButton.mjs"
/*!************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/use-button/useButton.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useButton: () => (/* binding */ useButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _base_ui_utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base-ui/utils/error */ "./node_modules/@base-ui/utils/error.mjs");
/* harmony import */ var _base_ui_utils_safeReact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base-ui/utils/safeReact */ "./node_modules/@base-ui/utils/safeReact.mjs");
/* harmony import */ var _base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base-ui/utils/useIsoLayoutEffect */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../merge-props/index.mjs */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var _composite_root_CompositeRootContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../composite/root/CompositeRootContext.mjs */ "./node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs");
/* harmony import */ var _utils_useFocusableWhenDisabled_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/useFocusableWhenDisabled.mjs */ "./node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs");
/* harmony import */ var _utils_dispatchClickWithModifiers_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/dispatchClickWithModifiers.mjs */ "./node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs");
'use client';











function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const compositeRootContext = (0,_composite_root_CompositeRootContext_mjs__WEBPACK_IMPORTED_MODULE_7__.useCompositeRootContext)(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
  const {
    props: focusableWhenDisabledProps
  } = (0,_utils_useFocusableWhenDisabled_mjs__WEBPACK_IMPORTED_MODULE_8__.useFocusableWhenDisabled)({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = _base_ui_utils_safeReact__WEBPACK_IMPORTED_MODULE_4__.SafeReact.captureOwnerStack?.() || '';
          const message = 'A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Use a real <button> in the ' + '`render` prop, or set `nativeButton` to `false`.';
          (0,_base_ui_utils_error__WEBPACK_IMPORTED_MODULE_3__.error)(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = _base_ui_utils_safeReact__WEBPACK_IMPORTED_MODULE_4__.SafeReact.captureOwnerStack?.() || '';
        const message = 'A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while Base UI applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set ' + '`nativeButton` to `true`.';
        (0,_base_ui_utils_error__WEBPACK_IMPORTED_MODULE_3__.error)(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }

  // handles a disabled composite button rendering another button, e.g.
  // <Toolbar.Button disabled render={<Menu.Trigger />} />
  // the `disabled` prop needs to pass through 2 `useButton`s then finally
  // delete the `disabled` attribute from DOM
  const updateDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.useIsoLayoutEffect)(updateDisabled, [updateDisabled]);
  const getButtonProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return (0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_6__.mergeProps)({
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled) {
          return;
        }
        ;(0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_6__.makeEventPreventable)(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === 'Enter';
        const isSpaceKey = event.key === ' ';
        const role = currentTarget.getAttribute('role');
        const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();

          // Only a native-mode item that isn't a real <button> is excluded.
          if (!isNativeButton || isButton) {
            event.preventBaseUIHandler();
            (0,_utils_dispatchClickWithModifiers_mjs__WEBPACK_IMPORTED_MODULE_9__.dispatchClickWithModifiers)(currentTarget, event);
          }
          return;
        }

        // Keyboard accessibility for native and non-native elements.
        if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
          // Space activates links on keyup (`role="button"` semantics, matching the
          // composite path); prevent the page scroll Space would otherwise trigger.
          // Enter is left to the browser's native link activation.
          if (isCurrentTarget && isLink && isSpaceKey) {
            event.preventDefault();
          }
          return;
        }

        // Match native buttons: preventing the keydown's default cancels activation.
        if (event.defaultPrevented) {
          return;
        }
        event.preventDefault();
        if (isEnterKey) {
          event.preventBaseUIHandler();
          (0,_utils_dispatchClickWithModifiers_mjs__WEBPACK_IMPORTED_MODULE_9__.dispatchClickWithModifiers)(currentTarget, event);
        }
      },
      onKeyUp(event) {
        if (disabled) {
          return;
        }

        // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
        // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
        ;(0,_merge_props_index_mjs__WEBPACK_IMPORTED_MODULE_6__.makeEventPreventable)(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }

        // Keyboard accessibility for non interactive elements.
        // Match native buttons: preventing the keyup's default cancels Space activation.
        // Limitation: unlike a native <button>, a prevented *keydown* cannot cancel the
        // activation — no state is kept between keydown and keyup, so we can't tell
        // whether the keydown was prevented or even happened on this element.
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === ' ') {
          event.preventBaseUIHandler();
          (0,_utils_dispatchClickWithModifiers_mjs__WEBPACK_IMPORTED_MODULE_9__.dispatchClickWithModifiers)(event.currentTarget, event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, isNativeButton ? {
      type: 'button'
    } : {
      role: 'button'
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__.useStableCallback)(element => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(elem) && elem.tagName === 'A' && Boolean(elem.href);
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/useAnimationsFinished.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useAnimationsFinished.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnimationsFinished: () => (/* binding */ useAnimationsFinished)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useAnimationFrame */ "./node_modules/@base-ui/utils/useAnimationFrame.mjs");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _utils_resolveRef_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/resolveRef.mjs */ "./node_modules/@base-ui/react/utils/resolveRef.mjs");
'use client';






/**
 * Executes a function once all animations have finished on the provided element.
 * If an animation is canceled, waits for any replacement animations before executing.
 * @param elementOrRef - The element to watch for animations.
 * @param waitForStartingStyleRemoved - Whether to wait for [data-starting-style] to be removed before checking for animations.
 * @returns A function that takes a callback to execute once all animations have finished, and an optional AbortSignal to abort the callback
 */
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false) {
  const frame = (0,_base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__.useAnimationFrame)();
  return (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_2__.useStableCallback)((fnToExecute,
  /**
   * An optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that
   * can be used to abort `fnToExecute` before all the animations have finished.
   * @default null
   */
  signal = null) => {
    frame.cancel();
    const element = (0,_utils_resolveRef_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveRef)(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      // Synchronously flush the unmounting of the component so that the browser doesn't
      // paint: https://github.com/mui/base-ui/issues/979
      react_dom__WEBPACK_IMPORTED_MODULE_0__.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map(animation => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (currentAnimations.some(animation => animation.pending || animation.playState !== 'finished')) {
          // Sometimes animations can be aborted because a property they depend on changes while the animation plays.
          // In such cases, we need to re-check if any new animations have started.
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = 'data-starting-style';

      // If `[data-starting-style]` isn't present, fall back to waiting one more frame
      // to give "open" animations a chance to be registered.
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }

      // Wait for `[data-starting-style]` to have been removed.
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener('abort', () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
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

/***/ "./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOpenChangeComplete: () => (/* binding */ useOpenChangeComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useStableCallback */ "./node_modules/@base-ui/utils/useStableCallback.mjs");
/* harmony import */ var _useAnimationsFinished_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAnimationsFinished.mjs */ "./node_modules/@base-ui/react/internals/useAnimationsFinished.mjs");
'use client';





/**
 * Calls the provided function when the CSS open/close animation or transition completes.
 */
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = (0,_base_ui_utils_useStableCallback__WEBPACK_IMPORTED_MODULE_1__.useStableCallback)(onCompleteParam);
  const runOnceAnimationsFinish = (0,_useAnimationsFinished_mjs__WEBPACK_IMPORTED_MODULE_2__.useAnimationsFinished)(ref, open);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) {
      return undefined;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

/***/ },

/***/ "./node_modules/@base-ui/react/internals/useRenderElement.mjs"
/*!********************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useRenderElement.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? _base_ui_utils_empty__WEBPACK_IMPORTED_MODULE_5__.EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}

/**
 * Computes render element final props.
 */
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
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
    let newElement = render;
    // Workaround for https://github.com/react/react/issues/32392
    // This works because the toArray() logic unwrap lazy element type in
    // https://github.com/react/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(render);
      newElement = children[0];
    }

    // There is a high number of indirections, the error message thrown by React.cloneElement() is
    // hard to use for developers, this logic provides a better context.
    //
    // Our general guideline is to never change the control flow depending on the environment.
    // However, React.cloneElement() throws if React.isValidElement() is false,
    // so we can throw before with custom message.
    if (true) {
      if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)) {
        // TODO: fix mui/no-guarded-throw
        // eslint-disable-next-line mui/no-guarded-throw
        throw new Error(['Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.', 'A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.', 'https://base-ui.com/r/invalid-render-prop'].join('\n'));
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === 'string') {
      return renderTag(element, props);
    }
  }
  // Unreachable, but the typings on `useRenderElement` need to be reworked
  // to annotate it correctly.
  throw new Error( true ? 'Base UI: Render element or function are not defined.' : 0);
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

/***/ "./node_modules/@base-ui/react/internals/useTransitionStatus.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@base-ui/react/internals/useTransitionStatus.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransitionStatus: () => (/* binding */ useTransitionStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/utils/useIsoLayoutEffect */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base-ui/utils/useAnimationFrame */ "./node_modules/@base-ui/utils/useAnimationFrame.mjs");
'use client';




/**
 * Provides a status string for CSS animations.
 * @param open - a boolean that determines if the element is open.
 * @param enableIdleState - a boolean that enables the `'idle'` state between `'starting'` and `'ending'`
 */
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(open && enableIdleState ? 'idle' : undefined);
  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus('starting');
  }
  if (!open && mounted && transitionStatus !== 'ending' && !deferEndingState) {
    setTransitionStatus('ending');
  }
  if (!open && !mounted && transitionStatus === 'ending') {
    setTransitionStatus(undefined);
  }
  ;(0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useIsoLayoutEffect)(() => {
    if (!open && mounted && transitionStatus !== 'ending' && deferEndingState) {
      const frame = _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.request(() => {
        setTransitionStatus('ending');
      });
      return () => {
        _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.cancel(frame);
      };
    }
    return undefined;
  }, [open, mounted, transitionStatus, deferEndingState]);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useIsoLayoutEffect)(() => {
    if (!open || enableIdleState) {
      return undefined;
    }
    const frame = _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.request(() => {
      // Avoid `flushSync` here due to Firefox.
      // See https://github.com/mui/base-ui/pull/3424
      setTransitionStatus(undefined);
    });
    return () => {
      _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  (0,_base_ui_utils_useIsoLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useIsoLayoutEffect)(() => {
    if (!open || !enableIdleState) {
      return undefined;
    }
    if (open && mounted && transitionStatus !== 'idle') {
      setTransitionStatus('starting');
    }
    const frame = _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.request(() => {
      setTransitionStatus('idle');
    });
    return () => {
      _base_ui_utils_useAnimationFrame__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
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
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
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
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
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

/***/ "./node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapsibleOpenStateMapping: () => (/* binding */ collapsibleOpenStateMapping),
/* harmony export */   triggerOpenStateMapping: () => (/* binding */ triggerOpenStateMapping)
/* harmony export */ });
/* harmony import */ var _collapsible_panel_CollapsiblePanelDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsible/panel/CollapsiblePanelDataAttributes.mjs */ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs");
/* harmony import */ var _collapsible_trigger_CollapsibleTriggerDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collapsible/trigger/CollapsibleTriggerDataAttributes.mjs */ "./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs");


const PANEL_OPEN_HOOK = {
  [_collapsible_panel_CollapsiblePanelDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__.CollapsiblePanelDataAttributes.open]: ''
};
const PANEL_CLOSED_HOOK = {
  [_collapsible_panel_CollapsiblePanelDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__.CollapsiblePanelDataAttributes.closed]: ''
};
const triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return {
        [_collapsible_trigger_CollapsibleTriggerDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__.CollapsibleTriggerDataAttributes.panelOpen]: ''
      };
    }
    return null;
  }
};
const collapsibleOpenStateMapping = {
  open(value) {
    if (value) {
      return PANEL_OPEN_HOOK;
    }
    return PANEL_CLOSED_HOOK;
  }
};

/***/ },

/***/ "./node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs"
/*!**************************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchClickWithModifiers: () => (/* binding */ dispatchClickWithModifiers)
/* harmony export */ });
/* harmony import */ var _base_ui_utils_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/utils/owner */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");

/**
 * Dispatches a constructed click on the target so it carries the source event's
 * modifier state, which `click()` always reports as unpressed. Like `click()`,
 * the untrusted click still runs native activation behavior (form submission,
 * link navigation).
 * `detail` defaults to 0 (the native convention for keyboard-generated clicks);
 * pass `detail: 1` when the click represents a mouse gesture so consumers keying
 * off `detail === 0` don't classify it as a keyboard activation.
 */
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0
} = {}) {
  target.dispatchEvent(new ((0,_base_ui_utils_owner__WEBPACK_IMPORTED_MODULE_0__.getWindow)(target).PointerEvent)('click', {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
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

/***/ "./node_modules/@base-ui/react/utils/resolveRef.mjs"
/*!**********************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/resolveRef.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRef: () => (/* binding */ resolveRef)
/* harmony export */ });
/**
 * If the provided argument is a ref object, returns its `current` value.
 * Otherwise, returns the argument itself.
 */
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return 'current' in maybeRef ? maybeRef.current : maybeRef;
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

/***/ "./node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs"
/*!************************************************************************!*\
  !*** ./node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusableWhenDisabled: () => (/* binding */ useFocusableWhenDisabled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;

  // we can't explicitly assign `undefined` to any of these props because it
  // would otherwise prevent subsequently merged props from setting them
  const props = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps['aria-disabled'] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
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

/***/ "./node_modules/@base-ui/utils/addEventListener.mjs"
/*!**********************************************************!*\
  !*** ./node_modules/@base-ui/utils/addEventListener.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener)
/* harmony export */ });
/**
 * Adds an event listener and returns a cleanup function to remove it.
 */

function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
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
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

/***/ },

/***/ "./node_modules/@base-ui/utils/error.mjs"
/*!***********************************************!*\
  !*** ./node_modules/@base-ui/utils/error.mjs ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   reset: () => (/* binding */ reset)
/* harmony export */ });
let set;
if (true) {
  set = new Set();
}
function error(...messages) {
  if (true) {
    const messageKey = messages.join(' ');
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}
function reset() {
  set?.clear();
}

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

/***/ "./node_modules/@base-ui/utils/useAnimationFrame.mjs"
/*!***********************************************************!*\
  !*** ./node_modules/@base-ui/utils/useAnimationFrame.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrame: () => (/* binding */ AnimationFrame),
/* harmony export */   resetAnimationFrameScheduler: () => (/* binding */ resetAnimationFrameScheduler),
/* harmony export */   useAnimationFrame: () => (/* binding */ useAnimationFrame)
/* harmony export */ });
/* harmony import */ var _useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRefWithInit.mjs */ "./node_modules/@base-ui/utils/useRefWithInit.mjs");
/* harmony import */ var _useOnMount_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useOnMount.mjs */ "./node_modules/@base-ui/utils/useOnMount.mjs");
'use client';



/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
 * a monomorphic `uint` type with `0` meaning empty.
 * See warning note at:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */
const EMPTY = null;
let LAST_RAF = globalThis.requestAnimationFrame;
class Scheduler {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */

  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = timestamp => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;

    // Update these before iterating, callbacks could call `requestAnimationFrame` again.
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;

    /* In a test environment with fake timers, a fake `requestAnimationFrame` can be called
     * but there's no guarantee that the animation frame will actually run before the fake
     * timers are teared, which leaves `isScheduled` set, but won't run our `tick()`. */
    const didRAFChange =  true && LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
}
let scheduler = new Scheduler();

/**
 * Replaces the shared scheduler and drops all pending animation frame callbacks.
 *
 * For test environments only. The scheduler is process-global, so a callback scheduled in one test
 * but never run (e.g. requested under fake timers that were torn down before the frame fired) would
 * otherwise survive into a later test and run there against stale state. Call between tests to drop
 * such leftovers.
 */
function resetAnimationFrameScheduler() {
  const previous = scheduler;
  scheduler = new Scheduler();
  // Continue the id sequence so `cancel()` calls from `AnimationFrame` instances created before the
  // reset cannot cancel callbacks scheduled after it.
  scheduler.nextId = previous.nextId;
  scheduler.startId = previous.nextId;
  // A frame requested before the reset may still be pending and holds the previous scheduler's
  // `tick`; empty its queue in place so that frame runs nothing when it eventually fires.
  previous.callbacks = [];
  previous.callbacksCount = 0;
}
class AnimationFrame {
  static create() {
    return new AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
}

/**
 * A `requestAnimationFrame` with automatic cleanup and guard.
 */
function useAnimationFrame() {
  const timeout = (0,_useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_0__.useRefWithInit)(AnimationFrame.create).current;
  (0,_useOnMount_mjs__WEBPACK_IMPORTED_MODULE_1__.useOnMount)(timeout.disposeEffect);
  return timeout;
}

/***/ },

/***/ "./node_modules/@base-ui/utils/useControlled.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/@base-ui/utils/useControlled.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControlled: () => (/* binding */ useControlled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/@base-ui/utils/error.mjs");
'use client';

// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */


function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(controlled !== undefined);
  const [valueState, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        (0,_error_mjs__WEBPACK_IMPORTED_MODULE_1__.error)([`A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultProp);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
        (0,_error_mjs__WEBPACK_IMPORTED_MODULE_1__.error)([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === '_owner' && this != null && typeof this === 'object' && '$$typeof' in this) {
        return undefined;
      }
      if (typeof value === 'bigint') {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === 'object') {
        const id = seen.get(value);
        if (id !== undefined) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return '__unserializable__';
  }
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
'use client';



let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride);
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
const maybeReactUseId = _safeReact_mjs__WEBPACK_IMPORTED_MODULE_1__.SafeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride, prefix) {
  // React.useId() is only available from React 17.0.0.
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

/***/ "./node_modules/@base-ui/utils/useOnMount.mjs"
/*!****************************************************!*\
  !*** ./node_modules/@base-ui/utils/useOnMount.mjs ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnMount: () => (/* binding */ useOnMount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _empty_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.mjs */ "./node_modules/@base-ui/utils/empty.mjs");
'use client';




/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(fn, _empty_mjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARRAY);
  /* eslint-enable react-hooks/exhaustive-deps */
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

/***/ "./node_modules/@base-ui/utils/useStableCallback.mjs"
/*!***********************************************************!*\
  !*** ./node_modules/@base-ui/utils/useStableCallback.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStableCallback: () => (/* binding */ useStableCallback)
/* harmony export */ });
/* harmony import */ var _safeReact_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeReact.mjs */ "./node_modules/@base-ui/utils/safeReact.mjs");
/* harmony import */ var _useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRefWithInit.mjs */ "./node_modules/@base-ui/utils/useRefWithInit.mjs");
'use client';



const useInsertionEffect = _safeReact_mjs__WEBPACK_IMPORTED_MODULE_0__.SafeReact.useInsertionEffect;
const useSafeInsertionEffect =
// React 17 doesn't have useInsertionEffect.
useInsertionEffect &&
// Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
useInsertionEffect !== _safeReact_mjs__WEBPACK_IMPORTED_MODULE_0__.SafeReact.useLayoutEffect ? useInsertionEffect : fn => fn();
/**
 * Stabilizes the function passed so it's always the same between renders.
 *
 * The function becomes non-reactive to any values it captures.
 * It can safely be passed as a dependency of `React.useMemo` and `React.useEffect` without re-triggering them if its captured values change.
 *
 * The function must only be called inside effects and event handlers, never during render (which throws an error).
 *
 * This hook is a more permissive version of React 19.2's `React.useEffectEvent` in that it can be passed through contexts and called in event handler props, not just effects.
 */
function useStableCallback(callback) {
  const stable = (0,_useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_1__.useRefWithInit)(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: undefined,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    // TODO: fix mui/no-guarded-throw
    // eslint-disable-next-line mui/no-guarded-throw
    throw /* minify-error-disabled */new Error('Base UI: Cannot call an event handler while rendering.');
  }
}

/***/ },

/***/ "./node_modules/@base-ui/utils/useValueAsRef.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/@base-ui/utils/useValueAsRef.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useValueAsRef: () => (/* binding */ useValueAsRef)
/* harmony export */ });
/* harmony import */ var _useIsoLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsoLayoutEffect.mjs */ "./node_modules/@base-ui/utils/useIsoLayoutEffect.mjs");
/* harmony import */ var _useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRefWithInit.mjs */ "./node_modules/@base-ui/utils/useRefWithInit.mjs");
'use client';




/**
 * Untracks the provided value by turning it into a ref to remove its reactivity.
 *
 * Used to access the passed value inside `React.useEffect` without causing the effect to re-run when the value changes.
 */
function useValueAsRef(value) {
  const latest = (0,_useRefWithInit_mjs__WEBPACK_IMPORTED_MODULE_1__.useRefWithInit)(createLatestRef, value).current;
  latest.next = value;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,_useIsoLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__.useIsoLayoutEffect)(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
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
let set;
if (true) {
  set = new Set();
}
function warn(...messages) {
  if (true) {
    const messageKey = messages.join(' ');
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

/***/ },

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),
/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),
/* harmony export */   getFrameElement: () => (/* binding */ getFrameElement),
/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),
/* harmony export */   getNodeName: () => (/* binding */ getNodeName),
/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),
/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),
/* harmony export */   getParentNode: () => (/* binding */ getParentNode),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   isTableElement: () => (/* binding */ isTableElement),
/* harmony export */   isTopLayer: () => (/* binding */ isTopLayer),
/* harmony export */   isWebKit: () => (/* binding */ isWebKit)
/* harmony export */ });
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(':popover-open')) {
      return true;
    }
  } catch (_e) {
    // no-op
  }
  try {
    return element.matches(':modal');
  } catch (_e) {
    return false;
  }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = value => !!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}




/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/create.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/create.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/create.tsx


var create_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M16 11.2h-3.2V8h-1.6v3.2H8v1.6h3.2V16h1.6v-3.2H16z" }) });

//# sourceMappingURL=create.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.mjs"
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trash_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/trash.tsx


var trash_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z" }) });

//# sourceMappingURL=trash.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/card/content.mjs"
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/card/content.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/card/content.tsx



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

// packages/ui/src/card/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("cb866dcef6", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}._02872bf298eadc43__root>:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):first-child>.c1fa192587e1b4a6__fullbleed:first-child{margin-block-start:calc(var(--wp-ui-card-padding)*-1)}:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):last-child>.c1fa192587e1b4a6__fullbleed:last-child{margin-block-end:calc(var(--wp-ui-card-padding)*-1)}}}");
}
var style_default = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };

// packages/ui/src/card/content.tsx
var Content = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  function CardContent({ render, ...props }, ref) {
    const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
      defaultTagName: "div",
      render,
      ref,
      props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({ className: style_default.content }, props)
    });
    return element;
  }
);

//# sourceMappingURL=content.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/card/header.mjs"
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/card/header.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/card/header.tsx



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

// packages/ui/src/card/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("cb866dcef6", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}._02872bf298eadc43__root>:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):first-child>.c1fa192587e1b4a6__fullbleed:first-child{margin-block-start:calc(var(--wp-ui-card-padding)*-1)}:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):last-child>.c1fa192587e1b4a6__fullbleed:last-child{margin-block-end:calc(var(--wp-ui-card-padding)*-1)}}}");
}
var style_default = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };

// packages/ui/src/card/header.tsx
var Header = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  function CardHeader({ render, ...props }, ref) {
    const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
      defaultTagName: "div",
      render,
      ref,
      props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({ className: style_default.header }, props)
    });
    return element;
  }
);

//# sourceMappingURL=header.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/card/root.mjs"
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/card/root.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/card/root.tsx




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

// packages/ui/src/utils/css/resets.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
}
var resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };

// packages/ui/src/card/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("cb866dcef6", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}._02872bf298eadc43__root>:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):first-child>.c1fa192587e1b4a6__fullbleed:first-child{margin-block-start:calc(var(--wp-ui-card-padding)*-1)}:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):last-child>.c1fa192587e1b4a6__fullbleed:last-child{margin-block-end:calc(var(--wp-ui-card-padding)*-1)}}}");
}
var style_default = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };

// packages/ui/src/card/root.tsx
var Root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Card({ render, ...restProps }, ref) {
  const mergedClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(style_default.root, resets_default["box-sizing"]);
  const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
    defaultTagName: "div",
    render,
    ref,
    props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({ className: mergedClassName }, restProps)
  });
  return element;
});

//# sourceMappingURL=root.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/card/title.mjs"
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/card/title.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _text_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/index.mjs */ "./node_modules/@wordpress/ui/build-module/text/text.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/card/title.tsx



var DEFAULT_TAG = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {});
var Title = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  function CardTitle({ render = DEFAULT_TAG, children, ...props }, ref) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      _text_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Text,
      {
        ref,
        variant: "heading-lg",
        render,
        ...props,
        children
      }
    );
  }
);

//# sourceMappingURL=title.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible-card/content.mjs"
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible-card/content.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content2)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _card_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/index.mjs */ "./node_modules/@wordpress/ui/build-module/card/content.mjs");
/* harmony import */ var _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collapsible/index.mjs */ "./node_modules/@wordpress/ui/build-module/collapsible/panel.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible-card/content.tsx





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

// packages/ui/src/collapsible-card/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("64bdb4d46e", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._626190151275d6d3__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}.cab17c7a373cb60d__header-content{flex:1;min-width:0}._92ebbaa30c8a1d05__header-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}.dd89d27c4f15912d__header-trigger-positioner{align-self:flex-start;flex-shrink:0;margin-block-start:calc(var(--wpds-typography-line-height-sm, 20px)/2);max-height:0;overflow:visible}.bcfab5f2448bafef__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}._3106f8d2b0330faa__header-trigger{@media not (prefers-reduced-motion){transition:rotate .15s ease-out}}._5d2dfcb4085c6d0f__header[data-panel-open] ._3106f8d2b0330faa__header-trigger{rotate:180deg}._5d2dfcb4085c6d0f__header[data-disabled] ._3106f8d2b0330faa__header-trigger{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.e34cf37ccd0d81e0__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden;&._03cfdbcd710393c9__overflow-visible{overflow:visible}&[hidden]:not([hidden=until-found]){display:none}&[data-ending-style],&[data-starting-style]{height:0}@media not (prefers-reduced-motion){transition:all .15s ease-out}}}@layer compositions{._41bfdbf7b6c087c2__content-inner{padding-block-start:0}._5d2dfcb4085c6d0f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}}");
}
var style_default = { "heading-wrapper": "_626190151275d6d3__heading-wrapper", "header-content": "cab17c7a373cb60d__header-content", "header-description": "_92ebbaa30c8a1d05__header-description", "header-trigger-positioner": "dd89d27c4f15912d__header-trigger-positioner", "header-trigger-wrapper": "bcfab5f2448bafef__header-trigger-wrapper", "header-trigger": "_3106f8d2b0330faa__header-trigger", "header": "_5d2dfcb4085c6d0f__header", "content": "e34cf37ccd0d81e0__content", "overflow-visible": "_03cfdbcd710393c9__overflow-visible", "content-inner": "_41bfdbf7b6c087c2__content-inner" };

// packages/ui/src/collapsible-card/content.tsx

var Content2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  function CollapsibleCardContent({ className, render, children, hiddenUntilFound = true, ...restProps }, ref) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
      _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Panel,
      {
        ref,
        className: (state) => (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(
          style_default.content,
          state.open && state.transitionStatus === "idle" && style_default["overflow-visible"],
          className
        ),
        hiddenUntilFound,
        ...restProps,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _card_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Content,
          {
            className: style_default["content-inner"],
            render,
            children
          }
        )
      }
    );
  }
);

//# sourceMappingURL=content.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible-card/context.mjs"
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible-card/context.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderDescriptionIdContext: () => (/* binding */ HeaderDescriptionIdContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/collapsible-card/context.ts

var HeaderDescriptionIdContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

//# sourceMappingURL=context.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible-card/header.mjs"
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible-card/header.mjs ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header2)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/chevron-down.mjs");
/* harmony import */ var _card_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/index.mjs */ "./node_modules/@wordpress/ui/build-module/card/header.mjs");
/* harmony import */ var _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../collapsible/index.mjs */ "./node_modules/@wordpress/ui/build-module/collapsible/trigger.mjs");
/* harmony import */ var _icon_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/index.mjs */ "./node_modules/@wordpress/ui/build-module/icon/icon.mjs");
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context.mjs */ "./node_modules/@wordpress/ui/build-module/collapsible-card/context.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible-card/header.tsx









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

// packages/ui/src/collapsible-card/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("64bdb4d46e", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._626190151275d6d3__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}.cab17c7a373cb60d__header-content{flex:1;min-width:0}._92ebbaa30c8a1d05__header-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}.dd89d27c4f15912d__header-trigger-positioner{align-self:flex-start;flex-shrink:0;margin-block-start:calc(var(--wpds-typography-line-height-sm, 20px)/2);max-height:0;overflow:visible}.bcfab5f2448bafef__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}._3106f8d2b0330faa__header-trigger{@media not (prefers-reduced-motion){transition:rotate .15s ease-out}}._5d2dfcb4085c6d0f__header[data-panel-open] ._3106f8d2b0330faa__header-trigger{rotate:180deg}._5d2dfcb4085c6d0f__header[data-disabled] ._3106f8d2b0330faa__header-trigger{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.e34cf37ccd0d81e0__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden;&._03cfdbcd710393c9__overflow-visible{overflow:visible}&[hidden]:not([hidden=until-found]){display:none}&[data-ending-style],&[data-starting-style]{height:0}@media not (prefers-reduced-motion){transition:all .15s ease-out}}}@layer compositions{._41bfdbf7b6c087c2__content-inner{padding-block-start:0}._5d2dfcb4085c6d0f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}}");
}
var style_default = { "heading-wrapper": "_626190151275d6d3__heading-wrapper", "header-content": "cab17c7a373cb60d__header-content", "header-description": "_92ebbaa30c8a1d05__header-description", "header-trigger-positioner": "dd89d27c4f15912d__header-trigger-positioner", "header-trigger-wrapper": "bcfab5f2448bafef__header-trigger-wrapper", "header-trigger": "_3106f8d2b0330faa__header-trigger", "header": "_5d2dfcb4085c6d0f__header", "content": "e34cf37ccd0d81e0__content", "overflow-visible": "_03cfdbcd710393c9__overflow-visible", "content-inner": "_41bfdbf7b6c087c2__content-inner" };

// packages/ui/src/utils/css/global-css-defense.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("e8e31009f5", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}");
}
var global_css_defense_default = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a", "ol": "c59a0ebebd71fa4a__ol", "li": "_46b5cb0c8e24e8c9__li" };

// packages/ui/src/utils/css/focus.module.scss
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("08122b3d53", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within,:focus-visible ._81935a08e952f267__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
}
var focus_module_default = { "outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus", "outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible", "outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within", "outset-ring--focus-parent-visible": "_81935a08e952f267__outset-ring--focus-parent-visible", "outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active", "outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active" };

// packages/ui/src/collapsible-card/header.tsx


var Header2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(
  function CollapsibleCardHeader({
    children,
    className,
    render,
    "aria-describedby": ariaDescribedByProp,
    ...restProps
  }, ref) {
    const [descriptionIds, setDescriptionIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(
      []
    );
    const [orderedDescriptionIds, setOrderedDescriptionIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const headerContentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const registerDescriptionId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)((id) => {
      setDescriptionIds((currentDescriptionIds) => {
        if (currentDescriptionIds.includes(id)) {
          return currentDescriptionIds;
        }
        return [...currentDescriptionIds, id];
      });
      return () => {
        setDescriptionIds(
          (currentDescriptionIds) => currentDescriptionIds.filter(
            (descriptionId) => descriptionId !== id
          )
        );
      };
    }, []);
    const contextValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
      () => ({ registerDescriptionId }),
      [registerDescriptionId]
    );
    (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
      const registeredDescriptionIds = new Set(descriptionIds);
      const nextDescriptionIds = Array.from(
        headerContentRef.current?.querySelectorAll("[id]") ?? []
      ).map((element) => element.id).filter((id) => registeredDescriptionIds.has(id));
      setOrderedDescriptionIds((currentDescriptionIds) => {
        if (currentDescriptionIds.length === nextDescriptionIds.length && currentDescriptionIds.every(
          (id, index) => id === nextDescriptionIds[index]
        )) {
          return currentDescriptionIds;
        }
        return nextDescriptionIds;
      });
    });
    const ariaDescribedBy = Array.from(
      /* @__PURE__ */ new Set([
        ...ariaDescribedByProp?.split(/\s+/).filter(Boolean) ?? [],
        ...orderedDescriptionIds
      ])
    ).join(" ") || void 0;
    return (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
      defaultTagName: "div",
      render,
      ref,
      props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(restProps, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(
          global_css_defense_default.heading,
          style_default["heading-wrapper"],
          className
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_context_mjs__WEBPACK_IMPORTED_MODULE_9__.HeaderDescriptionIdContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(
          _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Trigger,
          {
            className: style_default.header,
            render: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Header, {}),
            nativeButton: false,
            "aria-describedby": ariaDescribedBy,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
                "div",
                {
                  ref: headerContentRef,
                  className: style_default["header-content"],
                  children
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
                "div",
                {
                  className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    style_default["header-trigger-positioner"]
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
                    "div",
                    {
                      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        style_default["header-trigger-wrapper"],
                        global_css_defense_default.div,
                        // While the interactive trigger element is the whole header,
                        // the focus ring will be displayed only on the icon to visually
                        // emulate it being the button.
                        focus_module_default["outset-ring--focus-parent-visible"]
                      ),
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(
                        _icon_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Icon,
                        {
                          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
                          className: style_default["header-trigger"]
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        ) })
      })
    });
  }
);

//# sourceMappingURL=header.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible-card/root.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible-card/root.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root3)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _card_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/index.mjs */ "./node_modules/@wordpress/ui/build-module/card/root.mjs");
/* harmony import */ var _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collapsible/index.mjs */ "./node_modules/@wordpress/ui/build-module/collapsible/root.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible-card/root.tsx




var Root3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  function CollapsibleCardRoot({ render, ...restProps }, ref) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
      _collapsible_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Root,
      {
        ref,
        render: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_card_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Root, { render }),
        ...restProps
      }
    );
  }
);

//# sourceMappingURL=root.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible/panel.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible/panel.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var _base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react/collapsible */ "./node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible/panel.tsx



var Panel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  function CollapsiblePanel(props, forwardedRef) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.CollapsiblePanel, { ref: forwardedRef, ...props });
  }
);

//# sourceMappingURL=panel.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible/root.mjs"
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible/root.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react/collapsible */ "./node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible/root.tsx



var Root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  function CollapsibleRoot(props, forwardedRef) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.CollapsibleRoot, { ref: forwardedRef, ...props });
  }
);

//# sourceMappingURL=root.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/collapsible/trigger.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/collapsible/trigger.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trigger: () => (/* binding */ Trigger)
/* harmony export */ });
/* harmony import */ var _base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react/collapsible */ "./node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/collapsible/trigger.tsx



var Trigger = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  function CollapsibleTrigger(props, forwardedRef) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_base_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__.CollapsibleTrigger, { ref: forwardedRef, ...props });
  }
);

//# sourceMappingURL=trigger.mjs.map


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

/***/ "./node_modules/@wordpress/ui/build-module/icon/icon.mjs"
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/icon/icon.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/ui/src/icon/icon.tsx



var Icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Icon2({ icon, size = 24, style, ...restProps }, ref) {
  const mergedStyle = icon.props.style || style ? { ...icon.props.style, ...style } : void 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
    _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG,
    {
      ref,
      ...icon.props,
      ...restProps,
      ...mergedStyle ? { style: mergedStyle } : {},
      width: size,
      height: size
    }
  );
});

//# sourceMappingURL=icon.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/stack/stack.mjs"
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/stack/stack.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/stack/stack.tsx



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

// packages/ui/src/stack/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("32aba35fe1", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._19ce0419607e1896__stack{display:flex}}}");
}
var style_default = { "stack": "_19ce0419607e1896__stack" };

// packages/ui/src/stack/stack.tsx
var gapTokens = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Stack2({ direction, gap, align, justify, wrap, render, ...props }, ref) {
  const style = {
    gap: gap && gapTokens[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
    render,
    ref,
    props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(props, { style, className: style_default.stack })
  });
  return element;
});

//# sourceMappingURL=stack.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/ui/build-module/text/text.mjs"
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/ui/build-module/text/text.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/use-render/useRender.mjs");
/* harmony import */ var _base_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base-ui/react */ "./node_modules/@base-ui/react/merge-props/mergeProps.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
// packages/ui/src/text/text.tsx




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

// packages/ui/src/text/style.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("3167e7d116", '@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._83ed8a8da5dd50ea__text{text-wrap:pretty;margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-emphasis,600);--_gcd-p-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-p-line-height:var(--wpds-typography-line-height-2xl,40px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-emphasis,600)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-emphasis,600);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-emphasis,600);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-emphasis,600);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-emphasis,600);--_gcd-p-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-default,400);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-default,400)}.ca1aa3fc2029e958__body-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-default,400);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-default,400);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-default,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-default,400);--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}}');
}
var style_default = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };

// packages/ui/src/utils/css/global-css-defense.module.css
if (typeof process === "undefined" || "development" !== "test") {
  registerStyle("e8e31009f5", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}");
}
var global_css_defense_default = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a", "ol": "c59a0ebebd71fa4a__ol", "li": "_46b5cb0c8e24e8c9__li" };

// packages/ui/src/text/text.tsx
var Text = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Text2({ variant = "body-md", render, className, ...props }, ref) {
  const element = (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_0__.useRender)({
    render,
    defaultTagName: "span",
    ref,
    props: (0,_base_ui_react__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(props, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(
        style_default.text,
        global_css_defense_default.heading,
        global_css_defense_default.p,
        style_default[variant],
        className
      )
    })
  });
  return element;
});

//# sourceMappingURL=text.mjs.map


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

/***/ "./node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/chevron-down.mjs"
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/chevron-down.mjs ***!
  \********************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chevron_down_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/chevron-down.tsx


var chevron_down_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M7 11L12 15L17 11", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=chevron-down.mjs.map


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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maes/container","version":"0.1.0","title":"Styled container","category":"design","icon":"tablet","description":"A styled and animated container","attributes":{"backgrounds":{"type":"array","default":[],"items":{"type":"object","properties":{"border":{"type":"object","properties":{"top":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"bottom":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"left":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}},"right":{"type":"object","properties":{"width":{"type":"string"},"color":{"type":"string"},"style":{"type":"string"}}}}},"offset":{"type":"object","properties":{"top":{"type":"string"},"bottom":{"type":"string"},"left":{"type":"string"},"right":{"type":"string"}}},"fade":{"type":"object","properties":{"horizontal":{"type":"object","properties":{"toggle":{"type":"boolean","default":false},"width":{"type":"number"}}},"vertical":{"type":"object","properties":{"toggle":{"type":"boolean","default":false},"width":{"type":"number"}}}}},"shadow":{"type":"object","properties":{"toggle":{"type":"boolean"},"horizontal":{"type":"string"},"vertical":{"type":"string"},"size":{"type":"string"},"color":{"type":"string"}}},"fullWidth":{"type":"boolean"},"rotation":{"type":"number"},"opacity":{"type":"number"},"gradientBackground":{"type":"boolean"},"background":{"type":"string"}}}}},"example":{},"supports":{"html":false},"textdomain":"maes-domain","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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