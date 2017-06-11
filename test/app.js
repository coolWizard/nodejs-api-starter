'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-graphql-server:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'config/nginx-snippets/proxy-params.conf',
      'config/nginx-snippets/ssl-params.conf',
      'config/nginx.conf',
      'config/postgres-initdb.sh',
      'migrations/201612010000_initial.js',
      'src/routes/account.js',
      'src/types/Node.js',
      'src/types/UserType.js',
      'src/app.js',
      'src/db.js',
      'src/passport.js',
      'src/redis.js',
      'src/schema.js',
      'src/server.js',
      'test/query.me.spec.js',
      'test/.eslintrc',
      'tools/.eslintrc',
      'tools/build.js',
      'tools/db.js',
      'tools/publish.js',
      'tools/README.md',
      'tools/run.js',
      'tools/task.js',
      '.babelrc',
      '.dockerignore',
      '.editorconfig',
      '.eslintrc',
      '.flowconfig',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'docker-compose.yml',
      'Dockerfile',
      'LICENSE.txt',
      'package.json',
      'README.md',
      'yarn.lock'
    ]);
  });
});