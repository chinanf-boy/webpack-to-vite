export function isObject (value : any) : boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function stringFormat (formatString: string, ...args: string[]) {
  return formatString.replace(/{(\d)+}/g, function (match, number) {
    return typeof args[number] !== 'undefined' ? args[number] : match
  })
}
