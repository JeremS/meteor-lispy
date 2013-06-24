Package.describe({
  summary: 'Meteor package adding lispyscript language support.'
});

Npm.depends({"lispyscript":"0.3.2"});


var lispy_handler = function(bundle, source_path, serve_path, where) {
  var fs = Npm.require('fs');
  var path = Npm.require('path');
  serve_path = serve_path + '.js';

  var compile = Npm.require('lispyscript/lib/ls.js')._compile;

  var contents = fs.readFileSync(source_path, 'utf8');

  try {
    contents = compile(contents);
  } catch (e) {
    return bundle.error(
      source_path + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  contents = new Buffer(contents);
  bundle.add_resource({
    type: "js",
    path: serve_path,
    data: contents,
    where: where
  });
}

Package.register_extension("ls", lispy_handler);


Package.on_test(function (api) {
  api.add_files(
      ['test.ls',
       'test2.js'],
      ['client', 'server']
  );
});
