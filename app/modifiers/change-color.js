import { modifier } from 'ember-modifier'

const { floor, random } = Math

export default modifier(element => {
  const baseColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink'
  ]

  const colorClassName = (color, number) => `text-${color}-${number}`
  const getRandomInt = max => floor(random() * max)
  const pickRandomColor = () => baseColors[getRandomInt(baseColors.length)]

  const id = setInterval(() => {
    element.className = colorClassName(pickRandomColor(), 500)
  }, 500)

  return () => clearInterval(id)
})
