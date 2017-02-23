import evalJS from './transform'

export default function ({ template, script = 'module.exports={}', styles }) {
  try {
    if (script === 'module.exports={}' && !template) throw Error('no data')
    const result = evalJS(script)
    if (template) {
      result.template = template
    }
    return {
      result: result,
      styles: styles && styles.join(' ')
    }
  } catch (error) {
    return { error }
  }
}
