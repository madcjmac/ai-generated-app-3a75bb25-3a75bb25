import * as Slider from '@radix-ui/react-slider'
import { Volume2 } from 'lucide-react'

export function VolumeSlider() {
  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="w-5 h-5" />
      <Slider.Root
        className="relative flex items-center select-none touch-none w-32 h-5"
        defaultValue={[50]}
        max={100}
        step={1}
      >
        <Slider.Track className="bg-accent h-1 relative grow rounded-full">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-4 h-4 bg-primary rounded-full hover:bg-primary/90 focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  )
}