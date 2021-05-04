import $ from '../core';

$.prototype.animateOverTime = function (duration, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / duration, 1);

    cb(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype._fadeIn = function(duration, display, fin, i) {
  this[i].style.display = display || 'block';

  const _fadeIn = (complection) => {
    this[i].style.opacity = complection;
  };

  const anim = this.animateOverTime(duration, _fadeIn, fin);
  requestAnimationFrame(anim);
};

$.prototype._fadeOut = function(duration, fin, i) {
  const _fadeOut = (complection) => {
    this[i].style.opacity = 1 - complection;

    if (complection === 1) {
      this[i].style.display = 'none';
    }
  };

  const anim = this.animateOverTime(duration, _fadeOut, fin);
  requestAnimationFrame(anim);
};


$.prototype.fadeIn = function(duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this._fadeIn(duration, display, fin, i);
  }
  return this;
};

$.prototype.fadeOut = function(duration, fin) {
  for (let i = 0; i < this.length; i++) {
    this._fadeOut(duration, fin, i);
  }
  return this;
};

$.prototype.fadeToggle = function(duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this._fadeIn(duration, display, fin, i);
    } else {
      this._fadeOut(duration, fin, i);
    }
  }
  return this;
};
