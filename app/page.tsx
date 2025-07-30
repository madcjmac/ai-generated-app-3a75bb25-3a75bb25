import { FeaturedTracks } from '@/components/FeaturedTracks'
import { PlaylistGrid } from '@/components/PlaylistGrid'
import { AudioControlPanel } from '@/components/AudioControlPanel'
import { SearchBar } from '@/components/SearchBar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <FeaturedTracks />
        <PlaylistGrid />
      </div>
      <AudioControlPanel />
    </main>
  )
}