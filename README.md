# Banking App Plugin Template

This repository is a template for banking app plugins. The application is built using react and react-native

# Content #

- [CHANGELOG.md](./CHANGELOG.md)

## Git

Follow the https://github.com/Vizir/styleguide/blob/master/git.md guide, except
instead of using the card id for commits/branchs use the scope of what you are doing.

### Branch names

Use the name of the jira card. Eg: VB-9

### Commit messages

Use the format {type}({scope}): {message}. Eg:
feat(buttons): added rounded option
fix(input): fixed input mask

## Folder Structure (general) ##

===
    README.md - You are here!
    \lib
      \api (api requests related code)
        \[endpoint] (request for specific endpoint)
      \common (Reusable components with logic)
      \constants
      \contexts
      \entities
      \errors (Error classes and translations)
      \i18n
      \layout (Dumb UI components)
      \navigation (Navigation related code)
      \redux
        \[scope]
          [action].tsx
          index.tsx
      \utils
      entry.ts (entrypoint code - register hooks here)

## Component Structure (general) ##
    \component
      index.tsx
      component.tsx
      component.native.tsx
      component.styles.tsx
      component.styles.native.tsx
      component.styles.base.tsx
      component.container.tsx
      types.ts

## Setup ##
To setup the application:
1. Check if the node version is `10.19`;
2. Install the dependencies `yarn install`;

## Build ##
To generate an updated distribution, run `yarn release`

## Development ##
When developing, use the command `yarn dev` to watch for changes.
If you are developing inside an app, you can change the outdir in `tsconfig.json` to output the dist folder directly to the dist folder inside app's node_modules

## Docker ##
There is a docker container configured for building the library, follow these steps to setup and run it:

1. Install docker and docker-compose

2. Install the dependencies:
```
docker-compose run lib yarn install
```

3. Generate distribution:
```
docker-compose run lib
```
