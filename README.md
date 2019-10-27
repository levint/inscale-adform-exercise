## Development

```
$ cd api
$ yarn install
$ yarn run db // initialize db
$ yarn run dev // start express server
```

The graphql endpoint is accessible by default at `/graphql`. When running in production,
the playground and introspection is disabled.

## Testing

```
$ cd api
$ yarn run test
```

## Docker Usage

A `Dockerfile` is available under project root. You may use these to build a container for the sample exercise.
