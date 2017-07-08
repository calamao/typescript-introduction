var testsContext = require.context(".", true, /exercise.3.spec.ts/);
testsContext.keys().forEach(testsContext);