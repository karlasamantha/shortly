import { ShrtcodeResponseType, ErrorResponseType } from '../types'

export function isErrorResponse(
  response: ShrtcodeResponseType | ErrorResponseType
): response is ErrorResponseType {
  return response.hasOwnProperty('error')
}

export function isSuccessfulResponse(
  response: ShrtcodeResponseType | ErrorResponseType
): response is ShrtcodeResponseType {
  return response.hasOwnProperty('result')
}

export function getResultFromResponse(
  response: ShrtcodeResponseType | ErrorResponseType
) {
  return isSuccessfulResponse(response) ? response.result : undefined
}
