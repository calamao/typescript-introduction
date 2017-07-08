var testsContext = require.context(".", true, /exercise.4.spec.ts/);
testsContext.keys().forEach(testsContext);