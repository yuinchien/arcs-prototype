/**
 * @license
 * Copyright (c) 2018 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
'use strict';

/* global defineParticle */

defineParticle(({DomParticle, html}) => {
  const host = `blocks-game-pane`;

  const template = html`
<style>
[${host}] {
  font-family: 'Space Mono', monospace;
  font-size: 14px; color: #222;
  margin: 0;
  padding: 0;
  background: #000;
  width: 360px;
  margin: 0 auto;
}
[${host}] [blocks] {
  margin: 0 auto;
  padding: 0;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  position: relative;
 }
[${host}] [menu] p a {
  text-decoration: none;
  color: black;
}
[${host}] [menu] .flex {
  padding: 0 16px;
}
[${host}] [menu] {
  background: white;
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  box-shadow: 0 0 2px rgba(0,0,0,.2);
}
[${host}] [start] {
  width: 100%;
  text-align: center;
  opacity: .5;
}
[${host}] [start] a { text-decoration: none; color: white; font-size: 22px;  }
[${host}] #stats    { display: none; vertical-align: top; }
[${host}] [score],
[${host}] [level] {
  float: right;
}
[${host}] #upcoming { display: none; margin: 0 auto; background-color: #E0E0E0; }
[${host}] #score    { color: #ff5252; font-weight: bold; vertical-align: middle; }
[${host}] #rows     { display: none; color: blue; font-weight: bold; vertical-align: middle; }
[${host}] #stats    { position: absolute; bottom: 0em; right: 1em; }
[${host}] .border-vert { width: 1px; background: #222; height: 100%; }
[${host}] .flex { flex: 1; }
[${host}] .hide { display: none; }
</style>
<div ${host}>
<div blocks>
  <div menu>
    <!-- TODO(wkorman): Consider upcoming piece display here. -->
    <div class="flex">SCORE <span score>0</span></div>
    <div class="border-vert"></div>
    <div class="flex">LEVEL <span level>0</span></div>
  </div>
  <!-- TODO(wkorman): Render board contents here. -->
  <div start>Press Space to Play</p>
</div>
`;

  const info = console.log.bind(
      console.log, '%cGamePane',
      `background: #ff69b4; color: white; padding: 1px 6px 2px 7px; border-radius: 6px;`);

  return class extends DomParticle {
    get template() { return template; }
    _initBoard() {
      let boardChars = '';
      for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {

        }
      }
    }
    render(props, state) {
      info('render [props=', props, 'state=', state, '].');
    }
    _onKeyPress(e, state) {
      // this._setState({debugMode: true});
    }
    _setView(name, values) {
      const view = this._views.get(name);
      view.set(new view.entityClass(values));
    }
  };
});
