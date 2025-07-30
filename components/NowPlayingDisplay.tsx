import Image from 'next/image'

export function NowPlayingDisplay() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-accent rounded-md relative overflow-hidden">
        <Image
          src="/placeholder-album.jpg"
          alt="Album cover"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium">Currently Playing</h3>
        <p className="text-sm text-muted-foreground">Artist Name</p>
      </div>
    </div>
  )
}