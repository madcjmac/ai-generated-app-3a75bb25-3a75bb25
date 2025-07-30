import { VolumeSlider } from './VolumeSlider'
import { NowPlayingDisplay } from './NowPlayingDisplay'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

export function AudioControlPanel() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NowPlayingDisplay />
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="p-3 bg-primary rounded-full hover:bg-primary/90">
              <Play className="w-6 h-6 text-primary-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          <VolumeSlider />
        </div>
      </div>
    </div>
  )
}