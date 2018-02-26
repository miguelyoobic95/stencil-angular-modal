/*! Built with http://stenciljs.com */
!(function(t, e, o, n, i, s, r, c, a, l, d) {
  !(function(t, e, o, n, i, s, r, c, a, l, d, m, p) {
    ((t.mycomponent = t.mycomponent || {}).components = d),
      (p = d
        .filter(function(t) {
          return t[2];
        })
        .map(function(t) {
          return t[0];
        })).length &&
        (((m = e.createElement('style')).innerHTML =
          p.join() + '{visibility:hidden}.hydrated{visibility:inherit}'),
        m.setAttribute('data-styles', ''),
        e.head.insertBefore(m, e.head.firstChild)),
      (m = o[o.length - 1]) &&
        m.src &&
        (s =
          (p = m.src.split('/').slice(0, -1)).join('/') +
          (p.length ? '/' : '') +
          'mycomponent/'),
      ((m = e.createElement('script')).src =
        s +
        ((function(t, e, o, n) {
          return (
            e.search.indexOf('core=es5') > -1 ||
            'file:' === e.protocol ||
            !t.customElements ||
            !t.fetch ||
            !(t.CSS && t.CSS.supports && t.CSS.supports('color', 'var(--c)')) ||
            !('noModule' in o) ||
            (function(t) {
              try {
                return new Function('import("")'), !1;
              } catch (t) {}
              return !0;
            })()
          );
        })(t, t.location, m)
          ? 'mycomponent.h3nfdf5n.js'
          : 'mycomponent.14ba1eox.js')),
      m.setAttribute('data-path', s),
      m.setAttribute('data-namespace', 'mycomponent'),
      e.head.appendChild(m);
  })(
    t,
    e,
    e.scripts,
    0,
    0,
    '/angular/src/assets/build/mycomponent/',
    0,
    0,
    0,
    0,
    [
      [
        'my-component',
        'jkpfev1j',
        1,
        [['first', 1, 1, 2], ['last', 1, 1, 2]],
        2
      ],
      [
        'yoo-button',
        '9v5fzmi3',
        1,
        [
          ['disabled', 1, 1, 3],
          ['icon', 1, 1, 2],
          ['isLoading', 1, 'is-loading', 3],
          ['title', 1, 1, 2]
        ],
        2
      ],
      [
        'yoo-modal',
        'wbbcgnfd',
        1,
        [
          ['close', 6],
          ['content', 1],
          ['cssClass', 1, 'css-class', 2],
          ['el', 7],
          ['footerText', 1, 'footer-text', 2],
          ['hasFooter', 1, 'has-footer', 3],
          ['hasHeader', 1, 'has-header', 3],
          ['primaryButtonText', 1, 'primary-button-text', 2],
          ['secondaryButtonText', 1, 'secondary-button-text', 2],
          ['title', 1, 1, 2],
          ['titleIcon', 1, 'title-icon', 2]
        ],
        2
      ],
      [
        'yoo-modal-controller',
        'wbbcgnfd',
        1,
        [
          ['close', 6],
          ['el', 7],
          ['generateModal', 6],
          ['isDisplaying', 5],
          ['modal', 5],
          ['populateModal', 6],
          ['show', 6]
        ],
        2,
        [['onClose', 'childClosed']]
      ]
    ],
    void 0
  );
})(window, document);
