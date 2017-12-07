/*
	Progress —
	Version 1.0.0

	Sergey Glazov
	https://github.com/4enki/progress
*/
const gulp = require('gulp');
const runSequence = require('run-sequence');


/*---------- Режимы запуска ----------*/

  // Запуск живой сборки (с вотчером, ну)
  gulp.task('default', function(cb) {
    return runSequence(
      'copy',
      ['html', 'scripts', 'styles'],
      'watch',
      'server',
      cb
    );
  });

  // Одноразовая сборка проекта
  gulp.task('one', function(cb) {
    return runSequence(
      'copy',
      ['html', 'scripts', 'styles'],
      'server',
      cb
    );
  });
