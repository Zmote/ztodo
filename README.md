# Ztodo

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## Testing

# Backend / Ruby / Rails Tests

# Frontend Tests

Checkout pacakge.json, scripts sections for available run scripts, f.ex.:

```shell
yarn run test:lib
yarn run test:unit
yarn run test:integration
yarn run test:e2e
```

All scripts are per default single run, headless. You can use following flags
to change the behaviour:

```shell
yarn run test:unit --watch
# to be able to see the tests in the browser, you have to use --ui with --watch, or
# the server closes and no data can be shown
yarn run test:e2e --watch --ui
```

## Annotations

You can automatically update "schema" changes on corresponding model files via the annotate gem, use:

```
annotate --models
```