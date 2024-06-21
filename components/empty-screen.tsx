import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Selamat datang di GITA Bot!</h1>
        <p className="leading-normal text-muted-foreground">
          GITA (Garut Institute of Technology Assistant) Bot adalah sebuah
          chatbot yang dikembangkan oleh Garut Institute of Technology. Chatbot
          ini dirancang untuk membantu mahasiswa, staf, dan masyarakat dalam
          memberikan informasi dan layanan terkait perguruan tinggi tersebut.
        </p>
        <p className="leading-normal text-muted-foreground">
          Chatbot ini dilengkapi dengan kemampuan untuk menjawab pertanyaan umum
          tentang program studi, Dosen dan Staf Kampus, Kalender Akademin, PMB,
          dan topik lain yang relevan dengan kehidupan kampus.
        </p>
      </div>
    </div>
  )
}
