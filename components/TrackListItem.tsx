import { Play } from 'lucide-react'

interface Track {
  id: number
  title: string
  artist: string
  duration: string
}

interface TrackListItemProps {
  track: Track
}

export function TrackListItem({ track }: TrackListItemProps) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-accent/50 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <button className="p-2 hover:bg-primary rounded-full group">
          <Play className="w-4 h-4 group-hover:text-primary-foreground" />
        </button>
        <div>
          <h3 className="font-medium">{track.title}</h3>
          <p className="text-sm text-muted-foreground">{track.artist}</p>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{track.duration}</span>
    </div>
  )
}