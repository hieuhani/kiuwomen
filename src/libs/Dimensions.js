import debounce from 'debounce'

const win = window

const dimensions = {}
const listeners = {}

export default class Dimensions {
  static get(dimension) {
    return dimensions[dimension];
  }


  static _update() {
    dimensions.window = {
      fontScale: 1,
      height: win.innerHeight,
      scale: win.devicePixelRatio || 1,
      width: win.innerWidth
    };

    dimensions.screen = {
      fontScale: 1,
      height: win.screen.height,
      scale: win.devicePixelRatio || 1,
      width: win.screen.width
    };

    if (Array.isArray(listeners['change'])) {
      listeners['change'].forEach(handler => handler(dimensions));
    }
  }

  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
  }

  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter(_handler => _handler !== handler);
    }
  }
}

Dimensions._update()

window.addEventListener('resize', debounce(Dimensions._update, 16), false);
