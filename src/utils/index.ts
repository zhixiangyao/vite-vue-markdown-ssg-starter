export const isIntelGPU = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') as WebGLRenderingContext
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info') as WEBGL_debug_renderer_info

  return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).includes('Intel')
}
