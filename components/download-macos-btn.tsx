'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

type ReleaseInfo = {
  version: string
  shortVersion: string
  downloadUrl: string
}

const AppleLogoSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={25}
      viewBox="0 0 19 25"
      fill="currentColor"
      {...props}
    >
      <path
        fill="inherit"
        d="M13.7 5.602c-1.747 0-3.177 1.066-4.09 1.066-.973 0-2.239-1.066-3.762-1.066-2.895 0-5.825 2.46-5.825 6.96 0 2.813 1.079 5.778 2.426 7.688 1.149 1.617 2.156 2.918 3.61 2.918 1.43 0 2.062-.926 3.843-.926 1.805 0 2.215.926 3.797.926 1.57 0 2.614-1.441 3.61-2.86 1.101-1.628 1.57-3.21 1.582-3.292-.094-.024-3.094-1.254-3.094-4.688 0-2.976 2.355-4.312 2.496-4.418-1.559-2.238-3.938-2.308-4.594-2.308Zm-.821-1.899c.715-.867 1.219-2.05 1.219-3.246 0-.164-.012-.328-.036-.457-1.171.047-2.578.773-3.41 1.758-.668.75-1.277 1.945-1.277 3.14 0 .188.035.364.047.422.07.012.187.035.316.035 1.043 0 2.356-.703 3.14-1.652Z"
      />
  </svg>
)

const APPCAST_URL =
  'https://raw.githubusercontent.com/tphuc/rewritematemac-updater/main/appcast.xml'

export default function DownloadMacOSBtn() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAppcast() {
      try {
        const res = await fetch(APPCAST_URL)
        if (!res.ok) throw new Error('Failed to fetch appcast')
  
        const xmlText = await res.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(xmlText, 'application/xml')
  
        const items = Array.from(xml.querySelectorAll('item'))
        if (items.length === 0) throw new Error('No release found')
  
        const item = items[items.length - 1] // ✅ latest version
  
        const version =
          item.querySelector('sparkle\\:version')?.textContent ?? ''
  
        const shortVersion =
          item.querySelector('sparkle\\:shortVersionString')?.textContent ?? ''
  
        const enclosure = item.querySelector('enclosure')
        const downloadUrl = enclosure?.getAttribute('url')
  
        if (!downloadUrl) throw new Error('No download URL found');

  
        setRelease({
          version,
          shortVersion,
          downloadUrl,
        })
      } catch (err) {
        setError('Unable to load latest version')
      } finally {
        setLoading(false)
      }
    }
  
    fetchAppcast()
  }, [])



  if (error || !release) {
    return (
      <button disabled className="opacity-60 cursor-not-allowed">
        Download unavailable
      </button>
    )
  }

  return (
    <>
    <a
      href={release.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={cn("z-20 inline-flex font-semibold items-center gap-2 rounded-full bg-white px-5 py-2 text-black hover:opacity-90", loading ? 'pointer-events-none opacity-60' : '')}
    >
      Download for macOS
      <AppleLogoSvg
          className={`h-4 w-4`}
        />

    </a>
    {/* <p>{release.version} {release.shortVersion} {release.downloadUrl}</p> */}
    </>
  )
}


