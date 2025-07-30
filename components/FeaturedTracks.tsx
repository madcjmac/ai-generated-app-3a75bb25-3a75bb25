import { TrackListItem } from './TrackListItem'

export function FeaturedTracks() {
  const featuredTracks = [
    { id: 1, title: "Summer Vibes", artist: "DJ Cool", duration: "3:45" },
    { id: 2, title: "Midnight Dreams", artist: "Luna", duration: "4:20" },
    { id: 3, title: "Urban Beat", artist: "City Pulse", duration: "3:15" },
  ]

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Tracks</h2>
      <div className="space-y-2">
        {featuredTracks.map((track) => (
          <TrackListItem key={track.id} track={track} />
        ))}
      </div>
    </div>
  )
}