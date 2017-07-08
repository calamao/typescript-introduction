var testsContext = require.context(".", true, /exercise.2.spec.ts/);
testsContext.keys().forEach(testsContext);