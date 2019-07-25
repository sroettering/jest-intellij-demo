module.exports = {
  name: 'jest-intellij-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jest-intellij-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
