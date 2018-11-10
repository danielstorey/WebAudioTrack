# Web Audio Track

This is an easy to use plugin that enables you to record and play back a single track of audio.  You can also load audio from a url and concatenate audio from recorded sounds and external audio files into a single audio track.

#### [Click here](https://danielstorey.github.io/WebAudioTrack/index.html) for the demo

An audio track can be created like so:

```
var audioTrack = new WebAudioTrack()
```

This creates a single track of audio. For more than one track, or source simply construct multiple instances e.g.

```
var microphoneTrack = new WebAudioTrack();
var mp3Track = new WebAudioTrack();
```

You can then use the methods below to record and playback audio.

## Properties

### isPlaying

Type: Boolean

### isRecording

Type: Boolean

### volume

Type: Number

## Methods

### play():Promise

Play the audio track.

### stop()

Stop playing the audio track.

### startRecording(callback?:function)

Start recording via the microphone. Takes an optional callback parameter.

If called a second time the previous recording will be overwritten.

### stopRecording(callback?:function)

Stop the recording process. Takes an optional callback parameter.

### getRecordingTime(): number

Returns the length of the recording in seconds

### getBlobSrc(): string

Returns a blob:// URL for the recording

### setVolume(value: number)

Set the playback volume. Value should be in between 0 and 1.

### loadUrl(url: string): Promise

Loads audio data from an external file specified in the url parameter.

### appendAudioFromTrack(WebAudioTrack)

Append audio from another WebAudiotrack instance to the current audio track.

### appendAudioFromUrl(url)

Append audio from an external file to the current audio track.
