export default function Page() {
  return null;
}

// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import {
//   Loader2, Copy, Check, Sparkle, Hash, Camera, Image, Star,
//   AlertCircle, Layout, Type, Target,
// } from 'lucide-react'
// import { generateTaglines, generateCaptions } from './actions'

// interface Tagline {
//   id: number
//   tagline: string
//   style: string
//   memorability: number
//   clarity: number
//   brandability: number
//   visualSuggestion: string
// }

// interface Caption {
//   id: number
//   caption: string
//   style: string
//   imageDescription: string
//   useCase: string
// }

// const TAGLINE_STYLES = [
//   { value: '', label: 'Mixed styles' },
//   { value: 'Apple-style', label: 'Apple-Style', color: 'bg-zinc-100 text-zinc-700' },
//   { value: 'startup-style', label: 'Startup', color: 'bg-blue-100 text-blue-700' },
//   { value: 'emotional', label: 'Emotional', color: 'bg-rose-100 text-rose-700' },
//   { value: 'bold memorable', label: 'Bold', color: 'bg-amber-100 text-amber-700' },
// ]

// const CAPTION_STYLES = [
//   { value: '', label: 'Mixed styles' },
//   { value: 'Problem → Solution', label: 'Problem → Solution' },
//   { value: 'Feature-Focused', label: 'Feature-Focused' },
//   { value: 'Productivity Angle', label: 'Productivity' },
//   { value: 'Human & Relatable', label: 'Human & Relatable' },
//   { value: 'Premium/Apple-Style', label: 'Premium / Apple' },
//   { value: 'Social Media Hooks', label: 'Social Hooks' },
//   { value: 'Conversion-Focused', label: 'Conversion' },
// ]

// const PLATFORMS = [
//   { value: '', label: 'Any platform' },
//   { value: 'App Store', label: 'App Store' },
//   { value: 'Instagram', label: 'Instagram' },
//   { value: 'Facebook', label: 'Facebook' },
//   { value: 'Twitter / X', label: 'Twitter / X' },
//   { value: 'Landing page', label: 'Landing Page' },
// ]

// function parseTaglines(raw: string): Tagline[] {
//   if (!raw) return []
//   try {
//     let jsonString = raw.trim()
//     const jsonArrayMatch = raw.match(/\[[\s\S]*\]/)
//     if (jsonArrayMatch) jsonString = jsonArrayMatch[0]
//     const parsed = JSON.parse(jsonString)
//     if (!Array.isArray(parsed)) return []
//     return parsed.filter(t =>
//       t && typeof t.id === 'number' && typeof t.tagline === 'string'
//     )
//   } catch {
//     return []
//   }
// }

// function parseCaptions(raw: string): Caption[] {
//   if (!raw) return []
//   try {
//     let jsonString = raw.trim()
//     const jsonArrayMatch = raw.match(/\[[\s\S]*\]/)
//     if (jsonArrayMatch) jsonString = jsonArrayMatch[0]
//     const parsed = JSON.parse(jsonString)
//     if (!Array.isArray(parsed)) return []
//     return parsed.filter(c =>
//       c && typeof c.id === 'number' && typeof c.caption === 'string'
//     )
//   } catch {
//     return []
//   }
// }

// function styleBadge(style: string) {
//   const s = TAGLINE_STYLES.find(s => s.value === style)
//   if (!s) return <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{style}</span>
//   return <span className={`text-xs px-2 py-0.5 rounded-full ${s.color}`}>{s.label}</span>
// }

// function ScoreBar({ label, score }: { label: string; score: number }) {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-xs text-muted-foreground w-24 shrink-0">{label}</span>
//       <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
//         <div
//           className="h-full bg-primary rounded-full transition-all"
//           style={{ width: `${score * 10}%` }}
//         />
//       </div>
//       <span className="text-xs font-mono text-muted-foreground w-4 text-right">{score}</span>
//     </div>
//   )
// }

// export default function ImageCaptionsPage() {
//   const [mode, setMode] = useState<'taglines' | 'captions'>('taglines')

//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState('')

//   const [taglines, setTaglines] = useState<Tagline[]>([])
//   const [taglineStyle, setTaglineStyle] = useState('')
//   const [taglineCount, setTaglineCount] = useState('10')
//   const [taglineGuidance, setTaglineGuidance] = useState('')
//   const [copiedTaglineIds, setCopiedTaglineIds] = useState<Set<number>>(new Set())

//   const [captions, setCaptions] = useState<Caption[]>([])
//   const [captionStyle, setCaptionStyle] = useState('')
//   const [captionPlatform, setCaptionPlatform] = useState('')
//   const [captionCount, setCaptionCount] = useState('8')
//   const [captionGuidance, setCaptionGuidance] = useState('')
//   const [copiedCaptionIds, setCopiedCaptionIds] = useState<Set<number>>(new Set())

//   const handleGenerateTaglines = async () => {
//     setIsLoading(true)
//     setError('')
//     setTaglines([])
//     try {
//       const result = await generateTaglines({
//         count: parseInt(taglineCount) || 10,
//         style: taglineStyle || undefined,
//         userGuidance: taglineGuidance || undefined,
//       })
//       const parsed = parseTaglines(result)
//       if (!parsed || parsed.length === 0) {
//         setError('No taglines could be generated. Please try again.')
//       } else {
//         setTaglines(parsed)
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleGenerateCaptions = async () => {
//     setIsLoading(true)
//     setError('')
//     setCaptions([])
//     try {
//       const result = await generateCaptions({
//         count: parseInt(captionCount) || 8,
//         style: captionStyle || undefined,
//         platform: captionPlatform || undefined,
//         userGuidance: captionGuidance || undefined,
//       })
//       const parsed = parseCaptions(result)
//       if (!parsed || parsed.length === 0) {
//         setError('No captions could be generated. Please try again.')
//       } else {
//         setCaptions(parsed)
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const copyTagline = async (id: number, text: string) => {
//     await navigator.clipboard.writeText(text)
//     setCopiedTaglineIds(prev => new Set(prev).add(id))
//     setTimeout(() => {
//       setCopiedTaglineIds(prev => {
//         const next = new Set(prev)
//         next.delete(id)
//         return next
//       })
//     }, 2000)
//   }

//   const copyCaption = async (id: number, c: Caption) => {
//     const text = `${c.caption}\n\nImage: ${c.imageDescription}\nUse: ${c.useCase}`
//     await navigator.clipboard.writeText(text)
//     setCopiedCaptionIds(prev => new Set(prev).add(id))
//     setTimeout(() => {
//       setCopiedCaptionIds(prev => {
//         const next = new Set(prev)
//         next.delete(id)
//         return next
//       })
//     }, 2000)
//   }

//   const copyAllTaglines = async () => {
//     if (!taglines.length) return
//     const text = taglines.map(t =>
//       `[${t.style}] ${t.tagline}\nMemorability: ${t.memorability}/10  Clarity: ${t.clarity}/10  Brandability: ${t.brandability}/10\nVisual: ${t.visualSuggestion}\n`
//     ).join('\n---\n\n')
//     await navigator.clipboard.writeText(text)
//   }

//   const copyAllCaptions = async () => {
//     if (!captions.length) return
//     const text = captions.map(c =>
//       `[${c.style}] ${c.caption}\nImage: ${c.imageDescription}\nBest for: ${c.useCase}\n`
//     ).join('\n---\n\n')
//     await navigator.clipboard.writeText(text)
//   }

//   const filteredTaglines = taglines.filter(t =>
//     !taglineStyle || t.style?.toLowerCase() === taglineStyle.toLowerCase()
//   )

//   return (
//     <div className="container mx-auto p-2 space-y-6">
//       <div className="flex items-center gap-3">
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold">Protato Image Captions</h1>
//           <p className="text-muted-foreground">
//             Generate taglines and captions for App Store screenshots, social media, ads, and landing pages
//           </p>
//         </div>
//       </div>

//       <Tabs value={mode} onValueChange={v => setMode(v as 'taglines' | 'captions')}>
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="taglines" className="gap-2">
//             <Type className="w-4 h-4" />
//             Taglines
//           </TabsTrigger>
//           <TabsTrigger value="captions" className="gap-2">
//             <Image className="w-4 h-4" />
//             Captions
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="taglines" className="mt-6 space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-base flex items-center gap-2">
//                 <Hash className="w-4 h-4" />
//                 Tagline Settings
//               </CardTitle>
//               <CardDescription>
//                 2–5 word taglines for App Store screenshots, hero sections, and brand imagery
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <p className="text-sm py-2 font-medium">Count</p>
//                   <select
//                     value={taglineCount}
//                     onChange={e => setTaglineCount(e.target.value)}
//                     className="rounded-lg bg-secondary/50 px-4 h-8 border border-border text-foreground w-full"
//                   >
//                     {[5, 10, 15, 20].map(n => (
//                       <option key={n} value={String(n)}>{n} taglines</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Style</label>
//                   <select
//                     value={taglineStyle}
//                     onChange={e => setTaglineStyle(e.target.value)}
//                     className="rounded-lg bg-secondary/50 px-4 h-8 border border-border text-foreground w-full"
//                   >
//                     {TAGLINE_STYLES.map(s => (
//                       <option key={s.value} value={s.value}>{s.label}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Direction (optional)</label>
//                 <Textarea
//                   placeholder="e.g. Focus on the speed benefit&#10;e.g. Make them sound luxurious and premium&#10;e.g. Target non-native English speakers"
//                   value={taglineGuidance}
//                   onChange={e => setTaglineGuidance(e.target.value)}
//                   rows={2}
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           <Button
//             onClick={handleGenerateTaglines}
//             disabled={isLoading}
//             className="w-full"
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                 Generating Taglines...
//               </>
//             ) : (
//               <>
//                 <Sparkle className="w-4 h-4 mr-2" />
//                 Generate Taglines
//               </>
//             )}
//           </Button>

//           {filteredTaglines.length > 0 && (
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-muted-foreground">
//                   {filteredTaglines.length} tagline{filteredTaglines.length !== 1 ? 's' : ''}
//                 </p>
//                 <Button variant="outline" size="sm" onClick={copyAllTaglines} className="gap-1">
//                   <Copy className="w-3 h-3" />
//                   Copy All
//                 </Button>
//               </div>
//               <div className="grid gap-4">
//                 {filteredTaglines.map(t => (
//                   <Card key={t.id} className="overflow-hidden">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-start justify-between gap-4">
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className="text-xs text-muted-foreground font-mono">#{t.id}</span>
//                             {styleBadge(t.style)}
//                           </div>
//                           <p className="text-xl font-bold leading-tight tracking-tight">&ldquo;{t.tagline}&rdquo;</p>
//                         </div>
//                         <Button
//                           variant="outline"
//                           // size="xs"
//                           onClick={() => copyTagline(t.id, t.tagline)}
//                           className="shrink-0 gap-1"
//                         >
//                           {copiedTaglineIds.has(t.id) ? (
//                             <><Check className="w-3 h-3" /> Copied</>
//                           ) : (
//                             <><Copy className="w-3 h-3" /> Copy</>
//                           )}
//                         </Button>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       <div className="grid grid-cols-3 gap-3">
//                         <div className="bg-muted rounded-lg p-2.5">
//                           <ScoreBar label="Memorability" score={t.memorability} />
//                         </div>
//                         <div className="bg-muted rounded-lg p-2.5">
//                           <ScoreBar label="Clarity" score={t.clarity} />
//                         </div>
//                         <div className="bg-muted rounded-lg p-2.5">
//                           <ScoreBar label="Brandability" score={t.brandability} />
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-2 text-sm bg-primary/5 border border-primary/10 p-3 rounded-lg">
//                         <Image className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
//                         <span className="text-foreground/80">{t.visualSuggestion}</span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="captions" className="mt-6 space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-base flex items-center gap-2">
//                 <Layout className="w-4 h-4" />
//                 Caption Settings
//               </CardTitle>
//               <CardDescription>
//                 Short copy for image posts on social media, ads, and landing pages
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Count</label>
//                   <select
//                     value={captionCount}
//                     onChange={e => setCaptionCount(e.target.value)}
//                     className="rounded-lg bg-secondary/50 px-4 h-8 border border-border text-foreground w-full"
//                   >
//                     {[4, 6, 8, 10, 12].map(n => (
//                       <option key={n} value={String(n)}>{n} captions</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Style</label>
//                   <select
//                     value={captionStyle}
//                     onChange={e => setCaptionStyle(e.target.value)}
//                     className="rounded-lg bg-secondary/50 px-4 h-8 border border-border text-foreground w-full"
//                   >
//                     {CAPTION_STYLES.map(s => (
//                       <option key={s.value} value={s.value}>{s.label}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Platform</label>
//                   <select
//                     value={captionPlatform}
//                     onChange={e => setCaptionPlatform(e.target.value)}
//                     className="rounded-lg bg-secondary/50 px-4 h-8 border border-border text-foreground w-full"
//                   >
//                     {PLATFORMS.map(p => (
//                       <option key={p.value} value={p.value}>{p.label}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Direction (optional)</label>
//                 <Textarea
//                   placeholder="e.g. Focus on the custom commands feature&#10;e.g. Write for non-native English speaker audience&#10;e.g. Make them short and punchy"
//                   value={captionGuidance}
//                   onChange={e => setCaptionGuidance(e.target.value)}
//                   rows={2}
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           <Button
//             onClick={handleGenerateCaptions}
//             disabled={isLoading}
//             className="w-full"
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                 Generating Captions...
//               </>
//             ) : (
//               <>
//                 <Image className="w-4 h-4 mr-2" />
//                 Generate Captions
//               </>
//             )}
//           </Button>

//           {captions.length > 0 && (
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-muted-foreground">
//                   {captions.length} caption{captions.length !== 1 ? 's' : ''}
//                 </p>
//                 <Button variant="outline" size="sm" onClick={copyAllCaptions} className="gap-1">
//                   <Copy className="w-3 h-3" />
//                   Copy All
//                 </Button>
//               </div>
//               <div className="grid gap-4">
//                 {captions.map(c => (
//                   <Card key={c.id} className="overflow-hidden">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-start justify-between gap-4">
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className="text-xs text-muted-foreground font-mono">#{c.id}</span>
//                             <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{c.style}</span>
//                             <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
//                               <Target className="w-3 h-3" />
//                               {c.useCase}
//                             </span>
//                           </div>
//                           <p className="text-base font-medium leading-relaxed">{c.caption}</p>
//                         </div>
//                         <Button
//                           variant="outline"
//                           // size="xs"
//                           onClick={() => copyCaption(c.id, c)}
//                           className="shrink-0 gap-1"
//                         >
//                           {copiedCaptionIds.has(c.id) ? (
//                             <><Check className="w-3 h-3" /> Copied</>
//                           ) : (
//                             <><Copy className="w-3 h-3" /> Copy</>
//                           )}
//                         </Button>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex items-start gap-2 text-sm bg-muted p-3 rounded-lg">
//                         <Camera className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
//                         <span className="text-foreground/80">{c.imageDescription}</span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </TabsContent>
//       </Tabs>

//       {error && (
//         <Card className="border-red-200 bg-red-50">
//           <CardContent className="pt-6 flex items-start gap-2">
//             <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
//             <p className="text-red-600 text-sm">{error}</p>
//           </CardContent>
//         </Card>
//       )}

//       {!isLoading && taglines.length === 0 && captions.length === 0 && !error && (
//         <Card className="border-dashed">
//           <CardContent className="py-12 flex flex-col items-center gap-3 text-center">
//             <Star className="w-12 h-12 text-muted-foreground/40" />
//             <div>
//               <p className="font-medium text-muted-foreground">Ready to create image copy</p>
//               <p className="text-sm text-muted-foreground/60 mt-1">
//                 Generate 2–5 word taglines for branding, or write short captions with visual direction for each image
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   )
// }
