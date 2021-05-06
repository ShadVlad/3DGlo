/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var errorMessage = \"Что-то пошло не так...\",\n      loadMessage = \"Загрузка...\",\n      successMessage = \"Спасибо! Мы скоро с Вами свяжемся!\";\n  console.log(\"form: \", form.id);\n  var statusMessage = document.createElement(\"div\");\n  statusMessage.style.cssText = \"font-size: 2rem;\";\n\n  if (form.id === \"form3\") {\n    statusMessage.style.color = \"white\";\n  }\n\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    var formData = new FormData(form); //console.log(\"formData: \", formData);\n\n    var body = {}; // for (const val of formData.entries) {\n    //   body[val[0]] = val[1]\n    // }\n\n    formData.forEach(function (val, key) {\n      //console.log(\"val: \", val);\n      body[key] = val;\n    }); //console.log(\"body: \", body);\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error(\"status network not 200\");\n      }\n\n      statusMessage.textContent = successMessage;\n      clearForm();\n    })[\"catch\"](function () {\n      statusMessage.textContent = errorMessage;\n    });\n  });\n\n  var postData = function postData(data) {\n    //console.log(data);\n    return fetch(\"server.php\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(data)\n    }); // return new Promise((resolve, reject) => {\n    //   const request = new XMLHttpRequest();\n    //   request.addEventListener(\"readystatechange\", () => {\n    //     statusMessage.textContent = loadMessage;\n    //     if (request.readyState !== 4) {\n    //       return;\n    //     }\n    //     if (request.status === 200) {\n    //       resolve();\n    //       clearForm();\n    //     } else {\n    //       reject(request.status);\n    //     }\n    //   });\n    //   request.open(\"POST\", \"server.php\");\n    //   request.setRequestHeader(\"Content-Type\", \"application/json\");\n    //   request.send(JSON.stringify(data));\n    // });\n  };\n\n  var clearForm = function clearForm() {\n    var nameInput = form.querySelector(\"input[name='user_name']\"),\n        emailInput = form.querySelector(\"input[name='user_email']\"),\n        messageInput = form.querySelector(\"input[name='user_message']\"),\n        phoneInput = form.querySelector(\"input[name='user_phone']\"); //console.log(\"phoneInput: \", phoneInput.value);\n\n    nameInput.value = \"\";\n    emailInput.value = \"\";\n    phoneInput.value = \"\";\n\n    if (messageInput) {\n      messageInput.value = \"\";\n    } //console.log(\"nameInput: \", nameInput);\n\n  }; // (messageInput = document.querySelectorAll(\"input[name='user_message']\")),\n  // (emailInput = document.querySelectorAll(\"input[name='user_email']\")),\n  // (phoneInput = document.querySelectorAll(\"input[name='user_phone']\"));\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45b20179645b0c4aab08")
/******/ })();
/******/ 
/******/ }
);