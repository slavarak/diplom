/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_backtotop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/backtotop */ \"./src/modules/backtotop.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_anotherslider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/anotherslider */ \"./src/modules/anotherslider.js\");\n/* harmony import */ var _modules_sending__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sending */ \"./src/modules/sending.js\");\n/* harmony import */ var _modules_sending__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_sending__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modules_certificat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/certificat */ \"./src/modules/certificat.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_backtotop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('12 may 2022')\r\n;(0,_modules_anotherslider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n_modules_sending__WEBPACK_IMPORTED_MODULE_6___default()()\r\n;(0,_modules_certificat__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/anotherslider.js":
/*!**************************************!*\
  !*** ./src/modules/anotherslider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst anotherslider = () => {\r\n    const benefitItems = document.querySelectorAll('.service-block')\r\n    const benefContent = document.querySelector('#services')\r\n\r\n\r\n    let currentSlide = 0\r\n\r\n    const checkWidth = () => {\r\n        benefitItems.forEach((benefitItem, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (i > 1) {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            } else {\r\n                if (i > 0) {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            }   \r\n        })\r\n    }\r\n\r\n    checkWidth()\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    benefContent.addEventListener('click', (e) => {\r\n        \r\n        if (window.innerWidth >= 576) {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                benefitItems.forEach(benefitItem => {\r\n                    if (benefitItem.classList.contains('not-active')) {\r\n                        benefitItem.classList.remove('not-active')\r\n                    } else {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n            if (e.target.closest('.services__arrow--left')) {\r\n                benefitItems.forEach(benefitItem => {\r\n                    if (benefitItem.classList.contains('not-active')) {\r\n                        benefitItem.classList.remove('not-active')\r\n                    } else {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n        } else {\r\n            prevSlide(benefitItems, currentSlide, 'not-active')\r\n\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                currentSlide++\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                currentSlide--          \r\n            }\r\n            if (currentSlide >= benefitItems.length) {\r\n                currentSlide = 0\r\n            }\r\n            if (currentSlide < 0) {\r\n                currentSlide = benefitItems.length - 1\r\n            }\r\n    \r\n            nextSlide(benefitItems, currentSlide, 'not-active')\r\n        }   \r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anotherslider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/anotherslider.js?");

/***/ }),

/***/ "./src/modules/backtotop.js":
/*!**********************************!*\
  !*** ./src/modules/backtotop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst backtotop = () => {\r\n    const scrollBtn = document.querySelector('.smooth-scroll__img')\r\n    window.addEventListener('scroll', () => {\r\n        if (window.scrollY > 700) {\r\n            scrollBtn.style.transition = \".3s\"\r\n            scrollBtn.style.opacity = \"1\"\r\n        } else {\r\n            scrollBtn.style.transition = \".3s\"\r\n            scrollBtn.style.opacity = \"0\" \r\n        }\r\n    })\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.smooth-scroll__img')) {\r\n            e.preventDefault()\r\n            const anchor = document.getElementById('header')\r\n            anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backtotop);\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/backtotop.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calc = document.getElementById('calc')\r\n    const balcony = document.getElementById('calc-type')\r\n    const glass = document.getElementById('calc-type-material')\r\n    const squaremeter = document.getElementById('calc-input')\r\n    const reuslts = document.getElementById('calc-total')\r\n\r\n    const countCalc = () => {\r\n        const balconyValue = +balcony.options[balcony.selectedIndex].value\r\n        let glassValue = +glass.options[glass.selectedIndex].value\r\n        const squaremeterValue = squaremeter.value\r\n\r\n        let reusltsValue = 0\r\n\r\n\r\n        if(glass.value == \"--\") {\r\n            glassValue = 1\r\n        }\r\n\r\n\r\n        if (balcony.value && squaremeter.value) {\r\n            reusltsValue = Math.round(balconyValue * glassValue * squaremeterValue)\r\n        } else {\r\n            reusltsValue = 0\r\n        }\r\n\r\n        reuslts.value = reusltsValue\r\n    }\r\n    if (calc == null) {\r\n        console.log('Калькулятор на странице не найден');\r\n    } else {\r\n    calc.addEventListener('input', (e) => {\r\n        if (e.target === balcony || e.target === squaremeter || \r\n            e.target === glass) {\r\n            countCalc()\r\n        } else {\r\n            reusltsValue = 0\r\n        }\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/certificat.js":
/*!***********************************!*\
  !*** ./src/modules/certificat.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst certificat = () => {\r\n    const overlay = document.querySelector('.overlay')\r\n    const body = document.querySelector('body')\r\n\r\n    const imgs = document.querySelectorAll('.sertificate-document');\r\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\r\n\r\n    const hoverEffectImgs = document.querySelectorAll('.document-overlay')\r\n\r\n    hoverEffectImgs.forEach(hoverEffectImg => {\r\n        hoverEffectImg.addEventListener('mouseover', () => {\r\n            hoverEffectImg.style.transition = '.2s'\r\n            hoverEffectImg.style.opacity = \"1\"\r\n        })\r\n        hoverEffectImg.addEventListener('mouseout', () => {\r\n            hoverEffectImg.style.transition = '.2s'\r\n            hoverEffectImg.style.opacity = \"0\"\r\n        })\r\n    })\r\n    \r\n    \r\n\r\n    disableImgAttributes.forEach(disableImgAttributes => {\r\n        disableImgAttributes.setAttribute('href', '')\r\n    })\r\n\r\n    const addModalDocument = () => {\r\n        overlay.style.display = \"block\";\r\n        const modalDiv = document.createElement('div')\r\n        modalDiv.classList.add('modal-img')\r\n        body.append(modalDiv)\r\n        modalDiv.innerHTML = `\r\n        <span title=\"Close\" class=\"header-modal__close\">x</span>\r\n        `\r\n        document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.overlay') || e.target.closest(\".header-modal__close\")) {\r\n                modalDiv.remove()\r\n            }\r\n            \r\n        })\r\n    }\r\n\r\n    imgs.forEach(imgDiv => {\r\n        imgDiv.addEventListener('click', (e) => {\r\n            e.preventDefault()            \r\n            addModalDocument()\r\n        })\r\n    })\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificat);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/certificat.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const bacground = document.querySelector('.overlay')\r\n    const modalContent = document.querySelector('.header-modal')\r\n    const twoModal = document.querySelector('.services-modal')\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.button > .fancyboxModal')) {\r\n            bacground.style.display = \"block\"\r\n            modalContent.style.display = \"block\"\r\n        } else if (e.target.closest('.header-modal__close')) {\r\n            bacground.style.display = \"\"\r\n            modalContent.style.display = \"\"\r\n        } else if (e.target.closest('.overlay')) {\r\n            bacground.style.display = \"\"\r\n            modalContent.style.display = \"\"\r\n        }\r\n\r\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\r\n            bacground.style.display = \"block\"\r\n            twoModal.style.display = \"block\"\r\n        }\r\n\r\n        if (e.target.closest('.service-button > .fancyboxModal')) {\r\n            bacground.style.display = \"block\"\r\n            twoModal.style.display = \"block\"\r\n        } else if (e.target.closest('.services-modal__close')) {\r\n            bacground.style.display = \"\"\r\n            twoModal.style.display = \"\"\r\n        } else if (e.target.closest('.overlay')) {\r\n            bacground.style.display = \"\"\r\n            twoModal.style.display = \"\"\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n// const modal = () => {\r\n//     const bacground = document.querySelector('.overlay')\r\n//     const modalContent = document.querySelector('.header-modal')\r\n\r\n\r\n//     document.addEventListener('click', (e) => {\r\n//         if (e.target.closest('.button > .fancyboxModal')) {\r\n//             bacground.style.display = \"block\"\r\n//             modalContent.style.display = \"block\"\r\n//         } else if (e.target.closest('.header-modal__close')) {\r\n//             bacground.style.display = \"\"\r\n//             modalContent.style.display = \"\"\r\n//         } else if (e.target.closest('.overlay')) {\r\n//             bacground.style.display = \"\"\r\n//             modalContent.style.display = \"\"\r\n//         }\r\n//     })\r\n// }\r\n\r\n// export default modal\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sending.js":
/*!********************************!*\
  !*** ./src/modules/sending.js ***!
  \********************************/
/***/ (() => {

eval("//\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sending.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const benefitItems = document.querySelectorAll('.benefits__item')\r\n    const benefContent = document.querySelector('#benefits')\r\n\r\n\r\n\r\n    let currentSlide = 0 \r\n\r\n    const checkWidth = () => {\r\n        benefitItems.forEach((benefitItem, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (i > 2) {\r\n                    benefitItem.classList.add('not-active')\r\n                   }\r\n            } else {\r\n               if (i > 0) {\r\n                benefitItem.classList.add('not-active')\r\n               }\r\n            }   \r\n        })\r\n}\r\n\r\n    checkWidth()\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    benefContent.addEventListener('click', (e) => {\r\n        \r\n        if (window.innerWidth >= 576) {\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                benefitItems.forEach(benefitItem => {\r\n                    \r\n                    if (benefitItem.classList.contains('not-active')) {\r\n                        benefitItem.classList.remove('not-active')\r\n                    } else {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                benefitItems.forEach(benefitItem => {\r\n                    if (benefitItem.classList.contains('not-active')) {\r\n                        \r\n                        benefitItem.classList.remove('not-active')\r\n                    } else {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                })\r\n            }\r\n        } else {\r\n            prevSlide(benefitItems, currentSlide, 'not-active')\r\n\r\n            if (e.target.closest('.benefits__arrow--right')) {\r\n                currentSlide++\r\n            } else if (e.target.closest('.benefits__arrow--left')) {\r\n                currentSlide--          \r\n            }\r\n            if (currentSlide >= benefitItems.length) {\r\n                currentSlide = 0\r\n            }\r\n            if (currentSlide < 0) {\r\n                currentSlide = benefitItems.length - 1\r\n            }\r\n    \r\n            nextSlide(benefitItems, currentSlide, 'not-active')\r\n        }   \r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelectorAll('.count-wrap > .count_1 > span')\r\n    const timerHours = document.querySelectorAll('.count-wrap > .count_2 > span')\r\n    const timerMinutes = document.querySelectorAll('.count-wrap > .count_3 > span')\r\n    const timerSeconds = document.querySelectorAll('.count-wrap > .count_4 > span')\r\n\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24) \r\n        let hours = Math.floor((timeRemaining / 60 / 60)-days*24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n        \r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(deadline)\r\n        const zeroToNumber = () => {\r\n            timerDays.forEach(timerDays => {\r\n                if (getTime.days < 10) {\r\n                    timerDays.textContent = '0' + getTime.days\r\n                }\r\n            })\r\n            timerHours.forEach(timerHours => {\r\n                if (getTime.hours < 10) {\r\n                    timerHours.textContent = '0' + getTime.hours\r\n                }\r\n            })\r\n            timerMinutes.forEach(timerMinutes => {\r\n                if (getTime.minutes < 10) {\r\n                    timerMinutes.textContent = '0' + getTime.minutes\r\n                }\r\n            })\r\n            timerSeconds.forEach(timerSeconds => {\r\n                if (getTime.seconds < 10) {\r\n                    timerSeconds.textContent = '0' + getTime.seconds\r\n                }\r\n            })\r\n            \r\n            \r\n            \r\n        }\r\n\r\n        timerDays.forEach(timerDays => {\r\n            timerDays.textContent = getTime.days\r\n        })\r\n        timerHours.forEach(timerHours => {\r\n            timerHours.textContent = getTime.hours\r\n        })\r\n        timerMinutes.forEach(timerMinutes => {\r\n            timerMinutes.textContent = getTime.minutes\r\n        })\r\n        timerSeconds.forEach(timerSeconds => {\r\n            timerSeconds.textContent = getTime.seconds\r\n        })\r\n        \r\n        \r\n        zeroToNumber()\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(intervalID)\r\n            timerDays.textContent = '00'\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n        \r\n    }\r\n    intervalID = setInterval(() => {\r\n        updateClock()\r\n    }, 1000);\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;