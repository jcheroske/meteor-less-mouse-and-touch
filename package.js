Package.describe({
  name: 'jcheroske:less-mouse-and-touch',
  version: '0.0.1',
  summary: 'LESS mixins that enable easy styling of mouse and touchpad events.',
  git: 'https://github.com/jcheroske/meteor-less-mouse-and-touch.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('less');
  api.use('jcheroske:modernizr-touch');

  api.addFiles([
    'mouse.import.less',
    'touch.import.less',
    'mouse-and-touch.import.less'
  ], ['client']);
});
