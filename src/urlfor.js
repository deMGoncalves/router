import * as f from 'f'
import urls from './urls'

export default (name, ...args) =>
  f.replace(f.or(urls[name], ''), /(\(\[[az09\-_]+\]\+?\*?\))/g, f.call(f.shift, args))
