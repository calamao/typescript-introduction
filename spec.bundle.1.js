var testsContext = require.context(".", true, /exercise.1.spec.ts/);
testsContext.keys().forEach(testsContext);