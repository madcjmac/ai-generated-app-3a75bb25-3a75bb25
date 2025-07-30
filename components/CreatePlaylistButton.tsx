import { Plus } from 'lucide-react'

export function CreatePlaylistButton() {
  return (
    <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
      <Plus className="w-4 h-4" />
      <span>Create Playlist</span>
    </button>
  )
}