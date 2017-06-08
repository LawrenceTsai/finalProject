webpackJsonp([2],{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(323);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(368);
	
	var _fun = __webpack_require__(420);
	
	var _Fun = __webpack_require__(421);
	
	var _Fun2 = _interopRequireDefault(_Fun);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	 Keys will be passed as props to presentational components. Here we are
	 implementing our wrapper around increment; the component doesn't care   */
	
	var mapDispatchToProps = {
	  updateField: function updateField(value) {
	    return (0, _fun.updateField)(value);
	  }
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	 nor does it import React. This component is **only** responsible for
	 wiring in the actions and state necessary to render a presentational
	 component - in this case, the counter:   */
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    fun: state.fun
	  };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	 import { createSelector } from 'reselect'
	 const counter = (state) => state.counter
	 const tripleCount = createSelector(counter, (count) => count * 3)
	 const mapStateToProps = (state) => ({
	 counter: tripleCount(state)
	 })
	
	 Selectors can compute derived data, allowing Redux to store the minimal possible state.
	 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	 Selectors are composable. They can be used as input to other selectors.
	 https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Fun2.default);

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.updateField = exports.FIELD_DATA = undefined;
	
	var _defineProperty2 = __webpack_require__(402);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	exports.default = funReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var FIELD_DATA = exports.FIELD_DATA = 'fun/FIELD_DATA';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	var updateField = exports.updateField = function updateField() {
	  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  return {
	    type: FIELD_DATA,
	    payload: value
	  };
	};
	
	var actions = exports.actions = {
	  updateField: updateField
	};
	
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, FIELD_DATA, function (state, action) {
	  return action.payload;
	});
	
	var initialState = '';
	function funReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fun = undefined;
	
	var _getOwnPropertyDescriptor = __webpack_require__(422);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _getPrototypeOf = __webpack_require__(316);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(321);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(322);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(326);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(360);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _desc, _value, _class, _class2, _temp;
	
	var _react = __webpack_require__(29);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _autobindDecorator = __webpack_require__(425);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var Fun = exports.Fun = (_class = (_temp = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(Fun, _React$Component);
	
	  function Fun() {
	    (0, _classCallCheck3.default)(this, Fun);
	    return (0, _possibleConstructorReturn3.default)(this, (Fun.__proto__ || (0, _getPrototypeOf2.default)(Fun)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Fun, [{
	    key: '_updateField',
	    value: function _updateField(e) {
	      var updateField = this.props.updateField;
	
	      updateField(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fun = this.props.fun;
	
	      return _react2.default.createElement(
	        'div',
	        { style: { margin: '0 auto' } },
	        _react2.default.createElement(
	          'div',
	          null,
	          fun
	        ),
	        _react2.default.createElement('input', { type: 'text', value: fun, onChange: this._updateField })
	      );
	    }
	  }]);
	  return Fun;
	}(_react2.default.Component), _class2.propTypes = {
	  fun: _react2.default.PropTypes.string.isRequired,
	  updateField: _react2.default.PropTypes.func.isRequired
	}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_updateField', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_updateField'), _class.prototype)), _class);
	exports.default = Fun;

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(423), __esModule: true };

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(424);
	var $Object = __webpack_require__(11).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(300)
	  , $getOwnPropertyDescriptor = __webpack_require__(356).f;
	
	__webpack_require__(320)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

	/**
	 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
	 *
	 * The decorator may be used on classes or methods
	 * ```
	 * @autobind
	 * class FullBound {}
	 *
	 * class PartBound {
	 *   @autobind
	 *   method () {}
	 * }
	 * ```
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autobind;
	
	function autobind() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    return boundClass.apply(undefined, args);
	  } else {
	    return boundMethod.apply(undefined, args);
	  }
	}
	
	/**
	 * Use boundMethod to bind all methods on the target.prototype
	 */
	function boundClass(target) {
	  // (Using reflect to get all keys including symbols)
	  var keys = undefined;
	  // Use Reflect if exists
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    keys = Reflect.ownKeys(target.prototype);
	  } else {
	    keys = Object.getOwnPropertyNames(target.prototype);
	    // use symbols if support is provided
	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
	    }
	  }
	
	  keys.forEach(function (key) {
	    // Ignore special case target method
	    if (key === 'constructor') {
	      return;
	    }
	
	    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
	
	    // Only methods need binding
	    if (typeof descriptor.value === 'function') {
	      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
	    }
	  });
	  return target;
	}
	
	/**
	 * Return a descriptor removing the value and returning a getter
	 * The getter will return a .bind version of the function
	 * and memoize the result against a symbol on the instance
	 */
	function boundMethod(target, key, descriptor) {
	  var fn = descriptor.value;
	
	  if (typeof fn !== 'function') {
	    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
	  }
	
	  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
	  // getter for the property which is being replaced. This causes infinite
	  // recursion and an "Out of stack space" error.
	  var definingProperty = false;
	
	  return {
	    configurable: true,
	    get: function get() {
	      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
	        return fn;
	      }
	
	      var boundFn = fn.bind(this);
	      definingProperty = true;
	      Object.defineProperty(this, key, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      definingProperty = false;
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ })

});
//# sourceMappingURL=2.fun.js.map