export type ShrtcodeResultType = {
  code: string
  short_link: string
  full_short_link: string
  short_link2: string
  full_short_link2: string
  share_link: string
  full_share_link: string
  original_link: string
}

export type ShrtcodeResponseType = {
  ok: true
  result: ShrtcodeResultType
}

export type ErrorResponseType = {
  ok: false
  error_code: number
  error: string
}

export type APIResponseType = ShrtcodeResponseType | ErrorResponseType

export interface ChildrenProps {
  children: string | JSX.Element
}

export interface ShortenedURLsProps {
  urls: [] | ShrtcodeResultType[]
}

export interface CurrentURLProps {
  shortURL: string
  originalURL: string
}
