import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <input
        type="search"
        placeholder="Search for songs, artists, or playlists..."
        className="w-full pl-10 pr-4 py-2 bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}