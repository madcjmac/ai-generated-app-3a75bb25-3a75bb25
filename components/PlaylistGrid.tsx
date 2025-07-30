import { CreatePlaylistButton } from './CreatePlaylistButton'

export function PlaylistGrid() {
  const playlists = [
    { id: 1, name: "Workout Mix", trackCount: 12 },
    { id: 2, name: "Chill Vibes", trackCount: 8 },
    { id: 3, name: "Party Time", trackCount: 15 },
  ]

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Playlists</h2>
        <CreatePlaylistButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-card p-4 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <h3 className="font-semibold">{playlist.name}</h3>
            <p className="text-sm text-muted-foreground">
              {playlist.trackCount} tracks
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}