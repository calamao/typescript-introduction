var testsContext = require.context(".", true, /exercise.5.spec.ts/);
testsContext.keys().forEach(testsContext);