import { type Configs, type Elements, isButton, isText } from '@config'
import { getButton } from '../button/get-button'
import { getText } from '../text/get-text'

export const getTypesElement = (
  config: Configs,
  element: Elements,
  typesPackageName: string
): HTMLElement[] => {
  return config.map((conf) => {
    if (isButton(conf)) {
      return getButton(element.button, conf.value, typesPackageName)
    }

    if (isText(conf)) {
      return getText(element.text, conf.value)
    }

    throw new Error('Could not find matching element')
  })
}
