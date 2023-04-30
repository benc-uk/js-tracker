export const SAMP_MODE_NONE = 0
export const SAMP_MODE_FORWARD = 1
export const SAMP_MODE_PINGPONG = 2
// export const SAMP_MODE_ONESHOT = 3

/** Wrapper around AudioBuffer with a name */
export class Sample {
  /** Index of this sample in parent instrument */
  number = 0

  /** @type {string} */
  name = 'Unnamed'

  /** @type {AudioBuffer} The buffer of audio data used to assign to audio nodes for playing */
  buffer = null

  /** @type {number} Volume of this sample 0-1 range */
  volume = 1

  /** @type {number} Pan of this sample */
  pan = 128

  fineTune = 0

  loopStart = 0
  loopLen = 0
  loopMode = SAMP_MODE_NONE

  is16Bit = false

  relativeNote = 0

  // Create a empty sample with no audio data
  constructor(num, name) {
    this.name = name
    this.number = num
  }

  toString() {
    return `${this.name} (${this.number}) vol:${this.volume} rel:${this.relativeNote}`
  }
}
