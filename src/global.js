const Global = {
  song: false,
  paused: false,
  currentTrackComponent: false,
  setCurrentTrackComponentPlayingStateToFalse: function() {
    this.currentTrackComponent.setState(prevState => {
      return {
        playing: false
      };
    });
  },
  pausePlayMusic: function(e) {
    e.preventDefault();
    if (e.code === "Space") {
      if (Global.song && Global.currentTrackComponent.state.playing) {
        Global.song.pause();
        Global.paused = true;
        Global.setCurrentTrackComponentPlayingStateToFalse();
      } else if (Global.song && !Global.currentTrackComponent.state.playing) {
        Global.song.play().then(() => {
          Global.paused = false;
          Global.currentTrackComponent.setState(prevState => {
            return {
              playing: true
            };
          });
        });
      }
    }
  },
  opacity: '.5'
};

export default Global;
