// ======补环境 start======
var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();

function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Option = v_saf(function Option(){;})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
DocumentFragment = v_saf(function DocumentFragment(){;}); _inherits(DocumentFragment, Node)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTextAreaElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc", 
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 } 
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLButtonElement = v_saf(function HTMLButtonElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLButtonElement, HTMLElement)
HTMLTableSectionElement = v_saf(function HTMLTableSectionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableSectionElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSpanElement, HTMLElement)
HTMLHeadingElement = v_saf(function HTMLHeadingElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadingElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLParagraphElement, HTMLElement)
HTMLTableElement = v_saf(function HTMLTableElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableElement, HTMLElement)
HTMLTableRowElement = v_saf(function HTMLTableRowElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableRowElement, HTMLElement)
HTMLTableCellElement = v_saf(function HTMLTableCellElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableCellElement, HTMLElement)
HTMLBRElement = v_saf(function HTMLBRElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBRElement, HTMLElement)
HTMLUListElement = v_saf(function HTMLUListElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUListElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLLabelElement = v_saf(function HTMLLabelElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLabelElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  length: {get(){ v_console_log("  [*] DOMTokenList -> length[get]", 2);return 2 }},
  add: {value: v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})},
  remove: {value: v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})},
  contains: {value: v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Option.prototype, {
  selected: {get(){ v_console_log("  [*] Option -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] Option -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0" }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  type: {get(){ v_console_log("  [*] Event -> type[get]", "blur");return "blur" }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 5611.300000190735);return 5611.300000190735 }},
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
  currentTarget: {get(){ v_console_log("  [*] Event -> currentTarget[get]", {});return {} }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "TBODY");return "TBODY" }},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  compareDocumentPosition: {value: v_saf(function compareDocumentPosition(){v_console_log("  [*] Node -> compareDocumentPosition[func]", [].slice.call(arguments));})},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  cloneNode: {value: v_saf(function cloneNode(){v_console_log("  [*] Node -> cloneNode[func]", [].slice.call(arguments));})},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  textContent: {set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return {} }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onload: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments)); }},
  onerror: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1280);return 1280 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 720);return 720 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ScreenOrientation.prototype, {
  angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  which: {get(){ v_console_log("  [*] UIEvent -> which[get]", 0);return 0 }},
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  createComment: {value: v_saf(function createComment(){v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));})},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
  createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://match.yuanrenxue.cn/match/6");return "https://match.yuanrenxue.cn/match/6" }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "第六题 js 混淆 回溯 - 猿人学");return "第六题 js 混淆 回溯 - 猿人学" }},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
  className: {set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return {} }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  id: {set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return {} }},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return {} }},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  matches: {value: v_saf(function matches(){v_console_log("  [*] Element -> matches[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DocumentFragment.prototype, {
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] DocumentFragment -> querySelectorAll[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DocumentFragment",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true }},
  type: {set(){ v_console_log("  [*] HTMLInputElement -> type[set]", [].slice.call(arguments));return true }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "t");return "t" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "t" }},
  files: {get(){ v_console_log("  [*] HTMLInputElement -> files[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
  defaultValue: {get(){ v_console_log("  [*] HTMLTextAreaElement -> defaultValue[get]", "x");return "x" }},
  [Symbol.toStringTag]: {value:"HTMLTextAreaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLOptionElement.prototype, {
  selected: {get(){ v_console_log("  [*] HTMLOptionElement -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] HTMLOptionElement -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLOptionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSelectElement.prototype, {
  disabled: {set(){ v_console_log("  [*] HTMLSelectElement -> disabled[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLSelectElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
  RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLButtonElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLButtonElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableSectionElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableSectionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLSpanElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadingElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadingElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLParagraphElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLParagraphElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableRowElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableRowElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableCellElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableCellElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBRElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBRElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUListElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUListElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLFormElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLFormElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLabelElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLabelElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
// if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ if(b=='global'){return}return a[b] || __globalThis__[b] },
  set(a,b,c){ 
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c 
    return true 
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
window.$_aiding = window

var win = {
  window: window,
  frames: window,
  parent: window,
  self: window,
  top: window,
}
function v_repair_this(){
  win = {
    window: __globalThis__,
    frames: __globalThis__,
    parent: __globalThis__,
    self: __globalThis__,
    top: __globalThis__,
  }
}
Object.defineProperties(window, {
  window: {get:function(){return win.window},set:function(e){return win.window = e}},
  frames: {get:function(){return win.frames},set:function(e){return win.frames = e}},
  parent: {get:function(){return win.parent},set:function(e){return win.parent = e}},
  self:   {get:function(){return win.self},  set:function(e){return win.self = e}},
  top:    {get:function(){return win.top},   set:function(e){return win.top = e}},
})
      
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLInputElement":["input"],"HTMLTextAreaElement":["textarea"],"HTMLOptionElement":["option"],"HTMLSelectElement":["select"],"HTMLAnchorElement":["a"],"HTMLScriptElement":["script"],"HTMLImageElement":["img"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLCanvasElement":["canvas"],"HTMLMediaElement":[],"HTMLUnknownElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.hostname)){
        r = ''
      }else{
        r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.hostname = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.host     = this.hostname + (this.port?":"+this.port:"") ;
      this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1 
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("sessionid=wu3lc4rtzwld269f3ylqfisajyzl9a55; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1736305376; HMACCOUNT=6128013F56E4838D; no-alert3=true; tk=3688143094261405961; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1736305384; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1736315605; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1736326970")
v_hook_href(window.location, 'location', "https://match.yuanrenxue.cn/match/6")
Location.prototype.toString = v_saf(function toString(){ return "https://match.yuanrenxue.cn/match/6" })
window.alert = v_saf(function alert(){})
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1253
window.innerHeight = 361
window.outerHeight = 690
window.outerWidth = 1276
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func){
  if(name == "ajaxSubmit" && func == "getElementById"){ return v_new(HTMLInputElement) }
  return null
}
function v_geteles(name, func){
  if(name == "[selected]" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == "[id~=sizzle1736326969213-]" && func == "querySelectorAll"){ return [v_new(HTMLSelectElement)] }
  if(name == ":checked" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == "a#sizzle1736326969213+*" && func == "querySelectorAll"){ return [v_new(HTMLSelectElement)] }
  if(name == ":enabled" && func == "querySelectorAll"){ return [v_new(HTMLInputElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "login_a" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "reg" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "a" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "no-alert" && func == "getElementsByClassName"){ return [v_new(HTMLButtonElement)] }
  if(name == ".active_15 a" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement)] }
  if(name == "resbbp" && func == "getElementsByClassName"){ return [v_new(HTMLTableSectionElement)] }
  if(name == "page-message" && func == "getElementsByClassName"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == "next-page" && func == "getElementsByClassName"){ return [v_new(HTMLLIElement)] }
  if(name == "before-page" && func == "getElementsByClassName"){ return [v_new(HTMLLIElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "*" && func == "querySelectorAll"){ return [v_new(HTMLHtmlElement),v_new(HTMLHeadElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLTitleElement),v_new(HTMLLinkElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLLinkElement),v_new(HTMLScriptElement),v_new(HTMLLinkElement),v_new(HTMLScriptElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLBodyElement),v_new(HTMLDivElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLStyleElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLHeadingElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLParagraphElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLParagraphElement),v_new(HTMLElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLButtonElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLHeadingElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLHeadingElement),v_new(HTMLAnchorElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLHeadingElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLTableElement),v_new(HTMLTableSectionElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLBRElement),v_new(HTMLTableCellElement),v_new(HTMLBRElement),v_new(HTMLTableCellElement),v_new(HTMLBRElement),v_new(HTMLTableSectionElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLSpanElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLFormElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLLabelElement),v_new(HTMLInputElement),v_new(HTMLParagraphElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLLIElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
v_console_log = function(){} // 关闭日志输出;
// ======补环境 end======

var _n;
window.o = 1;
navigator = {};
!function (i) {
    var s = {};
    // window = {};

    function n(t) {
        if (s[t])
            return s[t].exports;
        var e = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, n),
            e.l = !0,
            e.exports
    }

    _n = n;
}({
    encrypt: function (t, e, i) {
        var s, n, r;
        (r = function (t, e, i) {
            n = [e],
            (r = "function" == typeof (s = function (t) {
                    function b(t, e, i) {
                        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                    }

                    function y() {
                        return new b(null)
                    }

                    function e(t, e, i, s, n, r) {
                        for (; --r >= 0;) {
                            var o = e * this[t++] + i[s] + n;
                            n = Math.floor(o / 67108864),
                                i[s++] = 67108863 & o
                        }
                        return n
                    }

                    function i(t, e, i, s, n, r) {
                        for (var o = 32767 & e, a = e >> 15; --r >= 0;) {
                            var c = 32767 & this[t]
                                , l = this[t++] >> 15
                                , u = a * c + l * o;
                            c = o * c + ((32767 & u) << 15) + i[s] + (1073741823 & n),
                                n = (c >>> 30) + (u >>> 15) + a * l + (n >>> 30),
                                i[s++] = 1073741823 & c
                        }
                        return n
                    }

                    function s(t, e, i, s, n, r) {
                        for (var o = 16383 & e, a = e >> 14; --r >= 0;) {
                            var c = 16383 & this[t]
                                , l = this[t++] >> 14
                                , u = a * c + l * o;
                            c = o * c + ((16383 & u) << 14) + i[s] + n,
                                n = (c >> 28) + (u >> 14) + a * l,
                                i[s++] = 268435455 & c
                        }
                        return n
                    }

                    function c(t) {
                        return Te.charAt(t)
                    }

                    function l(t, e) {
                        var i = Ie[t.charCodeAt(e)];
                        return null == i ? -1 : i
                    }

                    function p(t) {
                        for (var e = this.t - 1; e >= 0; --e)
                            t[e] = this[e];
                        t.t = this.t,
                            t.s = this.s
                    }

                    function n(t) {
                        this.t = 1,
                            this.s = 0 > t ? -1 : 0,
                            t > 0 ? this[0] = t : -1 > t ? this[0] = t + this.DV : this.t = 0
                    }

                    function m(t) {
                        var e = y();
                        return e.fromInt(t),
                            e
                    }

                    function h(t, e) {
                        var i;
                        if (16 == e)
                            i = 4;
                        else if (8 == e)
                            i = 3;
                        else if (256 == e)
                            i = 8;
                        else if (2 == e)
                            i = 1;
                        else if (32 == e)
                            i = 5;
                        else {
                            if (4 != e)
                                return void this.fromRadix(t, e);
                            i = 2
                        }
                        this.t = 0,
                            this.s = 0;
                        for (var s = t.length, n = !1, r = 0; --s >= 0;) {
                            var o = 8 == i ? 255 & t[s] : l(t, s);
                            0 > o ? "-" == t.charAt(s) && (n = !0) : (n = !1,
                                0 == r ? this[this.t++] = o : r + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - r) - 1) << r,
                                    this[this.t++] = o >> this.DB - r) : this[this.t - 1] |= o << r,
                                r += i,
                            r >= this.DB && (r -= this.DB))
                        }
                        8 == i && 0 != (128 & t[0]) && (this.s = -1,
                        r > 0 && (this[this.t - 1] |= (1 << this.DB - r) - 1 << r)),
                            this.clamp(),
                        n && b.ZERO.subTo(this, this)
                    }

                    function r() {
                        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
                            --this.t
                    }

                    function o(t) {
                        if (this.s < 0)
                            return "-" + this.negate().toString(t);
                        var e;
                        if (16 == t)
                            e = 4;
                        else if (8 == t)
                            e = 3;
                        else if (2 == t)
                            e = 1;
                        else if (32 == t)
                            e = 5;
                        else {
                            if (4 != t)
                                return this.toRadix(t);
                            e = 2
                        }
                        var i, s = (1 << e) - 1, n = !1, r = "", o = this.t, a = this.DB - o * this.DB % e;
                        if (o-- > 0)
                            for (a < this.DB && (i = this[o] >> a) > 0 && (n = !0,
                                r = c(i)); o >= 0;)
                                e > a ? (i = (this[o] & (1 << a) - 1) << e - a,
                                    i |= this[--o] >> (a += this.DB - e)) : (i = this[o] >> (a -= e) & s,
                                0 >= a && (a += this.DB,
                                    --o)),
                                i > 0 && (n = !0),
                                n && (r += c(i));
                        return n ? r : "0"
                    }

                    function f() {
                        var t = y();
                        return b.ZERO.subTo(this, t),
                            t
                    }

                    function a() {
                        return this.s < 0 ? this.negate() : this
                    }

                    function u(t) {
                        var e = this.s - t.s;
                        if (0 != e)
                            return e;
                        var i = this.t;
                        if (e = i - t.t,
                        0 != e)
                            return this.s < 0 ? -e : e;
                        for (; --i >= 0;)
                            if (0 != (e = this[i] - t[i]))
                                return e;
                        return 0
                    }

                    function w(t) {
                        if (t === 65537) {
                            t = 60155
                        } else {
                            t = 60110
                        }
                        var e, i = 1;
                        return 0 != (e = t >>> 16) && (t = e,
                            i += 16),
                        0 != (e = t >> 8) && (t = e,
                            i += 8),
                        0 != (e = t >> 4) && (t = e,
                            i += 4),
                        0 != (e = t >> 2) && (t = e,
                            i += 2),
                        0 != (e = t >> 1) && (t = e,
                            i += 1),
                            i
                    }

                    function d() {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + w(this[this.t - 1] ^ this.s & this.DM)
                    }

                    function g(t, e) {
                        var i;
                        for (i = this.t - 1; i >= 0; --i)
                            e[i + t] = this[i];
                        for (i = t - 1; i >= 0; --i)
                            e[i] = 0;
                        e.t = this.t + t,
                            e.s = this.s
                    }

                    function _(t, e) {
                        for (var i = t; i < this.t; ++i)
                            e[i - t] = this[i];
                        e.t = Math.max(this.t - t, 0),
                            e.s = this.s
                    }

                    function k(t, e) {
                        var i, s = t % this.DB, n = this.DB - s, r = (1 << n) - 1, o = Math.floor(t / this.DB),
                            a = this.s << s & this.DM;
                        for (i = this.t - 1; i >= 0; --i)
                            e[i + o + 1] = this[i] >> n | a,
                                a = (this[i] & r) << s;
                        for (i = o - 1; i >= 0; --i)
                            e[i] = 0;
                        e[o] = a,
                            e.t = this.t + o + 1,
                            e.s = this.s,
                            e.clamp()
                    }

                    function x(t, e) {
                        e.s = this.s;
                        var i = Math.floor(t / this.DB);
                        if (i >= this.t)
                            return void (e.t = 0);
                        var s = t % this.DB
                            , n = this.DB - s
                            , r = (1 << s) - 1;
                        e[0] = this[i] >> s;
                        for (var o = i + 1; o < this.t; ++o)
                            e[o - i - 1] |= (this[o] & r) << n,
                                e[o - i] = this[o] >> s;
                        s > 0 && (e[this.t - i - 1] |= (this.s & r) << n),
                            e.t = this.t - i,
                            e.clamp()
                    }

                    function D(t, e) {
                        for (var i = 0, s = 0, n = Math.min(t.t, this.t); n > i;)
                            s += this[i] - t[i],
                                e[i++] = s & this.DM,
                                s >>= this.DB;
                        if (t.t < this.t) {
                            for (s -= t.s; i < this.t;)
                                s += this[i],
                                    e[i++] = s & this.DM,
                                    s >>= this.DB;
                            s += this.s
                        } else {
                            for (s += this.s; i < t.t;)
                                s -= t[i],
                                    e[i++] = s & this.DM,
                                    s >>= this.DB;
                            s -= t.s
                        }
                        e.s = 0 > s ? -1 : 0,
                            -1 > s ? e[i++] = this.DV + s : s > 0 && (e[i++] = s),
                            e.t = i,
                            e.clamp()
                    }

                    function S(t, e) {
                        var i = this.abs()
                            , s = t.abs()
                            , n = i.t;
                        for (e.t = n + s.t; --n >= 0;)
                            e[n] = 0;
                        for (n = 0; n < s.t; ++n)
                            e[n + i.t] = i.am(0, s[n], e, n, 0, i.t);
                        e.s = 0,
                            e.clamp(),
                        this.s != t.s && b.ZERO.subTo(e, e)
                    }

                    function C(t) {
                        for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;)
                            t[i] = 0;
                        for (i = 0; i < e.t - 1; ++i) {
                            var s = e.am(i, e[i], t, 2 * i, 0, 1);
                            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, s, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
                                t[i + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                            t.s = 0,
                            t.clamp()
                    }

                    function T(t, e, i) {
                        var s = t.abs();
                        if (!(s.t <= 0)) {
                            var n = this.abs();
                            if (n.t < s.t)
                                return null != e && e.fromInt(0),
                                    void (null != i && this.copyTo(i));
                            null == i && (i = y());
                            var r = y()
                                , o = this.s
                                , a = t.s
                                , c = this.DB - w(s[s.t - 1]);
                            c > 0 ? (s.lShiftTo(c, r),
                                n.lShiftTo(c, i)) : (s.copyTo(r),
                                n.copyTo(i));
                            var l = r.t
                                , u = r[l - 1];
                            if (0 != u) {
                                var d = u * (1 << this.F1) + (l > 1 ? r[l - 2] >> this.F2 : 0)
                                    , p = this.FV / d
                                    , h = (1 << this.F1) / d
                                    , f = 1 << this.F2
                                    , g = i.t
                                    , m = g - l
                                    , v = null == e ? y() : e;
                                for (r.dlShiftTo(m, v),
                                     i.compareTo(v) >= 0 && (i[i.t++] = 1,
                                         i.subTo(v, i)),
                                         b.ONE.dlShiftTo(l, v),
                                         v.subTo(r, r); r.t < l;)
                                    r[r.t++] = 0;
                                for (; --m >= 0;) {
                                    var _ = i[--g] == u ? this.DM : Math.floor(i[g] * p + (i[g - 1] + f) * h);
                                    if ((i[g] += r.am(0, _, i, m, 0, l)) < _)
                                        for (r.dlShiftTo(m, v),
                                                 i.subTo(v, i); i[g] < --_;)
                                            i.subTo(v, i)
                                }
                                null != e && (i.drShiftTo(l, e),
                                o != a && b.ZERO.subTo(e, e)),
                                    i.t = l,
                                    i.clamp(),
                                c > 0 && i.rShiftTo(c, i),
                                0 > o && b.ZERO.subTo(i, i)
                            }
                        }
                    }

                    function I(t) {
                        var e = y();
                        return this.abs().divRemTo(t, null, e),
                        this.s < 0 && e.compareTo(b.ZERO) > 0 && t.subTo(e, e),
                            e
                    }

                    function $(t) {
                        this.m = t
                    }

                    function P(t) {
                        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                    }

                    function R(t) {
                        return t
                    }

                    function A(t) {
                        t.divRemTo(this.m, null, t)
                    }

                    function E(t, e, i) {
                        t.multiplyTo(e, i),
                            this.reduce(i)
                    }

                    function M(t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    }

                    function N() {
                        if (this.t < 1)
                            return 0;
                        var t = this[0];
                        if (0 == (1 & t))
                            return 0;
                        var e = 3 & t;
                        return e = e * (2 - (15 & t) * e) & 15,
                            e = e * (2 - (255 & t) * e) & 255,
                            e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
                            e = e * (2 - t * e % this.DV) % this.DV,
                            e > 0 ? this.DV - e : -e
                    }

                    function O(t) {
                        this.m = t,
                            this.mp = t.invDigit(),
                            this.mpl = 32767 & this.mp,
                            this.mph = this.mp >> 15,
                            this.um = (1 << t.DB - 15) - 1,
                            this.mt2 = 2 * t.t
                    }

                    function B(t) {
                        var e = y();
                        return t.abs().dlShiftTo(this.m.t, e),
                            e.divRemTo(this.m, null, e),
                        t.s < 0 && e.compareTo(b.ZERO) > 0 && this.m.subTo(e, e),
                            e
                    }

                    function j(t) {
                        var e = y();
                        return t.copyTo(e),
                            this.reduce(e),
                            e
                    }

                    function L(t) {
                        for (; t.t <= this.mt2;)
                            t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var i = 32767 & t[e]
                                , s = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            for (i = e + this.m.t,
                                     t[i] += this.m.am(0, s, t, e, 0, this.m.t); t[i] >= t.DV;)
                                t[i] -= t.DV,
                                    t[++i]++
                        }
                        t.clamp(),
                            t.drShiftTo(this.m.t, t),
                        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    }

                    function F(t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    }

                    function K(t, e, i) {
                        t.multiplyTo(e, i),
                            this.reduce(i)
                    }

                    function U() {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    }

                    function V(t, e) {
                        if (t > 4294967295 || 1 > t)
                            return b.ONE;
                        var i = y()
                            , s = y()
                            , n = e.convert(this)
                            , r = w(t) - 1;
                        for (n.copyTo(i); --r >= 0;)
                            if (e.sqrTo(i, s),
                            (t & 1 << r) > 0)
                                e.mulTo(s, n, i);
                            else {
                                var o = i;
                                i = s,
                                    s = o
                            }
                        return e.revert(i)
                    }
                    ;

                    function z(t, e) {
                        var i;
                        return i = 256 > t || e.isEven() ? new $(e) : new O(e),
                            this.exp(t, i)
                    }

                    function q() {
                        var t = y();
                        return this.copyTo(t),
                            t
                    }

                    function H() {
                        if (this.s < 0) {
                            if (1 == this.t)
                                return this[0] - this.DV;
                            if (0 == this.t)
                                return -1
                        } else {
                            if (1 == this.t)
                                return this[0];
                            if (0 == this.t)
                                return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    }

                    function J() {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    }

                    function G() {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    }

                    function Y(t) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                    }

                    function W() {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    }

                    function Z(t) {
                        if (null == t && (t = 10),
                        0 == this.signum() || 2 > t || t > 36)
                            return "0";
                        var e = this.chunkSize(t)
                            , i = Math.pow(t, e)
                            , s = m(i)
                            , n = y()
                            , r = y()
                            , o = "";
                        for (this.divRemTo(s, n, r); n.signum() > 0;)
                            o = (i + r.intValue()).toString(t).substr(1) + o,
                                n.divRemTo(s, n, r);
                        return r.intValue().toString(t) + o
                    }

                    function Q(t, e) {
                        this.fromInt(0),
                        null == e && (e = 10);
                        for (var i = this.chunkSize(e), s = Math.pow(e, i), n = !1, r = 0, o = 0, a = 0; a < t.length; ++a) {
                            var c = l(t, a);
                            0 > c ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + c,
                            ++r >= i && (this.dMultiply(s),
                                this.dAddOffset(o, 0),
                                r = 0,
                                o = 0))
                        }
                        r > 0 && (this.dMultiply(Math.pow(e, r)),
                            this.dAddOffset(o, 0)),
                        n && b.ZERO.subTo(this, this)
                    }

                    function X(t, e, i) {
                        if ("number" == typeof e)
                            if (2 > t)
                                this.fromInt(1);
                            else
                                for (this.fromNumber(t, i),
                                     this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), at, this),
                                     this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);)
                                    this.dAddOffset(2, 0),
                                    this.bitLength() > t && this.subTo(b.ONE.shiftLeft(t - 1), this);
                        else {
                            var s = new Array
                                , n = 7 & t;
                            s.length = (t >> 3) + 1,
                                e.nextBytes(s),
                                n > 0 ? s[0] &= (1 << n) - 1 : s[0] = 0,
                                this.fromString(s, 256)
                        }
                    }

                    function tt() {
                        var t = this.t
                            , e = new Array;
                        e[0] = this.s;
                        var i, s = this.DB - t * this.DB % 8, n = 0;
                        if (t-- > 0)
                            for (s < this.DB && (i = this[t] >> s) != (this.s & this.DM) >> s && (e[n++] = i | this.s << this.DB - s); t >= 0;)
                                8 > s ? (i = (this[t] & (1 << s) - 1) << 8 - s,
                                    i |= this[--t] >> (s += this.DB - 8)) : (i = this[t] >> (s -= 8) & 255,
                                0 >= s && (s += this.DB,
                                    --t)),
                                0 != (128 & i) && (i |= -256),
                                0 == n && (128 & this.s) != (128 & i) && ++n,
                                (n > 0 || i != this.s) && (e[n++] = i);
                        return e
                    }

                    function et(t) {
                        return 0 == this.compareTo(t)
                    }

                    function it(t) {
                        return this.compareTo(t) < 0 ? this : t
                    }

                    function st(t) {
                        return this.compareTo(t) > 0 ? this : t
                    }

                    function nt(t, e, i) {
                        var s, n, r = Math.min(t.t, this.t);
                        for (s = 0; r > s; ++s)
                            i[s] = e(this[s], t[s]);
                        if (t.t < this.t) {
                            for (n = t.s & this.DM,
                                     s = r; s < this.t; ++s)
                                i[s] = e(this[s], n);
                            i.t = this.t
                        } else {
                            for (n = this.s & this.DM,
                                     s = r; s < t.t; ++s)
                                i[s] = e(n, t[s]);
                            i.t = t.t
                        }
                        i.s = e(this.s, t.s),
                            i.clamp()
                    }

                    function rt(t, e) {
                        return t & e
                    }

                    function ot(t) {
                        var e = y();
                        return this.bitwiseTo(t, rt, e),
                            e
                    }

                    function at(t, e) {
                        return t | e
                    }

                    function ct(t) {
                        var e = y();
                        return this.bitwiseTo(t, at, e),
                            e
                    }

                    function lt(t, e) {
                        return t ^ e
                    }

                    function ut(t) {
                        var e = y();
                        return this.bitwiseTo(t, lt, e),
                            e
                    }

                    function dt(t, e) {
                        return t & ~e
                    }

                    function pt(t) {
                        var e = y();
                        return this.bitwiseTo(t, dt, e),
                            e
                    }

                    function ht() {
                        for (var t = y(), e = 0; e < this.t; ++e)
                            t[e] = this.DM & ~this[e];
                        return t.t = this.t,
                            t.s = ~this.s,
                            t
                    }

                    function ft(t) {
                        var e = y();
                        return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                            e
                    }

                    function gt(t) {
                        var e = y();
                        return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                            e
                    }

                    function mt(t) {
                        if (0 == t)
                            return -1;
                        var e = 0;
                        return 0 == (65535 & t) && (t >>= 16,
                            e += 16),
                        0 == (255 & t) && (t >>= 8,
                            e += 8),
                        0 == (15 & t) && (t >>= 4,
                            e += 4),
                        0 == (3 & t) && (t >>= 2,
                            e += 2),
                        0 == (1 & t) && ++e,
                            e
                    }

                    function vt() {
                        for (var t = 0; t < this.t; ++t)
                            if (0 != this[t])
                                return t * this.DB + mt(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    }

                    function _t(t) {
                        for (var e = 0; 0 != t;)
                            t &= t - 1,
                                ++e;
                        return e
                    }

                    function bt() {
                        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                            t += _t(this[i] ^ e);
                        return t
                    }

                    function yt(t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                    }

                    function wt(t, e) {
                        var i = b.ONE.shiftLeft(t);
                        return this.bitwiseTo(i, e, i),
                            i
                    }

                    function kt(t) {
                        return this.changeBit(t, at)
                    }

                    function xt(t) {
                        return this.changeBit(t, dt)
                    }

                    function Dt(t) {
                        return this.changeBit(t, lt)
                    }

                    function St(t, e) {
                        for (var i = 0, s = 0, n = Math.min(t.t, this.t); n > i;)
                            s += this[i] + t[i],
                                e[i++] = s & this.DM,
                                s >>= this.DB;
                        if (t.t < this.t) {
                            for (s += t.s; i < this.t;)
                                s += this[i],
                                    e[i++] = s & this.DM,
                                    s >>= this.DB;
                            s += this.s
                        } else {
                            for (s += this.s; i < t.t;)
                                s += t[i],
                                    e[i++] = s & this.DM,
                                    s >>= this.DB;
                            s += t.s
                        }
                        e.s = 0 > s ? -1 : 0,
                            s > 0 ? e[i++] = s : -1 > s && (e[i++] = this.DV + s),
                            e.t = i,
                            e.clamp()
                    }

                    function Ct(t) {
                        var e = y();
                        return this.addTo(t, e),
                            e
                    }

                    function Tt(t) {
                        var e = y();
                        return this.subTo(t, e),
                            e
                    }

                    function It(t) {
                        var e = y();
                        return this.multiplyTo(t, e),
                            e
                    }

                    function $t() {
                        var t = y();
                        return this.squareTo(t),
                            t
                    }

                    function Pt(t) {
                        var e = y();
                        return this.divRemTo(t, e, null),
                            e
                    }

                    function Rt(t) {
                        var e = y();
                        return this.divRemTo(t, null, e),
                            e
                    }

                    function At(t) {
                        var e = y()
                            , i = y();
                        return this.divRemTo(t, e, i),
                            new Array(e, i)
                    }

                    function Et(t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                            ++this.t,
                            this.clamp()
                    }

                    function Mt(t, e) {
                        if (0 != t) {
                            for (; this.t <= e;)
                                this[this.t++] = 0;
                            for (this[e] += t; this[e] >= this.DV;)
                                this[e] -= this.DV,
                                ++e >= this.t && (this[this.t++] = 0),
                                    ++this[e]
                        }
                    }

                    function Nt() {
                    }

                    function Ot(t) {
                        return t
                    }

                    function Bt(t, e, i) {
                        t.multiplyTo(e, i)
                    }

                    function jt(t, e) {
                        t.squareTo(e)
                    }

                    function Lt(t) {
                        return this.exp(t, new Nt)
                    }

                    function Ft(t, e, i) {
                        var s = Math.min(this.t + t.t, e);
                        for (i.s = 0,
                                 i.t = s; s > 0;)
                            i[--s] = 0;
                        var n;
                        for (n = i.t - this.t; n > s; ++s)
                            i[s + this.t] = this.am(0, t[s], i, s, 0, this.t);
                        for (n = Math.min(t.t, e); n > s; ++s)
                            this.am(0, t[s], i, s, 0, e - s);
                        i.clamp()
                    }

                    function Kt(t, e, i) {
                        --e;
                        var s = i.t = this.t + t.t - e;
                        for (i.s = 0; --s >= 0;)
                            i[s] = 0;
                        for (s = Math.max(e - this.t, 0); s < t.t; ++s)
                            i[this.t + s - e] = this.am(e - s, t[s], i, 0, 0, this.t + s - e);
                        i.clamp(),
                            i.drShiftTo(1, i)
                    }

                    function Ut(t) {
                        this.r2 = y(),
                            this.q3 = y(),
                            b.ONE.dlShiftTo(2 * t.t, this.r2),
                            this.mu = this.r2.divide(t),
                            this.m = t
                    }

                    function Vt(t) {
                        if (t.s < 0 || t.t > 2 * this.m.t)
                            return t.mod(this.m);
                        if (t.compareTo(this.m) < 0)
                            return t;
                        var e = y();
                        return t.copyTo(e),
                            this.reduce(e),
                            e
                    }

                    function zt(t) {
                        return t
                    }

                    function qt(t) {
                        for (t.drShiftTo(this.m.t - 1, this.r2),
                             t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                                 t.clamp()),
                                 this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                                 this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
                            t.dAddOffset(1, this.m.t + 1);
                        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;)
                            t.subTo(this.m, t)
                    }

                    function Ht(t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    }

                    function Jt(t, e, i) {
                        t.multiplyTo(e, i),
                            this.reduce(i)
                    }

                    function Gt(t, e) {
                        var i, s, n = t.bitLength(), r = m(1);
                        if (0 >= n)
                            return r;
                        i = 18 > n ? 1 : 48 > n ? 3 : 144 > n ? 4 : 768 > n ? 5 : 6,
                            s = 8 > n ? new $(e) : e.isEven() ? new Ut(e) : new O(e);
                        var o = new Array
                            , a = 3
                            , c = i - 1
                            , l = (1 << i) - 1;
                        if (o[1] = s.convert(this),
                        i > 1) {
                            var u = y();
                            for (s.sqrTo(o[1], u); l >= a;)
                                o[a] = y(),
                                    s.mulTo(u, o[a - 2], o[a]),
                                    a += 2
                        }
                        var d, p, h = t.t - 1, f = !0, g = y();
                        for (n = w(t[h]) - 1; h >= 0;) {
                            for (n >= c ? d = t[h] >> n - c & l : (d = (t[h] & (1 << n + 1) - 1) << c - n,
                            h > 0 && (d |= t[h - 1] >> this.DB + n - c)),
                                     a = i; 0 == (1 & d);)
                                d >>= 1,
                                    --a;
                            if ((n -= a) < 0 && (n += this.DB,
                                --h),
                                f)
                                o[d].copyTo(r),
                                    f = !1;
                            else {
                                for (; a > 1;)
                                    s.sqrTo(r, g),
                                        s.sqrTo(g, r),
                                        a -= 2;
                                a > 0 ? s.sqrTo(r, g) : (p = r,
                                    r = g,
                                    g = p),
                                    s.mulTo(g, o[d], r)
                            }
                            for (; h >= 0 && 0 == (t[h] & 1 << n);)
                                s.sqrTo(r, g),
                                    p = r,
                                    r = g,
                                    g = p,
                                --n < 0 && (n = this.DB - 1,
                                    --h)
                        }
                        return s.revert(r)
                    }

                    function Yt(t) {
                        var e = this.s < 0 ? this.negate() : this.clone()
                            , i = t.s < 0 ? t.negate() : t.clone();
                        if (e.compareTo(i) < 0) {
                            var s = e;
                            e = i,
                                i = s
                        }
                        var n = e.getLowestSetBit()
                            , r = i.getLowestSetBit();
                        if (0 > r)
                            return e;
                        for (r > n && (r = n),
                             r > 0 && (e.rShiftTo(r, e),
                                 i.rShiftTo(r, i)); e.signum() > 0;)
                            (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
                            (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
                                e.compareTo(i) >= 0 ? (e.subTo(i, e),
                                    e.rShiftTo(1, e)) : (i.subTo(e, i),
                                    i.rShiftTo(1, i));
                        return r > 0 && i.lShiftTo(r, i),
                            i
                    }

                    function Wt(t) {
                        if (0 >= t)
                            return 0;
                        var e = this.DV % t
                            , i = this.s < 0 ? t - 1 : 0;
                        if (this.t > 0)
                            if (0 == e)
                                i = this[0] % t;
                            else
                                for (var s = this.t - 1; s >= 0; --s)
                                    i = (e * i + this[s]) % t;
                        return i
                    }

                    function Zt(t) {
                        var e = t.isEven();
                        if (this.isEven() && e || 0 == t.signum())
                            return b.ZERO;
                        for (var i = t.clone(), s = this.clone(), n = m(1), r = m(0), o = m(0), a = m(1); 0 != i.signum();) {
                            for (; i.isEven();)
                                i.rShiftTo(1, i),
                                    e ? (n.isEven() && r.isEven() || (n.addTo(this, n),
                                        r.subTo(t, r)),
                                        n.rShiftTo(1, n)) : r.isEven() || r.subTo(t, r),
                                    r.rShiftTo(1, r);
                            for (; s.isEven();)
                                s.rShiftTo(1, s),
                                    e ? (o.isEven() && a.isEven() || (o.addTo(this, o),
                                        a.subTo(t, a)),
                                        o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a),
                                    a.rShiftTo(1, a);
                            i.compareTo(s) >= 0 ? (i.subTo(s, i),
                            e && n.subTo(o, n),
                                r.subTo(a, r)) : (s.subTo(i, s),
                            e && o.subTo(n, o),
                                a.subTo(r, a))
                        }
                        return 0 != s.compareTo(b.ONE) ? b.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a),
                            a.signum() < 0 ? a.add(t) : a) : a
                    }

                    function Qt(t) {
                        var e, i = this.abs();
                        if (1 == i.t && i[0] <= $e[$e.length - 1]) {
                            for (e = 0; e < $e.length; ++e)
                                if (i[0] == $e[e])
                                    return !0;
                            return !1
                        }
                        if (i.isEven())
                            return !1;
                        for (e = 1; e < $e.length;) {
                            for (var s = $e[e], n = e + 1; n < $e.length && Pe > s;)
                                s *= $e[n++];
                            for (s = i.modInt(s); n > e;)
                                if (s % $e[e++] == 0)
                                    return !1
                        }
                        return i.millerRabin(t)
                    }

                    function Xt(t) {
                        var e = this.subtract(b.ONE)
                            , i = e.getLowestSetBit();
                        if (0 >= i)
                            return !1;
                        var s = e.shiftRight(i);
                        t = t + 1 >> 1,
                        t > $e.length && (t = $e.length);
                        for (var n = y(), r = 0; t > r; ++r) {
                            var o = n.modPow(s, this);
                            if (0 != o.compareTo(b.ONE) && 0 != o.compareTo(e)) {
                                for (var a = 1; a++ < i && 0 != o.compareTo(e);)
                                    if (o = o.modPowInt(2, this),
                                    0 == o.compareTo(b.ONE))
                                        return !1;
                                if (0 != o.compareTo(e))
                                    return !1
                            }
                        }
                        return !0
                    }

                    function te() {
                        this.i = 0,
                            this.j = 0,
                            this.S = new Array
                    }

                    function ee(t) {
                        var e, i, s;
                        for (e = 0; 256 > e; ++e)
                            this.S[e] = e;
                        for (i = 0,
                                 e = 0; 256 > e; ++e)
                            i = i + this.S[e] + t[e % t.length] & 255,
                                s = this.S[e],
                                this.S[e] = this.S[i],
                                this.S[i] = s;
                        this.i = 0,
                            this.j = 0
                    }

                    function ie() {
                        var t;
                        return this.i = this.i + 1 & 255,
                            this.j = this.j + this.S[this.i] & 255,
                            t = this.S[this.i],
                            this.S[this.i] = this.S[this.j],
                            this.S[this.j] = t,
                            this.S[t + this.S[this.i] & 255]
                    }

                    function se() {
                        return new te
                    }

                    function ne() {
                        if (null == Re) {
                            for (Re = se(); Me > Ee;) {
                                Ae[Ee++] = 255 & t
                            }
                            for (Re.init(Ae),
                                     Ee = 0; Ee < Ae.length; ++Ee)
                                Ae[Ee] = 0;
                            Ee = 0
                        }
                        return Re.next()
                    }

                    function re(t) {
                        var e;
                        for (e = 0; e < t.length; ++e)
                            t[e] = ne()
                    }

                    function oe() {
                    }

                    function ae(t, e) {
                        return new b(t, e)
                    }

                    function ce(t, e) {
                        if (e < t.length + 11)
                            return console.error("Message too long for RSA"),
                                null;
                        for (var i = new Array, s = t.length - 1; s >= 0 && e > 0;) {
                            var n = t.charCodeAt(s--);
                            128 > n ? i[--e] = n : n > 127 && 2048 > n ? (i[--e] = 63 & n | 128,
                                i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128,
                                i[--e] = n >> 6 & 63 | 128,
                                i[--e] = n >> 12 | 224)
                        }
                        i[--e] = 0;
                        for (var r = new oe, o = new Array; e > 2;) {
                            for (o[0] = 0; 0 == o[0];)
                                r.nextBytes(o);
                            i[--e] = o[0]
                        }
                        return i[--e] = 2,
                            i[--e] = 0,
                            new b(i)
                    }

                    function le() {
                        this.n = null,
                            this.e = 0,
                            this.d = null,
                            this.p = null,
                            this.q = null,
                            this.dmp1 = null,
                            this.dmq1 = null,
                            this.coeff = null
                    }

                    function ue(t, e) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                            this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                    }

                    function de(t) {
                        return t.modPowInt(this.e, this.n)
                    }

                    function pe(t) {
                        var e = ce(t, this.n.bitLength() + 7 >> 3);
                        if (null == e)
                            return null;
                        var i = this.doPublic(e);
                        if (null == i)
                            return null;
                        var s = i.toString(16);
                        return 0 == (1 & s.length) ? s : "0" + s
                    }

                    function he(t, e) {
                        for (var i = t.toByteArray(), s = 0; s < i.length && 0 == i[s];)
                            ++s;
                        if (i.length - s != e - 1 || 2 != i[s])
                            return null;
                        for (++s; 0 != i[s];)
                            if (++s >= i.length)
                                return null;
                        for (var n = ""; ++s < i.length;) {
                            var r = 255 & i[s];
                            128 > r ? n += String.fromCharCode(r) : r > 191 && 224 > r ? (n += String.fromCharCode((31 & r) << 6 | 63 & i[s + 1]),
                                ++s) : (n += String.fromCharCode((15 & r) << 12 | (63 & i[s + 1]) << 6 | 63 & i[s + 2]),
                                s += 2)
                        }
                        return n
                    }

                    function fe(t, e, i) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                            this.e = parseInt(e, 16),
                            this.d = ae(i, 16)) : console.error("Invalid RSA private key")
                    }

                    function ge(t, e, i, s, n, r, o, a) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                            this.e = parseInt(e, 16),
                            this.d = ae(i, 16),
                            this.p = ae(s, 16),
                            this.q = ae(n, 16),
                            this.dmp1 = ae(r, 16),
                            this.dmq1 = ae(o, 16),
                            this.coeff = ae(a, 16)) : console.error("Invalid RSA private key")
                    }

                    function me(t, e) {
                        var i = new oe
                            , s = t >> 1;
                        this.e = parseInt(e, 16);
                        for (var n = new b(e, 16); ;) {
                            for (; this.p = new b(t - s, 1, i),
                                   0 != this.p.subtract(b.ONE).gcd(n).compareTo(b.ONE) || !this.p.isProbablePrime(10);)
                                ;
                            for (; this.q = new b(s, 1, i),
                                   0 != this.q.subtract(b.ONE).gcd(n).compareTo(b.ONE) || !this.q.isProbablePrime(10);)
                                ;
                            if (this.p.compareTo(this.q) <= 0) {
                                var r = this.p;
                                this.p = this.q,
                                    this.q = r
                            }
                            var o = this.p.subtract(b.ONE)
                                , a = this.q.subtract(b.ONE)
                                , c = o.multiply(a);
                            if (0 == c.gcd(n).compareTo(b.ONE)) {
                                this.n = this.p.multiply(this.q),
                                    this.d = n.modInverse(c),
                                    this.dmp1 = this.d.mod(o),
                                    this.dmq1 = this.d.mod(a),
                                    this.coeff = this.q.modInverse(this.p);
                                break
                            }
                        }
                    }

                    function ve(t) {
                        if (null == this.p || null == this.q)
                            return t.modPow(this.d, this.n);
                        for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;)
                            e = e.add(this.p);
                        return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                    }

                    function _e(t) {
                        var e = ae(t, 16)
                            , i = this.doPrivate(e);
                        return null == i ? null : he(i, this.n.bitLength() + 7 >> 3)
                    }

                    function be(t) {
                        var e, i, s = "";
                        for (e = 0; e + 3 <= t.length; e += 3)
                            i = parseInt(t.substring(e, e + 3), 16),
                                s += je.charAt(i >> 6) + je.charAt(63 & i);
                        for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16),
                            s += je.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16),
                            s += je.charAt(i >> 2) + je.charAt((3 & i) << 4)); (3 & s.length) > 0;)
                            s += Le;
                        return s
                    }

                    function ye(t) {
                        var e, i, s = "", n = 0;
                        for (e = 0; e < t.length && t.charAt(e) != Le; ++e)
                            v = je.indexOf(t.charAt(e)),
                            v < 0 || (0 == n ? (s += c(v >> 2),
                                i = 3 & v,
                                n = 1) : 1 == n ? (s += c(i << 2 | v >> 4),
                                i = 15 & v,
                                n = 2) : 2 == n ? (s += c(i),
                                s += c(v >> 2),
                                i = 3 & v,
                                n = 3) : (s += c(i << 2 | v >> 4),
                                s += c(15 & v),
                                n = 0));
                        return 1 == n && (s += c(i << 2)),
                            s
                    }

                    try {
                        var we, ke, xe = false;
                        xe && "Microsoft Internet Explorer" == navigator.appName ? (b.prototype.am = i,
                            we = 26) : xe && "Netscape" != navigator.appName ? (b.prototype.am = e,
                            we = 26) : (b.prototype.am = s,
                            we = 28),
                            b.prototype.DB = we,
                            b.prototype.DM = (1 << we) - 1,
                            b.prototype.DV = 1 << we;
                    } catch (e) {
                    }
                    var De = 52;
                    b.prototype.FV = Math.pow(2, De),
                        b.prototype.F1 = De - we,
                        b.prototype.F2 = 2 * we - De;
                    var Se, Ce, Te = "0123456789abcdefghijklmnopqrstuvwxyz", Ie = new Array;
                    for (Se = "0".charCodeAt(0),
                             Ce = 0; 9 >= Ce; ++Ce)
                        Ie[Se++] = Ce;
                    for (Se = "a".charCodeAt(0),
                             Ce = 10; 36 > Ce; ++Ce)
                        Ie[Se++] = Ce;
                    for (Se = "A".charCodeAt(0),
                             Ce = 10; 36 > Ce; ++Ce)
                        Ie[Se++] = Ce;
                    $.prototype.convert = P,
                        $.prototype.revert = R,
                        $.prototype.reduce = A,
                        $.prototype.mulTo = E,
                        $.prototype.sqrTo = M,
                        O.prototype.convert = B,
                        O.prototype.revert = j,
                        O.prototype.reduce = L,
                        O.prototype.mulTo = K,
                        O.prototype.sqrTo = F,
                        b.prototype.copyTo = p,
                        b.prototype.fromInt = n,
                        b.prototype.fromString = h,
                        b.prototype.clamp = r,
                        b.prototype.dlShiftTo = g,
                        b.prototype.drShiftTo = _,
                        b.prototype.lShiftTo = k,
                        b.prototype.rShiftTo = x,
                        b.prototype.subTo = D,
                        b.prototype.multiplyTo = S,
                        b.prototype.squareTo = C,
                        b.prototype.divRemTo = T,
                        b.prototype.invDigit = N,
                        b.prototype.isEven = U,
                        b.prototype.exp = V,
                        b.prototype.toString = o,
                        b.prototype.negate = f,
                        b.prototype.abs = a,
                        b.prototype.compareTo = u,
                        b.prototype.bitLength = d,
                        b.prototype.mod = I,
                        b.prototype.modPowInt = z,
                        b.ZERO = m(0),
                        b.ONE = m(1),
                        Nt.prototype.convert = Ot,
                        Nt.prototype.revert = Ot,
                        Nt.prototype.mulTo = Bt,
                        Nt.prototype.sqrTo = jt,
                        Ut.prototype.convert = Vt,
                        Ut.prototype.revert = zt,
                        Ut.prototype.reduce = qt,
                        Ut.prototype.mulTo = Jt,
                        Ut.prototype.sqrTo = Ht;
                    var $e = [
                        2,
                        3,
                        5,
                        7,
                        11,
                        13,
                        17,
                        19,
                        23,
                        29,
                        31,
                        37,
                        41,
                        43,
                        47,
                        53,
                        59,
                        61,
                        67,
                        71,
                        73,
                        79,
                        83,
                        89,
                        97,
                        101,
                        103,
                        107,
                        109,
                        113,
                        127,
                        131,
                        137,
                        139,
                        149,
                        151,
                        157,
                        163,
                        167,
                        173,
                        179,
                        181,
                        191,
                        193,
                        197,
                        199,
                        211,
                        223,
                        227,
                        229,
                        233,
                        239,
                        241,
                        251,
                        257,
                        263,
                        269,
                        271,
                        277,
                        281,
                        283,
                        293,
                        307,
                        311,
                        313,
                        317,
                        331,
                        337,
                        347,
                        349,
                        353,
                        359,
                        367,
                        373,
                        379,
                        383,
                        389,
                        397,
                        401,
                        409,
                        419,
                        421,
                        431,
                        433,
                        439,
                        443,
                        449,
                        457,
                        461,
                        463,
                        467,
                        479,
                        487,
                        491,
                        499,
                        503,
                        509,
                        521,
                        523,
                        541,
                        547,
                        557,
                        563,
                        569,
                        571,
                        577,
                        587,
                        593,
                        599,
                        601,
                        607,
                        613,
                        617,
                        619,
                        631,
                        641,
                        643,
                        647,
                        653,
                        659,
                        661,
                        673,
                        677,
                        683,
                        691,
                        701,
                        709,
                        719,
                        727,
                        733,
                        739,
                        743,
                        751,
                        757,
                        761,
                        769,
                        773,
                        787,
                        797,
                        809,
                        811,
                        821,
                        823,
                        827,
                        829,
                        839,
                        853,
                        857,
                        859,
                        863,
                        877,
                        881,
                        883,
                        887,
                        907,
                        911,
                        919,
                        929,
                        937,
                        941,
                        947,
                        953,
                        967,
                        971,
                        977,
                        983,
                        991,
                        null
                    ]
                        , Pe = (1 << 26) / $e[$e.length - 1];
                    b.prototype.chunkSize = Y,
                        b.prototype.toRadix = Z,
                        b.prototype.fromRadix = Q,
                        b.prototype.fromNumber = X,
                        b.prototype.bitwiseTo = nt,
                        b.prototype.changeBit = wt,
                        b.prototype.addTo = St,
                        b.prototype.dMultiply = Et,
                        b.prototype.dAddOffset = Mt,
                        b.prototype.multiplyLowerTo = Ft,
                        b.prototype.multiplyUpperTo = Kt,
                        b.prototype.modInt = Wt,
                        b.prototype.millerRabin = Xt,
                        b.prototype.clone = q,
                        b.prototype.intValue = H,
                        b.prototype.byteValue = J,
                        b.prototype.shortValue = G,
                        b.prototype.signum = W,
                        b.prototype.toByteArray = tt,
                        b.prototype.equals = et,
                        b.prototype.min = it,
                        b.prototype.max = st,
                        b.prototype.and = ot,
                        b.prototype.or = ct,
                        b.prototype.xor = ut,
                        b.prototype.andNot = pt,
                        b.prototype.not = ht,
                        b.prototype.shiftLeft = ft,
                        b.prototype.shiftRight = gt,
                        b.prototype.getLowestSetBit = vt,
                        b.prototype.bitCount = bt,
                        b.prototype.testBit = yt,
                        b.prototype.setBit = kt,
                        b.prototype.clearBit = xt,
                        b.prototype.flipBit = Dt,
                        b.prototype.add = Ct,
                        b.prototype.subtract = Tt,
                        b.prototype.multiply = It,
                        b.prototype.divide = Pt,
                        b.prototype.remainder = Rt,
                        b.prototype.divideAndRemainder = At,
                        b.prototype.modPow = Gt,
                        b.prototype.modInverse = Zt,
                        b.prototype.pow = Lt,
                        b.prototype.gcd = Yt,
                        b.prototype.isProbablePrime = Qt,
                        b.prototype.square = $t,
                        te.prototype.init = ee,
                        te.prototype.next = ie;
                    var Re, Ae, Ee, Me = 256;
                    if (null == Ae) {
                        Ae = new Array,
                            Ee = 0;
                        var Ne;
                        var Be = function (t) {
                            if (this.count = this.count || 0,
                            this.count >= 256 || Ee >= Me)
                                try {
                                    var e = t.x + t.y;
                                    Ae[Ee++] = 255 & e,
                                        this.count += 1
                                } catch (y) {
                                }
                        };
                        window.addEventListener ? window.addEventListener("mousemove", Be, !1) : window.attachEvent && window.attachEvent("onmousemove", Be)
                    }
                    oe.prototype.nextBytes = re,
                        le.prototype.doPublic = de,
                        le.prototype.setPublic = ue,
                        le.prototype.encrypt = pe,
                        le.prototype.doPrivate = ve,
                        le.prototype.setPrivate = fe,
                        le.prototype.setPrivateEx = ge,
                        le.prototype.generate = me,
                        le.prototype.decrypt = _e,
                        function () {
                            var t = function (t, e, n) {
                                var r = new oe
                                    , o = t >> 1;
                                this.e = parseInt(e, 16);
                                var a = new b(e, 16)
                                    , c = this
                                    , l = function () {
                                    var e = function () {
                                        if (c.p.compareTo(c.q) <= 0) {
                                            var t = c.p;
                                            c.p = c.q,
                                                c.q = t
                                        }
                                        var e = c.p.subtract(b.ONE)
                                            , i = c.q.subtract(b.ONE)
                                            , s = e.multiply(i);
                                        0 == s.gcd(a).compareTo(b.ONE) ? (c.n = c.p.multiply(c.q),
                                            c.d = a.modInverse(s),
                                            c.dmp1 = c.d.mod(e),
                                            c.dmq1 = c.d.mod(i),
                                            c.coeff = c.q.modInverse(c.p),
                                            setTimeout(function () {
                                                n()
                                            }, 0)) : setTimeout(l, 0)
                                    }
                                        , i = function () {
                                        c.q = y(),
                                            c.q.fromNumberAsync(o, 1, r, function () {
                                                c.q.subtract(b.ONE).gcda(a, function (t) {
                                                    0 == t.compareTo(b.ONE) && c.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0)
                                                })
                                            })
                                    }
                                        , s = function () {
                                        c.p = y(),
                                            c.p.fromNumberAsync(t - o, 1, r, function () {
                                                c.p.subtract(b.ONE).gcda(a, function (t) {
                                                    0 == t.compareTo(b.ONE) && c.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(s, 0)
                                                })
                                            })
                                    };
                                    setTimeout(s, 0)
                                };
                                setTimeout(l, 0)
                            };
                            le.prototype.generateAsync = t;
                            var e = function (t, e) {
                                var i = this.s < 0 ? this.negate() : this.clone()
                                    , s = t.s < 0 ? t.negate() : t.clone();
                                if (i.compareTo(s) < 0) {
                                    var n = i;
                                    i = s,
                                        s = n
                                }
                                var r = i.getLowestSetBit()
                                    , o = s.getLowestSetBit();
                                if (0 > o)
                                    return void e(i);
                                o > r && (o = r),
                                o > 0 && (i.rShiftTo(o, i),
                                    s.rShiftTo(o, s));
                                var a = function () {
                                    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                                    (r = s.getLowestSetBit()) > 0 && s.rShiftTo(r, s),
                                        i.compareTo(s) >= 0 ? (i.subTo(s, i),
                                            i.rShiftTo(1, i)) : (s.subTo(i, s),
                                            s.rShiftTo(1, s)),
                                        i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && s.lShiftTo(o, s),
                                            setTimeout(function () {
                                                e(s)
                                            }, 0))
                                };
                                setTimeout(a, 10)
                            };
                            b.prototype.gcda = e;
                            var i = function (t, e, i, s) {
                                if ("number" == typeof e)
                                    if (2 > t)
                                        this.fromInt(1);
                                    else {
                                        this.fromNumber(t, i),
                                        this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), at, this),
                                        this.isEven() && this.dAddOffset(1, 0);
                                        var n = this
                                            , r = function () {
                                            n.dAddOffset(2, 0),
                                            n.bitLength() > t && n.subTo(b.ONE.shiftLeft(t - 1), n),
                                                n.isProbablePrime(e) ? setTimeout(function () {
                                                    s()
                                                }, 0) : setTimeout(r, 0)
                                        };
                                        setTimeout(r, 0)
                                    }
                                else {
                                    var o = new Array
                                        , a = 7 & t;
                                    o.length = (t >> 3) + 1,
                                        e.nextBytes(o),
                                        a > 0 ? o[0] &= (1 << a) - 1 : o[0] = 0,
                                        this.fromString(o, 256)
                                }
                            };
                            b.prototype.fromNumberAsync = i
                        }();
                    var je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                        , Le = "="
                        , Fe = Fe || {};
                    Fe.env = Fe.env || {};
                    var Ke = Fe
                        , Ue = Object.prototype
                        , Ve = "[object Function]"
                        , ze = ["toString", "valueOf"];
                    Fe.env.parseUA = function (t) {
                        var e, i = function (t) {
                            var e = 0;
                            return parseFloat(t.replace(/\./g, function () {
                                return 1 == e++ ? "" : "."
                            }))
                        }, s = navigator, n = {
                            ie: 0,
                            opera: 0,
                            gecko: 0,
                            webkit: 0,
                            chrome: 0,
                            mobile: null,
                            air: 0,
                            ipad: 0,
                            iphone: 0,
                            ipod: 0,
                            ios: null,
                            android: 0,
                            webos: 0,
                            caja: s && s.cajaVersion,
                            secure: !1,
                            os: null
                        };
                        try {
                            r = t || navigator && navigator.userAgent,
                                o = window && window,
                                a = o && o.href;
                        } catch (e) {
                        }
                        return n.secure = a && 0 === a.toLowerCase().indexOf("https"),
                        r && (/windows|win32/i.test(r) ? n.os = "windows" : /macintosh/i.test(r) ? n.os = "macintosh" : /rhino/i.test(r) && (n.os = "rhino"),
                        /KHTML/.test(r) && (n.webkit = 1),
                            e = r.match(/AppleWebKit\/([^\s]*)/),
                        e && e[1] && (n.webkit = i(e[1]),
                            / Mobile\//.test(r) ? (n.mobile = "Apple",
                                e = r.match(/OS ([^\s]*)/),
                            e && e[1] && (e = i(e[1].replace("_", "."))),
                                n.ios = e,
                                n.ipad = n.ipod = n.iphone = 0,
                                e = r.match(/iPad|iPod|iPhone/),
                            e && e[0] && (n[e[0].toLowerCase()] = n.ios)) : (e = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
                            e && (n.mobile = e[0]),
                            /webOS/.test(r) && (n.mobile = "WebOS",
                                e = r.match(/webOS\/([^\s]*);/),
                            e && e[1] && (n.webos = i(e[1]))),
                            / Android/.test(r) && (n.mobile = "Android",
                                e = r.match(/Android ([^\s]*);/),
                            e && e[1] && (n.android = i(e[1])))),
                            e = r.match(/Chrome\/([^\s]*)/),
                            e && e[1] ? n.chrome = i(e[1]) : (e = r.match(/AdobeAIR\/([^\s]*)/),
                            e && (n.air = e[0]))),
                        n.webkit || (e = r.match(/Opera[\s\/]([^\s]*)/),
                            e && e[1] ? (n.opera = i(e[1]),
                                e = r.match(/Version\/([^\s]*)/),
                            e && e[1] && (n.opera = i(e[1])),
                                e = r.match(/Opera Mini[^;]*/),
                            e && (n.mobile = e[0])) : (e = r.match(/MSIE\s([^;]*)/),
                                e && e[1] ? n.ie = i(e[1]) : (e = r.match(/Gecko\/([^\s]*)/),
                                e && (n.gecko = 1,
                                    e = r.match(/rv:([^\s\)]*)/),
                                e && e[1] && (n.gecko = i(e[1]))))))),
                            n
                    }
                        ,
                        Fe.env.ua = Fe.env.parseUA(),
                        Fe.isFunction = function (t) {
                            return "function" == typeof t || Ue.toString.apply(t) === Ve
                        }
                        ,
                        Fe._IEEnumFix = Fe.env.ua.ie ? function (t, e) {
                                var i, s, n;
                                for (i = 0; i < ze.length; i += 1)
                                    s = ze[i],
                                        n = e[s],
                                    Ke.isFunction(n) && n != Ue[s] && (t[s] = n)
                            }
                            : function () {
                            }
                        ,
                        Fe.extend = function (t, e, i) {
                            if (!e || !t)
                                throw new Error("extend failed, please check that all dependencies are included.");
                            var s, n = function () {
                            };
                            if (n.prototype = e.prototype,
                                t.prototype = new n,
                                t.prototype.constructor = t,
                                t.superclass = e.prototype,
                            e.prototype.constructor == Ue.constructor && (e.prototype.constructor = e),
                                i) {
                                for (s in i)
                                    Ke.hasOwnProperty(i, s) && (t.prototype[s] = i[s]);
                                Ke._IEEnumFix(t.prototype, i)
                            }
                        }
                        ,
                    "undefined" != typeof KJUR && KJUR || (KJUR = {}),
                    "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
                        KJUR.asn1.ASN1Util = new function () {
                            this.integerToByteHex = function (t) {
                                var e = t.toString(16);
                                return e.length % 2 == 1 && (e = "0" + e),
                                    e
                            }
                                ,
                                this.bigIntToMinTwosComplementsHex = function (t) {
                                    var e = t.toString(16);
                                    if ("-" != e.substr(0, 1))
                                        e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                                    else {
                                        var i = e.substr(1)
                                            , s = i.length;
                                        s % 2 == 1 ? s += 1 : e.match(/^[0-7]/) || (s += 2);
                                        for (var n = "", r = 0; s > r; r++)
                                            n += "f";
                                        var o = new b(n, 16)
                                            , a = o.xor(t).add(b.ONE);
                                        e = a.toString(16).replace(/^-/, "")
                                    }
                                    return e
                                }
                                ,
                                this.getPEMStringFromHex = function (t, e) {
                                    var i = CryptoJS.enc.Hex.parse(t)
                                        , s = CryptoJS.enc.Base64.stringify(i)
                                        , n = s.replace(/(.{64})/g, "$1\r\n");
                                    return n = n.replace(/\r\n$/, ""),
                                    "-----BEGIN " + e + "-----\r\n" + n + "\r\n-----END " + e + "-----\r\n"
                                }
                        }
                        ,
                        KJUR.asn1.ASN1Object = function () {
                            var n = "";
                            this.getLengthHexFromValue = function () {
                                if ("undefined" == typeof this.hV || null == this.hV)
                                    throw "this.hV is null or undefined.";
                                if (this.hV.length % 2 == 1)
                                    throw "value hex must be even length: n=" + n.length + ",v=" + this.hV;
                                var t = this.hV.length / 2
                                    , e = t.toString(16);
                                if (e.length % 2 == 1 && (e = "0" + e),
                                128 > t)
                                    return e;
                                var i = e.length / 2;
                                if (i > 15)
                                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                                var s = 128 + i;
                                return s.toString(16) + e
                            }
                                ,
                                this.getEncodedHex = function () {
                                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                                        this.hL = this.getLengthHexFromValue(),
                                        this.hTLV = this.hT + this.hL + this.hV,
                                        this.isModified = !1),
                                        this.hTLV
                                }
                                ,
                                this.getValueHex = function () {
                                    return this.getEncodedHex(),
                                        this.hV
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return ""
                                }
                        }
                        ,
                        KJUR.asn1.DERAbstractString = function (t) {
                            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
                            this.getString = function () {
                                return this.s
                            }
                                ,
                                this.setString = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.s = t,
                                        this.hV = stohex(this.s)
                                }
                                ,
                                this.setStringHex = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.s = null,
                                        this.hV = t
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERAbstractTime = function (t) {
                            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
                            this.localDateToUTC = function (t) {
                                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                                var e = new Date(utc);
                                return e
                            }
                                ,
                                this.formatDate = function (t, e) {
                                    var i = this.zeroPadding
                                        , s = this.localDateToUTC(t)
                                        , n = String(s.getFullYear());
                                    "utc" == e && (n = n.substr(2, 2));
                                    var r = i(String(s.getMonth() + 1), 2)
                                        , o = i(String(s.getDate()), 2)
                                        , a = i(String(s.getHours()), 2)
                                        , c = i(String(s.getMinutes()), 2)
                                        , l = i(String(s.getSeconds()), 2);
                                    return n + r + o + a + c + l + "Z"
                                }
                                ,
                                this.zeroPadding = function (t, e) {
                                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                                }
                                ,
                                this.getString = function () {
                                    return this.s
                                }
                                ,
                                this.setString = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.s = t,
                                        this.hV = stohex(this.s)
                                }
                                ,
                                this.setByDateValue = function (t, e, i, s, n, r) {
                                    var o = new Date(Date.UTC(t, e - 1, i, s, n, r, 0));
                                    this.setByDate(o)
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERAbstractStructured = function (t) {
                            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
                            this.setByASN1ObjectArray = function (t) {
                                this.hTLV = null,
                                    this.isModified = !0,
                                    this.asn1Array = t
                            }
                                ,
                                this.appendASN1Object = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.asn1Array.push(t)
                                }
                                ,
                                this.asn1Array = new Array,
                            "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERBoolean = function () {
                            KJUR.asn1.DERBoolean.superclass.constructor.call(this),
                                this.hT = "01",
                                this.hTLV = "0101ff"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERInteger = function (t) {
                            KJUR.asn1.DERInteger.superclass.constructor.call(this),
                                this.hT = "02",
                                this.setByBigInteger = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                                }
                                ,
                                this.setByInteger = function (t) {
                                    var e = new b(String(t), 10);
                                    this.setByBigInteger(e)
                                }
                                ,
                                this.setValueHex = function (t) {
                                    this.hV = t
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERBitString = function (t) {
                            KJUR.asn1.DERBitString.superclass.constructor.call(this),
                                this.hT = "03",
                                this.setHexValueIncludingUnusedBits = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.hV = t
                                }
                                ,
                                this.setUnusedBitsAndHexValue = function (t, e) {
                                    if (0 > t || t > 7)
                                        throw "unused bits shall be from 0 to 7: u = " + t;
                                    var i = "0" + t;
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.hV = i + e
                                }
                                ,
                                this.setByBinaryString = function (t) {
                                    t = t.replace(/0+$/, "");
                                    var e = 8 - t.length % 8;
                                    8 == e && (e = 0);
                                    for (var i = 0; e >= i; i++)
                                        t += "0";
                                    for (var s = "", i = 0; i < t.length - 1; i += 8) {
                                        var n = t.substr(i, 8)
                                            , r = parseInt(n, 2).toString(16);
                                        1 == r.length && (r = "0" + r),
                                            s += r
                                    }
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.hV = "0" + e + s
                                }
                                ,
                                this.setByBooleanArray = function (t) {
                                    for (var e = "", i = 0; i < t.length; i++)
                                        e += 1 == t[i] ? "1" : "0";
                                    this.setByBinaryString(e)
                                }
                                ,
                                this.newFalseArray = function (t) {
                                    for (var e = new Array(t), i = 0; t > i; i++)
                                        e[i] = !1;
                                    return e
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DEROctetString = function (t) {
                            KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
                                this.hT = "04"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERNull = function () {
                            KJUR.asn1.DERNull.superclass.constructor.call(this),
                                this.hT = "05",
                                this.hTLV = "0500"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERObjectIdentifier = function (t) {
                            var c = function (t) {
                                var e = t.toString(16);
                                return 1 == e.length && (e = "0" + e),
                                    e
                            }
                                , r = function (t) {
                                var e = ""
                                    , i = new b(t, 10)
                                    , s = i.toString(2)
                                    , n = 7 - s.length % 7;
                                7 == n && (n = 0);
                                for (var r = "", o = 0; n > o; o++)
                                    r += "0";
                                s = r + s;
                                for (var o = 0; o < s.length - 1; o += 7) {
                                    var a = s.substr(o, 7);
                                    o != s.length - 7 && (a = "1" + a),
                                        e += c(parseInt(a, 2))
                                }
                                return e
                            };
                            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                                this.hT = "06",
                                this.setValueHex = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.s = null,
                                        this.hV = t
                                }
                                ,
                                this.setValueOidString = function (t) {
                                    if (!t.match(/^[0-9.]+$/))
                                        throw "malformed oid string: " + t;
                                    var e = ""
                                        , i = t.split(".")
                                        , s = 40 * parseInt(i[0]) + parseInt(i[1]);
                                    e += c(s),
                                        i.splice(0, 2);
                                    for (var n = 0; n < i.length; n++)
                                        e += r(i[n]);
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.s = null,
                                        this.hV = e
                                }
                                ,
                                this.setValueName = function (t) {
                                    if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t])
                                        throw "DERObjectIdentifier oidName undefined: " + t;
                                    var e = KJUR.asn1.x509.OID.name2oidList[t];
                                    this.setValueOidString(e)
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
                        KJUR.asn1.DERUTF8String = function (t) {
                            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
                                this.hT = "0c"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERNumericString = function (t) {
                            KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
                                this.hT = "12"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERPrintableString = function (t) {
                            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
                                this.hT = "13"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERTeletexString = function (t) {
                            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
                                this.hT = "14"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERIA5String = function (t) {
                            KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
                                this.hT = "16"
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
                        KJUR.asn1.DERUTCTime = function (t) {
                            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
                                this.hT = "17",
                                this.setByDate = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.date = t,
                                        this.s = this.formatDate(this.date, "utc"),
                                        this.hV = stohex(this.s)
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
                        KJUR.asn1.DERGeneralizedTime = function (t) {
                            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                                this.hT = "18",
                                this.setByDate = function (t) {
                                    this.hTLV = null,
                                        this.isModified = !0,
                                        this.date = t,
                                        this.s = this.formatDate(this.date, "gen"),
                                        this.hV = stohex(this.s)
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
                        KJUR.asn1.DERSequence = function (t) {
                            KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
                                this.hT = "30",
                                this.getFreshValueHex = function () {
                                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                                        var i = this.asn1Array[e];
                                        t += i.getEncodedHex()
                                    }
                                    return this.hV = t,
                                        this.hV
                                }
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
                        KJUR.asn1.DERSet = function (t) {
                            KJUR.asn1.DERSet.superclass.constructor.call(this, t),
                                this.hT = "31",
                                this.getFreshValueHex = function () {
                                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                                        var i = this.asn1Array[e];
                                        t.push(i.getEncodedHex())
                                    }
                                    return t.sort(),
                                        this.hV = t.join(""),
                                        this.hV
                                }
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
                        KJUR.asn1.DERTaggedObject = function (t) {
                            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
                                this.hT = "a0",
                                this.hV = "",
                                this.isExplicit = !0,
                                this.asn1Object = null,
                                this.setASN1Object = function (t, e, i) {
                                    this.hT = e,
                                        this.isExplicit = t,
                                        this.asn1Object = i,
                                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                                            this.hTLV = null,
                                            this.isModified = !0) : (this.hV = null,
                                            this.hTLV = i.getEncodedHex(),
                                            this.hTLV = this.hTLV.replace(/^../, e),
                                            this.isModified = !1)
                                }
                                ,
                                this.getFreshValueHex = function () {
                                    return this.hV
                                }
                                ,
                            "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
                            "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
                            "undefined" != typeof t.obj && (this.asn1Object = t.obj,
                                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                        }
                        ,
                        Fe.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
                        function (c) {
                            "use strict";
                            var l, t = {};
                            t.decode = function (t) {
                                var e;
                                if (l === c) {
                                    var i = "0123456789ABCDEF"
                                        , s = " \f\n\r  \u2028\u2029";
                                    for (l = [],
                                             e = 0; 16 > e; ++e)
                                        l[i.charAt(e)] = e;
                                    for (i = i.toLowerCase(),
                                             e = 10; 16 > e; ++e)
                                        l[i.charAt(e)] = e;
                                    for (e = 0; e < s.length; ++e)
                                        l[s.charAt(e)] = -1
                                }
                                var n = []
                                    , r = 0
                                    , o = 0;
                                for (e = 0; e < t.length; ++e) {
                                    var a = t.charAt(e);
                                    if ("=" == a)
                                        break;
                                    if (a = l[a],
                                    -1 != a) {
                                        if (a === c)
                                            throw "Illegal character at offset " + e;
                                        r |= a,
                                            ++o >= 2 ? (n[n.length] = r,
                                                r = 0,
                                                o = 0) : r <<= 4
                                    }
                                }
                                if (o)
                                    throw "Hex encoding incomplete: 4 bits missing";
                                return n
                            }
                                ,
                                window.Hex = t
                        }(),
                        function (c) {
                            "use strict";
                            var l, i = {};
                            i.decode = function (t) {
                                var e;
                                if (l === c) {
                                    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                                        , s = "= \f\n\r  \u2028\u2029";
                                    for (l = [],
                                             e = 0; 64 > e; ++e)
                                        l[i.charAt(e)] = e;
                                    for (e = 0; e < s.length; ++e)
                                        l[s.charAt(e)] = -1
                                }
                                var n = []
                                    , r = 0
                                    , o = 0;
                                for (e = 0; e < t.length; ++e) {
                                    var a = t.charAt(e);
                                    if ("=" == a)
                                        break;
                                    if (a = l[a],
                                    -1 != a) {
                                        if (a === c)
                                            throw "Illegal character at offset " + e;
                                        r |= a,
                                            ++o >= 4 ? (n[n.length] = r >> 16,
                                                n[n.length] = r >> 8 & 255,
                                                n[n.length] = 255 & r,
                                                r = 0,
                                                o = 0) : r <<= 6
                                    }
                                }
                                switch (o) {
                                    case 1:
                                        throw "Base64 encoding incomplete: at least 2 bits missing";
                                    case 2:
                                        n[n.length] = r >> 10;
                                        break;
                                    case 3:
                                        n[n.length] = r >> 16,
                                            n[n.length] = r >> 8 & 255
                                }
                                return n
                            }
                                ,
                                i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                                i.unarmor = function (t) {
                                    var e = i.re.exec(t);
                                    if (e)
                                        if (e[1])
                                            t = e[1];
                                        else {
                                            if (!e[2])
                                                throw "RegExp out of sync";
                                            t = e[2]
                                        }
                                    return i.decode(t)
                                }
                                ,
                                window.Base64 = i
                        }(),
                        function (o) {
                            "use strict";

                            function l(t, e) {
                                t instanceof l ? (this.enc = t.enc,
                                    this.pos = t.pos) : (this.enc = t,
                                    this.pos = e)
                            }

                            function u(t, e, i, s, n) {
                                this.stream = t,
                                    this.header = e,
                                    this.length = i,
                                    this.tag = s,
                                    this.sub = n
                            }

                            var r = 100
                                , a = "…"
                                , d = {
                                tag: function (t, e) {
                                },
                                text: function (t) {
                                }
                            };
                            l.prototype.get = function (t) {
                                if (t === o && (t = this.pos++),
                                t >= this.enc.length)
                                    throw "Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                                return this.enc[t]
                            }
                                ,
                                l.prototype.hexDigits = "0123456789ABCDEF",
                                l.prototype.hexByte = function (t) {
                                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                                }
                                ,
                                l.prototype.hexDump = function (t, e, i) {
                                    for (var s = "", n = t; e > n; ++n)
                                        if (s += this.hexByte(this.get(n)),
                                        i !== !0)
                                            switch (15 & n) {
                                                case 7:
                                                    s += " ";
                                                    break;
                                                case 15:
                                                    s += "\n";
                                                    break;
                                                default:
                                                    s += " "
                                            }
                                    return s
                                }
                                ,
                                l.prototype.parseStringISO = function (t, e) {
                                    for (var i = "", s = t; e > s; ++s)
                                        i += String.fromCharCode(this.get(s));
                                    return i
                                }
                                ,
                                l.prototype.parseStringUTF = function (t, e) {
                                    for (var i = "", s = t; e > s;) {
                                        var n = this.get(s++);
                                        i += 128 > n ? String.fromCharCode(n) : n > 191 && 224 > n ? String.fromCharCode((31 & n) << 6 | 63 & this.get(s++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(s++)) << 6 | 63 & this.get(s++))
                                    }
                                    return i
                                }
                                ,
                                l.prototype.parseStringBMP = function (t, e) {
                                    for (var i = "", s = t; e > s; s += 2) {
                                        var n = this.get(s)
                                            , r = this.get(s + 1);
                                        i += String.fromCharCode((n << 8) + r)
                                    }
                                    return i
                                }
                                ,
                                l.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                                l.prototype.parseTime = function (t, e) {
                                    var i = this.parseStringISO(t, e)
                                        , s = this.reTime.exec(i);
                                    return s ? (i = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4],
                                    s[5] && (i += ":" + s[5],
                                    s[6] && (i += ":" + s[6],
                                    s[7] && (i += "." + s[7]))),
                                    s[8] && (i += " UTC",
                                    "Z" != s[8] && (i += s[8],
                                    s[9] && (i += ":" + s[9]))),
                                        i) : "Unrecognized time: " + i
                                }
                                ,
                                l.prototype.parseInteger = function (t, e) {
                                    var i = e - t;
                                    if (i > 4) {
                                        i <<= 3;
                                        var s = this.get(t);
                                        if (0 === s)
                                            i -= 8;
                                        else
                                            for (; 128 > s;)
                                                s <<= 1,
                                                    --i;
                                        return "(" + i + " bit)"
                                    }
                                    for (var n = 0, r = t; e > r; ++r)
                                        n = n << 8 | this.get(r);
                                    return n
                                }
                                ,
                                l.prototype.parseBitString = function (t, e) {
                                    var i = this.get(t)
                                        , s = (e - t - 1 << 3) - i
                                        , n = "(" + s + " bit)";
                                    if (20 >= s) {
                                        var r = i;
                                        n += " ";
                                        for (var o = e - 1; o > t; --o) {
                                            for (var a = this.get(o), c = r; 8 > c; ++c)
                                                n += a >> c & 1 ? "1" : "0";
                                            r = 0
                                        }
                                    }
                                    return n
                                }
                                ,
                                l.prototype.parseOctetString = function (t, e) {
                                    var i = e - t
                                        , s = "(" + i + " byte) ";
                                    i > r && (e = t + r);
                                    for (var n = t; e > n; ++n)
                                        s += this.hexByte(this.get(n));
                                    return i > r && (s += a),
                                        s
                                }
                                ,
                                l.prototype.parseOID = function (t, e) {
                                    for (var i = "", s = 0, n = 0, r = t; e > r; ++r) {
                                        var o = this.get(r);
                                        if (s = s << 7 | 127 & o,
                                            n += 7,
                                            !(128 & o)) {
                                            if ("" === i) {
                                                var a = 80 > s ? 40 > s ? 0 : 1 : 2;
                                                i = a + "." + (s - 40 * a)
                                            } else
                                                i += "." + (n >= 31 ? "bigint" : s);
                                            s = n = 0
                                        }
                                    }
                                    return i
                                }
                                ,
                                u.prototype.typeName = function () {
                                    if (this.tag === o)
                                        return "unknown";
                                    var t = this.tag >> 6
                                        , e = (this.tag >> 5 & 1,
                                    31 & this.tag);
                                    switch (t) {
                                        case 0:
                                            switch (e) {
                                                case 0:
                                                    return "EOC";
                                                case 1:
                                                    return "BOOLEAN";
                                                case 2:
                                                    return "INTEGER";
                                                case 3:
                                                    return "BIT_STRING";
                                                case 4:
                                                    return "OCTET_STRING";
                                                case 5:
                                                    return "NULL";
                                                case 6:
                                                    return "OBJECT_IDENTIFIER";
                                                case 7:
                                                    return "ObjectDescriptor";
                                                case 8:
                                                    return "EXTERNAL";
                                                case 9:
                                                    return "REAL";
                                                case 10:
                                                    return "ENUMERATED";
                                                case 11:
                                                    return "EMBEDDED_PDV";
                                                case 12:
                                                    return "UTF8String";
                                                case 16:
                                                    return "SEQUENCE";
                                                case 17:
                                                    return "SET";
                                                case 18:
                                                    return "NumericString";
                                                case 19:
                                                    return "PrintableString";
                                                case 20:
                                                    return "TeletexString";
                                                case 21:
                                                    return "VideotexString";
                                                case 22:
                                                    return "IA5String";
                                                case 23:
                                                    return "UTCTime";
                                                case 24:
                                                    return "GeneralizedTime";
                                                case 25:
                                                    return "GraphicString";
                                                case 26:
                                                    return "VisibleString";
                                                case 27:
                                                    return "GeneralString";
                                                case 28:
                                                    return "UniversalString";
                                                case 30:
                                                    return "BMPString";
                                                default:
                                                    return "Universal_" + e.toString(16)
                                            }
                                        case 1:
                                            return "Application_" + e.toString(16);
                                        case 2:
                                            return "[" + e + "]";
                                        case 3:
                                            return "Private_" + e.toString(16)
                                    }
                                }
                                ,
                                u.prototype.reSeemsASCII = /^[ -~]+$/,
                                u.prototype.content = function () {
                                    if (this.tag === o)
                                        return null;
                                    var t = this.tag >> 6
                                        , e = 31 & this.tag
                                        , i = this.posContent()
                                        , s = Math.abs(this.length);
                                    if (0 !== t) {
                                        if (null !== this.sub)
                                            return "(" + this.sub.length + " elem)";
                                        var n = this.stream.parseStringISO(i, i + Math.min(s, r));
                                        return this.reSeemsASCII.test(n) ? n.substring(0, 2 * r) + (n.length > 2 * r ? a : "") : this.stream.parseOctetString(i, i + s)
                                    }
                                    switch (e) {
                                        case 1:
                                            return 0 === this.stream.get(i) ? "false" : "true";
                                        case 2:
                                            return this.stream.parseInteger(i, i + s);
                                        case 3:
                                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(i, i + s);
                                        case 4:
                                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(i, i + s);
                                        case 6:
                                            return this.stream.parseOID(i, i + s);
                                        case 16:
                                        case 17:
                                            return "(" + this.sub.length + " elem)";
                                        case 12:
                                            return this.stream.parseStringUTF(i, i + s);
                                        case 18:
                                        case 19:
                                        case 20:
                                        case 21:
                                        case 22:
                                        case 26:
                                            return this.stream.parseStringISO(i, i + s);
                                        case 30:
                                            return this.stream.parseStringBMP(i, i + s);
                                        case 23:
                                        case 24:
                                            return this.stream.parseTime(i, i + s)
                                    }
                                    return null
                                }
                                ,
                                u.prototype.toString = function () {
                                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                                }
                                ,
                                u.prototype.print = function (t) {
                                    if (t === o && (t = ""),
                                    null !== this.sub) {
                                        t += " ";
                                        for (var e = 0, i = this.sub.length; i > e; ++e)
                                            this.sub[e].print(t)
                                    }
                                }
                                ,
                                u.prototype.toPrettyString = function (t) {
                                    t === o && (t = "");
                                    var e = t + this.typeName() + " @" + this.stream.pos;
                                    if (this.length >= 0 && (e += "+"),
                                        e += this.length,
                                        32 & this.tag ? e += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (e += " (encapsulates)"),
                                        e += "\n",
                                    null !== this.sub) {
                                        t += " ";
                                        for (var i = 0, s = this.sub.length; s > i; ++i)
                                            e += this.sub[i].toPrettyString(t)
                                    }
                                    return e
                                }
                                ,
                                u.prototype.toDOM = function () {
                                    var t = d.tag("div", "node");
                                    t.asn1 = this;
                                    var e = d.tag("div", "head")
                                        , i = this.typeName().replace(/_/g, " ");
                                    e.innerHTML = i;
                                    var s = this.content();
                                    if (null !== s) {
                                        s = String(s).replace(/</g, "&lt;");
                                        var n = d.tag("span", "preview");
                                        n.appendChild(d.text(s)),
                                            e.appendChild(n)
                                    }
                                    t.appendChild(e),
                                        this.node = t,
                                        this.head = e;
                                    var r = d.tag("div", "value");
                                    if (i = "Offset: " + this.stream.pos + "<br/>",
                                        i += "Length: " + this.header + "+",
                                        i += this.length >= 0 ? this.length : -this.length + " (undefined)",
                                        32 & this.tag ? i += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"),
                                    null !== s && (i += "<br/>Value:<br/><b>" + s + "</b>",
                                    "object" == typeof oids && 6 == this.tag)) {
                                        var o = oids[s];
                                        o && (o.d && (i += "<br/>" + o.d),
                                        o.c && (i += "<br/>" + o.c),
                                        o.w && (i += "<br/>(warning!)"))
                                    }
                                    r.innerHTML = i,
                                        t.appendChild(r);
                                    var a = d.tag("div", "sub");
                                    if (null !== this.sub)
                                        for (var c = 0, l = this.sub.length; l > c; ++c)
                                            a.appendChild(this.sub[c].toDOM());
                                    return t.appendChild(a),
                                        e.onclick = function () {
                                            t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                                        }
                                        ,
                                        t
                                }
                                ,
                                u.prototype.posStart = function () {
                                    return this.stream.pos
                                }
                                ,
                                u.prototype.posContent = function () {
                                    return this.stream.pos + this.header
                                }
                                ,
                                u.prototype.posEnd = function () {
                                    return this.stream.pos + this.header + Math.abs(this.length)
                                }
                                ,
                                u.prototype.fakeHover = function (t) {
                                    this.node.className += " hover",
                                    t && (this.head.className += " hover")
                                }
                                ,
                                u.prototype.fakeOut = function (t) {
                                    var e = / ?hover/;
                                    this.node.className = this.node.className.replace(e, ""),
                                    t && (this.head.className = this.head.className.replace(e, ""))
                                }
                                ,
                                u.prototype.toHexDOM_sub = function (t, e, i, s, n) {
                                    if (!(s >= n)) {
                                        var r = d.tag("span", e);
                                        r.appendChild(d.text(i.hexDump(s, n))),
                                            t.appendChild(r)
                                    }
                                }
                                ,
                                u.prototype.toHexDOM = function (e) {
                                    var t = d.tag("span", "hex");
                                    if (e === o && (e = t),
                                        this.head.hexNode = t,
                                        this.head.onmouseover = function () {
                                            this.hexNode.className = "hexCurrent"
                                        }
                                        ,
                                        this.head.onmouseout = function () {
                                            this.hexNode.className = "hex"
                                        }
                                        ,
                                        t.asn1 = this,
                                        t.onmouseover = function () {
                                            var t = !e.selected;
                                            t && (e.selected = this.asn1,
                                                this.className = "hexCurrent"),
                                                this.asn1.fakeHover(t)
                                        }
                                        ,
                                        t.onmouseout = function () {
                                            var t = e.selected == this.asn1;
                                            this.asn1.fakeOut(t),
                                            t && (e.selected = null,
                                                this.className = "hex")
                                        }
                                        ,
                                        this.toHexDOM_sub(t, "tag", this.stream, this.posStart(), this.posStart() + 1),
                                        this.toHexDOM_sub(t, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                                    null === this.sub)
                                        t.appendChild(d.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                                    else if (this.sub.length > 0) {
                                        var i = this.sub[0]
                                            , s = this.sub[this.sub.length - 1];
                                        this.toHexDOM_sub(t, "intro", this.stream, this.posContent(), i.posStart());
                                        for (var n = 0, r = this.sub.length; r > n; ++n)
                                            t.appendChild(this.sub[n].toHexDOM(e));
                                        this.toHexDOM_sub(t, "outro", this.stream, s.posEnd(), this.posEnd())
                                    }
                                    return t
                                }
                                ,
                                u.prototype.toHexString = function (t) {
                                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                                }
                                ,
                                u.decodeLength = function (t) {
                                    var e = t.get()
                                        , i = 127 & e;
                                    if (i == e)
                                        return i;
                                    if (i > 3)
                                        throw "Length over 24 bits not supported at position " + (t.pos - 1);
                                    if (0 === i)
                                        return -1;
                                    e = 0;
                                    for (var s = 0; i > s; ++s)
                                        e = e << 8 | t.get();
                                    return e
                                }
                                ,
                                u.hasContent = function (t, e, i) {
                                    if (32 & t)
                                        return !0;
                                    if (3 > t || t > 4)
                                        return !1;
                                    var s = new l(i);
                                    3 == t && s.get();
                                    var n = s.get();
                                    if (n >> 6 & 1)
                                        return !1;
                                    try {
                                        var r = u.decodeLength(s);
                                        return s.pos - i.pos + r == e
                                    } catch (p) {
                                        return !1
                                    }
                                }
                                ,
                                u.decode = function (t) {
                                    t instanceof l || (t = new l(t, 0));
                                    var e = new l(t)
                                        , i = t.get()
                                        , s = u.decodeLength(t)
                                        , n = t.pos - e.pos
                                        , r = null;
                                    if (u.hasContent(i, s, t)) {
                                        var o = t.pos;
                                        if (3 == i && t.get(),
                                            r = [],
                                        s >= 0) {
                                            for (var a = o + s; t.pos < a;)
                                                r[r.length] = u.decode(t);
                                            if (t.pos != a)
                                                throw "Content size is not correct for container starting at offset " + o
                                        } else
                                            try {
                                                for (; ;) {
                                                    var c = u.decode(t);
                                                    if (0 === c.tag)
                                                        break;
                                                    r[r.length] = c
                                                }
                                                s = o - t.pos
                                            } catch (h) {
                                                throw "Exception while decoding undefined length content: " + h
                                            }
                                    } else
                                        t.pos += s;
                                    return new u(e, n, s, i, r)
                                }
                                ,
                                u.test = function () {
                                    for (var t = [{
                                        value: [39],
                                        expected: 39
                                    }, {
                                        value: [129, 201],
                                        expected: 201
                                    }, {
                                        value: [131, 254, 220, 186],
                                        expected: 16702650
                                    }], e = 0, i = t.length; i > e; ++e) {
                                        var s = new l(t[e].value, 0)
                                            , n = u.decodeLength(s);
                                    }
                                }
                                ,
                                window.ASN1 = u
                        }(),
                        window.ASN1.prototype.getHexStringValue = function () {
                            var t = this.toHexString()
                                , e = 2 * this.header
                                , i = 2 * this.length;
                            return t.substr(e, i)
                        }
                        ,
                        le.prototype.parseKey = function (t) {
                            try {
                                var e = 0
                                    , i = 0
                                    , s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                                    , n = s.test(t) ? Hex.decode(t) : Base64.unarmor(t)
                                    , r = ASN1.decode(n);
                                if (3 === r.sub.length && (r = r.sub[2].sub[0]),
                                9 === r.sub.length) {
                                    e = r.sub[1].getHexStringValue(),
                                        this.n = ae(e, 16),
                                        i = r.sub[2].getHexStringValue(),
                                        this.e = parseInt(i, 16);
                                    var o = r.sub[3].getHexStringValue();
                                    this.d = ae(o, 16);
                                    var a = r.sub[4].getHexStringValue();
                                    this.p = ae(a, 16);
                                    var c = r.sub[5].getHexStringValue();
                                    this.q = ae(c, 16);
                                    var l = r.sub[6].getHexStringValue();
                                    this.dmp1 = ae(l, 16);
                                    var u = r.sub[7].getHexStringValue();
                                    this.dmq1 = ae(u, 16);
                                    var d = r.sub[8].getHexStringValue();
                                    this.coeff = ae(d, 16)
                                } else {
                                    if (2 !== r.sub.length)
                                        return !1;
                                    var p = r.sub[1]
                                        , h = p.sub[0];
                                    e = h.sub[0].getHexStringValue(),
                                        this.n = ae(e, 16),
                                        i = h.sub[1].getHexStringValue(),
                                        this.e = parseInt(i, 16)
                                }
                                return !0
                            } catch (f) {
                                return !1
                            }
                        }
                        ,
                        le.prototype.getPrivateBaseKey = function () {
                            var t = {
                                array: [new KJUR.asn1.DERInteger({
                                    "int": 0
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.n
                                }), new KJUR.asn1.DERInteger({
                                    "int": this.e
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.d
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.p
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.q
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.dmp1
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.dmq1
                                }), new KJUR.asn1.DERInteger({
                                    bigint: this.coeff
                                })]
                            }
                                , e = new KJUR.asn1.DERSequence(t);
                            return e.getEncodedHex()
                        }
                        ,
                        le.prototype.getPrivateBaseKeyB64 = function () {
                            return be(this.getPrivateBaseKey())
                        }
                        ,
                        le.prototype.getPublicBaseKey = function () {
                            var t = {
                                array: [new KJUR.asn1.DERObjectIdentifier({
                                    oid: "1.2.840.113549.1.1.1"
                                }), new KJUR.asn1.DERNull]
                            }
                                , e = new KJUR.asn1.DERSequence(t);
                            t = {
                                array: [new KJUR.asn1.DERInteger({
                                    bigint: this.n
                                }), new KJUR.asn1.DERInteger({
                                    "int": this.e
                                })]
                            };
                            var i = new KJUR.asn1.DERSequence(t);
                            t = {
                                hex: "00" + i.getEncodedHex()
                            };
                            var s = new KJUR.asn1.DERBitString(t);
                            t = {
                                array: [e, s]
                            };
                            var n = new KJUR.asn1.DERSequence(t);
                            return n.getEncodedHex()
                        }
                        ,
                        le.prototype.getPublicBaseKeyB64 = function () {
                            return be(this.getPublicBaseKey())
                        }
                        ,
                        le.prototype.wordwrap = function (t, e) {
                            if (e = e || 64,
                                !t)
                                return t;
                            var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                            return t.match(RegExp(i, "g")).join("\n")
                        }
                        ,
                        le.prototype.getPrivateKey = function () {
                            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                                t += "-----END RSA PRIVATE KEY-----"
                        }
                        ,
                        le.prototype.getPublicKey = function () {
                            var t = "-----BEGIN PUBLIC KEY-----\n";
                            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                                t += "-----END PUBLIC KEY-----"
                        }
                        ,
                        le.prototype.hasPublicKeyProperty = function (t) {
                            return t = t || {},
                            t.hasOwnProperty("n") && t.hasOwnProperty("e")
                        }
                        ,
                        le.prototype.hasPrivateKeyProperty = function (t) {
                            return t = t || {},
                            t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                        }
                        ,
                        le.prototype.parsePropertiesFrom = function (t) {
                            this.n = t.n,
                                this.e = t.e,
                            t.hasOwnProperty("d") && (this.d = t.d,
                                this.p = t.p,
                                this.q = t.q,
                                this.dmp1 = t.dmp1,
                                this.dmq1 = t.dmq1,
                                this.coeff = t.coeff)
                        }
                    ;
                    var qe = function (t) {
                        le.call(this),
                        t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
                    };
                    (qe.prototype = new le).constructor = qe;
                    var He = function (t) {
                        t = t || {},
                            this.default_key_size = parseInt(t.default_key_size) || 1024,
                            this.default_public_exponent = t.default_public_exponent || "010001",
                            this.log = t.log || !1,
                            this.key = null
                    };
                    He.prototype.setKey = function (t) {
                        this.log && this.key && console.warn("A key was already set, overriding existing."),
                            this.key = new qe(t)
                    }
                        ,
                        He.prototype.setPrivateKey = function (t) {
                            this.setKey(t)
                        }
                        ,
                        He.prototype.setPublicKey = function (t) {
                            this.setKey(t)
                        }
                        ,
                        He.prototype.decrypt = function (t) {
                            try {
                                return this.getKey().decrypt(ye(t))
                            } catch (b) {
                                return !1
                            }
                        }
                        ,
                        He.prototype.encrypt = function (t) {
                            try {
                                return be(this.getKey().encrypt(t))
                            } catch (b) {
                                return !1
                            }
                        }
                        ,
                        He.prototype.getKey = function (t) {
                            if (!this.key) {
                                if (this.key = new qe,
                                t && "[object Function]" === {}.toString.call(t))
                                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                                this.key.generate(this.default_key_size, this.default_public_exponent)
                            }
                            return this.key
                        }
                        ,
                        He.prototype.getPrivateKey = function () {
                            return this.getKey().getPrivateKey()
                        }
                        ,
                        He.prototype.getPrivateKeyB64 = function () {
                            return this.getKey().getPrivateBaseKeyB64()
                        }
                        ,
                        He.prototype.getPublicKey = function () {
                            return this.getKey().getPublicKey()
                        }
                        ,
                        He.prototype.getPublicKeyB64 = function () {
                            return this.getKey().getPublicBaseKeyB64()
                        }
                        ,
                        He.version = "2.3.1",
                        t.JSEncrypt = He
                }
            ) ? s.apply(e, n) : s) === undefined || (i.exports = r)
        }
            .call(e, i, e, t)) === undefined || (t.exports = r)
    },
    jsencrypt: function (t, e, r) {
        var i;
        (i = function (t, e, i) {
            var s = r("encrypt");

            function n() {
                void 0 !== s && (this.jsencrypt = new s.JSEncrypt,
                    this.jsencrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDq04c6My441Gj0UFKgrqUhAUg+kQZeUeWSPlAU9fr4HBPDldAeqzx1UR99KJHuQh/zs1HOamE2dgX9z/2oXcJaqoRIA/FXysx+z2YlJkSk8XQLcQ8EBOkp//MZrixam7lCYpNOjadQBb2Ot0U/Ky+jF2p+Ie8gSZ7/u+Wnr5grywIDAQAB-----END PUBLIC KEY-----"))
            }

            n.prototype.encode = function (t, e) {
                var i = e ? e + "|" + t : t;
                return encodeURIComponent(this.jsencrypt.encrypt(i))
            }
                ,
                i.exports = n
        }
            .call(e, r, e, t)) === undefined || (t.exports = i)
    }
});

function z(pwd, time) {
    var n = _n("jsencrypt");
    var g = (new n);
    var r = g.encode(pwd, time);
    return r;
}

function r(param1, param2) {
    return z(param1, param2);
}

function get_params() {
  var count = 1;
  var timestamp = Date.parse(new Date());
  var param_m = r(timestamp, count);
  var param_q = count + '-' + timestamp + '|';
  return { param_m, param_q };
}
// console.log('生成的参数如下', get_params());

exports.get_params = get_params;